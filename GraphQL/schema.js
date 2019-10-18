const { gql } = require('apollo-server-express')

module.exports = gql`

    type Query{
        me: User
    }

    type Mutation{
        register(username: String!, email: String!, password: String!): Boolean
        login(username:String!, password: String!):Token
    }

    type User {
        id: ID!
        username: String!
        password: String!
        email: String!

    }

    type Token{
        token:String!
    }
    
`