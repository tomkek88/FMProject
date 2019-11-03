import { gql } from 'apollo-boost'

export const LOGIN_USER = gql`
    mutation login($username: String!, $password: String!){
            login(username:$username,password:$password){
                token
        }
    }
`

export const REGISTER_USER = gql`
    mutation register($username:String!,$email:String!, $password: String!){
        register(username:$username,email:$email,password:$password)
  }
`

export const SELECT_BUILDING = gql`
    mutation selectBuilding($id: ID,$name:String){
        selectBuilding(id:$id, name:$name) @client
    }
   
`

export const ADD_NEW_BULDING=gql`

    mutation addBuilding($name:String!,$location:String){
        addBuilding(name:$name, location:$location)
    }

`

export const ADD_NEW_SPACE=gql`
    mutation addSpace($name:String, $number:String, $area:Float, $level:String!, $buildingId:ID!){
        addSpace(name:$name,number:$number,area:$area,level:$level,buildingId:$buildingId)
    }
`
