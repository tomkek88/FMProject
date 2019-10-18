const express = require('express');
const app = express();
const jwt = require('jsonwebtoken')
const models = require('./models')
const { JWT_SECRET } = require('./config/keys')
const { ApolloServer } = require('apollo-server-express')
const cors = require('cors')

const typeDefs = require('./GraphQL/schema')
const resolvers = require('./GraphQL/resolvers')

const getLoggedInUser = req => {
    const token = req.headers['x-auth-token'];

    if (token) {
        try {
            return jwt.verify(token, JWT_SECRET)
        } catch (err) {
            console.log(err)
        }

    }
}


const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({
        models,
        me: getLoggedInUser(req)
    })
})


server.applyMiddleware({ app })

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`server is listening on port ${port}`)
})

