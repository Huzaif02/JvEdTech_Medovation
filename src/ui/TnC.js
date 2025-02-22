// src/pages/TnC.js
import React, { useEffect } from 'react';
import AOS from 'aos';
import '../../node_modules/aos/dist/aos.css';
import InnerHeader from '../components/InnerHeader';
import InnerHeaderBanner from '../components/InnerHeaderBanner';
import Footer from '../components/Footer';
// import tncHeader from '../img/tnc-header.jpg'; // Replace with the appropriate image path if available

const TnC = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <InnerHeader />
      <InnerHeaderBanner name="Terms and Conditions"/>

      <div className="tnc-page container" data-aos="fade-up">
        <p>
          <strong>A.</strong> This document is an electronic record in terms of the Information Technology Act, 2000
          and rules thereunder as applicable and the amended provisions pertaining to electronic records
          in various statutes as amended by the Information Technology Act, 2000. This electronic record
          is generated by a computer system and does not require any physical or digital signatures.
        </p>

        <p>
          <strong>B.</strong> This document is published in accordance with the provisions of Rule 3 (1) of the
          Information Technology (Intermediaries guidelines) Rules, 2011, that require publishing the rules
          and regulations, privacy policy, and Terms of Use for access or usage of domain name{' '}
          <a href="https://jvedtech.com/">https://jvedtech.com/</a> ('Website'), including the related mobile
          site and mobile application (hereinafter referred to as 'Platform').
        </p>

        <p>
          <strong>C.</strong> The Platform is owned by JV Edtech Medovation Pvt Ltd, a company incorporated under
          the Companies Act, 1956 with its registered office at Mumbai, 400081, Maharashtra (hereinafter
          referred to as 'Platform Owner', 'we', 'us', 'our').
        </p>

        <p>
          <strong>D.</strong> Your use of the Platform and services and tools are governed by the following terms
          and conditions (“Terms of Use”) as applicable to the Platform, including the applicable policies
          which are incorporated herein by way of reference. If you transact on the Platform, you shall be
          subject to the policies that are applicable to the Platform for such transaction. By mere use of
          the Platform, you shall be contracting with the Platform Owner, and these terms and conditions,
          including the policies, constitute your binding obligations with the Platform Owner.
        </p>

        <p>
          <strong>E.</strong> For the purpose of these Terms of Use, wherever the context so requires, ‘you’, 'your',
          or ‘user’ shall mean any natural or legal person who has agreed to become a user/buyer on the
          Platform.
        </p>

        <p>
          <strong>F.</strong> ACCESSING, BROWSING, OR OTHERWISE USING THE PLATFORM INDICATES YOUR
          AGREEMENT TO ALL THE TERMS AND CONDITIONS UNDER THESE TERMS OF USE, SO
          PLEASE READ THE TERMS OF USE CAREFULLY BEFORE PROCEEDING.
        </p>

        <div>
          <h3>G. Terms of Use</h3>
          <ol>
            <li>
              To access and use the Services, you agree to provide true, accurate, and complete information
              to us during and after registration, and you shall be responsible for all acts done through the use of your registered account on the Platform.
            </li>
            <li>
              Neither we nor any third parties provide any warranty or guarantee as to the accuracy,
              timeliness, performance, completeness, or suitability of the information and materials offered
              on this website or through the Services for any specific purpose.
            </li>
            <li>
              Your use of our Services and the Platform is solely and entirely at your own risk and
              discretion for which we shall not be liable to you in any manner.
            </li>
            <li>
              The contents of the Platform and the Services are proprietary to us and are licensed to us.
              You will not have any authority to claim any intellectual property rights, title, or interest in its
              contents.
            </li>
            <li>
              Unauthorized use of the Platform and/or the Services may lead to action against you as per
              these Terms of Use and/or applicable laws.
            </li>
            <li>You agree to pay us the charges associated with availing the Services.</li>
            <li>
              You agree not to use the Platform and/or Services for any purpose that is unlawful, illegal, or
              forbidden by these Terms, or Indian or local laws that might apply to you.
            </li>
            <li>
              The website and Services may contain links to third-party websites. Accessing these links
              will govern you by the terms of use and privacy policies of such third-party websites.
            </li>
            <li>
              Upon initiating a transaction for availing the Services, you are entering into a legally binding
              and enforceable contract with the Platform Owner.
            </li>
            <li>
              You shall indemnify and hold harmless Platform Owner, its affiliates, group companies, and
              their respective officers, directors, agents, and employees from any claims arising out of your
              violation of these Terms.
            </li>
            <li>
              Notwithstanding anything contained in these Terms of Use, the parties shall not be liable for
              any failure to perform an obligation due to a force majeure event.
            </li>
            <li>
              These Terms and any disputes arising shall be governed by and construed under Indian laws.
            </li>
            <li>
              All disputes shall be subject to the exclusive jurisdiction of the courts in Mumbai,
              Maharashtra.
            </li>
            <li>
              All concerns or communications relating to these Terms must be communicated to us using
              the contact information provided on this website.
            </li>
          </ol>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TnC;
