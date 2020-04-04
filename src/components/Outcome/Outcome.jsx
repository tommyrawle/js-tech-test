import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Price from '../Price/Price.container.jsx';
import { getDisplayableOutcomes } from '../../redux/selectors';
import { OutcomeWrapper } from './Outcome.styles.jsx';

const Outcome = ({ outcomeId, outcomes }) => {
  const outcome = outcomes.find(outcome => outcome.outcomeId === outcomeId);

  if (outcome) {
    return (
      <OutcomeWrapper>
        {outcome.name}
        {<Price price={outcome.price} />}
      </OutcomeWrapper>
    );
  } else return null;
};

Outcome.propTypes = {
  outcomeId: PropTypes.number,
  outcomes: PropTypes.arrayOf(PropTypes.object)
};

const mapStateToProps = state => ({
  outcomes: getDisplayableOutcomes(state)
});

export default connect(mapStateToProps)(Outcome);
