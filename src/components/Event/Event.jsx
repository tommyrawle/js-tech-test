import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { getEventDetails, getMarketDetails } from '../../redux/utils';
import { getDisplayableEvents, getDisplayableMarkets } from '../../redux/selectors';
import { EventMarkets } from './Event.styles.jsx';
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
    return (
      <div>
        <div>{JSON.stringify(event)}</div>
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
