import React from 'react';
import { shallow } from 'enzyme';
import { Market } from './Market.jsx';

describe('Market component', () => {
  it('should render Market component', () => {
    const mockProps = {
      marketId: 123,
      markets: [{ marketId: 123, name: 'test market', outcomes: [789] }],
      outcomeOpen: true,
      setOutcomes: jest.fn()
    };
    expect(shallow(<Market {...mockProps} />)).toMatchSnapshot();
  });
  it('should render market not displayable if market does not exist component', () => {
    const mockProps = {
      marketId: 123,
      markets: [],
      outcomeOpen: false,
      setOutcomes: jest.fn()
    };
    expect(shallow(<Market {...mockProps} />)).toMatchSnapshot();
  });
});
