import React from 'react';
import { shallow } from 'enzyme';
import { EventList } from './EventList.jsx';
import '@babel/polyfill';
describe('EventList component', () => {
  it('should render EventList component', () => {
    const mockProps = {
      events: [
        {
          eventId: 21249939,
          name: 'Shanghai Shenhua 0 v 0 Shandong Luneng Taishan',
          displayOrder: -1000,
          startTime: '2017-09-19T11:35:23.000Z'
        }
      ],
      loading: false,
      setMarkets: jest.fn(),
      setAllLiveEvents: jest.fn(),
      setLoadingStatus: jest.fn()
    };
    expect(shallow(<EventList {...mockProps} />)).toMatchSnapshot();
  });
});
