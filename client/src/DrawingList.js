import React, { Component } from 'react'
import { subscribeToDrawings } from './api'

export class DrawingList extends Component {
    constructor(props) {
        super(props);
        subscribeToDrawings(drawing => {
            this.setState(prevState => ({
                drawings: prevState.drawings.concat([drawing])
            }));
        });
    }
    state = {
        drawings: []
    };

    render() {
        const drawings = this.state.drawings.map(drawing => (
            <li
                className="DrawingList-Item"
                key={drawing.id}
                onClick={(e) => this.props.selectDrawing(drawing)}
            >{drawing.name}</li>
        ))
        return (
            <ul className="DrawingList">
                {drawings}
            </ul>
        )
    }
}

export default DrawingList
