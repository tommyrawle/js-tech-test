import React, { useEffect, useState } from 'react';
import ws from './socket';

const App = () => {
  const [isConnected, setConnectedState] = useState(false);

  useEffect(() => {
    ws.onopen = () => {
      setConnectedState(true);
    };

    ws.onmessage = event => {
      const data = JSON.parse(event.data);
      console.log(data);
    };
  }, []);
  return isConnected ? <div>Cheeeeese</div> : null;
};

App.propTypes = {};

export default App;
