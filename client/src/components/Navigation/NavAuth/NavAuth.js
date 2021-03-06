import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavAuth.scss'
import LoggedUser from '../../LoggedUser/LoggedUser'
import LogoutButton from '../../LogoutPage/LogoutPage'


import { withRouter } from 'react-router-dom'
import SelectedBuilding from '../../SelectedBuilding/SelectedBuilding';


class NavAuth extends Component {

    render() {

        return (
            <div>
                <div className="navBar">
                    <div className='navigation' >

                        <Link className='navComponent' to="/profile">Profil</Link>
                        <LogoutButton />

                    </div>
                    <div className="loggeduser">
                        <LoggedUser />
                    </div>
                    <div className="selectedbuilding">
                        <SelectedBuilding />
                    </div>

                    <Link className="changeBuildingButton" to="/buildingslist">
                        {
                            localStorage.getItem('building') ? "Zmień budynek" : "Wybierz budynek"
                        }
                    </Link>

                </div>

            </div>


        )
    }


}

export default withRouter(NavAuth)