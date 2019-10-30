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

export const SHOW_BUILDINGS = gql`
    {
        buildings{
            id
            name
            location
        }
    }
`

export const SELECTED_BUILDING = gql`
    query selectedBuilding{
        selectedBuilding @client{
        id
        name
        }
    }
`
