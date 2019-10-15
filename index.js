const express = require('express');
const app = express();

const dbtest = require('./models/dbConnection')

const { ApolloServer } = require('apollo-server-express')

const typeDefs = require('./GraphQL/schema')
const resolvers = require('./GraphQL/resolvers')


const server = new ApolloServer({ typeDefs, resolvers })

server.applyMiddleware({ app })

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`server is listening on port ${port}`)
})

