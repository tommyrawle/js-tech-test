import * as actions from './actions';
import * as actionTypes from './types';

describe('set all live events action', () => {
  it('should create an action to set all the live events', () => {
    const arrayOfEvents = [{ id: 123, name: 'Radiohead vs Placebo' }];
    const expectedAction = {
      type: actionTypes.SET_ALL_LIVE_EVENTS,
      payload: arrayOfEvents
    };
    expect(actions.setAllLiveEvents(arrayOfEvents)).toEqual(expectedAction);
  });
});

describe('set event action', () => {
  it('should create an action to set a single event', () => {
    const eventObject = { id: 123, name: 'Radiohead vs Placebo' };
    const expectedAction = {
      type: actionTypes.SET_EVENT,
      payload: eventObject
    };
    expect(actions.setEvent(eventObject)).toEqual(expectedAction);
  });
});

describe('set markets action', () => {
  it('should create an action to set an array of markets', () => {
    const arrayOfMarkets = [123, 456];
    const expectedAction = {
      type: actionTypes.SET_MARKETS,
      payload: arrayOfMarkets
    };
    expect(actions.setMarkets(arrayOfMarkets)).toEqual(expectedAction);
  });
});

describe('set outcomes action', () => {
  it('should create an action to set an array of outcomes', () => {
    const arrayOfOutcomes = [123, 456];
    const expectedAction = {
      type: actionTypes.SET_OUTCOMES,
      payload: arrayOfOutcomes
    };
    expect(actions.setOutcomes(arrayOfOutcomes)).toEqual(expectedAction);
  });
});

describe('set odds format action', () => {
  it('should create an action to set the odds format', () => {
    const format = 'fraction';
    const expectedAction = {
      type: actionTypes.SET_ODDS_FORMAT,
      payload: format
    };
    expect(actions.setOddsFormat(format)).toEqual(expectedAction);
  });
});

describe('set loading status action', () => {
  it('should create an action to set the loading state status', () => {
    const isLoading = true;
    const expectedAction = {
      type: actionTypes.SET_LOADING_STATUS,
      payload: isLoading
    };
    expect(actions.setLoadingStatus(isLoading)).toEqual(expectedAction);
  });
});
describe('set error action', () => {
  it('should create an action to set the odds format', () => {
    const error = 'Error';
    const expectedAction = {
      type: actionTypes.SET_ERROR,
      payload: error
    };
    expect(actions.setError(error)).toEqual(expectedAction);
  });
});
