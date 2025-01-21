// src/components/EventCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const EventCard = ({ event }) => {
  return (
    <div className="event-card-container">
      {/* Event Image */}
      <div className="event-card-image-wrapper">
        <img 
          src={event.image} 
          alt={event.title} 
          className="event-card-image" 
          loading="lazy"
        />
      </div>

      {/* Event Info */}
      <div className="event-card-content">
        <h3 className="event-card-title">{event.title}</h3>
        <p className="event-card-topic">
          <strong>Topic:</strong> {event.topic}
        </p>
        <p className="event-card-date">
          <strong>Date:</strong> {event.date}
        </p>
        <p className="event-card-summary">{event.summary}</p>
        <Link to={`/upcoming-events/${event.id}`} className="event-card-button">
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
