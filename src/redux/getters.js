import ws from '../socket';

export const getAllLiveEvents = showPrimaryMarkets => {
  ws.send(JSON.stringify({ type: 'getLiveEvents', primaryMarkets: showPrimaryMarkets }));
  return new Promise(resolve => {
    ws.addEventListener('message', function(event) {
      const data = JSON.parse(event.data);
      if (data.type === 'LIVE_EVENTS_DATA') {
        resolve(data.data);
      }
    });
  });
};

// Event promise dispatches event data and returns all the event's market IDs
export const getEventDetails = eventId => {
  ws.send(JSON.stringify({ type: 'getEvent', id: eventId }));
  return new Promise(resolve => {
    ws.addEventListener('message', function(event) {
      const data = JSON.parse(event.data);
      if (data.type === 'EVENT_DATA' && data.data.eventId === eventId) {
        resolve(data.data);
      }
    });
  });
};

// Market promise relies on the result of above promise (i.e. market ids)
// It returns all the market details so they can be accumulated and dispatched all together
export const getMarketDetails = marketId => {
  ws.send(JSON.stringify({ type: 'getMarket', id: marketId }));
  return new Promise((resolve, reject) => {
    ws.addEventListener('message', function(event) {
      const data = JSON.parse(event.data);
      if (data.type === 'MARKET_DATA' && data.data.marketId === marketId) {
        resolve(data.data);
        reject(console.error('market request rejected'));
      }
    });
  });
};

export const getOutcomeDetails = outcomeId => {
  ws.send(JSON.stringify({ type: 'getOutcome', id: outcomeId }));
  return new Promise(resolve => {
    ws.addEventListener('message', function(event) {
      const data = JSON.parse(event.data);
      if (data.type === 'OUTCOME_DATA' && data.data.outcomeId === outcomeId) {
        resolve(data.data);
      }
    });
  });
};
