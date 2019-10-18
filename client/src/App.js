import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import activeSession from './components/Auth/activeSession'
import LandingPage from './components/LandingPage/LandingPage'
import LoginPage from './components/LoginPage/LoginPage'
import NavNotAuth from './components/Navigation/NavNotAuth/NavNotAuth'
import NavAuth from './components/Navigation/NavAuth/NavAuth'
import RegisterPage from './components/RegisterPage/RegisterPage';

const App = (props) => {



  return (
    <div>

      <Router>
        {props.session && props.session.me ? <NavAuth /> : <NavNotAuth />}

        <Route exact path='/' component={LandingPage} />
        <Route path='/login' component={() => <LoginPage refetch={props.refetch} />} />
        <Route path='/register' component={() => <RegisterPage refetch={props.refetch} />} />
      </Router>
    </div>

  );
}




export default activeSession(App);
