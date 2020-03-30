import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getMarketDetails } from '../../redux/utils';
import { getDisplayableMarkets } from '../../redux/selectors';
import Outcome from '../Outcome/Outcome.jsx';

const Market = ({ marketId, markets, getOutcome }) => {
  const market = markets.find(market => market.marketId === marketId);

  useEffect(() => {
    if (!market) getMarketDetails(marketId);
  }, []);

  const [visibility, setVisibility] = useState(getOutcome);

  const handleClick = () => {
    setVisibility(!visibility);
  };

  return (
    <div>
      <button
        onClick={() => {
          handleClick();
        }}
      >
        {market && market.name}
      </button>
      {visibility && market && market.outcomes.map((outcomeId, i) => <Outcome key={i} outcomeId={outcomeId} />)}
    </div>
  );
};

Market.propTypes = {
  marketId: PropTypes.number,
  markets: PropTypes.arrayOf(PropTypes.object),
  getOutcome: PropTypes.bool
};
const mapStateToProps = state => ({
  markets: getDisplayableMarkets(state)
});

export default connect(mapStateToProps)(Market);
