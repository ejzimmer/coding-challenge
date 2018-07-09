import React from 'react';
import { shallow } from 'enzyme';
import { PropertiesContainer } from './PropertiesContainer';

describe('PropertiesContainer', () => {

  const mockFetch = () => ({ json: () => ({ foo: 'bar' }) });

  beforeEach(() => {
    global.fetch = jest.fn().mockImplementation(mockFetch);
  });

  it('fetches the properties', async (done) => {
    const component = shallow(<PropertiesContainer />, { disableLifecycleMethods: true }).instance();
    await component.componentDidMount();
    expect(component.state).toEqual({ properties: { foo: 'bar' } });
    done();
  });
});