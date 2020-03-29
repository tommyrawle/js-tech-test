import * as actionTypes from './types';

const initialState = {
  liveEvents: [],
  marketDetails: [],
  outcomeDetails: [],
  priceFormat: 'dec'
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LIVE_EVENTS_DATA: {
      return {
        ...state,
        liveEvents: action.payload.sort((a, b) => a.displayOrder - b.displayOrder)
      };
    }
    case actionTypes.MARKET_DATA: {
      return {
        ...state,
        marketDetails: [...state.marketDetails, action.payload]
      };
    }
    case actionTypes.OUTCOME_DATA: {
      return {
        ...state,
        outcomeDetails: [...state.outcomeDetails, action.payload]
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
