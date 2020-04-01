import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import { connect } from 'react-redux';
import { getMarketDetails } from '../../redux/utils';
import { getDisplayableMarkets } from '../../redux/selectors';
import Outcome from '../Outcome/Outcome.jsx';

import { MarketButton, ArrowIcon } from './Market.styles.jsx';
const Market = ({ marketId, markets, getOutcome }) => {
  const market = markets.find(market => market.marketId === marketId);

  useEffect(() => {
    if (!market) getMarketDetails(marketId);
  }, []);

  const [visibility, setVisibility] = useState(getOutcome);

  const handleClick = () => {
    setVisibility(!visibility);
  };

  if (market) {
    return (
      <div>
        <MarketButton
          onClick={() => {
            handleClick();
          }}
        >
          {market.name}
          <ArrowIcon open={visibility} icon={faChevronDown} />
        </MarketButton>
        {visibility && market.outcomes.map((outcomeId, i) => <Outcome key={i} outcomeId={outcomeId} />)}
      </div>
    );
  } else return null;
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
