// src/pages/Blogs.js
import React from 'react';
import { blogs } from '../data/blogsData';
import BlogCard from '../components/BlogCard';

import AOS from "aos";
import '../../node_modules/aos/dist/aos.css'
import about_img from '../img/about-image.jpg'
import InnerHeaderBanner from '../components/InnerHeaderBanner';
import InnerHeader from '../components/InnerHeader';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import abtHeader from '../img/about-header.jpg'
import { useEffect } from 'react';

const Blogs = () => {
    useEffect(() => {
          AOS.init();
          AOS.refresh();
        }, []);
        
        const images = require.context('../img/team/', false, /\.(png|jpe?g|svg)$/);
    
        const imagePaths = images.keys().reduce((paths, path) => {
          const imageName = path.replace('./', ''); // Remove './' from the key
          paths[imageName] = images(path); // Add the image to the object
          return paths;
        }, {});

  return (
    <>
        <InnerHeader />
        <InnerHeaderBanner name={"Our Blogs"} img = {abtHeader}/>

        <div className="blogs-page">
        <div className="blogs-grid">
            {blogs.map(blog => (
            <BlogCard key={blog.id} blog={blog} />
            ))}
        </div>
    </div>
    <Footer/>
    </>
  );
};

export default Blogs;
