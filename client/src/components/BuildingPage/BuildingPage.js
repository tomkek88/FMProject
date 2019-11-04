import React, { Component } from "react";
import { withRouter } from 'react-router-dom'
import { Query } from "react-apollo";
import { SHOW_BUILDINGS } from "../../GraphQL/queries";

import "./BuildingPage.scss";

class BuildingPage extends Component {
  handleChoose = (e, id) => {
    localStorage.setItem("building", id);
  };

  onBuildingChoose = () => {
    // const chosen = localStorage.getItem("building");
    this.props.history.push('/profile')
    this.props.refetch()

  };

  render() {
    return (
      <Query query={SHOW_BUILDINGS}>
        {({ data, loading, error }) => {
          if (error) throw new Error(error);
          if (loading) return <h2>Loading...</h2>;

          return (
            <div className="container">
              <div className="buildinglist">
                <ul>
                  {data.buildings.map(building => (
                    <li key={building.id}>
                      <div>
                        <h3 onClick={e => this.handleChoose(e, building.id)}>
                          {building.name}
                        </h3>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <button className="button" onClick={this.onBuildingChoose}>
                Wybierz
              </button>
            </div>
          );
        }}
      </Query>
    );
  }
}

export default withRouter(BuildingPage);
