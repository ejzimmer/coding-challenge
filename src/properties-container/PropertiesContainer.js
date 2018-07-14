import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './PropertiesContainer.css';
import { actionTypes, PropertiesList } from '../properties-list/PropertiesList';

export class PropertiesContainer extends Component {
  state = { results: [], saved: [] };

  async componentDidMount() {
    const response = await fetch('/properties');
    const properties = await response.json();
    this.setState({ 
      results: properties.results,
      saved: properties.saved
     });

    const domNode = ReactDOM.findDOMNode(this);
    domNode.addEventListener(actionTypes.save.action, (event) => {
      this.saveProperty(event.detail.id);
    });
    domNode.addEventListener(actionTypes.remove.action, (event) => {
      this.removeProperty(event.detail.id);
    });
  }

  render() {
    return (
      <section className="lists">
        <PropertiesList heading="Results" action={ actionTypes.save } properties={ this.state.results } />
        <PropertiesList heading="Saved Properties" action={ actionTypes.remove } properties={ this.state.saved } />
      </section>
    )
  }

  saveProperty(id) {
    const property = this.state.results.find(p => p.id === id);
    const alreadySaved = this.state.saved.includes(property);
    if (property && !alreadySaved) {
      this.state.saved.push(property);
      this.setState({ saved: this.state.saved });
    }
  }

  removeProperty(id) {
    const propertyIndex = this.state.saved.findIndex(p => p.id === id);
    if (propertyIndex > -1) {
      this.state.saved.splice(propertyIndex, 1);
      this.setState({ saved: this.state.saved });
    }
  }
}