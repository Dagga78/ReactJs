import React, { Component } from 'react';

class Messages extends Component {
    render() {
        return (
            <ul>
                {this.props.dialogue.map(message => (
                    <li className={message.type} key={message.id}>
                        {message.message}
                    </li>
                ))}
            </ul>
        );
    }
}

export default Messages;