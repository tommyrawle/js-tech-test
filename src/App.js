import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import ws from './socket';
import EventList from './components/EventList/EventList.jsx';
import Event from './components/Event/Event.jsx';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header.jsx';

const App = ({ setError }) => {
  const [isConnected, setConnectedState] = useState(false);

  ws.onopen = () => {
    setConnectedState(true);
  };
  ws.onerror = event => {
    setError(event);
  };
  ws.onclose = event => {
    console.error('WebSocket now closed:', event);
  };

  return isConnected ? (
    <div>
      <Header title="Live Events" />
      <Route exact path="/">
        <EventList />
      </Route>
      <Route path="/event/:eventId">
        <Event />
      </Route>
    </div>
  ) : null;
};

const mapDispatchToProps = dispatch => ({
  setError: event => dispatch(actions.setError(event))
});

App.propTypes = {
  setError: PropTypes.func
};

export default connect(null, mapDispatchToProps)(App);
