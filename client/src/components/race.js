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
                    <label className="input-group-text" htmlFor="inputGroupSelect01">Race</label>
                </div>
                    <select className="custom-select" id="inputGroupSelect01">
                        <option defaultValue>Choose...</option>
                        <option value="1">White</option>
                        <option value="2">Black</option>
                        <option value="3">Asian</option>
                        <option value="4">American Indian and Alaskan Native </option>
                        <option value="5">Native Hawaiian and Other Pacific Islander</option>
                        <option value="6">Two or more races</option>
    
                    </select>

                    </div>
        )
    }
}