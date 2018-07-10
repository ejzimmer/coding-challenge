import React, { Component } from 'react';
import './Property.css';

export class Property extends Component {
  
  render() {
    return (
      <article className="property">
        <header style={ { backgroundColor: this.props.agencyColour } }>
          <img src={ this.props.agencyLogo } />
        </header>
        <img src={ this.props.image } alt="" />
        <div className="price">{ this.props.price }</div>
        <button className="action-button">Action</button>
      </article>
    )
  }
}