import React, { Component } from 'react';

class NewBoxForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bgColor: '',
            height: '',
            width: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(evt) {
        evt.preventDefault();
        this.props.handleAddBox(this.state);
        this.setState({
            bgColor: '',
            height: '',
            width: ''
        })
    }

    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='bgColor'>Background Color:</label>
                <input id='bgColor' name='bgColor' value={this.state.bgColor}
                    onChange={this.handleChange} />
                <label htmlFor='height'>Height:</label>
                <input id='height' name='height' value={this.state.height}
                    onChange={this.handleChange} />
                <label htmlFor='width'>Width:</label>
                <input id='width' name='width' value={this.state.width}
                    onChange={this.handleChange} />
                <button>Add Box!</button>
            </form>
        )
    }
}

export default NewBoxForm;