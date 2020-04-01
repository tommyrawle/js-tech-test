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

export const formatDateOrTime = (rawDateString, value) => {
  const date = new Date(rawDateString);
  const formatter = new Intl.DateTimeFormat('en-GB', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
    weekday: 'long',
    hour: '2-digit',
    minute: '2-digit'
  });
  const [
    { value: we },
    ,
    { value: mo },
    ,
    { value: da },
    ,
    { value: ye },
    ,
    { value: ho },
    ,
    { value: mi }
  ] = formatter.formatToParts(date);

  return value === 'date' ? `${we} ${da} ${mo} ${ye}` : `${ho}:${mi}`;
};
