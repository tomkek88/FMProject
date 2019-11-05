import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import { LOGIN_USER } from '../../GraphQL/mutations'
import { withRouter } from 'react-router-dom'
import Error from '../Error/Error'
import './LoginPage.scss'

class LoginPage extends Component {
    render() {
        return (

            <LoginForm history={this.props.history} refetch={this.props.refetch} />

        )
    }

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
            this.props.history.push("/profile")
            this.props.refetch()
        }).catch(err => console.log(err))


    }
    render() {

        return (
            <Mutation mutation={LOGIN_USER}>
                {
                    (login, { data, loading, error }) => (
                        <div className='container'>
                            <h2 className="header">Logowanie</h2>
                            <form className='form' onSubmit={(e) => { this.handleSubmit(e, login) }}>
                                {error && <Error errors={error} />}
                                <label htmlFor="username">Nazwa użytkownika </label>
                                <input type="text" value={this.state.username} id="username" name="username" onChange={this.handleChange} />
                                <label htmlFor="password">Hasło </label>
                                <input type="password" value={this.state.password} id="password" name="password" onChange={this.handleChange} />
                                <button>Zaloguj</button>
                            </form>
                        </div>
                    )
                }
            </Mutation>

        )
    }

}

export default withRouter(LoginPage)