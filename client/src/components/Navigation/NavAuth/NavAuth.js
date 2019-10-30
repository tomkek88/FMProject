import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavAuth.scss'
import LoggedUser from '../../LoggedUser/LoggedUser'
import LogoutButton from '../../LogoutPage/LogoutPage'

import { withRouter } from 'react-router-dom'


class NavAuth extends Component {

    render() {

        return (

            <div className="navBar">
                <div className='navigation' >

                    <Link className='navComponent' to="/profile">Profil</Link>
                    <LogoutButton />

                </div>
                <div className="loggeduser">
                    <LoggedUser />
                </div>

            </div>


        )
    }


}

export default withRouter(NavAuth)