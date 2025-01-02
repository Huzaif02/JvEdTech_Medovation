// src/pages/BlogDetailPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { blogs } from '../data/blogsData';

import AOS from "aos";
import '../../node_modules/aos/dist/aos.css'
import about_img from '../img/about-image.jpg'
import InnerHeaderBanner from '../components/InnerHeaderBanner';
import InnerHeader from '../components/InnerHeader';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import abtHeader from '../img/about-header.jpg'
import { useEffect } from 'react';

const BlogDetailPage = () => {
  const { id } = useParams();
  const blog = blogs.find(b => b.id === parseInt(id));

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
    
  if (!blog) {
    return <h2>Blog not found</h2>;
  }

  return (

    <>
    
    <InnerHeader />
    <InnerHeaderBanner name={"Our Blogs"} img = {abtHeader}/>

    <div className="blog-detail-page">
      <h1>{blog.title}</h1>
      <img src={blog.image} alt={blog.title} />
      <p><strong>Published On:</strong> {blog.date}</p>
      <p><strong>Topic:</strong> {blog.topic}</p>
      <div className="content">
        <p>{blog.content}</p>
      </div>
      <div className="glimpses">
        <h3>Key Highlights</h3>
        <ul>
          {blog.glimpses.map((glimpse, index) => (
            <li key={index}>{glimpse}</li>
          ))}
        </ul>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default BlogDetailPage;
