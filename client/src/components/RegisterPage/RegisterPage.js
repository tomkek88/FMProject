import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import { REGISTER_USER } from '../../GraphQL/mutations'
import Error from '../Error/Error'

import './Register.scss'


const RegisterPage = () => {
    return (
        <RegisterForm />
    )
}

class RegisterForm extends Component {

    state = {
        username: "",
        email: "",
        password: "",
        password2: ''
    }


    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e, register) {
        e.preventDefault()

        register({
            variables: {
                username: this.state.username,
                email: this.state.email,
                password: this.state.password
            }
        }).then(data => console.log(data)).catch(err => console.log(err))
    }

    render() {
        return (
            <Mutation mutation={REGISTER_USER}>
                {
                    (register, { loading, data, error }) => (

                        <form className='form' onSubmit={(e) => { this.handleSubmit(e, register) }}>
                            {error && <Error errors={error} />}
                            <label htmlFor="username">Username </label>
                            <input type="text" id="username" name="username" value={this.state.username} onChange={this.handleChange} />
                            <label htmlFor="email">Email </label>
                            <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange} />
                            <label htmlFor="password">Passoword </label>
                            <input type="password" id="password" name="password" value={this.state.password} onChange={this.handleChange} />
                            <label htmlFor="password2">Confirm password </label>
                            <input type="password" id="password2" name="password2" value={this.state.password2} onChange={this.handleChange} />
                            <button>Register</button>
                        </form>
                    )
                }
            </Mutation>
        )
    }
}

export default RegisterPage