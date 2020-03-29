import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getOutcomeDetails } from '../../redux/utils';
import Price from '../Price/Price.jsx';

const Outcome = ({ outcomeId, outcomes }) => {
  const outcome = outcomes.find(outcome => outcome.outcomeId === outcomeId);

  useEffect(() => {
    if (!outcome) getOutcomeDetails(outcomeId);
  }, []);

  return (
    <div>
      {outcome && outcome.name}
      {outcome && <Price price={outcome.price} />}
    </div>
  );
};

Outcome.propTypes = {
  outcomeId: PropTypes.number,
  outcomes: PropTypes.arrayOf(PropTypes.object)
};
const mapStateToProps = state => ({
  outcomes: state.outcomeDetails
});

export default connect(mapStateToProps)(Outcome);
