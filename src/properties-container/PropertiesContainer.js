import React, { Component } from 'react';

export class PropertiesContainer extends Component {
  state = { properties: [] };

  async componentDidMount() {
    const response = await fetch('/properties');
    const properties = await response.json();
    this.setState({ properties });
  }

  render() {
    return (
      <div>{JSON.stringify(this.state.properties)}</div>
    )
  }
}