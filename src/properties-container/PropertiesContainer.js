import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './PropertiesContainer.css';
import { SearchResults } from '../search-results/SearchResults';
import { SavedProperties } from '../saved-properties/SavedProperties';

export class PropertiesContainer extends Component {
  state = { properties: [] };

  async componentDidMount() {
    const response = await fetch('/properties');
    const properties = await response.json();
    this.setState({ 
      results: properties.results,
      saved: properties.saved
     });

    ReactDOM.findDOMNode(this).addEventListener('hello', () => {
      console.log('hello');
    });
  }

  render() {
    return (
     <section className="lists">
        <SearchResults properties={this.state.results} />
        <SavedProperties properties={this.state.saved} />
      </section>
    )
  }

  hello() {
    console.log('hello');
  }
}