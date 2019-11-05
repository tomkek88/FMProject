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
    query selectedBuilding($id:ID!){
        selectedBuilding(id:$id){
        id
        name
        location
        }
    }
`
export const SHOW_SPACES = gql`
  query showSpaces($buildingId:ID!){
    showSpaces(buildingId:$buildingId){
        id
        name
        number
        area
        level_id
    }
   }
`