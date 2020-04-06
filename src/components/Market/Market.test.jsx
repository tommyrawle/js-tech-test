import React from 'react';
import { shallow } from 'enzyme';
import { Market } from './Market.jsx';

describe('Market component render', () => {
  it('should render Market component', () => {
    const mockProps = {
      marketId: 123,
      markets: [{ marketId: 123, name: 'test market', outcomes: [789] }],
      outcomeOpen: true,
      setOutcomes: jest.fn()
    };
    const wrapper = shallow(<Market {...mockProps} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('#marketDisabled').exists()).toBeFalsy();
  });
  it('should render market not displayable if market does not exist component', () => {
    const mockProps = {
      marketId: 123,
      markets: [],
      outcomeOpen: false,
      setOutcomes: jest.fn()
    };
    const wrapper = shallow(<Market {...mockProps} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('#marketDisabled').exists()).toBeTruthy();
  });
});

describe('Market button', () => {
  const mockProps = {
    marketId: 123,
    markets: [{ marketId: 123, name: 'test market', outcomes: [789] }],
    outcomeOpen: false,
    setOutcomes: jest.fn()
  };
  const wrapper = shallow(<Market {...mockProps} />);

  it('should toggle showing outcomes on click ', () => {
    wrapper.find('MarketButton').simulate('click');
    expect(wrapper.find('ArrowIcon').prop('open')).toBeTruthy();
    wrapper.find('MarketButton').simulate('click');
    expect(wrapper.find('ArrowIcon').prop('open')).toBeFalsy();
  });
});
