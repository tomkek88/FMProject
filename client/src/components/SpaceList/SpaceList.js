import React, { Component } from 'react';
import { Query, Mutation } from 'react-apollo'
import { SHOW_SPACES } from '../../GraphQL/queries'
import { ADD_NEW_SPACE } from '../../GraphQL/mutations'
import EquipmentList from '../Equipment/EquipmentList';




class SpaceList extends Component {

    state = {
        addSpaceFormActive: false,
        activeSpace: false,
        showEquipment: false
    }

    showEquipment = () => {
        this.setState({ showEquipment: true })
    }


    handleActiveSpaceForm = () => {
        this.setState({
            addSpaceFormActive: true
        })
    }

    handleChoose = (e, space) => {



        localStorage.setItem('activeSpace', space.id)

        this.setState({ activeSpace: true })

    }

    render() {



        if (!localStorage.getItem('building')) return <h3 className="spaceList">Proszę wybrac budynek</h3>

        return (
            <div className="spaceContainer">
                <div className="spaceList" >

                    <Query query={SHOW_SPACES} variables={{ buildingId: localStorage.getItem('building') }} >
                        {
                            ({ data, loading, error }) => {

                                if (loading) return <h3>Loading...</h3>
                                if (error) console.log(error)



                                if (data.showSpaces.length === 0) return <h3>Brak zdefiniowanych pomieszczeń w danym budynku</h3>
                                return (
                                    <div>
                                        <ul>
                                            {data.showSpaces.map(space => {

                                                return <div key={space.id} onClick={(e) => this.handleChoose(e, space)}>
                                                    <li >

                                                        {space.name}
                                                        {space.number}
                                                    </li>
                                                </div>



                                            })}
                                        </ul>



                                        < button disabled={!this.state.activeSpace} onClick={this.showEquipment}> Sprawdź wyposażenie w pomieszczeniu</button>
                                    </div>
                                )

                            }


                        }
                    </Query>



                    <button onClick={this.handleActiveSpaceForm}>Dodaj nowe pomieszczenie</button>
                    {this.state.addSpaceFormActive && <SpaceForm refetch={this.props.refetch} />}
                </div>

                {this.state.showEquipment && <EquipmentList space={1} />}

            </div>
        )
    }

}

class SpaceForm extends Component {


    state = {
        name: "",
        number: "",
        area: 0,
        level: "",
        buildingId: localStorage.getItem('building')

    }


    handleChange = (e) => {

        if (e.target.name === 'area') {
            this.setState({
                area: parseFloat(e.target.value)
            })
        } else {
            this.setState({

                [e.target.name]: e.target.value
            })
        }



    }


    resetState = () => {
        this.setState({
            name: "",
            number: "",
            area: 0,
            level: "",
            buildingId: localStorage.getItem('building')
        })
    }

    handleAddSpace = (e, addSpace) => {
        e.preventDefault()
        addSpace({
            variables: {
                name: this.state.name,
                number: this.state.number,
                area: this.state.area,
                level: this.state.level,
                buildingId: this.state.buildingId

            }
        }).then(() => {
            this.props.refetch()
            this.resetState()

        }).catch(err => console.log(err))
    }

    render() {
        return (

            <Mutation mutation={ADD_NEW_SPACE} refetchQueries={() => {
                return [{
                    query: SHOW_SPACES,
                    variables: {
                        buildingId: localStorage.getItem('building')
                    }
                }]
            }}>

                {
                    (addSpace, { data, loading, error }) => (
                        <form onSubmit={(e) => this.handleAddSpace(e, addSpace)}>
                            <input type="text" placeholder="nazwa pomieszczenia" name="name" value={this.state.name} onChange={this.handleChange} />
                            <input type="text" placeholder="numer pomieszczenia" name="number" value={this.state.number} onChange={this.handleChange} />
                            <input type="number" placeholder="powierzchnia" name="area" value={this.state.area} onChange={this.handleChange} />
                            <input type="text" placeholder="poziom" name="level" value={this.state.level} onChange={this.handleChange} />
                            <button>Dodaj</button>
                        </form>
                    )
                }
            </Mutation>
        )
    }
}

export { SpaceForm }
export default SpaceList;