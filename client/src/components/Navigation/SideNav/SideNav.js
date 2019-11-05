import React from 'react';
import { Link } from 'react-router-dom'

import './SideNav.scss'

const SideNav = () => {
    return (
        <div className="sideNav">
            <Link className="navItem" to="/buildings">Budynki</Link>
            <Link className="navItem" to="/spaces">Pomieszczenia</Link>
            <Link className="navItem" to="/equip">Wyposażenie</Link>
            <Link className="navItem" to="/import">Import danych z pliku</Link>
        </div>
    )
}

export default SideNav;