import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Property.css';

export class Property extends Component {
  
  render() {
    return (
      <article className="property">
        <header style={ { backgroundColor: this.props.agencyColour } }>
          <img src={this.props.agencyLogo} alt="" />
        </header>
        <img src={this.props.image} alt="" />
        <div className="price">{this.props.price}</div>
        <button className="action-button" onClick={this.doAction.bind(this)}>Action</button>
      </article>
    )
  }

  doAction() {
    ReactDOM.findDOMNode(this).dispatchEvent(new CustomEvent('hello', { bubbles: true }));
  }
}