import React from "react";

const NewsletterCard = ({ title, image, date, downloadLink }) => {
  return (
    <div className="newsletter-card">
      <img src={image} alt={title} className="newsletter-image" />
      <div className="newsletter-content">
        <h3>{title}</h3>
        <p>{date}</p>
        <div className="newsletter-actions">
          <a href={downloadLink} target="_blank" rel="noopener noreferrer" className="btn">
            View PDF
          </a>
          <a href={downloadLink} download className="btn">
            Download
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsletterCard;
