import React from 'react';
import { Link } from 'react-router-dom';
import '../Navigation.scss'

const NavAuth = () => {
    return (
        <div className="navBar">
            <Link className='navComponent' to="/profile">Profile</Link>
            <Link className='navComponent' to="/logout">Logout</Link>
        </div>
    )
}

export default NavAuth