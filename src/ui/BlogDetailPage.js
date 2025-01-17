// src/pages/BlogDetailPage.js
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { blogs } from '../data/blogsData';

import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import InnerHeaderBanner from '../components/InnerHeaderBanner';
import InnerHeader from '../components/InnerHeader';
import Footer from '../components/Footer';
import abtHeader from '../img/about-header.jpg';

const BlogDetailPage = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));

  // Initialize AOS for animations
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Set animation duration
    AOS.refresh();
  }, []);

  // Handle missing blog case
  if (!blog) {
    return (
      <div className="not-found">
        <h2>Blog not found</h2>
        <p>The blog you are looking for does not exist.</p>
        <a href="/blogs" className="back-link">
          Back to Blogs
        </a>
      </div>
    );
  }

  return (
    <>
      {/* Header Section */}
      <InnerHeader />
      <InnerHeaderBanner name="Our Blogs" img={abtHeader} />

      {/* Blog Content Section */}
      <div className="blog-detail-page">
        <h1 data-aos="fade-up">{blog.title}</h1>
        <img
          src={blog.image}
          alt={blog.title}
          className="blog-detail-image"
          data-aos="fade-up"
        />
        <p>
          <strong>Published On:</strong> {blog.date}
        </p>
        <p>
          <strong>Topic:</strong> {blog.topic}
        </p>

        {/* Blog Content */}
        <div className="content">
          {blog.content.map((section, index) => {
            if (section.type === 'text') {
              return (
                <p key={index} data-aos="fade-up">
                  {section.data}
                </p>
              );
            } else if (section.type === 'image') {
              return (
                <div className="content-image" data-aos="fade-up" key={index}>
                  <img src={section.data} alt={section.caption} />
                  <p className="image-caption">{section.caption}</p>
                </div>
              );
            }
            return null;
          })}
        </div>

        {/* Blog Highlights */}
        <div className="glimpses">
          <h3 data-aos="fade-up">Key Highlights</h3>
          <ul>
            {blog.glimpses.map((glimpse, index) => (
              <li key={index} data-aos="fade-up">
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

export default BlogDetailPage;
