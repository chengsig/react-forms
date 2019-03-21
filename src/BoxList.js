import React, { Component } from 'react';
import './BoxList.css';
import uuid from 'uuid/v4';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

class BoxList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boxes: []
        }
        this.addBox = this.addBox.bind(this);
    }

    addBox(box) {
        let newBox = {...box, id: uuid()};
        this.setState(state => ({
            boxes: [...state.boxes, newBox]
        }));
    }

    deleteBox(id) {
        this.setState(st => ({
            boxes: st.boxes.filter(box => box.id !== id)
        }));
    }

    renderBox() {
        return (
            <ul>
                {this.state.boxes.map(box => (
                    <Box key={box.id} 
                        height={box.height}
                        width={box.width}
                        bgColor={box.bgColor}
                        triggerDelete={() => this.deleteBox(box.id)}/>
                ))}
            </ul>
        )
    }

    render () {
        return (
            <div className="BoxList">
                <NewBoxForm handleAddBox={this.addBox}/>
                {this.renderBox()}
            </div>
        )
    }
}


export default BoxList;