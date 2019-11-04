import React, { Component } from 'react';
import { Query, Mutation } from 'react-apollo'
import { withRouter } from 'react-router-dom'
import { SHOW_BUILDINGS } from '../../GraphQL/queries'
import { ADD_NEW_BULDING } from '../../GraphQL/mutations'

class BuildingsList extends Component {
    state = {
        addNewBuildingForm: false
    }



    handleFormVisibility = () => {
        this.setState({ addNewBuildingForm: true })
    }

    render() {

        return (
            <div className="buildingsList">
                <Query query={SHOW_BUILDINGS}>
                    {
                        ({ data, loading, error }) => {
                            if (loading) return <h3>Loading...</h3>
                            if (error) console.log(error)

                            // console.log(data.buildings)
                            if (data.buildings.length === 0) return <h3>Brak budynkow w bazie</h3>
                            return (
                                <div>
                                    <ul>
                                        {data.buildings.map(building => {
                                            return <li key={building.id}>
                                                <div>
                                                    <span>Nazwa: </span> {building.name}
                                                </div>
                                            </li>
                                        })}
                                    </ul>

                                </div>
                            )
                        }
                    }
                </Query>
                {this.state.addNewBuildingForm === false && <button onClick={this.handleFormVisibility}>Dodaj nowy budynek</button>}
                {this.state.addNewBuildingForm && <AddNewBuildingForm history={this.props.history} refetch={this.props.refetch} />}

            </div>



        )
    }


}


class AddNewBuildingForm extends Component {
    state = {
        name: "",
        location: ""
    }


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    handleAddNewBuilding = (e, addBuilding) => {
        e.preventDefault()
        addBuilding({
            variables: {
                name: this.state.name,
                location: this.state.location
            }
        }).then(data => {

            // this.props.history.push('/')
            this.props.refetch()
            this.setState({
                name: "",
                location: ""
            })

        }).catch(err => console.log(err))
    }

    render() {

        return (

            <Mutation mutation={ADD_NEW_BULDING} refetchQueries={() => {
                return [
                    {
                        query: SHOW_BUILDINGS
                    }
                ]
            }}>

                {
                    (addBuilding, { data, loading, error }) => (
                        <form onSubmit={(e) => this.handleAddNewBuilding(e, addBuilding)}>
                            <input type="text" placeholder="nazwa budynku" value={this.state.name} name="name" onChange={this.handleChange} />
                            <input type="text" placeholder="lokalizacja" value={this.state.location} name="location" onChange={this.handleChange} />
                            <button>Dodaj</button>
                        </form>
                    )
                }


            </Mutation>

        )
    }
}

export { AddNewBuildingForm }

export default withRouter(BuildingsList);