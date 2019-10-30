const { gql } = require('apollo-server-express')

module.exports = gql`

    type Query{
        me: User
        buildings: [Building]
        building(id:ID!): Building
    }

    type Mutation{
        register(username: String!, email: String!, password: String!): Boolean
        login(username:String!, password: String!):Token
        addBuilding(name:String!):Boolean
    }

    type User {
        id: ID!
        username: String!
        password: String!
        email: String!

    }

    type Building {
        id: ID!
        name: String!
        location:String
        addedOn: String!
        userId: ID!

    }

    type Token{
        token:String!
    }
    
`