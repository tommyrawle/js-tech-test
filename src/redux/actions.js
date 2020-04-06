import * as actionTypes from './types';

export const setAllLiveEvents = arrayOfEvents => ({
  type: actionTypes.SET_ALL_LIVE_EVENTS,
  payload: arrayOfEvents
});
export const setEvent = eventObject => ({
  type: actionTypes.SET_EVENT,
  payload: eventObject
});
export const setMarkets = arrayOfMarkets => ({
  type: actionTypes.SET_MARKETS,
  payload: arrayOfMarkets
});
export const setOutcomes = arrayOfOutcomes => ({
  type: actionTypes.SET_OUTCOMES,
  payload: arrayOfOutcomes
});
export const setOddsFormat = value => ({
  type: actionTypes.SET_ODDS_FORMAT,
  payload: value
});
export const setLoadingStatus = bool => ({
  type: actionTypes.SET_LOADING_STATUS,
  payload: bool
});
export const setError = errorEvent => ({
  type: actionTypes.SET_ERROR,
  payload: errorEvent
});
