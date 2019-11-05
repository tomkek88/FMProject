import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import activeSession from './components/Auth/activeSession'
import LandingPage from './components/LandingPage/LandingPage'
import LoginPage from './components/LoginPage/LoginPage'
import DataImport from './components/DataImport/DataImport'
import NavNotAuth from './components/Navigation/NavNotAuth/NavNotAuth'
import NavAuth from './components/Navigation/NavAuth/NavAuth'
import SideNav from './components/Navigation/SideNav/SideNav';
import RegisterPage from './components/RegisterPage/RegisterPage';
import ProfilePage from './components/ProfilePage/ProfilePage';
import BuildingPage from './components/BuildingPage/BuildingPage';
import BuildingsList from './components/BuildingsList/BuildingsList';
import SpaceList from './components/SpaceList/SpaceList'
import jwt from 'jsonwebtoken'

import "./App.scss"


class App extends Component {


  componentDidMount() {
    const token = localStorage.getItem('token');

    if (token) {
      const diff = jwt.decode(token).exp - Math.round(Date.now() / 1000);

      if (diff < 0) {
        localStorage.clear()
      }
    }

  }

  render() {

    return (



      <Router>
        {!this.props.loading && this.props.session && this.props.session.me ? <NavAuth /> : <NavNotAuth />}
        <div className="main_container">
          {!this.props.loading && this.props.session && this.props.session.me ? <SideNav /> : null}
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route path="/spaces" component={() => this.props.session && this.props.session.me ? <SpaceList refetch={this.props.refetch} /> : <Redirect to="/login" />} />
            <Route path="/buildings" component={() => this.props.session && this.props.session.me ? <BuildingsList refetch={this.props.refetch} /> : <Redirect to="/login" />} />

            <Route path='/login' component={() => this.props.session && this.props.session.me ? <Redirect to="/" /> : <LoginPage refetch={this.props.refetch} />} />
            <Route path='/register' component={() => this.props.session && this.props.session.me ? <Redirect to="/profile" /> : <RegisterPage refetch={this.props.refetch} />} />
            <Route path='/profile' component={() => {
              if (this.props.loading) return null
              return this.props.session && this.props.session.me ? <ProfilePage /> : <Redirect to="/login" />
            }} />
            <Route path='/buildingslist' component={() => {
              if (this.props.loading) return null
              return this.props.session && this.props.session.me ? <BuildingPage refetch={this.props.refetch} /> : <Redirect to="/login" />
            }} />
            <Route path="/import" component={() => this.props.session && this.props.session.me ? <DataImport /> : <Redirect to="/login" />} />
          </Switch>
        </div>
      </Router>


    );
  }
}

export default activeSession(App);
