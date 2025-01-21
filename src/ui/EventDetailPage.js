// src/pages/EventDetailPage.js
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { events } from '../data/eventsData';

import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import InnerHeaderBanner from '../components/InnerHeaderBanner';
import InnerHeader from '../components/InnerHeader';
import Footer from '../components/Footer';
import abtHeader from '../img/about-header.jpg';

import RedirectButton from '../components/common/RedirectButton';

const EventDetailPage = () => {
  const { id } = useParams();
  const event = events.find((b) => b.id === parseInt(id));

  // Initialize AOS for animations
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Set animation duration
    AOS.refresh();
  }, []);

  // Handle missing event case
  if (!event) {
    return (
      <div className="event-not-found">
        <h2>Event not found</h2>
        <p>The event you are looking for does not exist.</p>
        <a href="/upcoming-events" className="event-back-link">
          Back to Events
        </a>
      </div>
    );
  }

  return (
    <>
      {/* Header Section */}
      <InnerHeader />
      <InnerHeaderBanner name="New Events" img={abtHeader} />

      {/* Event Content Section */}
      <div className="event-detail-page">
        <h1 className="event-title" data-aos="fade-up">{event.title}</h1>
        <img
          src={event.image}
          alt={event.title}
          className="event-detail-image"
          data-aos="fade-up"
        />
        <p className="event-meta">
          <strong>Published On:</strong> {event.date}
        </p>
        <p className="event-meta">
          <strong>Topic:</strong> {event.topic}
        </p>

        {/* Event Content */}
        <div className="event-content">
          {event.content.map((section, index) => {
            if (section.type === 'text') {
              return (
                <p key={index} className="event-text" data-aos="fade-up">
                  {section.data}
                </p>
              );
            } else if (section.type === "image") {
              return (
                <div
                  className="event-content-image"
                  data-aos="fade-up"
                  key={index}
                >
                  <img
                    src={section.data}
                    alt={section.caption}
                    className="event-inner-image"
                  />
                  <p className="event-caption">{section.caption}</p>
                </div>
              );
            } else if (section.type === "link") {
              return (
                <div className="event-link-wrapper" key={index} data-aos="fade-up">
                  <RedirectButton
                    link={section.data}
                    text={section.caption || "Register Now"}
                    style={{ backgroundColor: '#28a745' }}
                  />
                </div>
              );
            }
            return null;
          })}
        </div>

        {/* Event Highlights */}
        <div className="event-highlights">
          <h3 className="highlights-title" data-aos="fade-up">Key Highlights</h3>
          <ul className="highlights-list">
            {event.glimpses.map((glimpse, index) => (
              <li key={index} className="highlight-item" data-aos="fade-up">
                {glimpse}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default EventDetailPage;
