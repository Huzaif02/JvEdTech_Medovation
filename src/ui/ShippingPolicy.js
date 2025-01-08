// src/pages/TnC.js
import React, { useEffect } from 'react';
import AOS from 'aos';
import '../../node_modules/aos/dist/aos.css';
import InnerHeader from '../components/InnerHeader';
import InnerHeaderBanner from '../components/InnerHeaderBanner';
import Footer from '../components/Footer';
// import tncHeader from '../img/tnc-header.jpg'; // Replace with the appropriate image path if available

const ShippingPolicy = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <InnerHeader />
      <InnerHeaderBanner name="Shipping Policy"/>

      <div className="tnc-page container" data-aos="fade-up">
        <p>
            The orders for the user are shipped through registered domestic courier companies
            and/or speed post only. Orders are shipped within <strong>14 days</strong>from the date of the order
            and/or payment or as per the delivery date agreed at the time of order confirmation and
            delivering of the shipment, subject to courier company / post office norms. Platform
            Owner shall not be liable for any delay in delivery by the courier company / postal
            authority. Delivery of all orders will be made to the address provided by the buyer at the
            time of purchase. Delivery of our services will be confirmed on your email ID as
            specified at the time of registration. If there are any shipping cost(s) levied by the seller
            or the Platform Owner (as the case be), the same is not refundable.
        </p>
       </div>
      <Footer />
    </>
  );
};

export default ShippingPolicy;
