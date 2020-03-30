import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getMarketDetails } from '../../redux/utils';
import Outcome from '../Outcome/Outcome.jsx';

const Market = ({ marketId, markets, getOutcome }) => {
  const market = markets.find(market => market.marketId === marketId);

  useEffect(() => {
    if (!market) getMarketDetails(marketId);
  }, []);

  return (
    <div>
      {market && market.name}
      {getOutcome && market && market.outcomes.map((outcomeId, i) => <Outcome key={i} outcomeId={outcomeId} />)}
    </div>
  );
};

Market.propTypes = {
  marketId: PropTypes.number,
  markets: PropTypes.arrayOf(PropTypes.object),
  getOutcome: PropTypes.bool
};
const mapStateToProps = state => ({
  markets: state.marketDetails
});

export default connect(mapStateToProps)(Market);
