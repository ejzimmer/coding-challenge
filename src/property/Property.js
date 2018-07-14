import React, { Component } from 'react';
import { ActionButton } from '../action-button/ActionButton';
import './Property.css';

export class Property extends Component {
  
  render() {
    return (
      <article className="property">
        <header style={ { backgroundColor: this.props.agencyColour } }>
          <img src={ this.props.agencyLogo } alt="" />
        </header>
        <img src={ this.props.image } alt="" />
        <div className="price">{ this.props.price }</div>
        <ActionButton type={ this.props.action } id={ this.props.id } />
      </article>
    )
  }
}