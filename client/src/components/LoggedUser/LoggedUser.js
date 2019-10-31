import React from 'react';
import activeSession from '../Auth/activeSession';
import './LoggedUser.scss'

const LoggedUser = (props) => {

    // console.log(props.session.me)
    return (
        <div>
            {<div className="loggedin">Zalogowano jako: <span className="user">{props.session.me.username}</span></div>}
        </div>
    )
}

export default activeSession(LoggedUser)