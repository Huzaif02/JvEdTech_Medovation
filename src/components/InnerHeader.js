import React, { useState } from "react";
import logo from "../img/jvlogo.png";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

const InnerHeader = () => {
  const toTop = () => {
    scroll.scrollToTop({ delay: 0, duration: 0 });
  };

  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  // Sticky header effect
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

  const [mobileNavActive, setMobileNavActive] = useState(false);
  const [dropdownActive, setDropdownActive] = useState(false);
  const [subDropdownActive, setSubDropdownActive] = useState(false);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileNavActive(!mobileNavActive);
    document.body.classList.toggle("mobile-nav-active");
  };

  // Toggle dropdown in mobile view
  const toggleDropdown = () => {
    setDropdownActive(!dropdownActive);
  };

  // Toggle sub-dropdown in mobile view
  const toggleSubDropdown = () => {
    setSubDropdownActive(!subDropdownActive);
  };

  return (
    <header id="header" className="header fixed-top">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <Link to="/" className="logo" onClick={toTop}>
          <img
            width={120}
            height={80}
            src={logo}
            alt="JvEdTech Medovation"
            title="JvEdTech Medovation"
          />
        </Link>
        <span onClick={toggleMobileMenu}>
          <i
            className={`mobile-nav-toggle ${
              mobileNavActive ? "d-none" : ""
            } mobile-nav-show bi bi-list`}
          ></i>
          <i
            className={`mobile-nav-toggle ${
              !mobileNavActive ? "d-none" : ""
            } mobile-nav-hide bi bi-x`}
          ></i>
        </span>
        <nav
          id="navbar"
          className={`navbar ${mobileNavActive ? "mobile-nav-active" : ""}`}
        >
          <ul>
            <li>
              <Link
                to="/"
                className={splitLocation[1] === "" ? "active" : ""}
                onClick={toggleMobileMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={splitLocation[1] === "about" ? "active" : ""}
                onClick={toggleMobileMenu}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className={splitLocation[1] === "services" ? "active" : ""}
                onClick={toggleMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className="dropdown">
            <span 
              onClick={toggleDropdown} 
              style={{ paddingLeft: '30px', cursor: 'pointer', display: 'inline-flex', alignItems: 'center' }}
            >
              Resources  <i className="bi bi-chevron-down"></i>
            </span>
              <ul
                className={`dropdown-menu ${
                  dropdownActive ? "show" : ""
                }`}
              >
                <li className="dropdown">
                  <span onClick={toggleSubDropdown}
                        style={{ paddingLeft: '20px', cursor: 'pointer', display: 'inline-flex', alignItems: 'center' }}>
                    Events <i className="bi bi-chevron-right"></i>
                  </span>
                  <ul
                    className={`dropdown-submenu ${
                      subDropdownActive ? "show" : ""
                    }`}
                  >
                    <li>
                      <Link to="/events/webinars" onClick={toggleMobileMenu}>
                        Webinars
                      </Link>
                    </li>
                    <li>
                      <Link to="/events/workshops" onClick={toggleMobileMenu}>
                        Workshops
                      </Link>
                    </li>
                    <li>
                      <Link to="/events/campaigns" onClick={toggleMobileMenu}>
                        Campaigns
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/blogs" onClick={toggleMobileMenu}>
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link to="/newsletters" onClick={toggleMobileMenu}>
                    Newsletters
                  </Link>
                </li>
                <li>
                  <Link to="/video-tutorials" onClick={toggleMobileMenu}>
                    Video Tutorials
                  </Link>
                </li>
                <li>
                  <Link to="/case-studies" onClick={toggleMobileMenu}>
                    Case Studies
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                to="/careers"
                className={splitLocation[1] === "careers" ? "active" : ""}
                onClick={toggleMobileMenu}
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={splitLocation[1] === "contact" ? "active" : ""}
                onClick={toggleMobileMenu}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default InnerHeader;
