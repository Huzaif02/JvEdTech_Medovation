// src/pages/Blogs.js
import React from 'react';
import { campaigns } from '../data/campaignData';

import AOS from "aos";
import '../../node_modules/aos/dist/aos.css'
import InnerHeaderBanner from '../components/InnerHeaderBanner';
import InnerHeader from '../components/InnerHeader';
import Footer from '../components/Footer';
import abtHeader from '../img/about-header.jpg'
import { useEffect } from 'react';
import CampaignCard from '../components/CampaignCard';

const Campaigns = () => {
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
        <InnerHeaderBanner name={"Our Campaigns"} img = {abtHeader}/>

        <div className="blogs-page">
        <div className="blogs-grid">
            {campaigns.map(campaign => (
            <CampaignCard key={campaign.id} campaign={campaign} />
            ))}
        </div>
    </div>
    <Footer/>
    </>
  );
};

export default Campaigns;
