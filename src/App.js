import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import ws from './socket';
import './App.css';
import EventList from './components/EventList/EventList.jsx';
import Event from './components/Event/Event.jsx';
import Header from './components/Header/Header.jsx';
import Error from './components/Error/Error.jsx';
import Spinner from './components/Spinner/Spinner.jsx';

import { useHistory } from 'react-router-dom';

const App = ({ setError, error }) => {
  const [isConnected, setConnectedState] = useState(false);

  let history = useHistory();

  ws.onopen = () => {
    setConnectedState(true);
  };
  ws.onerror = event => {
    console.error('WebSocket error:', event);
    setError({ code: 500, message: 'Error in connection establishment' });
    history.push('/error');
  };
  ws.onclose = event => {
    console.error('WebSocket now closed:', event);
  };
  console.log(isConnected);
  return isConnected ? (
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
      <Switch>
        <Route path="/error">
          <Error />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </div>
  ) : (
    <Spinner />
  );
};
const mapStateToProps = state => ({
  error: state.error
});
const mapDispatchToProps = dispatch => ({
  setError: event => dispatch(actions.setError(event))
});

App.propTypes = {
  setError: PropTypes.func,
  error: PropTypes.shape({
    code: PropTypes.number,
    message: PropTypes.string
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
