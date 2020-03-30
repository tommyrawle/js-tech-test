import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getLiveEvents } from '../../redux/utils';
import Market from '../Market/Market.jsx';
import { Link } from 'react-router-dom';
import { getDisplayableEvents } from '../../redux/selectors';

const EventList = ({ events }) => {
  useEffect(() => {
    getLiveEvents(false);
  }, []);

  return (
    <div>
      <label>Show primary market</label>
      <input type="checkbox" onClick={e => getLiveEvents(e.target.checked)} />
      {events.map((event, i) => {
        return (
          <div key={i}>
            <Link to={`/${event.eventId}`}>{event.name}</Link>
            {event.markets && <Market marketId={event.markets[0]} getOutcome />}
          </div>
        );
      })}
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
