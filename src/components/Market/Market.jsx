import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getMarketDetails } from '../../redux/utils';

const Market = ({ id, markets }) => {
  useEffect(() => {
    getMarketDetails(id);
  }, []);

  const market = markets.find(market => market.marketId === id);
  return <div>{market && market.name}</div>;
};

Market.propTypes = {
  id: PropTypes.number,
  markets: PropTypes.arrayOf(PropTypes.object)
};
const mapStateToProps = state => ({
  markets: state.marketDetails
});

export default connect(mapStateToProps)(Market);
