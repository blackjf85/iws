import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <section id="main" className="hero-section">
        <container className="hero-section__container">
          <div className="hero-section__content">
            <h1 className="hero-section__heading">Insatix Web Solutions</h1>
            <h2 className="hero-section__subheading">Simplifying the Web</h2>
            <p className="hero-section__text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
              accusantium possimus aspernatur voluptates placeat sed fugiat
              similique sit distinctio repudiandae dolorum, cupiditate fugit
              inventore labore provident veniam dicta molestiae? Eaque,
              doloribus, officiis nemo sequi quaerat necessitatibus in quo
              blanditiis mollitia vitae perspiciatis dicta provident odio neque
              libero voluptate rem. Minima?
            </p>
            <div className="hero-section__button-container">
              <div className="hero-section__button-wrapper">
                <Link to="/contact" className="hero-section__button-link">
                  Get in Touch
                </Link>
              </div>
              <div className="hero-section__button-wrapper">
                <Link to="/services" className="hero-section__button-link">
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </container>
      </section>
    </div>
  );
};

export default Home;
