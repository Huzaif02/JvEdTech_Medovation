// src/components/BlogCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
  return (
    <div className="blog-card">
      {/* Blog Image */}
      <div className="blog-image-container">
        <img 
          src={blog.image} 
          alt={blog.title} 
          className="blog-image" 
          loading="lazy" // Improves performance by lazy-loading images
        />
      </div>

      {/* Blog Info */}
      <div className="blog-info">
        <h3 className="blog-title">{blog.title}</h3>
        <p className="blog-topic">
          <strong>Topic:</strong> {blog.topic}
        </p>
        <p className="blog-date">
          <strong>Date:</strong> {blog.date}
        </p>

        {/* Blog Summary */}
        <p className="blog-summary">{blog.summary}</p>

        {/* Read More Button */}
        <Link to={`/blogs/${blog.id}`} className="read-more-btn">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
