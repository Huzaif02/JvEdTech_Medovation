import React from "react";
import { Link } from "react-router-dom";
const eduglobe = require('../img/icons/edu globe.png');
const homecare = require('../img/icons/in home wellness.png');
const digital = require('../img/icons/digital ads.png');
const mediai = require('../img/icons/medi ai.png')

const ServiceList = () => {
  return (
    <>
      <section id="services-list" className="services-list">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2>What we do? </h2>
            <p>
            we bridge the gap between technology and healthcare by offering innovative solutions tailored to meet industry needs. From empowering professionals through education to delivering personalized in-home wellness services and cutting-edge digital marketing strategies, we are committed to transforming healthcare delivery and accessibility.{" "}
            </p>
          </div>
          <div className="row gy-5">
            <div
              className="col-lg-6 col-md-6 service-item d-flex"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="single-service">
                <div className="icon flex-shrink-0">
                  <img src={eduglobe} alt="EduGlobe Icon" style={{ width: "40px", height: "40px" }} />
                </div>
                <div>
                  <h4 className="title">
                    <Link to="/services" className="stretched-link">
                      EduGlobe{" "}
                    </Link>
                  </h4>
                  <p className="description">
                  Tailored educational services designed to adapt to the evolving healthcare industry,
                  ensuring professionals stay ahead with the latest knowledge and skills
                  </p>
                  <Link to="/services" className="btn-get-started">
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="col-lg-6 col-md-6 service-item d-flex"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="single-service">
                <div className="icon flex-shrink-0">
                  <img src={homecare} alt="In Hoome Wellness Icon" style={{ width: "40px", height: "40px" }} />
                </div>
                <div>
                  <h4 className="title">
                    <Link to="/services" className="stretched-link">
                      In-Home Wellness
                    </Link>
                  </h4>
                  <p className="description">
                  Bringing quality medical services directly to individuals in the comfort of their homes, offering convenience and personalized care for patients.
                  </p>
                  <Link to="/services" className="btn-get-started">
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="col-lg-6 col-md-6 service-item d-flex"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="single-service">
                <div className="icon flex-shrink-0">
                  <img src={digital} alt="Digital Ads pro Icon" style={{ width: "40px", height: "40px" }} />  
                </div>
                <div>
                  <h4 className="title">
                    <Link to="/services" className="stretched-link">
                      Digital AD pro Expertise{" "}
                    </Link>
                  </h4>
                  <p className="description">
                  Specialized digital marketing strategies that enhance communication and accessibility within the healthcare sector, helping businesses reach their target audience effectively.
                  </p>
                  <Link to="/services" className="btn-get-started">
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="col-lg-6 col-md-6 service-item d-flex"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="single-service">
                <div className="icon flex-shrink-0">
                  <img src={mediai} alt="EduGlobe Icon" style={{ width: "40px", height: "40px" }} />
                </div>
                <div>
                  <h4 className="title">
                    <Link to="/services" className="stretched-link">
                      Medi AI informatics{" "}
                    </Link>
                  </h4>
                  <p className="description">
                  Medi AI Informatics services harness the power of Artificial Intelligence to transform the healthcare landscape.{" "}
                  </p>
                  <Link to="/services" className="btn-get-started">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceList;
