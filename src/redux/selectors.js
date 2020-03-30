import { createSelector } from 'reselect';

const getAllEvents = state => state.liveEvents;
const getAllMarkets = state => state.marketDetails;
const getAllOutcomes = state => state.outcomeDetails;

export const getDisplayableEvents = createSelector([getAllEvents], events => {
  return events.filter(event => event.status.displayable);
});

export const getDisplayableMarkets = createSelector([getAllMarkets], markets => {
  return markets.filter(market => market.status.displayable);
});

export const getDisplayableOutcomes = createSelector([getAllOutcomes], outcomes => {
  return outcomes.filter(outcome => outcome.status.displayable);
});
