import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getLiveEvents } from '../../redux/utils';
import Market from '../Market/Market.jsx';
import { getDisplayableEvents } from '../../redux/selectors';
import EventListImage from './eventList.jpg';
import {
  EventListTableContainer,
  EventListTable,
  EventListTableRow,
  EventListTableCell,
  EventLink,
  EventImage
} from './EventList.styles.jsx';

const EventList = ({ events }) => {
  useEffect(() => {
    getLiveEvents(true);
  }, []);

  return (
    <div>
      <EventImage src={EventListImage} alt="live event" />
      <EventListTableContainer>
        <EventListTable>
          <tbody>
            {events.map((event, i) => {
              return (
                <EventListTableRow key={i}>
                  <EventListTableCell>{i + 1}</EventListTableCell>
                  <EventListTableCell eventCell>
                    <EventLink to={`/${event.eventId}`}>{event.name}</EventLink>
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
};

const mapStateToProps = state => ({
  events: getDisplayableEvents(state)
});

EventList.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object)
};

export default connect(mapStateToProps)(EventList);
