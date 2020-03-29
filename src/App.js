import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import Events from './components/Events/Events.jsx';
import ws from './socket';

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
