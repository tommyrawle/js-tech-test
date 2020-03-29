import ws from '../socket';

export const getLiveEvents = () => {
  ws.send(JSON.stringify({ type: 'getLiveEvents' }));
};
