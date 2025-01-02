import React from "react";
import NewsletterCard from "../components/NewsletterCard";
// import "../styles/newsletter.css";

import AOS from "aos";
import '../../node_modules/aos/dist/aos.css'
import about_img from '../img/about-image.jpg'
import InnerHeaderBanner from '../components/InnerHeaderBanner';
import InnerHeader from '../components/InnerHeader';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import abtHeader from '../img/about-header.jpg'
import { useEffect } from 'react';
import { newsletters } from '../data/newsletterData';


const NewsletterPage = () => {
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
    <InnerHeaderBanner name={"Our Newsletters"} img = {abtHeader}/>

    <div className="newsletter-page">
      
      <div className="newsletter-grid">
        {newsletters.map((newsletter, index) => (
          <NewsletterCard key={index} {...newsletter} />
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default NewsletterPage;
