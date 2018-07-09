import React from 'react';
import { shallow } from 'enzyme';
import { PropertiesContainer } from './PropertiesContainer';

describe('PropertiesContainer', () => {
  const results = ['dodgy-house', 'another-dodgy-house'];
  const saved = ['awesome-house'];

  const mockFetch = () => ({ json: () => ({ results, saved }) });

  beforeEach(() => {
    global.fetch = jest.fn().mockImplementation(mockFetch);
  });

  it('fetches the properties', async (done) => {
    const component = shallow(<PropertiesContainer />, { disableLifecycleMethods: true }).instance();
    await component.componentDidMount();

    expect(component.state.results).toBe(results);
    expect(component.state.saved).toBe(saved);
    done();
  });
});