import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import { LOGIN_USER } from '../../GraphQL/mutations'
import { withRouter } from 'react-router-dom'

const LoginPage = ({ history, refetch }) => {
    return (

        <LoginForm history={history} refetch={refetch} />

    )
}

class LoginForm extends Component {
    state = {
        username: "",
        password: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e, login) => {
        e.preventDefault();
        login({
            variables: {
                username: this.state.username,
                password: this.state.password
            }
        }).then(data => {
            const token = data.data.login.token
            localStorage.setItem('token', token)
            this.props.history.push("/")
            this.props.refetch()
        }).catch(err => console.log(err))


    }
    render() {

        return (
            <Mutation mutation={LOGIN_USER}>
                {
                    (login, { data, loading, error }) => (
                        <div>
                            {loading && <div>Loading</div>}
                            <form onSubmit={(e) => { this.handleSubmit(e, login) }}>
                                <label htmlFor="username">Username </label>
                                <input type="text" value={this.state.username} id="username" name="username" onChange={this.handleChange} />
                                <label htmlFor="password">Password </label>
                                <input type="password" value={this.state.password} id="password" name="password" onChange={this.handleChange} />
                                <button>Login</button>
                            </form>
                        </div>
                    )
                }
            </Mutation>

        )
    }

}

export default withRouter(LoginPage)