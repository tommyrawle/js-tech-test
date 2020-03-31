import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import { ToggleWrapper, ToggleButtonWrapper, ToggleButton } from './Toggle.styles.jsx';

const Toggle = ({ oddsFormat, setOddsFormat }) => {
  return (
    <ToggleWrapper>
      Odds format
      <ToggleButtonWrapper>
        <ToggleButton
          left
          isActive={oddsFormat === 'fraction'}
          value="fraction"
          onClick={e => setOddsFormat(e.target.value)}
        >
          Fraction
        </ToggleButton>
        <ToggleButton
          right
          isActive={oddsFormat === 'decimal'}
          value="decimal"
          onClick={e => setOddsFormat(e.target.value)}
        >
          Decimal
        </ToggleButton>
      </ToggleButtonWrapper>
    </ToggleWrapper>
  );
};

Toggle.propTypes = {
  oddsFormat: PropTypes.string,
  setOddsFormat: PropTypes.func
};

const mapStateToProps = state => ({
  oddsFormat: state.oddsFormat
});
const mapDispatchToProps = dispatch => ({
  setOddsFormat: value => dispatch(actions.setOddsFormat(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Toggle);
