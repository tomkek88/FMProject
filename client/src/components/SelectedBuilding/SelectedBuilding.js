import React, { Component } from "react";
import { Query } from "react-apollo";
import { SELECTED_BUILDING } from "../../GraphQL/queries";
import jwt from 'jsonwebtoken'


import "./SelectedBuilding.scss";

class SelectedBuilding extends Component {

    render() {

        if (!localStorage.getItem('building')) {
            return <div className="selectedBuilding">Brak aktywnego budynku</div>
        } else {
            return (

                <Query query={SELECTED_BUILDING} variables={{ id: localStorage.getItem('building'), userId: jwt.decode(localStorage.getItem('token')).id }}>
                    {
                        ({ data, loading, error }) => {
                            if (loading) return <p>Loading...</p>
                            if (error) console.log(error)

                            if (!data.selectedBuilding) {
                                localStorage.removeItem('building')
                                return null
                            }
                            return <div className="selectedBuilding">    <div>{data.selectedBuilding.name}</div></div>


                        }
                    }
                </Query>


            );

        }


    }
}

export default SelectedBuilding;
