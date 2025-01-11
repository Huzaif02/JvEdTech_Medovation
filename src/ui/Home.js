import React from "react";
import InnerHeader from "../components/InnerHeader";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import ClientList from "../components/ClientList";
import Facts from "../components/Facts";
import ServiceList from "../components/ServiceList";
import Revenue from "../components/Revenue";
import AOS from "aos";
import { useEffect } from 'react';
import Testimonial from "../components/Testimonial";


const Home = () => {
  useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
  return (
    <>
      <InnerHeader />
      <Carousel />
      <main id="main">
        <ServiceList/>
        <ClientList/>
        <Facts/>
        <Testimonial/>
        <Revenue/>
      </main>
      <Footer />
    </>
  );
};

export default Home;
