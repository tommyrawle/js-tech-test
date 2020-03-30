import ws from '../socket';

export const getLiveEvents = showPrimaryMarkets => {
  ws.send(JSON.stringify({ type: 'getLiveEvents', primaryMarkets: showPrimaryMarkets }));
};

export const getEventDetails = id => {
  ws.send(JSON.stringify({ type: 'getEvent', id }));
};

export const getMarketDetails = id => {
  ws.send(JSON.stringify({ type: 'getMarket', id }));
};

export const getOutcomeDetails = id => {
  ws.send(JSON.stringify({ type: 'getOutcome', id }));
};
