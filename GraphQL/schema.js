const { gql } = require('apollo-server-express')

module.exports = gql`

    type Query{
        hello: String!
    }

    type Mutation{
        register(username: String!, email: String!, password: String!): Boolean
    }

    type User {
        id: ID!
        username: String!
        password: String!
        email: String!

    }
    
`