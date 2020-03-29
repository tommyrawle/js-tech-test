import * as actionTypes from './types';

export const setData = data => ({
  type: actionTypes[data.type],
  payload: data.data
});
