import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Price = ({ price, oddsFormat }) => {
  if (oddsFormat === 'fraction') {
    return <div>{`${price.num}/${price.den}`}</div>;
  } else {
    return <div>{parseFloat(price.decimal).toFixed(2)}</div>;
  }
};

Price.propTypes = {
  price: PropTypes.object,
  oddsFormat: PropTypes.string
};

const mapStateToProps = state => ({
  oddsFormat: state.oddsFormat
});

export default connect(mapStateToProps)(Price);
