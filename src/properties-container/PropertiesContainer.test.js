import React from 'react';
import { shallow } from 'enzyme';
import { PropertiesContainer } from './PropertiesContainer';

describe('PropertiesContainer', () => {
  let results;
  let saved;
  let component;

  const mockFetch = () => ({ json: () => ({ results, saved }) });

  beforeEach(() => {
    results = [{ id: 1 }, { id: 2 }];
    saved = [{ id: 3 }];
    
    global.fetch = jest.fn().mockImplementation(mockFetch);
    component = shallow(<PropertiesContainer />, { disableLifecycleMethods: true }).instance();

    // Just completely mock out the data fetching. We know fetch works, testing it adds a lot of hassle for not much gain.
    component.state = { results, saved };
  });

  it('saves a property, without updating the results list', () => {
    component.saveProperty(2);

    expect(saved.length).toBe(2);
    expect(saved).toContain(results[1]);
    expect(results.length).toBe(2);
  });

  it('handles trying to have a non-existant property', () => {
    component.saveProperty(4);

    expect(results.length).toBe(2);
    expect(saved.length).toBe(1);
  });

  it('only saves a property once', () => {
    component.saveProperty(2);
    expect(saved.length).toBe(2);

    component.saveProperty(2);
    expect(results.length).toBe(2);

    component.saveProperty(3);
    expect(saved.length).toBe(2);
  });

  it('removes a property from the saved list', () => {
    component.removeProperty(3);
    expect(saved.length).toBe(0);
  });

  it('removes a newly added property from the saved list', () => {
    component.saveProperty(2);
    expect(saved.length).toBe(2);

    component.removeProperty(2);
    expect(saved.length).toBe(1);
  });

  it('handles trying to remove an unsaved property', () => {
    component.removeProperty(5);
    expect(saved.length).toBe(1);
  });
});