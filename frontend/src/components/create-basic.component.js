import React, { Component } from 'react';
import axios from 'axios';

export default class CreateBasic extends Component {
    constructor(props) {
        super(props);

        this.onChangeStringField01 = this.onChangeStringField01.bind(this);
        this.onChangeNumericField01 = this.onChangeNumericField01.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            string_field01 : ""
            , numeric_field01 : 0
        }
    }

    componentDidMount() {
        // something?
    }

    onChangeNumericField01(e) {
        this.setState({
            numeric_field01 : e.target.value
        });
    }

    onChangeStringField01(e) {
        this.setState({
            string_field01 : e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const basic = {
            string_field01 : this.state.string_field01
            , numeric_field01 : this.state.numeric_field01
        };

        console.log(basic);
        axios.post('http://localhost:5000/basic/add', basic)
            .then(res => console.log(res.data));

        window.location = '/';

    }


    render() {
        return (
            <div>
                <h3>Create new Basic</h3>
                <form onSubmit={this.onSubmit}>
                <div className="form-group">
                        <label>String: </label>
                        <input type="text" required className="form-control" value={this.state.string_field01} onChange={this.onChangeStringField01} />
                    </div>
                    <div className="form-group">
                        <label>Number: </label>
                        <input type="text" required className="form-control" value={this.state.numeric_field01} onChange={this.onChangeNumericField01} />
                    </div>
                    <div className="form-group">
                        <input type="Submit" value="Create a Basic" readOnly className="btn btn-primary" />
                    </div>
                </form>
            </div>
        );
    }
}