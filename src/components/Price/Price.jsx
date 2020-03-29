import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Price = ({ price, priceFormat }) => {
  if (priceFormat === 'fractional') {
    return <div>{`${price.num}/${price.den}`}</div>;
  } else {
    return <div>{parseFloat(price.decimal).toFixed(2)}</div>;
  }
};

Price.propTypes = {
  price: PropTypes.object
};

const mapStateToProps = state => ({
  priceFormat: state.priceFormat
});

export default connect(mapStateToProps)(Price);
