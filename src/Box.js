import React, { Component } from 'react';
import './Box.css';

class Box extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(evt) {
        //call up to the BoxList to delete the current box
        this.props.triggerDelete();
    }

    render() {
        const boxStyle = {
            height: this.props.height + "px",
            width: this.props.width + "px",
            backgroundColor: this.props.bgColor
        }
        return (
            <li key={this.props.id}>
                <div style={boxStyle}></div>
                <button onClick={this.handleClick}>Delete!</button>
            </li>
        )
    }

}

export default Box;
