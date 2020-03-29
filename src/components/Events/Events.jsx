import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getLiveEvents } from '../../redux/utils';
import Market from '../Market/Market.jsx';

const Event = ({ events }) => {
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
            <p>{event.name}</p>
            {event.markets && <Market marketId={event.markets[0]} />}
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = state => ({
  events: state.liveEvents
});

Event.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object)
};

export default connect(mapStateToProps)(Event);
