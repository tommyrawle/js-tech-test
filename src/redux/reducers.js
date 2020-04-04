import * as actionTypes from './types';

const initialState = {
  allEvents: [],
  marketDetails: [],
  outcomeDetails: [],
  oddsFormat: 'fraction',
  loading: true,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_ALL_LIVE_EVENTS: {
      return {
        ...state,
        allEvents: action.payload.events,
        loading: action.payload.loadingStatus
      };
    }
    case actionTypes.SET_EVENT: {
      const updatedEvents = [...state.allEvents];
      const index = updatedEvents.findIndex(event => event.eventId === action.payload.eventId);
      updatedEvents.splice(index, 1, action.payload);
      return {
        ...state,
        allEvents: updatedEvents
      };
    }

    case actionTypes.SET_MARKETS: {
      console.log(action.payload);
      return {
        ...state,
        marketDetails: action.payload,
        loading: false
      };
    }
    case actionTypes.SET_OUTCOMES: {
      return {
        ...state,
        outcomeDetails: [...state.outcomeDetails, ...action.payload]
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
    case actionTypes.ERROR: {
      return {
        ...state,
        error: action.payload
      };
    }
    default:
      return state;
  }
};
