import React from 'react';
import { shallow } from 'enzyme';

let wrapper;
const mockHistoryPush = jest.fn();
const mockProps = {
  setError: jest.fn(),
  error: { code: 500, message: 'something bad happened' }
};
describe('Error component 1st code block', () => {
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
    const { Error } = require('./Error.jsx');
    wrapper = shallow(<Error {...mockProps} />);
  });
  it('should render 1st block in Error component', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('if the pathname is /error, it should render the first block', () => {
    const code = wrapper
      .find('h1')
      .at(1)
      .text();
    expect(parseInt(code)).toBe(500);
    expect(wrapper.find('p').text()).toBe('something bad happened');
  });
});
describe('Error component 2nd code block', () => {
  beforeEach(() => {
    jest.resetModules();
    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useHistory: () => ({
        push: mockHistoryPush
      }),
      useLocation: () => ({
        pathname: '/cheese'
      })
    }));
    const { Error } = require('./Error.jsx');
    wrapper = shallow(<Error {...mockProps} />);
  });
  it('should render 2nd block in Error component', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('if the pathname is NOT /error, it should render the second block', () => {
    const code = wrapper
      .find('h1')
      .at(1)
      .text();
    expect(code).toBe('404');
    expect(wrapper.find('p').text()).toBe('Page Not Found');
  });
});

describe('back button', () => {
  beforeEach(() => {
    jest.resetModules();
    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useHistory: () => ({
        push: mockHistoryPush
      }),
      useLocation: () => ({
        pathname: '/cheese'
      })
    }));
    const { Error } = require('./Error.jsx');
    wrapper = shallow(<Error {...mockProps} />);
  });
  it('should call mockHistoryPush on click', () => {
    wrapper.find('button').simulate('click');
    expect(mockHistoryPush).toBeCalled();
  });
});
