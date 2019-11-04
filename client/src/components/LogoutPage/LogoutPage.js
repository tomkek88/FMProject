import React, { Component } from 'react';
import { ApolloConsumer } from 'react-apollo';
import { withRouter } from 'react-router-dom'
import './LogoutButton.scss'

class LogoutPage extends Component {
    render() {

        return (
            <LogoutButton history={this.props.history} />
        )
    }


}

const LogoutButton = () => {

    const onLogout = async (client) => {




        // localStorage.removeItem('token');
        localStorage.clear()
        await client.resetStore()
        // return <Redirect to='/login' />





    }
    return (
        <ApolloConsumer>
            {
                client => (

                    <button className="logoutButton" onClick={() => onLogout(client)}>Wyloguj</button>


                )
            }
        </ApolloConsumer>

    )
}

export { LogoutButton }
export default withRouter(LogoutPage)