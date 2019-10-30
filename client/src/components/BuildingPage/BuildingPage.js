import React from 'react'
import { Query, Mutation } from 'react-apollo'
import { SHOW_BUILDINGS } from '../../GraphQL/queries'
import { SELECT_BUILDING } from '../../GraphQL/mutations'
import SelectedBuilding from '../SelectedBuilding/SelectedBuilding'

import './BuildingPage.scss'

const BuildingPage = () => {

    const handleChoose = (e, selectBuilding, id, name) => {
        selectBuilding({
            variables: {
                id,
                name,
                __typename: "building"
            }
        })

    }

    return (

        <Query query={SHOW_BUILDINGS}>
            {
                ({ data, loading, error }) => {



                    if (error) throw new Error(error)
                    if (loading) return <h2>Loading...</h2>


                    return <div className="buildinglist" >
                        <ul>
                            {data.buildings.map(building => (
                                <li key={building.id}>


                                    <Mutation mutation={SELECT_BUILDING}>

                                        {
                                            (selectBuilding, { loading, error, data }) => {
                                                if (loading) return <h2>Loading....</h2>
                                                if (error) console.log(error)
                                                console.log(data)
                                                return (
                                                    <div>
                                                        <h3 onClick={(e) => handleChoose(e, selectBuilding, building.id, building.name)} >{building.name}</h3>

                                                    </div>
                                                )
                                            }
                                        }
                                    </Mutation>



                                </li>
                            ))}
                        </ul>
                    </div>


                }
            }
        </Query>

    )
}




export default BuildingPage