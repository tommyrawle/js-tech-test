import { getDisplayableEvents, getDisplayableMarkets, getSortedMarketIds, getDisplayableOutcomes } from './selectors';

describe('getDisplayableEvents', () => {
  it('should return only the displayable events', () => {
    let state = [{ eventId: 123, status: { displayable: false } }];
    let state2 = [
      { eventId: 456, status: { displayable: true } },
      { eventId: 123, status: { displayable: false } }
    ];
    expect(getDisplayableEvents.resultFunc([])).toEqual([]);
    expect(getDisplayableEvents.resultFunc(state)).toEqual([]);
    expect(getDisplayableEvents.resultFunc(state2)).toEqual([{ eventId: 456, status: { displayable: true } }]);
  });
});

describe('getDisplayableMarkets', () => {
  it('should return only the displayable markets', () => {
    let state = [{ marketId: 123, status: { displayable: false } }];
    let state2 = [
      { marketId: 456, status: { displayable: true } },
      { marketId: 123, status: { displayable: false } }
    ];
    expect(getDisplayableMarkets.resultFunc([])).toEqual([]);
    expect(getDisplayableMarkets.resultFunc(state)).toEqual([]);
    expect(getDisplayableMarkets.resultFunc(state2)).toEqual([{ marketId: 456, status: { displayable: true } }]);
  });
});

describe('getSortedMarketIds', () => {
  it('should return displayable marketIds, sorted first by display order (asc) and then alphabetically', () => {
    let state = [
      { marketId: 123, displayOrder: 2, name: 'banana' },
      { marketId: 234, displayOrder: 1, name: 'apple' }
    ];
    let state2 = [
      { marketId: 123, displayOrder: 2, name: 'banana' },
      { marketId: 234, displayOrder: 1, name: 'apple' },
      { marketId: 345, displayOrder: 2, name: 'alpaca' }
    ];
    expect(getSortedMarketIds.resultFunc([])).toEqual([]);
    expect(getSortedMarketIds.resultFunc(state)).toEqual([234, 123]);
    expect(getSortedMarketIds.resultFunc(state2)).toEqual([234, 345, 123]);
  });
});

describe('getDisplayableOutcomes', () => {
  it('should return only the displayable outcomes', () => {
    let state = [{ outcomeId: 123, status: { displayable: false } }];
    let state2 = [
      { outcomeId: 456, status: { displayable: true } },
      { outcomeId: 123, status: { displayable: false } }
    ];
    expect(getDisplayableOutcomes.resultFunc([])).toEqual([]);
    expect(getDisplayableOutcomes.resultFunc(state)).toEqual([]);
    expect(getDisplayableOutcomes.resultFunc(state2)).toEqual([{ outcomeId: 456, status: { displayable: true } }]);
  });
});
