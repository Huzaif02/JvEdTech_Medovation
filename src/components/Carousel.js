import React, { useState } from "react";
import shapeImg from "../img/img-wave2.png";
import heroImg1 from "../images/carousel/hero-image-1.jpg";
import heroImg2 from "../images/carousel/hero-image-2.jpg";
import heroImg3 from "../images/carousel/hero-image-3.jpg";
import heroImg4 from "../images/carousel/hero-image-4.jpg";
import { Link } from "react-router-dom";
import "../../node_modules/react-modal-video/css/modal-video.css";
import ModalVideo from "react-modal-video";

const Carousel = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section id="hero" className="hero d-flex">
      <img className="shape" src={shapeImg} alt="Decorative Shape" />
      <div className="container">
        <div className="row align-items-center" data-aos="fade-up" data-aos-delay="200">
          {/* Left Section */}
          <div className="col-lg-7 col-md-12 col-12 text-content">
            <h2 data-aos="fade-up">
              Revolutionizing Healthcare Through Innovation and Excellence!
            </h2>
            <blockquote data-aos="fade-up" data-aos-delay="100">
              <p>
                Empowering Lives with Cutting-Edge Solutions in Education, Wellness, and Technology
              </p>
            </blockquote>
            <div className="d-flex align-items-center btn-container">
              <Link to="/about" className="btn-get-started">
                Read More
              </Link>
              <ModalVideo
                channel="youtube"
                autoplay={true}
                isOpen={isOpen}
                videoId="iZT4G159hzw"
                onClose={() => setOpen(false)}
              />
              <span
                className="btn-watch-video d-flex align-items-center pointer"
                onClick={() => setOpen(true)}
              >
                <i className="bi bi-play-circle-fill"></i>
                <span>Watch Intro</span>
              </span>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-lg-5 col-md-12 col-12">
            <div className="header-image">
              <div
                id="carouselExampleFade"
                className="carousel slide carousel-fade"
                data-bs-ride="carousel"
              >
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleFade"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleFade"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleFade"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleFade"
                    data-bs-slide-to="3"
                    aria-label="Slide 4"
                  ></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={heroImg1} className="d-block w-100" alt="Hero Slide 1" />
                  </div>
                  <div className="carousel-item">
                    <img src={heroImg2} className="d-block w-100" alt="Hero Slide 2" />
                  </div>
                  <div className="carousel-item">
                    <img src={heroImg3} className="d-block w-100" alt="Hero Slide 3" />
                  </div>
                  <div className="carousel-item">
                    <img src={heroImg4} className="d-block w-100" alt="Hero Slide 4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;