import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { getEventDetails, getMarketDetails, formatDateOrTime } from '../../redux/utils';
import { getDisplayableEvents, getDisplayableMarkets } from '../../redux/selectors';
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

const Event = ({ events, markets }) => {
  const eventId = parseInt(useParams().eventId);
  const event = events.find(event => event.eventId === eventId);
  useEffect(() => {
    if (!event || (event && !event.markets)) {
      getEventDetails(eventId);
    } else {
      event.markets.forEach(market => getMarketDetails(market));
    }
  }, [events]);

  const sortedMarkets = arrayOfMarketIds => {
    const sortedMarkets = markets.sort((a, b) => {
      return a.displayOrder - b.displayOrder || a.name > b.name ? 1 : -1;
    });
    return sortedMarkets.reduce((sortedArrayOfIds, marketObject) => {
      if (arrayOfMarketIds.includes(marketObject.marketId)) {
        sortedArrayOfIds.push(marketObject.marketId);
      }
      return sortedArrayOfIds;
    }, []);
  };

  if (event) {
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
          {event &&
            event.markets &&
            sortedMarkets(event.markets).map((marketId, index) => (
              <Market key={index} getOutcome={index < 10} marketId={marketId} />
            ))}
        </EventMarkets>
      </div>
    );
  } else return <h2>...loading</h2>;
};

Event.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object),
  markets: PropTypes.arrayOf(PropTypes.object)
};

const mapStateToProps = state => ({
  events: getDisplayableEvents(state),
  markets: getDisplayableMarkets(state)
});

export default connect(mapStateToProps)(Event);
