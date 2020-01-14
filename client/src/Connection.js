import React, { Component } from 'react';
import { subscribeToConnectionEvent } from './api';

export class Connection extends Component {
    state = {
        connectionState: 'connecting'
    }
    constructor(props) {
        super(props);
        subscribeToConnectionEvent(({ state, port }) => {
            debugger;
            this.setState({
                connectionState: state,
                port
            });
        });
    }
    render() {
        let content = null;

        if(this.state.connectionState === 'disconnected') {
            debugger;
            content = (
                <div className = "Connection-error">
                    We've lost connection to our server...
                </div>
            );
        }

        if(this.state.connectionState === 'connecting') {
            content = (
                <div>
                    Connecting...
                </div>
            );
        }
        return (
            <div className="Connection">
                <div className="Connection-port">
                    Socket port: {this.state.port}
                </div>
                {content}
            </div>
        )
    }
}

export default Connection
