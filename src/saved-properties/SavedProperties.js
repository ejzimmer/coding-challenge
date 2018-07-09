import React, { Component } from 'react';

export class SavedProperties extends Component {
  render() {
    return (
      <div>{JSON.stringify(this.props.properties)}</div>
    )
  }
}