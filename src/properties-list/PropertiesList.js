import React, { Component } from 'react';
import { Property } from '../property/Property';
import './PropertiesList.css';

export const actionTypes = {
  save: {
    text: 'Save',
    colour: 'green',
    action: 'save'
  },
  remove: {
    text: 'Remove',
    colour: 'red',
    action: 'remove'
  }
}

export class PropertiesList extends Component {
  render() {
    return (
      <div className="column">
        <h2>{ this.props.heading }</h2>
        { this.props.properties ? this.getPropertyList() : <div>Loading...</div> }
      </div>
    )
  }

  getPropertyList() {
    return (
      <ul className="property-list">
        { this.props.properties.map(property => (
          <li key={ property.id }>
            <Property agencyColour={ property.agency.brandingColors.primary }
                      agencyLogo={ property.agency.logo }
                      image={ property.mainImage }
                      price={ property.price }
                      id={ property.id }
                      action={ this.props.action } />
          </li>
        ))}
      </ul>
    )
  }

}
