import React from 'react';
import { shallow } from 'enzyme';
import { Toggle } from './Toggle.jsx';

describe('Toggle component', () => {
  it('should render Toggle component', () => {
    const mockProps = {
      oddsFormat: 'fraction',
      setOddsFormat: jest.fn()
    };
    expect(shallow(<Toggle {...mockProps} />)).toMatchSnapshot();
  });

  it('correctly triggers setOddsFormat function on click of fraction button ', () => {
    const mockProps = {
      oddsFormat: 'fraction',
      setOddsFormat: jest.fn()
    };
    const wrapper = shallow(<Toggle {...mockProps} />);
    const button = wrapper.find('[id="fraction"]');
    button.simulate('click', { target: { value: 'fraction' } });
    expect(mockProps.setOddsFormat).toBeCalled();
    expect(mockProps.setOddsFormat).toBeCalledWith('fraction');
  });
  it('correctly triggers setOddsFormat function on click of decimal button ', () => {
    const mockProps = {
      oddsFormat: 'decimal',
      setOddsFormat: jest.fn()
    };
    const wrapper = shallow(<Toggle {...mockProps} />);
    const button = wrapper.find('[id="decimal"]');
    button.simulate('click', { target: { value: 'decimal' } });
    expect(mockProps.setOddsFormat).toBeCalledWith('decimal');
  });

  it('correctly makes isActive prop value truthy on click', () => {
    const mockProps = {
      oddsFormat: 'fraction',
      setOddsFormat: jest.fn()
    };
    const wrapper = shallow(<Toggle {...mockProps} />);
    const button = wrapper.find('[value="fraction"]');

    button.simulate('click', { target: { value: 'fraction' } });

    expect(button.prop('isActive')).toBeTruthy();
  });

  it('correctly makes isActive prop value falsy on click of the other button', () => {
    const mockProps = {
      oddsFormat: 'fraction',
      setOddsFormat: jest.fn()
    };
    const wrapper = shallow(<Toggle {...mockProps} />);
    const button = wrapper.find('[value="fraction"]');
    const otherButton = wrapper.find('[value="decimal"]');

    button.simulate('click', { target: { value: 'fraction' } });

    expect(otherButton.prop('isActive')).toBeFalsy();
  });
});
