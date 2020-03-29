import * as actionTypes from './types';

export const initialiseApp = data => ({
  type: actionTypes[data.type],
  payload: data.data
});
