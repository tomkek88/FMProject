import React, { Component } from "react";
import { Query } from "react-apollo";
import { SELECTED_BUILDING } from "../../GraphQL/queries";



import "./SelectedBuilding.scss";

class SelectedBuilding extends Component {

    render() {

        if (!localStorage.getItem('building')) {
            return <div className="selectedBuilding">Brak aktywnego budynku</div>
        } else {
            return (

                <Query query={SELECTED_BUILDING} variables={{ id: localStorage.getItem('building') }}>
                    {
                        ({ data, loading, error }) => {
                            if (loading) return <p>Loading...</p>
                            if (error) console.log(error)
                            //    console.log(data)
                            return <div className="selectedBuilding">    <div>{data.selectedBuilding.name}</div></div>


                        }
                    }
                </Query>


            );

        }


    }
}

export default SelectedBuilding;
