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

  it('fraction button correctly triggers setOddsFormat function on click', () => {
    const mockProps = {
      oddsFormat: 'fraction',
      setOddsFormat: jest.fn()
    };
    const wrapper = shallow(<Toggle {...mockProps} />);
    wrapper.find('[id="fraction"]').simulate('click', { target: { value: 'fraction' } });
    expect(mockProps.setOddsFormat).toBeCalled();
  });
  it('decimal button correctly triggers setOddsFormat function on click', () => {
    const mockProps = {
      oddsFormat: 'decimal',
      setOddsFormat: jest.fn()
    };
    const wrapper = shallow(<Toggle {...mockProps} />);
    wrapper.find('[id="decimal"]').simulate('click', { target: { value: 'decimal' } });
    expect(mockProps.setOddsFormat).toBeCalled();
  });

  it('correctly makes isActive props value truthy on click', () => {
    //   const mockProps = {
    //     oddsFormat: 'fraction',
    //     setOddsFormat: jest.fn()
    //   };
    //   const wrapper = shallow(<Toggle {...mockProps} />);
    //   wrapper.find('[value="fraction"]').simulate('click', { target: { value: 'fraction' } });
    //   expect(wrapper.prop('isActive')).toBeFalsy();
  });
});
