import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  // Assigning location variable
  const location = useLocation();

  // Destructuring pathname from location
  const { pathname } = location;

  // Split pathname to determine active link
  const splitLocation = pathname.split("/");

  // State to manage dropdown visibility
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <>
      <nav id="navbar" className="navbar">
        <ul>
          <li>
            <Link to="/" className={splitLocation[1] === "" ? "active" : ""}> Home</Link>
          </li>
          <li>
            <Link to="/about" className={splitLocation[1] === "about" ? "active" : ""}> About Us</Link>
          </li>
          <li>
            <Link to="/services" className={splitLocation[1] === "services" ? "active" : ""}> Serxices</Link>
          </li>
          <li>
            <Link to="/careers" className={splitLocation[1] === "careers" ? "active" : ""}> Careers</Link>
          </li>
          <li>
            <Link to="/contact" className={splitLocation[1] === "contact" ? "active" : ""}> Contact Us</Link>
          </li>
        </ul>
      </nav>

      {/* Add minimal CSS for dropdown styling */}
      {/* <style jsx>{`
        .navbar ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
        }

        .navbar ul li {
          position: relative;
          margin-right: 20px;
        }

        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          background: #fff;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          list-style: none;
          padding: 10px 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          z-index: 1000;
        }

        .dropdown-menu li {
          padding: 8px 20px;
        }

        .dropdown-menu li a {
          text-decoration: none;
          color: #333;
        }

        .dropdown-menu li a:hover {
          color: #007bff;
        }
      `}</style> */}
    </>
  );
};

export default Navbar;
