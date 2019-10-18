import { gql } from 'apollo-boost'

export const LOGGED_IN_USER = gql`
    {
        me{
            id
            username
            email
        }
    }
`