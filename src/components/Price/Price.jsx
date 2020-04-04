import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { PriceWrapper } from './Price.styles.jsx';

export const Price = ({ price, oddsFormat }) => {
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

const mapStateToProps = state => ({
  oddsFormat: state.oddsFormat
});

export default connect(mapStateToProps)(Price);
