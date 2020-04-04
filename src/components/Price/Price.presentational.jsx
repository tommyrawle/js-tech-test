import React from 'react';
import PropTypes from 'prop-types';
import { PriceWrapper } from './Price.styles.jsx';

const Price = ({ price, oddsFormat }) => {
  return oddsFormat === 'fraction' ? (
    <PriceWrapper>{`${price.num}/${price.den}`}</PriceWrapper>
  ) : (
    <PriceWrapper>{parseFloat(price.decimal).toFixed(2)}</PriceWrapper>
  );
};

Price.propTypes = {
  price: PropTypes.object,
  oddsFormat: PropTypes.string
};

export default Price;
