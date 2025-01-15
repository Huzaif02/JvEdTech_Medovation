// src/components/BlogCard.js
import React from 'react';

const CampaignCard = ({ campaign }) => {
  return (
    <div className="blog-card">
      <img src={campaign.image} alt={campaign.title} />
      <div className="blog-info">
        <h3>{campaign.title}</h3>
        {/* <p><strong>Date:</strong> {campaign.date}</p> */}
        <p> {campaign.content}</p>
      </div>
    </div>
  );
};

export default CampaignCard;
