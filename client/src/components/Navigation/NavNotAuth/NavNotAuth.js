import React from 'react';
import { Link } from 'react-router-dom'
import '../Navigation.scss'

const NavNotAuth = () => {
    return (
        <div className="navBar">
            <Link className="navComponent" to="/login">Login </Link>
            <Link className="navComponent" to="/register">Register </Link>
        </div>
    )
}

export default NavNotAuth