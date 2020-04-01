import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getLiveEvents, formatDateOrTime } from '../../redux/utils';
import Market from '../Market/Market.jsx';
import { getDisplayableEvents } from '../../redux/selectors';
import BGImage from '../../assets/bg.jpg';
import {
  EventListTableContainer,
  EventListTable,
  EventListTableRow,
  EventListTableCell,
  EventLink,
  EventImage
} from './EventList.styles.jsx';

const EventList = ({ events, loading }) => {
  useEffect(() => {
    getLiveEvents(false);
  }, []);

  if (!loading) {
    return (
      <div>
        <EventImage src={BGImage} alt="live event" />
        <EventListTableContainer>
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
                      <EventListTableCell>
                        <Market marketId={event.markets[0]} getOutcome />
                      </EventListTableCell>
                    )}
                  </EventListTableRow>
                );
              })}
            </tbody>
          </EventListTable>
        </EventListTableContainer>
      </div>
    );
  } else return <h1>...loading</h1>;
};

const mapStateToProps = state => ({
  events: getDisplayableEvents(state),
  loading: state.loading
});

EventList.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool
};

export default connect(mapStateToProps)(EventList);
