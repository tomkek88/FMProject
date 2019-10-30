import React, { Component } from "react";
import { Query } from "react-apollo";
import { SELECTED_BUILDING } from "../../GraphQL/queries";

import activeSession from "../Auth/activeSession";

import "./SelectedBuilding.scss";

class SelectedBuilding extends Component {
   
  render() {
    return (

        <Query query={SELECTED_BUILDING} variables={{id:localStorage.getItem('building')}}>
        {
            ({data,loading,error})=>{
                if(loading) return <p>Loading...</p>
                if(error) console.log(error)
               console.log(data)
               return <h2 className="selectedBuilding">{data.selectedBuilding.name}</h2>
            }
        }
        </Query>

    //   
    );
  }
}

export default SelectedBuilding;
