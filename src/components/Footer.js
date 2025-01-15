import React from "react";
import footerLogo from "../img/jvlogo.jpg";

import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";


const Footer = () => {
  return (
    <>
      <footer id="footer" className="footer">
        <div className="footer-content">
          <div className="container">
            <div className="row d-flex justify-content-between align-items-start">
              <div className="col-lg-2 footer-info">
                <Link to="/" className="logo d-flex align-items-center">
                  <img src={footerLogo} alt="" title="" />
                </Link>
                <p>
                  Empowering Lives with Cutting-Edge Solutions in Education, Wellness, and Technology
                </p>
                <div className="social-links d-flex mt-3">
                  <Link to="/" className="twitter">
                    <i className="bi bi-twitter"></i>
                  </Link>
                  <Link to="/" className="facebook">
                    <i className="bi bi-facebook"></i>
                  </Link>
                  <Link to="https://www.linkedin.com/company/jv-edtech-medovation" className="linkedin">
                    <i className="bi bi-linkedin"></i>
                  </Link>
                  <Link to="https://chat.whatsapp.com/KedBa4ZTIPn3e5V4tqIalr" className="whatsapp">
                    <i className="bi bi-whatsapp"></i>
                  </Link>
                </div>
              </div>

              <div className="col-lg-2 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li><i className="bi bi-dash"></i> <Link to="/">Home</Link></li>
                  <li><i className="bi bi-dash"></i> <Link to="/about">About Us</Link></li>
                  <li><i className="bi bi-dash"></i> <Link to="/services">Services</Link></li>
                  <li><i className="bi bi-dash"></i> <Link to="/careers">Careers</Link></li>
                  <li><i className="bi bi-dash"></i> <Link to="/contact">Contact Us</Link></li>
                </ul>
              </div>

              <div className="col-lg-2 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li><i className="bi bi-dash"></i> <HashLink smooth to="/services/#eduglobe">EduGlobe</HashLink></li>
                  <li><i className="bi bi-dash"></i> <HashLink smooth to="/services/#digital">Digital Ads Pro Expertise</HashLink></li>
                  <li><i className="bi bi-dash"></i> <HashLink smooth to="/services/#mediai">Medi AI Informatics</HashLink></li>
                  <li><i className="bi bi-dash"></i> <HashLink smooth to="/services/#inhome">In-Home Wellness</HashLink></li>
                </ul>
              </div>

              <div className="col-lg-2 footer-links">
                <h4>Legals</h4>
                <ul>
                  <li><i className="bi bi-dash"></i> <HashLink smooth to="/privacy-policy">Privacy Policy</HashLink></li>
                  <li><i className="bi bi-dash"></i> <HashLink smooth to="/tnc">T n C</HashLink></li>
                  <li><i className="bi bi-dash"></i> <HashLink smooth to="/shipping-policy">Shipping Policy</HashLink></li>
                  <li><i className="bi bi-dash"></i> <HashLink smooth to="/refund-policy">Refund Policy</HashLink></li>
                  <li><i className="bi bi-dash"></i> <HashLink smooth to="/return-policy">Return Policy</HashLink></li>
                </ul>
              </div>

              <div className="col-lg-3 footer-contact text-start">
                <h4>Contact Us</h4>
                <address>
                  A/14 Plot No.2 Suryadarsha, <br /> N CHS Mhada Colony Mulund East, <br /> Mumbai, Mumbai - 400081. <br />
                  <br />
                  <strong>Phone:</strong> +91 - 86556 07722 <br />
                  <strong>Email:</strong> <a href="mailto:info@jvedtech.com">info@jvedtech.com</a> <br />
                </address>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-legal">
          <div className="container d-flex justify-content-center">
            <div className="copyright">
              &copy; <span id="copyright">{new Date().getFullYear()}</span> Copyright
              <span> JvEdTech Medovation Pvt. Ltd </span>. All Rights Reserved
            </div>
          </div>
        </div>
      </footer>
      
    </>
  )
  
};

export default Footer;
