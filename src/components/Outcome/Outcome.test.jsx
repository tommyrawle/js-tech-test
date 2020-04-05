import React from 'react';
import { shallow } from 'enzyme';
import { Outcome } from './Outcome.jsx';

describe('Outcome component', () => {
  it('should render Outcome component', () => {
    const mockProps = {
      outcomeId: 789,
      outcomes: [{ outcomeId: 789, name: 'something or other', price: { den: 7, num: 1, decimal: 1.1428571428571428 } }]
    };
    expect(shallow(<Outcome {...mockProps} />)).toMatchSnapshot();
  });
  it('should render null if outcome does not exist', () => {
    const mockProps = {
      outcomeId: 789,
      outcomes: []
    };
    expect(shallow(<Outcome {...mockProps} />)).toMatchSnapshot();
  });
});
