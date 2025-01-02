// src/components/BlogCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
  return (
    <div className="blog-card">
      <img src={blog.image} alt={blog.title} />
      <div className="blog-info">
        <h3>{blog.title}</h3>
        <p><strong>Topic:</strong> {blog.topic}</p>
        <p><strong>Date:</strong> {blog.date}</p>
        <Link to={`/blogs/${blog.id}`} className="read-more">Read More</Link>
      </div>
    </div>
  );
};

export default BlogCard;
