import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import activeSession from './components/Auth/activeSession'
import LandingPage from './components/LandingPage/LandingPage'
import LoginPage from './components/LoginPage/LoginPage'
import LogoutPage from './components/LogoutPage/LogoutPage';
import SelectedBuilding from './components/SelectedBuilding/SelectedBuilding'
import NavNotAuth from './components/Navigation/NavNotAuth/NavNotAuth'
import NavAuth from './components/Navigation/NavAuth/NavAuth'
import RegisterPage from './components/RegisterPage/RegisterPage';
import ProfilePage from './components/ProfilePage/ProfilePage';
import BuildingPage from './components/BuildingPage/BuildingPage';

class App extends Component {

  render() {
    return (
      <div>

        <Router>
          {!this.props.loading && this.props.session && this.props.session.me ? <NavAuth /> : <NavNotAuth />}
          
          <Switch>
            <Route exact path='/' component={LandingPage} />
            {/* <Route path="/logout" component={() => this.props.session && this.props.session.me ? <LogoutPage /> : <LoginPage refetch={this.props.refetch} />} /> */}
            <Route path='/login' component={() => this.props.session && this.props.session.me ? <Redirect to="/profile" /> : <LoginPage refetch={this.props.refetch} />} />
            <Route path='/register' component={() => this.props.session && this.props.session.me ? <Redirect to="/profile" /> : <RegisterPage refetch={this.props.refetch} />} />
            <Route path='/profile' component={() => {
              if (this.props.loading) return null
              return this.props.session && this.props.session.me ? <ProfilePage /> : <Redirect to="/login" />
            }} />
            <Route path='/buildingslist' component={() => {
              if (this.props.loading) return null
              return this.props.session && this.props.session.me ? <BuildingPage refetch={this.props.refetch}/> : <Redirect to="/login" />
            }} />
          </Switch>
        </Router>
      </div>

    );
  }
}

export default activeSession(App);
