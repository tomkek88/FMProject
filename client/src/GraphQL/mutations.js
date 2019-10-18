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