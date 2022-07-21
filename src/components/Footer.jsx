import React from "react";
import "./styles/Footer.css";

const Footer = () => {
  return (
    <section className="footer-section">
      <container className="footer-row">
        <div className="footer-logo-container">
          <h1 className="footer-logo-text">Insatix Web Solutions</h1>
        </div>
        <div className="footer-copyright-container">
          <p className="footer-copyright-text">
            Copyright Insatix Web solutions LLC
          </p>
        </div>
      </container>
    </section>
  );
};

export default Footer;
