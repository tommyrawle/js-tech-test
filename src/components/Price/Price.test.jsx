import React from 'react';
import { shallow } from 'enzyme';
import Price from './Price.presentational.jsx';

it('expect to render Price component', () => {
  const mockPrice = { price: { den: 7, num: 1, decimal: 1.1428571428571428 } };
  const mockOddsFormat = 'fraction';
  expect(shallow(<Price price={mockPrice} oddsFormat={mockOddsFormat} />)).toMatchSnapshot();
});

it('expect to render Price component', () => {
  const mockPrice = { price: { den: 7, num: 1, decimal: 1.1428571428571428 } };
  const mockOddsFormat = 'decimal';
  expect(shallow(<Price price={mockPrice} oddsFormat={mockOddsFormat} />)).toMatchSnapshot();
});
