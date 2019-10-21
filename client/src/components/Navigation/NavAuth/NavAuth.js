import React from 'react';
import { Link } from 'react-router-dom';
import '../Navigation.scss'
import LoggedUser from '../../LoggedUser/LoggedUser'
import { LogoutButton } from '../../LogoutPage/LogoutPage'
const NavAuth = () => {
    return (
        <div>

            <div className="navBar">

                <Link className='navComponent' to="/profile">Profile</Link>
                {/* <Link className='navComponent' to="/logout">Logout</Link> */}
                <LogoutButton />
            </div>
            <LoggedUser />
        </div>
    )
}

export default NavAuth