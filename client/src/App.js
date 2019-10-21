import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import activeSession from './components/Auth/activeSession'
import LandingPage from './components/LandingPage/LandingPage'
import LoginPage from './components/LoginPage/LoginPage'
import NavNotAuth from './components/Navigation/NavNotAuth/NavNotAuth'
import NavAuth from './components/Navigation/NavAuth/NavAuth'
import RegisterPage from './components/RegisterPage/RegisterPage';
import ProfilePage from './components/ProfilePage/ProfilePage';


const App = (props) => {



  return (
    <div>

      <Router>
        {props.session && props.session.me ? <NavAuth /> : <NavNotAuth />}

        <Route exact path='/' component={LandingPage} />
        <Route path='/login' component={() => props.session && props.session.me ? <Redirect to="/profile" /> : <LoginPage refetch={props.refetch} />} />
        <Route path='/register' component={() => props.session && props.session.me ? <Redirect to="/profile" /> : <RegisterPage refetch={props.refetch} />} />
        <Route path='/profile' component={() => props.session && props.session.me ? <ProfilePage /> : <Redirect to="/login" />} />
      </Router>
    </div>

  );
}




export default activeSession(App);
