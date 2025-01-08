// src/components/BlogCard.js
import React from 'react';

const WebinarCard = ({ webinar }) => {
  return (
    <div className="blog-card">
      <img src={webinar.image} alt={webinar.title} />
      <div className="blog-info">
        <h3>{webinar.title}</h3>
        <p><strong>Date:</strong> {webinar.date}</p>
        <p> {webinar.content}</p>
      </div>
    </div>
  );
};

export default WebinarCard;
