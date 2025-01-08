// src/pages/ReturnPolicy.js
import React, { useEffect } from 'react';
import AOS from "aos";
import '../../node_modules/aos/dist/aos.css';
import InnerHeaderBanner from '../components/InnerHeaderBanner';
import InnerHeader from '../components/InnerHeader';
import Footer from '../components/Footer';
// import returnHeader from '../img/about-header.jpg'; // Replace with the appropriate header image

const ReturnPolicy = () => {
  
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <InnerHeader />
      <InnerHeaderBanner name={"Return Policy"} />
      
      <div className="return-policy-page container" style={{ padding: '2rem' }}>
        <h1 data-aos="fade-up">Return and Exchange Policy</h1>
        <p data-aos="fade-up">
          We offer refund/exchange within the first <strong>7 days</strong> from the date of your purchase. 
          If <strong>7 days</strong> have passed since your purchase, you will not be offered a return, exchange, 
          or refund of any kind.
        </p>

        <h2 data-aos="fade-up" style={{ marginTop: '1.5rem' }}>Eligibility for Return or Exchange</h2>
        <ul className="policy-list" data-aos="fade-up" style={{ marginTop: '1rem' }}>
          <li>The purchased item should be unused and in the same condition as you received it.</li>
          <li>The item must have its original packaging intact.</li>
          <li>
            If the item was purchased on sale, it may not be eligible for a return/exchange.
          </li>
        </ul>

        <p data-aos="fade-up" style={{ marginTop: '1rem' }}>
          Further, only such items are replaced by us (based on an exchange request) if they are found 
          to be defective or damaged. 
        </p>

        <h2 data-aos="fade-up" style={{ marginTop: '1.5rem' }}>Exempted Categories</h2>
        <p data-aos="fade-up">
          You agree that there may be certain categories of products/items that are exempted 
          from returns or refunds. These categories will be identified to you at the time of purchase.
        </p>

        <h2 data-aos="fade-up" style={{ marginTop: '1.5rem' }}>Processing Returns or Exchanges</h2>
        <p data-aos="fade-up">
          For accepted return/exchange requests:
        </p>
        <ul className="policy-list" data-aos="fade-up" style={{ marginTop: '1rem' }}>
          <li>Once your returned product/item is received and inspected by us, we will notify you via email about the receipt of the returned/exchanged product.</li>
          <li>
            If the return/exchange is approved after the quality check at our end, your request will 
            be processed in accordance with our policies.
          </li>
        </ul>
      </div>
      
      <Footer />
    </>
  );
};

export default ReturnPolicy;
