// src/pages/Blogs.js
import React, { useEffect } from 'react';
import { blogs } from '../data/blogsData'; // Updated data structure
import BlogCard from '../components/BlogCard';

import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import InnerHeaderBanner from '../components/InnerHeaderBanner';
import InnerHeader from '../components/InnerHeader';
import Footer from '../components/Footer';
import abtHeader from '../img/about-header.jpg';

const Blogs = () => {
  // Initialize AOS for animations
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Add animation duration
    AOS.refresh();
  }, []);

  return (
    <>
      {/* Header Section */}
      <InnerHeader />
      <InnerHeaderBanner name="Our Blogs" img={abtHeader} />

      {/* Blogs Section */}
      <div className="blogs-page">
        <div className="blogs-grid">
          {blogs.map((blog) => (
            <BlogCard 
              key={blog.id} 
              blog={blog} 
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

export default Blogs;
