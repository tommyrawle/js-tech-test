import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import ws from './socket';
import EventList from './components/EventList/EventList.jsx';
import Toggle from './components/Toggle/Toggle.jsx';
import Event from './components/Event/Event.jsx';
import { Route } from 'react-router-dom';

const App = ({ setData }) => {
  const [isConnected, setConnectedState] = useState(false);

  useEffect(() => {
    ws.onopen = () => {
      setConnectedState(true);
    };

    ws.onmessage = event => {
      const data = JSON.parse(event.data);
      setData(data);
    };
  }, []);
  return isConnected ? (
    <div>
      <Toggle />
      <Route exact path="/">
        <EventList />
      </Route>
      <Route path="/:eventId">
        <Event />
      </Route>
    </div>
  ) : null;
};

const mapDispatchToProps = dispatch => ({
  setData: data => dispatch(actions.setData(data))
});

App.propTypes = {
  setData: PropTypes.func
};

export default connect(null, mapDispatchToProps)(App);
