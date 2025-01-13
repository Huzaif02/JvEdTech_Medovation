import React from "react";

import inhomeimg from "../img/inhome.png";
import mediaiimg from "../img/mediai.png";
import digitalimg from "../img/digital.png";
import eduglobeimg from "../img/eduglobe.png";

import InnerHeaderBanner from "../components/InnerHeaderBanner";
import InnerHeader from "../components/InnerHeader";
import Footer from "../components/Footer";
import serviceHeader from '../img/services-header.jpg'

const eduglobe = require('../img/icons/edu globe.png');
const homecare = require('../img/icons/in home wellness.png');
const digital = require('../img/icons/digital ads.png');
const mediai = require('../img/icons/medi ai.png')

const Service = () => {
  return (
    <>
      <InnerHeader />
      <InnerHeaderBanner name={"Services"} img = {serviceHeader}/>

      <main id="main">

        <section id="eduglobe" className="services-list">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>
                We are a
                <span style={{ color: "#155bd5" }}> Spearheading</span> in
                Healthcare domain, by offer Services across Education, Patient Care, Digital Advertisement, medical product import export, etc.
              </h2>
            </div>

            <div
              className="row gy-5 pt-5 align-items-center"
              id="Educational-content"
            >
              <div
                className="col-lg-5 col-md-6 service-item"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <img
                  src={eduglobeimg}
                  className="img-fluid"
                  alt=""
                  title="Educational-content"
                />
              </div>

              <div
                className="col-lg-7 col-md-6 service-item"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="icon flex-shrink-0">
                  <img src={eduglobe} alt="EduGlobe Icon" style={{ width: "40px", height: "40px" }} />
                </div>
                <div>
                  <h4 className="title"> EduGlobe </h4>
                  <p className="description">
                    
                  Our Educational Services are designed to empower healthcare professionals with the knowledge and skills they need to excel in a constantly evolving industry. We offer:

                  <p><span className="fw-bold">Customized Training Programs:</span></p>Tailored to meet the specific needs of healthcare providers, institutions, and organizations.
                  <p><span className="fw-bold">Workshops and Seminars:</span></p> Focused on the latest trends and advancements in healthcare.
                  <p><span className="fw-bold">eLearning Modules:</span></p> Interactive, online learning tools for flexible and accessible education.
                  <p><span className="fw-bold">Skill Development:</span></p> Hands-on training in critical areas like patient care, technology integration, and regulatory compliance.
                  
                  </p>
                  <p className="description">
                    <span className="fw-bold">
                    At JVEDTECH, we ensure healthcare professionals are equipped to deliver exceptional care in an ever-changing environment.
                    </span>
                    and more..
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        

        <section className="services-list ">
          <div className="container" id="digital">
            <div className="row gy-5  align-items-center">
              <div
                className="col-lg-5 col-md-6 service-item "
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <img src={digitalimg} className="img-fluid" alt="digital ads" />
              </div>

              <div
                className="col-lg-7 col-md-6 service-item"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="icon flex-shrink-0">
                  <img src={digital} alt="Digital Ads pro Icon" style={{ width: "40px", height: "40px" }} />  
                </div>
                <div>
                  <h4 className="title"> Digital Ads Pro Expertise </h4>
                  <p className="description">
                  Our Digital Ads Pro Expertise focuses on revolutionizing healthcare marketing by implementing innovative digital strategies. We specialize in:
                    <p><span className="fw-bold">Targeted Campaigns: </span></p>Reaching the right audience with personalized healthcare messaging.
                    <p><span className="fw-bold">Social Media Management:</span></p> Engaging patients and stakeholders through impactful social media campaigns.
                    <p><span className="fw-bold">Pay-Per-Click (PPC) Advertising: </span></p> Driving traffic and conversions with effective ad placements.
                    <p><span className="fw-bold">Content Marketing:</span></p> Creating informative, high-quality content tailored to the healthcare industry.
                  </p>
                  <p className="description">
                    <span className="fw-bold">
                    We combine data-driven strategies with creative execution to help healthcare businesses expand their reach and improve accessibility.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="services-list light-bg" id="mediai">
          <div className="container">
            <div className="row gy-5 align-items-center">
              <div
                className="col-lg-7 col-md-6 service-item"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="icon flex-shrink-0">
                  <img src={mediai} alt="Medi Ai Icon" style={{ width: "40px", height: "40px" }} />  
                </div>
                
                <div>
                  <h4 className="title"> Medi AI Informatics </h4>
                  <p className="description">
                  Our Medi AI Informatics services harness the power of Artificial Intelligence to transform the healthcare landscape. We offer:
                    <p><span className="fw-bold">AI-Powered Diagnostics: </span></p>Enabling faster and more accurate disease detection
                    <p><span className="fw-bold">Natural Language Processing (NLP):</span></p> Streamlining patient communication and record-keeping.
                    <p><span className="fw-bold">Remote Patient Monitoring:  </span></p> Using AI tools to track health metrics and alert caregivers.
                    <p><span className="fw-bold">Decision Support Systems: </span></p>  Empowering healthcare providers with data-driven insights for better decision-making.
                  </p>
                  <p className="description">
                    <span className="fw-bold">
                    With Medi AI Informatics, we aim to enhance operational efficiency, improve patient outcomes, and drive innovation in the healthcare sector.
                    </span>
                  </p>
                </div>
              </div>

              <div
                className="col-lg-5 col-md-6 service-item order-first order-sm-last"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <img src={mediaiimg} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="services-list light-bg" id="inhome">
          <div className="container" data-aos="fade-up">
            <div className="row gy-5 align-items-center ">
              <div
                className="col-lg-7 col-md-6 service-item "
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="icon flex-shrink-0">
                  <img src={homecare} alt="In Hoome Wellness Icon" style={{ width: "40px", height: "40px" }} />
                </div>
                <div>
                  <h4 className="title"> In-Home Wellness </h4>
                  <p className="description">
                    Our In-Home Wellness services redefine patient care by bringing top-notch medical services to the comfort of patients' homes. We provide:  
                    <p><span className="fw-bold">Home Health Monitoring: </span></p>Continuous tracking of health metrics with advanced technology.
                    <p><span className="fw-bold">Nursing and Caregiver Services:</span></p> Skilled professionals delivering personalized care tailored to individual needs.
                    <p><span className="fw-bold">Rehabilitation Therapy:</span></p> Physical, occupational, and speech therapy sessions conducted at home.
                    <p><span className="fw-bold">Medication Management:</span></p> Ensuring patients adhere to their prescribed treatments with guidance and support.
                  </p>
                  <p className="description">
                    <span className="fw-bold">
                    By prioritizing convenience and comfort, we strive to make healthcare more accessible and patient-centric.
                    </span>
                  </p>
                </div>
              </div>

              <div
                className="col-lg-5 col-md-6 service-item order-first order-sm-last"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <img src={inhomeimg} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
};

export default Service;
