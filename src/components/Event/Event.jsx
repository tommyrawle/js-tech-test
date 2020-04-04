import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import { formatDateOrTime } from '../../redux/utils';
import { getEventDetails, getMarketDetails } from '../../redux/getters';
import { getDisplayableEvents, getSortedMarketIds } from '../../redux/selectors';
import Spinner from '../Spinner/Spinner.jsx';

import {
  EventMarkets,
  EventDetailsBlock,
  EventDetailsTeam,
  EventDetailsPosition,
  EventDetailsTeamName,
  EventDetailsScore,
  SecondaryDetailsBlock,
  DetailsEventType,
  DetailsEventDate,
  LiveIndicator
} from './Event.styles.jsx';
import Market from '../Market/Market.jsx';

const Event = ({ events, loading, setEvent, setMarkets, sortedMarketIds, setLoadingStatus }) => {
  const eventId = parseInt(useParams().eventId);

  const getEventPageData = async eventId => {
    setLoadingStatus(true);
    const event = await getEventDetails(eventId);
    setEvent(event);
    Promise.all(event.markets.map(async market => await getMarketDetails(market))).then(marketData => {
      setMarkets(marketData);
    });
  };

  useEffect(() => {
    getEventPageData(eventId);
  }, []);

  if (loading) return <Spinner />;
  else {
    const event = events.find(event => event.eventId === eventId);
    let teams = new Object();
    event.competitors.forEach(team => {
      teams[team.position] = team.name;
    });

    return (
      <div>
        <EventDetailsBlock>
          <EventDetailsTeam alignment={'right'}>
            <EventDetailsPosition>Home</EventDetailsPosition>
            <EventDetailsTeamName>{teams.home}</EventDetailsTeamName>
            <EventDetailsScore>{event.scores.home}</EventDetailsScore>
          </EventDetailsTeam>
          <EventDetailsTeam alignment={'left'}>
            <EventDetailsPosition>Away</EventDetailsPosition>
            <EventDetailsTeamName>{teams.away}</EventDetailsTeamName>
            <EventDetailsScore>{event.scores.away}</EventDetailsScore>
          </EventDetailsTeam>
        </EventDetailsBlock>

        <SecondaryDetailsBlock>
          <DetailsEventType>
            {event.linkedEventTypeName ? `${event.linkedEventTypeName} / ${event.typeName}` : event.typeName}
          </DetailsEventType>
          <DetailsEventDate>
            {formatDateOrTime(event.startTime, 'date')} | {formatDateOrTime(event.startTime, 'time')}
            {event.status.live && <LiveIndicator />}
          </DetailsEventDate>
        </SecondaryDetailsBlock>

        <EventMarkets>
          {sortedMarketIds.map((marketId, index) => {
            return <Market key={index} marketId={marketId} outcomeOpen={index < 10} />;
          })}
        </EventMarkets>
      </div>
    );
  }
};

Event.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object),
  markets: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool
};

const mapStateToProps = state => ({
  events: getDisplayableEvents(state),
  sortedMarketIds: getSortedMarketIds(state),
  loading: state.loading
});

const mapDispatchToProps = dispatch => ({
  setEvent: eventObject => dispatch(actions.setEvent(eventObject)),
  setMarkets: arrayOfMarkets => dispatch(actions.setMarkets(arrayOfMarkets)),
  setLoadingStatus: bool => dispatch(actions.setLoadingStatus(bool))
});

export default connect(mapStateToProps, mapDispatchToProps)(Event);
