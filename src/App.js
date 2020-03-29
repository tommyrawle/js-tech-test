import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import ws from './socket';
import Events from './components/Events/Events.jsx';
import Toggle from './components/Toggle/Toggle.jsx';

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
      <Events />
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
