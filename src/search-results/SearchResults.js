import React, { Component } from 'react';

export class SearchResultsContainer extends Component {
  render() {
    return (
      <div>{JSON.stringify(this.props.properties)}</div>
    )
  }
}