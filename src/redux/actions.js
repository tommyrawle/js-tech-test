import * as actionTypes from './types';

export const setData = data => ({
  type: actionTypes[data.type],
  payload: data.data
});

export const setOddsFormat = value => ({
  type: actionTypes.SET_ODDS_FORMAT,
  payload: value
});
