import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost'

import App from './App';

import './index.css'

const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql',
    request: operation => {
        const token = localStorage.getItem("token");
        if (token) {
            operation.setContext({
                headers: {
                    'x-auth-token': token
                }
            })
        } else {
            operation.setContext({})
        }
    }
})

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

