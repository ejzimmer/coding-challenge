import React, { Component } from 'react';

export class Property extends Component {
  
  render() {
    return (
      <article className="property">
        <header style={ { backgroundColor: this.props.agencyColour } }>
          <img src={ this.props.agencyLogo } />
        </header>
        <div>
          <img src={ this.props.image } />
        </div>
        <div>{ this.props.price }</div>
      </article>
    )
  }
}