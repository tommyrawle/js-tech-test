import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import { useLocation, useHistory } from 'react-router-dom';
import { ErrorContainer } from './Error.styles.jsx';

const Error = ({ error, setError }) => {
  const { pathname } = useLocation();
  let history = useHistory();
  return (
    <ErrorContainer>
      <div>
        {pathname === '/error' ? (
          <div>
            <h1>Oops!</h1>
            <h3>It seems something has gone wrong</h3>
            <h1>{error.code}</h1>
            <p>{error.message}</p>
          </div>
        ) : (
          <div>
            <h1>Oops!</h1>
            <h3>It seems you took a wrong turn.</h3>
            <h1>404</h1>
            <p>Page Not Found</p>
          </div>
        )}
        <button
          onClick={() => {
            setError({});
            history.push('/');
          }}
        >
          Head Back
        </button>
      </div>
    </ErrorContainer>
  );
};

Error.propTypes = {
  error: PropTypes.object,
  setError: PropTypes.func
};

const mapStateToProps = state => ({
  error: state.error
});
const mapDispatchToProps = dispatch => ({
  setError: event => dispatch(actions.setError(event))
});
export default connect(mapStateToProps, mapDispatchToProps)(Error);
