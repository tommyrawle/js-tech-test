import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import ws from '../socket';
import './App.css';
import EventList from '../components/EventList/EventList.jsx';
import Event from '../components/Event/Event.jsx';
import Header from '../components/Header/Header.jsx';
import Error from '../components/Error/Error.jsx';
import Spinner from '../components/Spinner/Spinner.jsx';

import { useHistory } from 'react-router-dom';

export const App = ({ setError, error, initialiseApp, isAppInitialised }) => {
  let history = useHistory();
  ws.onopen = event => {
    console.log('WebSocket now open:', event);
  };
  ws.onmessage = event => {
    if (JSON.parse(event.data).type === 'INIT') {
      initialiseApp(true);
    }
  };
  ws.onerror = event => {
    console.error('WebSocket error:', event);
    setError({ code: 500, message: 'Error in connection establishment' });
    history.push('/error');
  };
  ws.onclose = event => {
    console.log('WebSocket now closed:', event);
  };

  return isAppInitialised ? (
    <div>
      <Header title="Live Events" />
      <Switch>
        <Route exact path="/">
          <EventList />
        </Route>
        <Route path="/event/:eventId">
          <Event />
        </Route>
        <Route path="/error">
          <Error />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </div>
  ) : error.code ? (
    <div>
      <Header title="Live Events" />
      <Route path="/error">
        <Error />
      </Route>
    </div>
  ) : (
    <Spinner />
  );
};
const mapStateToProps = state => ({
  error: state.error,
  isAppInitialised: state.isAppInitialised
});
const mapDispatchToProps = dispatch => ({
  setError: event => dispatch(actions.setError(event)),
  initialiseApp: bool => dispatch(actions.initialiseApp(bool))
});

App.propTypes = {
  setError: PropTypes.func,
  initialiseApp: PropTypes.func,
  error: PropTypes.shape({
    code: PropTypes.number,
    message: PropTypes.string
  }),
  isAppInitialised: PropTypes.bool
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
