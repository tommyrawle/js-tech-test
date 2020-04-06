import React from 'react';
import { shallow } from 'enzyme';
import { Event } from './Event.jsx';
import '@babel/polyfill';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    eventId: '21249939'
  })
}));

describe('Event component', () => {
  it('should render Event component', () => {
    const mockProps = {
      events: [
        {
          eventId: 21249939,
          name: 'Shanghai Shenhua 0 v 0 Shandong Luneng Taishan',
          typeName: 'Football Live',
          linkedEventTypeName: 'Chinese Super League',
          startTime: '2017-09-19T11:35:23.000Z',
          scores: { home: 0, away: 0 },
          competitors: [
            { name: 'Shanghai Shenhua', position: 'home' },
            { name: 'Shandong Luneng Taishan', position: 'away' }
          ],
          status: {
            live: true,
            displayable: true
          }
        }
      ],
      loading: false,
      setEvent: jest.fn(),
      setMarkets: jest.fn(),
      sortedMarketIds: [123],
      setLoadingStatus: jest.fn(),
      eventId: 21249939
    };
    const wrapper = shallow(<Event {...mockProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});
