import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section className="header">
      <div className="header__row">
        <div className="header-logo__container">
          <h1 className="header__logo-text">
            <Link to="/" className="header__logo-text-link">
              Insatix Web Solutions
            </Link>
          </h1>
        </div>
        <nav className="header__nav-links-wrapper">
          <ul className="header__nav-links">
            <li>
              <Link
                to="/about"
                className="header__nav-link header__nav-link--first-of-type"
              >
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="header__nav-link">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="header__nav-link">
                Contact
              </Link>
            </li>
            <li>
              <a
                href="https://blog.insatix-work.shop"
                className="header__nav-link"
              >
                Blog
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Header;
