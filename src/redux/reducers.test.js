import reducer, { initialState } from './reducers';
import * as actions from './actions';

describe('reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });
});

describe('live events reducer', () => {
  const events = [{ eventId: 21249938 }];
  it('should handle setting all live events data and setting loading state to false', () => {
    expect(reducer(initialState, actions.setAllLiveEvents(events, false))).toMatchObject({
      allEvents: [{ eventId: 21249938 }],
      loading: false
    });
  });
  it('should handle setting all live events data and setting loading state to true', () => {
    expect(reducer(initialState, actions.setAllLiveEvents(events, true))).toMatchObject({
      allEvents: [{ eventId: 21249938 }],
      loading: true
    });
  });
});

describe('live events reducer case', () => {
  const events = [{ eventId: 21249938 }];
  const mockState = {
    allEvents: []
  };
  it('should handle setting all live events data and setting loading state to false', () => {
    expect(reducer(initialState, actions.setAllLiveEvents(events, false))).toMatchObject({
      ...mockState,
      allEvents: [{ eventId: 21249938 }],
      loading: false
    });
  });
  it('should handle setting all live events data and setting loading state to true', () => {
    expect(reducer(initialState, actions.setAllLiveEvents(events, true))).toMatchObject({
      ...mockState,
      allEvents: [{ eventId: 21249938 }],
      loading: true
    });
  });
});

describe('single event reducer case', () => {
  const event = { eventId: 21249938 };
  const mockState = {
    allEvents: [{ eventId: 21249938 }]
  };
  it('should handle setting event data ', () => {
    expect(reducer(mockState, actions.setEvent(event))).toMatchObject({
      ...mockState,
      allEvents: [{ eventId: 21249938 }]
    });
  });
  const mockEvent = { eventId: 21249938, name: 'Shania Twain vs Spice Girls', markets: [123, 456] };
  it('should handle updating event object if it already exists in state', () => {
    expect(reducer(mockState, actions.setEvent(mockEvent))).toMatchObject({
      ...mockState,
      allEvents: [{ eventId: 21249938, name: 'Shania Twain vs Spice Girls', markets: [123, 456] }]
    });
  });
});

describe('single market reducer case', () => {
  const mockState = {
    markets: [123, 456],
    loading: true
  };
  const mockMarkets = [789, 1011];
  it('should handle setting markets by overwriting existing and set loading to false', () => {
    expect(reducer(mockState, actions.setMarkets(mockMarkets))).toMatchObject({
      ...mockState,
      markets: [789, 1011],
      loading: false
    });
  });
});

describe('single outcome reducer case', () => {
  const mockState = {
    outcomes: [123, 456]
  };
  const mockOutcomes = [789, 1011];
  it('should handle setting outcomes by adding to existing ', () => {
    expect(reducer(mockState, actions.setOutcomes(mockOutcomes))).toMatchObject({
      ...mockState,
      outcomes: [123, 456, 789, 1011]
    });
  });
});

describe('set odds format reducer case', () => {
  const mockState = {
    oddsFormat: 'fraction'
  };
  const mockPayload = 'decimal';
  it('should handle setting odds format', () => {
    expect(reducer(mockState, actions.setOddsFormat(mockPayload))).toMatchObject({
      ...mockState,
      oddsFormat: mockPayload
    });
  });
});

describe('set loading status reducer case', () => {
  const mockState = {
    loading: true
  };
  const mockPayload = false;
  it('should handle setting loading state', () => {
    expect(reducer(mockState, actions.setLoadingStatus(mockPayload))).toMatchObject({
      ...mockState,
      loading: mockPayload
    });
  });
});

describe('set error reducer case', () => {
  const mockState = {
    error: null
  };
  const mockPayload = 'Error';
  it('should handle setting error message', () => {
    expect(reducer(mockState, actions.setError(mockPayload))).toMatchObject({
      ...mockState,
      error: mockPayload
    });
  });
});
