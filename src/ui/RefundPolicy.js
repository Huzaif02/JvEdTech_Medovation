// src/pages/RefundPolicy.js
import React, { useEffect } from 'react';
import AOS from "aos";
import '../../node_modules/aos/dist/aos.css';
import InnerHeaderBanner from '../components/InnerHeaderBanner';
import InnerHeader from '../components/InnerHeader';
import Footer from '../components/Footer';
// import refundHeader from '../img/about-header.jpg'; // Replace with the appropriate header image

const RefundPolicy = () => {
  
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <InnerHeader />
      <InnerHeaderBanner name={"Refund Policy"} />
      
      <div className="refund-policy-page container" style={{ padding: '2rem' }}>
        <h1 data-aos="fade-up">Refund and Cancellation Policy</h1>
        <p data-aos="fade-up">
          This refund and cancellation policy outlines how you can cancel or seek a refund for a 
          product/service that you have purchased through the Platform. Under this policy:
        </p>

        <ol className="policy-list" data-aos="fade-up" style={{ marginTop: '1.5rem' }}>
          <li>
            <strong>Cancellations:</strong> Cancellations will only be considered if the request is made 
            within <strong>7 days</strong> of placing the order. However, cancellation requests may not be 
            entertained if the orders have been communicated to such sellers/merchants listed on the 
            Platform and they have initiated the process of shipping them, or the product is out for 
            delivery. In such an event, you may choose to reject the product at the doorstep.
          </li>
          <li>
            <strong>Perishable Items:</strong> <em>JV Edtech Medovation Pvt Ltd</em> does not accept 
            cancellation requests for perishable items like flowers, eatables, etc. However, the refund/replacement 
            can be made if the user establishes that the quality of the product delivered is not good.
          </li>
          <li>
            <strong>Damaged or Defective Items:</strong> In case of receipt of damaged or defective items, 
            please report to our customer service team. The request would be entertained once the seller/merchant 
            listed on the Platform has checked and determined the same at its own end. This should be reported within 
            <strong>7 days</strong> of receipt of products. In case you feel that the product received is not as shown 
            on the site or as per your expectations, you must bring it to the notice of our customer service within 
            <strong>7 days</strong> of receiving the product. The customer service team after looking into your 
            complaint will take an appropriate decision.
          </li>
          <li>
            <strong>Warranty Issues:</strong> In case of complaints regarding the products that come with a warranty 
            from the manufacturers, please refer the issue to them.
          </li>
          <li>
            <strong>Refund Processing:</strong> In case of any refunds approved by <em>JV Edtech Medovation Pvt Ltd</em>, 
            it will take <strong>14 days</strong> for the refund to be processed to you.
          </li>
        </ol>
      </div>
      
      <Footer />
    </>
  );
};

export default RefundPolicy;