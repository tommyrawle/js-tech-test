import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';

const Toggle = ({ oddsFormat, setOddsFormat }) => {
  return (
    <div>
      <button
        className={oddsFormat === 'fraction' ? 'active' : ''}
        value="fraction"
        onClick={e => setOddsFormat(e.target.value)}
      >
        Fraction
      </button>
      <button
        className={oddsFormat === 'decimal' ? 'active' : ''}
        value="decimal"
        onClick={e => setOddsFormat(e.target.value)}
      >
        Decimal
      </button>
    </div>
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
