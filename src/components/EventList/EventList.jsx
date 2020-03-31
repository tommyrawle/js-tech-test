import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getLiveEvents } from '../../redux/utils';
import Market from '../Market/Market.jsx';
import { getDisplayableEvents } from '../../redux/selectors';
import { EventListTable, EventListTableRow, EventListTableCell, EventLink } from './EventList.styles.jsx';

const EventList = ({ events }) => {
  useEffect(() => {
    getLiveEvents(false);
  }, []);

  return (
    <div>
      <label>Show primary market</label>
      <input type="checkbox" onClick={e => getLiveEvents(e.target.checked)} />
      <EventListTable>
        {events.map((event, i) => {
          return (
            <EventListTableRow key={i}>
              <EventListTableCell>{i + 1}</EventListTableCell>
              <EventListTableCell>
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
      </EventListTable>
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
