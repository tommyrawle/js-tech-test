import ws from '../socket';

export const getLiveEvents = showPrimaryMarkets => {
  ws.send(JSON.stringify({ type: 'getLiveEvents', primaryMarkets: showPrimaryMarkets }));
};

export const getMarketDetails = id => {
  ws.send(JSON.stringify({ type: 'getMarket', id }));
};
