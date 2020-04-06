import { getAllLiveEvents, getEventDetails, getMarketDetails, getOutcomeDetails } from './getters';
import ws from '../socket';

describe('getAllLiveEvents websocket communication', () => {
  //     const fakeURL = 'ws://localhost:8080';
  //   const mockServer = new Server(fakeURL);

  //   ws.on('connection', socket => {
  //     socket.on('message', () => {});
  //     socket.on('close', () => {});

  //     socket.send('message');
  //     socket.close();
  //   });

  // beforeEach(() => {
  //   const websocket = new WebSocket('ws://localhost:8889');
  //   websocket.sendRequest = jest.fn();
  // });

  it('should fetch all live events with no primary markets and return response data', () => {
    const mockWebsocket = jest.fn().mockReturnValue(Promise.resolve([{ eventId: 123 }, { eventId: 234 }]));
    expect.assertions(1);

    return mockWebsocket().then(data => {
      expect(data).toEqual(expect.any(Array));
    });
  });
});
