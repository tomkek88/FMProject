import React, { Component } from 'react';
import fs, { read } from 'fs'
import path from 'path'
import csv from 'csvtojson'


class DataImport extends Component {

    onChange = async (e) => {
        const file = await e.target.files[0]
        const reader = new FileReader()
        const text = reader.readAsText(file)

        console.log(text)
    }
    render() {
        return (
            <div className="dataimport">
                <label htmlFor="levels">Wybierz plik CSV dla kondygnacji</label>
                <input type="file" id="levels" name="levels" accept=".csv" onChange={this.onChange} />

            </div>
        )
    }

}

export default DataImport