import React from 'react'
import { Link } from 'react-router-dom'

import dashboard from '../img/join-dashboard.jpg'

const Revenue = () => {
  return (
    <>
        <section id="features" className="features">
        <div className="details">
          <div className="container" data-aos="fade-up" data-aos-delay="300">
            <div className="row">
              <div className="col-md-7">
                <h4>Join Us Today</h4>
                <p>Join Us Today
                Experience the future of healthcare with JV Edtech Medovation. Connect with us for exceptional services and solutions. </p>
                <Link to="/contact" className="btn-get-started">Contact Now</Link>
              </div>
              <div className="col-lg-5 position-relative" data-aos="fade-up" data-aos-delay="200">
                <div className="phone-wrap">
                  <img src={dashboard} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Revenue