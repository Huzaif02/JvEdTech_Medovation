// src/pages/Blogs.js
import React from 'react';
import { workshops } from '../data/workshopData';

import AOS from "aos";
import '../../node_modules/aos/dist/aos.css'
import InnerHeaderBanner from '../components/InnerHeaderBanner';
import InnerHeader from '../components/InnerHeader';
import Footer from '../components/Footer';
import abtHeader from '../img/about-header.jpg'
import { useEffect } from 'react';
import WebinarCard from '../components/WebinarCard';

const Workshops = () => {
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
        <InnerHeaderBanner name={"Our Webinars"} img = {abtHeader}/>

        <div className="blogs-page">
        <div className="blogs-grid">
            {workshops.map(workshop => (
            <WebinarCard key={workshop.id} webinar={workshop} />
            ))}
        </div>
        </div>
        <Footer/>
    </>
  );
};

export default Workshops;