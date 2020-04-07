import React from 'react';
import { shallow } from 'enzyme';
import '@babel/polyfill';

let wrapper;
const mockHistoryPush = jest.fn();
describe('App component', () => {
  describe('Happy route', () => {
    beforeEach(() => {
      jest.resetModules();
      jest.mock('react-router-dom', () => ({
        ...jest.requireActual('react-router-dom'),
        useHistory: () => ({
          push: mockHistoryPush
        }),
        useLocation: () => ({
          pathname: '/'
        })
      }));
    });
    it('should render Spinner if app hasnt initialised yet', () => {
      const mockProps = {
        setError: jest.fn(),
        error: {},
        initialiseApp: jest.fn(),
        isAppInitialised: false
      };
      const { App } = require('./App.js');
      wrapper = shallow(<App {...mockProps} />);
      expect(wrapper).toMatchSnapshot();
      expect(wrapper.find('Spinner').exists()).toBeTruthy();
    });
    it('should render main app once app has initialised', () => {
      const mockProps = {
        setError: jest.fn(),
        error: {},
        initialiseApp: jest.fn(),
        isAppInitialised: true
      };
      const { App } = require('./App.js');
      wrapper = shallow(<App {...mockProps} />);
      expect(wrapper).toMatchSnapshot();
      expect(wrapper.find('Spinner').exists()).toBeFalsy();
    });
  });

  describe('Error route', () => {
    beforeEach(() => {
      jest.resetModules();
      jest.mock('react-router-dom', () => ({
        ...jest.requireActual('react-router-dom'),
        useHistory: () => ({
          push: mockHistoryPush
        }),
        useLocation: () => ({
          pathname: '/error'
        })
      }));
      const { App } = require('./App.js');
      const mockProps = {
        setError: jest.fn(),
        error: { code: 500, message: 'something bad happened' }
      };
      wrapper = shallow(<App {...mockProps} />);
    });
    it('should render Error route if pathname is /error', async () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
