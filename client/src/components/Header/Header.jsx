import React from "react";
import "../../index.css";
import "./Header.css";
import { Link } from "react-router-dom";
//Unleash the Power of AI: Create Stunning Images with a Single Click
const Header = () => {
  return (
    <div className="header">
      {/* Top Banner */}
      <div className="top-banner">
        <div className="container">
          <div className="small-bold-text banner-text">
            👨‍💻Unleash the Power of AI: Create Stunning Images with a Single
            Click {"->"}
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav>
        <div className="main-nav flex container">
          <Link to="/" className="company-logo">
            <h2>MindSketch</h2>
          </Link>
          <div className="nav-links" id="nav-links">
            <ul className="flex">
              <li>
                <Link to="/" className="hover-link">
                  HOME
                </Link>
              </li>
              <li>
                <Link to="/" className="hover-link">
                  PRODUCTS
                </Link>
              </li>
              <li>
                <Link to="/" className="hover-link">
                  EXHIBITION
                </Link>
              </li>
              <li>
                <Link to="/" className="hover-link">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/" className="hover-link secondary-button">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/" className="hover-link primary-button">
                  Register
                </Link>
              </li>
            </ul>
          </div>
          <Link to="/" className="nav-toggle hover-link" id="nav-toggle">
            <i class="fa-solid fa-bars"></i>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
