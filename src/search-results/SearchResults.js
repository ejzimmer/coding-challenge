import React, { Component } from 'react';
import { Property } from '../property/Property';

export class SearchResults extends Component {
  render() {
    return (
      <div>
        <h2>Results</h2>
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
                      id={ property.id } />
          </li>
        ))}
      </ul>
    )
  }
}

