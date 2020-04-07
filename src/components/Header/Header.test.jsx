import React from 'react';
import { shallow } from 'enzyme';

let wrapper;
const mockHistoryPush = jest.fn();
const mockProps = {
  title: 'Live Events'
};
describe('Header component', () => {
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

    const { Header } = require('./Header.jsx');
    wrapper = shallow(<Header {...mockProps} />);
  });
  it('should render Header component', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should not render back button if on home page (i.e path = "/")', () => {
    expect(wrapper.find('HeaderBackButton').exists()).toBeFalsy();
  });
});

describe('Header component', () => {
  beforeEach(() => {
    jest.resetModules();
    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useHistory: () => ({
        push: mockHistoryPush
      }),
      useLocation: () => ({
        pathname: '/event/123'
      })
    }));

    const { Header } = require('./Header.jsx');
    wrapper = shallow(<Header {...mockProps} />);
  });

  it('should render Header component with back button if not on home page', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('HeaderBackButton').exists()).toBeTruthy();
  });
});
