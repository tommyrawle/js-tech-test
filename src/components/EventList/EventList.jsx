import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { formatDateOrTime } from '../../redux/utils';
import Market from '../Market/Market.jsx';
import * as actions from '../../redux/actions';
import { getDisplayableEvents } from '../../redux/selectors';
import { getAllLiveEvents, getMarketDetails } from '../../redux/getters';
import BGImage from '../../assets/bg.jpg';
import Spinner from '../Spinner/Spinner.jsx';
import {
  EventListTableContainer,
  EventListHeader,
  EventListTable,
  EventListTableRow,
  EventListTableCell,
  EventLink,
  EventImage,
  EventListInput
} from './EventList.styles.jsx';

export const EventList = ({ events, loading, setMarkets, setAllLiveEvents, setLoadingStatus, setError }) => {
  const [primaryMarkets, setPrimaryMarketsOption] = useState(false);

  const getEventListData = async primaryMarkets => {
    setLoadingStatus(true);
    const events = await getAllLiveEvents(primaryMarkets);
    setAllLiveEvents(events, primaryMarkets);
    const primaryMarketIds = events.reduce((arrayOfMarketIds, event) => {
      if (event.markets) {
        return [...arrayOfMarketIds, ...event.markets];
      } else return arrayOfMarketIds;
    }, []);
    if (primaryMarketIds.length) {
      Promise.all(primaryMarketIds.map(async market => await getMarketDetails(market)))
        .then(marketData => {
          setMarkets(marketData);
        })
        .catch(() => {
          let history = useHistory();
          setError({ code: 400, message: 'Could not process request' });
          history.push('/error');
        });
    }
  };

  useEffect(() => {
    getEventListData(primaryMarkets);
  }, [primaryMarkets]);

  return (
    <div>
      <EventImage src={BGImage} alt="live event" />
      {!loading ? (
        <EventListTableContainer>
          <EventListHeader>
            <h3>Live Events</h3>
            <div>
              <label>Show primary markets</label>
              <EventListInput
                type="checkbox"
                checked={primaryMarkets}
                onChange={e => setPrimaryMarketsOption(e.target.checked)}
              />
            </div>
          </EventListHeader>
          <EventListTable>
            <tbody>
              {events.map((event, i) => {
                return (
                  <EventListTableRow key={i}>
                    <EventListTableCell timeColumn>{formatDateOrTime(event.startTime, 'time')}</EventListTableCell>
                    <EventListTableCell eventCell>
                      <EventLink to={`/event/${event.eventId}`}>{event.name}</EventLink>
                    </EventListTableCell>
                    {event.markets && (
                      <EventListTableCell marketColumn>
                        <Market marketId={event.markets[0]} getOutcome />
                      </EventListTableCell>
                    )}
                  </EventListTableRow>
                );
              })}
            </tbody>
          </EventListTable>
        </EventListTableContainer>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

EventList.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
  setAllLiveEvents: PropTypes.func,
  setMarkets: PropTypes.func,
  setLoadingStatus: PropTypes.func,
  setError: PropTypes.func
};
const mapStateToProps = state => ({
  events: getDisplayableEvents(state),
  loading: state.loading
});
const mapDispatchToProps = dispatch => ({
  setAllLiveEvents: (arrayOfEvents, stillLoading) => dispatch(actions.setAllLiveEvents(arrayOfEvents, stillLoading)),
  setMarkets: arrayOfMarkets => dispatch(actions.setMarkets(arrayOfMarkets)),
  setLoadingStatus: bool => dispatch(actions.setLoadingStatus(bool)),
  setError: error => dispatch(actions.setError(error))
});

export default connect(mapStateToProps, mapDispatchToProps)(EventList);
