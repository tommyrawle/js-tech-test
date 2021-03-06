import { createSelector } from 'reselect';

const getAllEvents = state => state.allEvents;
const getAllMarkets = state => state.markets;
const getAllOutcomes = state => state.outcomes;

export const getDisplayableEvents = createSelector([getAllEvents], events => {
  return events.filter(event => event.status.displayable);
});
export const getDisplayableMarkets = createSelector([getAllMarkets], markets => {
  return markets.filter(market => market.status.displayable);
});
export const getSortedMarketIds = createSelector([getDisplayableMarkets], displayableMarkets => {
  return displayableMarkets
    .sort((a, b) => {
      if (a.displayOrder > b.displayOrder) return 1;
      if (a.displayOrder < b.displayOrder) return -1;
      if (a.name > b.name) return 1;
      if (a.name < b.name) return -1;
    })
    .reduce((accumulatedIDs, market) => {
      return [...accumulatedIDs, market.marketId];
    }, []);
});
export const getDisplayableOutcomes = createSelector([getAllOutcomes], outcomes => {
  return outcomes.filter(outcome => outcome.status.displayable);
});
