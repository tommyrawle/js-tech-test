import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getLiveEvents } from '../../redux/utils';

const Event = ({ events }) => {
  useEffect(() => {
    getLiveEvents();
  }, []);

  return (
    <div>
      {events.map((event, i) => {
        return (
          <div key={i}>
            <p>{event.name}</p>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = state => ({
  loading: state.isLoading,
  events: state.liveEvents
});

Event.propTypes = {
  loading: PropTypes.bool,
  events: PropTypes.arrayOf(PropTypes.object)
};

export default connect(mapStateToProps)(Event);
