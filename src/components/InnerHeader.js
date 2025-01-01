import React, { useState } from "react";
import logo from "../img/jvlogo.jpg";
//import Navbar from "./Navbar";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom'
import { animateScroll as scroll } from "react-scroll";

const InnerHeader = () => {
//

  const toTop = () => {
    scroll.scrollToTop({ delay: 0, duration: 0 });
  };


  //assigning location variable
  const location = useLocation();
  
   //destructuring path name from location
   const {pathname} = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");


  //sticky header
  useEffect(() => {
    const selectHeader = document.querySelector("#header");
    if (selectHeader) {
      document.addEventListener("scroll", () => {
        window.scrollY > 80
          ? selectHeader.classList.add("sticked")
          : selectHeader.classList.remove("sticked");
      });
    }
  }, []);

  // mobile view menu
  const mobilemenu = (event) => {
    event.preventDefault();
    const mobileNavShow = document.querySelector(".mobile-nav-show");
    const mobileNavHide = document.querySelector(".mobile-nav-hide");
    mobileNavShow.classList.toggle("d-none");
    mobileNavHide.classList.toggle("d-none");
    document.querySelector("body").classList.toggle("mobile-nav-active");
  };

  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <>
      <header id="header" className="header fixed-top">
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
          <Link to="/" className="logo" onClick={toTop}>
            <img 
              width={120} height={80}
              src={logo}
              alt="JvEdTech Medovation"
              title="JvEdTech Medovation"
            />
          </Link>
          <span  onClick={mobilemenu}>  
          <i className="mobile-nav-toggle mobile-nav-show bi bi-list"     
          ></i>
          <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
          </span>
          <nav id="navbar" className="navbar">
          <ul onClick={mobilemenu}>
            <li >
              <Link to ="/"  className={splitLocation[1] === "" ? "active" : ""}> Home</Link>
            </li>
            <li>
            <Link to ="/about"  className={splitLocation[1] === "about" ? "active" : ""}> About Us</Link>
            </li>
            <li>
            <Link to ="/services"  className={splitLocation[1] === "services" ? "active" : ""}> Services</Link>
            </li>
            <li
                        className="dropdown"
                        onMouseEnter={() => setShowDropdown(true)}
                        onMouseLeave={() => setShowDropdown(false)}
                      >
                        <Link
                          to="/resources"
                          className={splitLocation[1] === "resources" ? "active" : ""}
                        >
                          Resources <i className="bi bi-chevron-down"></i>
                        </Link>
                        {showDropdown && (
                          <ul className="dropdown-menu">
                            <li>
                              <Link to="/resources/blogs">Blogs</Link>
                            </li>
                            <li>
                              <Link to="/resources/newsletters">Newsletters</Link>
                            </li>
                            <li>
                              <Link to="/resources/video-tutorials">Video Tutorials</Link>
                            </li>
                            <li>
                              <Link to="/resources/case-studies">Case Studies</Link>
                            </li>
                          </ul>
                        )}
                      </li>
            <li>
            <Link to ="/careers"  className={splitLocation[1] === "careers" ? "active" : ""}> Careers</Link>
            </li>
            <li>
            <Link to ="/contact"  className={splitLocation[1] === "contact" ? "active" : ""}> Contact Us</Link>
            </li>
          </ul>
        </nav>
        </div>
      </header>
    </>
  );
};

export default InnerHeader;
