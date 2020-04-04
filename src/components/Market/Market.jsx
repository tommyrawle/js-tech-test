import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { getDisplayableMarkets } from '../../redux/selectors';
import { getOutcomeDetails } from '../../redux/getters';
import * as actions from '../../redux/actions';
import Outcome from '../Outcome/Outcome.jsx';

import { MarketButton, ArrowIcon } from './Market.styles.jsx';
const Market = ({ marketId, markets, outcomeOpen, setOutcomes }) => {
  const [visibility, setVisibility] = useState(outcomeOpen);

  useEffect(() => {
    if (visibility) {
      Promise.all(market.outcomes.map(async outcome => await getOutcomeDetails(outcome))).then(outcomeData => {
        setOutcomes(outcomeData);
      });
    }
  }, [visibility]);

  const handleClick = () => {
    setVisibility(!visibility);
  };

  const market = markets.find(market => market.marketId === marketId);
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
  } else {
    return null;
  }
};

Market.propTypes = {
  marketId: PropTypes.number,
  markets: PropTypes.arrayOf(PropTypes.object),
  getOutcome: PropTypes.bool,
  outcomeOpen: PropTypes.bool,
  setOutcomes: PropTypes.func
};
const mapStateToProps = state => ({
  markets: getDisplayableMarkets(state)
});

const mapDispatchToProps = dispatch => ({
  setOutcomes: arrayOfOutcomes => dispatch(actions.setOutcomes(arrayOfOutcomes))
});

export default connect(mapStateToProps, mapDispatchToProps)(Market);
