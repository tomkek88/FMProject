import React, { Component } from 'react';
import { ApolloConsumer } from 'react-apollo';
import { withRouter } from 'react-router-dom'
import './LogoutButton.scss'

const LogoutPage = (history) => {
    return (
        <LogoutButton history={history} />
    )

}

class LogoutButton extends Component {

    logout = async (client) => {
        localStorage.removeItem('token');
        await client.resetStore()
        this.props.history.pushState('/')
    }

    render() {
        return (
            <ApolloConsumer>
                {
                    client => (
                        <button className='logoutButton' onClick={() => this.logout(client)}>Logout</button>
                    )
                }
            </ApolloConsumer>
        )
    }

}

export default withRouter(LogoutPage);
export { LogoutButton }