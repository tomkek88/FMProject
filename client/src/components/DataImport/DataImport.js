import React, { Component } from "react";
import CSVReader from "react-csv-reader";
import { Mutation } from "react-apollo";
import { ADD_LEVEL } from '../../GraphQL/mutations'

class DataImport extends Component {

    state = {
        levels: []
    }


    convertCsvToJson(data) {
        const headers = data[0];
        console.log(headers);
        const rest = [];

        for (let i = 1; i < data.length; i++) {
            rest.push(data[i]);
        }

        const jsonArray = [];

        for (let i = 0; i < rest.length; i++) {
            const obj = {};
            for (let j = 0; j < headers.length; j++) {
                // console.log(headers[j])
                let key = headers[j];
                let value = rest[i][j];
                obj[key] = value;
            }
            jsonArray.push(obj);
        }

        this.setState({
            levels: jsonArray
        })
        // console.log(jsonArray)


    }

    render() {
        return (
            <div className="spaceContainer">
                <CSVReader
                    fileEncoding="UTF-8"
                    onFileLoaded={data => {
                        this.convertCsvToJson(data);
                    }}
                />
                <LevelsInputList levels={this.state.levels} />
            </div>
        );
    }
}


class LevelsInputList extends Component {

    state = {
        added: false
    }

    handleAddLevels = (e, addLevel, levels) => {
        e.preventDefault()
        levels.map(level => {
            addLevel({
                variables: {
                    revitId: level.ID,
                    name: level.name,
                    elevation: parseFloat(level.Elevation),
                    buildingId: localStorage.getItem('building')
                }
            }).then(() => {
                this.setState({
                    added: true
                })
                return true
            }).catch(err => console.log(err))
        })

    }


    idBuildingSelected = () => (
        localStorage.getItem('building') ? true : false

    )
    render() {
        if (!this.state.added) {
            return (



                <div>
                    <ul>
                        {this.props.levels.map(level => (
                            <li key={level.ID}>
                                {level.name}
                            </li>
                        ))}
                    </ul>
                    {(this.idBuildingSelected() && this.props.levels.length > 0) &&

                        <Mutation mutation={ADD_LEVEL}>
                            {
                                (addLevel, { loading, error, data }) => (
                                    <button onClick={(e) => this.handleAddLevels(e, addLevel, this.props.levels)}>Dodaj</button>
                                )
                            }
                        </Mutation>}
                </div>

            )
        } else {
            return (
                <div>
                    <h3>Dodano kondygnacje do wybranego budynku</h3>
                </div>
            )
        }

    }

}


export { LevelsInputList }
export default DataImport;