import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

const Event = ({ events }) => {
  const { eventId } = useParams();
  const event = events.find(event => event.eventId == eventId);
  return <div>{JSON.stringify(event)}</div>;
};

Event.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object)
};

const mapStateToProps = state => ({
  events: state.liveEvents
});
export default connect(mapStateToProps)(Event);
