import React from "react";
import { Link } from "react-router-dom";
import "./styles/Header.css";

const Header = () => {
  return (
    <section className="header-section">
      <div className="header-row">
        <div className="header-logo-container">
          <h1 className="header-logo-text">
            <Link to="/" className="header-logo-text-link">
              Insatix Web Solutions
            </Link>
          </h1>
        </div>
        <nav className="header-nav-links-wrapper">
          <ul className="header-nav-links">
            <li>
              <Link to="/about" className="header-nav-link first-of-type">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="header-nav-link">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="header-nav-link">
                Contact
              </Link>
            </li>
          </ul>
          {/* <a href="#About" className="header-nav-link first-of-type">
            About
          </a>
          <a href="#Services" className="header-nav-link">
            Services
          </a>
          <a href="#contact" className="header-nav-link">
            Contact
          </a> */}
        </nav>
      </div>
    </section>
  );
};

export default Header;
