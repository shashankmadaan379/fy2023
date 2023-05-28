import React from "react";
import "../../index.css";
import "./Header.css";
import { Link } from "react-router-dom";
import HeaderImg from "../../assets/mindsketch-image.png";
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
        <div className="main-nav flex">
          <div className="logo">
            <Link to="/" className="company-logo hover-link">
              <h2>MindSketch</h2>
            </Link>
          </div>
          <div className="nav-links" id="nav-links">
            <ul className="flex">
              <li>
                <Link to="/" className="hover-link">
                  HOME
                </Link>
              </li>
              <li>
                <Link href="/" className="hover-link">
                  PRODUCTS
                  <span class="icon-small">
                    <i class="fa-solid fa-caret-down"></i>
                  </span>
                </Link>
                <ul className="products">
                  <li>
                    <Link to="/" className="hover-link">
                      TEXT SUMMARIZE
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="hover-link">
                      TEXT COMPLETION
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="hover-link">
                      CODE GENERATOR
                    </Link>
                  </li>
                </ul>
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
      <header>
        <div className="flex header-section">
          <div className="header-left">
            <p className="header-text">AI-Powered Image Generation</p>
            <p className="mindsketch-tagline">
              Unleash Your Imagination with{" "}
              <span className="tagline-brand-name">Mindsketch</span>: Where AI
              Meets Art to Create Stunning Images
            </p>
            <Link to="/" class="primary-button get-started">
              Get Started
            </Link>
          </div>
          <div className="header-right">
            <img src={HeaderImg} alt="headerimage" />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
