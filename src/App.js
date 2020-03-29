import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import ws from './socket';

const App = ({ initialiseApp }) => {
  const [isConnected, setConnectedState] = useState(false);

  useEffect(() => {
    ws.onopen = () => {
      setConnectedState(true);
    };

    ws.onmessage = event => {
      const data = JSON.parse(event.data);
      initialiseApp(data);
    };
  }, []);
  return isConnected ? <div>Cheeeeese</div> : null;
};

const mapDispatchToProps = dispatch => ({
  initialiseApp: data => dispatch(actions.initialiseApp(data))
});

App.propTypes = {
  initialiseApp: PropTypes.func
};

export default connect(null, mapDispatchToProps)(App);
