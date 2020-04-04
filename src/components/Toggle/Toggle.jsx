import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import PropTypes from 'prop-types';
import { ToggleWrapper, ToggleButtonWrapper, ToggleButton } from './Toggle.styles.jsx';

export const Toggle = ({ oddsFormat, setOddsFormat }) => {
  return (
    <ToggleWrapper>
      Odds format
      <ToggleButtonWrapper>
        <ToggleButton
          id="fraction"
          left
          isActive={oddsFormat === 'fraction'}
          value="fraction"
          onClick={e => setOddsFormat(e.target.value)}
        >
          Fraction
        </ToggleButton>
        <ToggleButton
          id="decimal"
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
