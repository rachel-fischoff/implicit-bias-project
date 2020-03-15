import React from 'react';
import {Component} from 'react';


export default class Age extends Component { 

    constructor(props) {
        super(props);
    
        this.state = { term: '' };

    }

    render() {
        return (
            <div className="input-group col-sm-4">
            <div className="input-group-prepend">
                    <label className="input-group-text" htmlFor="inputGroupSelect01">Age</label>
                </div>
                    <select className="custom-select" id="inputGroupSelect01">
                        <option defaultValue>Choose...</option>
                        <option value="1">Under 16</option>
                        <option value="2">16-24</option>
                        <option value="3">25-34</option>
                        <option value="4">35-44</option>
                        <option value="5">45-54</option>
                        <option value="6">55-64</option>
                        <option value="7">Over 65</option>
    
                    </select>

                    </div>
        )
    }
}