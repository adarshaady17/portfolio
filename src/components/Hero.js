import React from "react";
import { motion } from "framer-motion";
import { FaChevronRight } from "react-icons/fa";
import "./Hero.css";

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="greeting">
              <span className="hello">Hello.</span>
              <span className="orange-dot">•</span>
            </div>

            <h1 className="hero-title">
              I'm <span className="orange-underline">Adarsh Sahu</span>
            </h1>

            <h2 className="hero-subtitle">MERN Stack Developer</h2>

            <div className="hero-buttons">
              <motion.button
                className="btn btn-primary"
                onClick={() => scrollToSection("contact")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Got a project?
              </motion.button>

              <motion.a
                href="/Adarsh-sahu resume1.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Resume
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            className="hero-image"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="image-container">
              <div className="orange-circle-large"></div>
              <div className="orange-circle-small"></div>
              <img
                src="/profile-photo.jpg"
                alt="Adarsh Sahu"
                className="profile-photo"
              />
              <div className="navigation-arrows">
                <FaChevronRight className="arrow" />
                <FaChevronRight className="arrow" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
