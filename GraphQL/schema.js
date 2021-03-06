const { gql } = require('apollo-server-express')

module.exports = gql`

    type Query{
        me: User
        buildings: [Building]
        selectedBuilding(id:ID!): Building
        showSpaces(buildingId:ID!): [Space]
    }

    type Mutation{
        register(username: String!, email: String!, password: String!): Boolean
        login(username:String!, password: String!):Token
        addBuilding(name:String!, location:String):Boolean
        addSpace(name:String, number:String, area:Float,level:String!,buildingId:ID!):Boolean
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

    type Space {
        id:ID!
        name:String
        number:String
        area: Float
        level_id:ID!
        buildingId: ID!

    }

    type Token{
        token:String!
    }
    
`