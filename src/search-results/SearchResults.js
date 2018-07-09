import React, { Component } from 'react';
import { Property } from '../property/Property';

export class SearchResults extends Component {
  render() {
    if (this.props.properties) {
      return (
        <ul>
          { this.props.properties.map(property => (
            <li>
              <Property agencyColour={ property.agency.brandingColors.primary }
                        agencyLogo={ property.agency.logo }
                        image={ property.mainImage }
                        price={ property.price }
                        id={ property.id } />
            </li>
          ))}
        </ul>
      )
    } else {
      return <div>Loading...</div>;
    }
  }
}
