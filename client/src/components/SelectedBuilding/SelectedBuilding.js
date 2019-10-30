import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { SELECTED_BUILDING } from '../../GraphQL/queries'

import activeSession from '../Auth/activeSession'

import './SelectedBuilding.scss'

class SelectedBuilding extends Component {





    render() {
        console.log(this.props)
        return (


            < Query query={SELECTED_BUILDING} refetch={this.props.refetch}>

                {
                    ({ loading, error, data, refetch }) => {
                        if (loading) return <div>Loading...</div>
                        if (error) console.log(error)
                        console.log("budynek ", data)
                        if (!data) return null

                        if (data && data.selectedBuilding.id === null) return <div className="selectedBuilding">Nie wybrano budynku</div>
                        return <div className="selectedBuilding"> Aktywny budynek: {data.selectedBuilding.name}</div>



                    }
                }
            </Query>


        )
    }

}





export default activeSession(SelectedBuilding);