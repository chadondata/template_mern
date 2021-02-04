import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

const Basic = props => (
    <tr>
        <td>{props.basic.string_field01} </td>
        <td>{props.basic.numeric_field01} </td>
    </tr>
)

export default class BasicList extends Component {
    constructor(props) {
        super(props);
        this.state = {basic : []};

    }

    componentDidMount() {
        axios.get('http://localhost:5000/basic/')
            .then(response => { this.setState({basic : response.data});})
            .catch((error) => { console.error(error); });
        
        
    }

    basicList() {
        return this.state.basic.map(currentBasic => {
            return <Basic basic={currentBasic} key={currentBasic._id} />
        })
    }

    render() {
        return (
            <div>
                <h3>Some Real Basic Stuff Here</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Some Text</th>
                            <th>Some Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.basicList() }
                    </tbody>
                </table>
            </div>
        );
    }
}