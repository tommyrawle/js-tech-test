import * as actionTypes from './types';

const initialState = {
  liveEvents: [],
  marketDetails: [],
  outcomeDetails: [],
  oddsFormat: 'fraction',
  loading: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LIVE_EVENTS_DATA: {
      return {
        ...state,
        liveEvents: action.payload
      };
    }
    case actionTypes.EVENT_DATA: {
      const updatedLiveEvents = [...state.liveEvents];
      const index = updatedLiveEvents.findIndex(event => event.eventId === action.payload.eventId);
      updatedLiveEvents.splice(index, 1, action.payload);
      return {
        ...state,
        liveEvents: updatedLiveEvents
      };
    }
    case actionTypes.MARKET_DATA: {
      return {
        ...state,
        marketDetails: [...state.marketDetails, action.payload],
        loading: false
      };
    }
    case actionTypes.OUTCOME_DATA: {
      return {
        ...state,
        outcomeDetails: [...state.outcomeDetails, action.payload]
      };
    }
    case actionTypes.SET_ODDS_FORMAT: {
      return {
        ...state,
        oddsFormat: action.payload
      };
    }
    case actionTypes.SET_LOADING_STATUS: {
      return {
        ...state,
        loading: action.payload
      };
    }

    default:
      return state;
  }
};
// 1: "LIVE_EVENTS_DATA"
// 2: "EVENT_DATA"
// 3: "MARKET_DATA"
// 4: "OUTCOME_DATA"
// 5: "PRICE_CHANGE"
// 6: "MARKET_STATUS"
// 7: "OUTCOME_STATUS"
// 8: "ERROR
