// src/pages/Events.js
import React, { useEffect } from 'react';
import { events } from '../data/eventsData'; // Updated data structure

import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import InnerHeaderBanner from '../components/InnerHeaderBanner';
import InnerHeader from '../components/InnerHeader';
import Footer from '../components/Footer';
import abtHeader from '../img/about-header.jpg';
import EventCard from '../components/EventCard';

const Events = () => {
  // Initialize AOS for animations
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Add animation duration
    AOS.refresh();
  }, []);

  return (
    <>
      {/* Header Section */}
      <InnerHeader />
      <InnerHeaderBanner name="New Events" img={abtHeader} />

      {/* Events Section */}
      <div className="events-page">
        <h1 className="events-title" data-aos="fade-up">
          Explore Our Upcoming Events
        </h1>
        <div className="events-grid">
          {events.map((event) => (
            <EventCard 
              key={event.id} 
              event={event} 
              data-aos="fade-up" // Apply AOS animation
            />
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Events;
