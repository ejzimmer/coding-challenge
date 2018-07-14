import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './action-button.css';

export class ActionButton extends Component {
  render() {
    return (
      <button className="action-button" style={{ backgroundColor: this.props.type.colour }} onClick={ this.doAction.bind(this) }>
        {this.props.type.text}
      </button>
    )
  }

  doAction() {
    const event = new CustomEvent(this.props.type.action, { 
        detail: { 
          id: this.props.id 
        }, 
        bubbles: true 
      });
    ReactDOM.findDOMNode(this).dispatchEvent(event);
  }
}