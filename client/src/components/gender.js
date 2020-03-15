import React from 'react';
import {Component} from 'react';


export default class Gender extends Component { 

    constructor(props) {
        super(props);
    
        this.state = { term: '' };

    }

    render() {
        return (
            <div className="input-group col-sm-4">
            <div className="input-group-prepend">
                    <label className="input-group-text" htmlFor="inputGroupSelect01">Gender</label>
                </div>
                    <select className="custom-select" id="inputGroupSelect01">
                        <option defaultValue>Choose...</option>
                        <option value="1">Cis Female</option>
                        <option value="2">Cis Male</option>
                        <option value="3">Non-Binary</option>
                        <option value="4">Trans Female</option>
                        <option value="5">Trans Male</option>
                        <option value="6">GenderQueer</option>
    
                    </select>

                    </div>
        )
    }
}