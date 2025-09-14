import React from "react";
import { motion } from "framer-motion";
import {
  FaChevronRight,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "./Hero.css";

const Hero = () => {
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

            <h2 className="hero-subtitle">Full Stack Developer</h2>

            <motion.div
              className="hero-bottom-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="hero-buttons">
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

              <div className="contact-info">
                <div className="contact-item">
                  <FaEnvelope className="contact-icon" />
                  <span>adarshsahu6236@gmail.com</span>
                </div>
                <div className="contact-item">
                  <FaPhone className="contact-icon" />
                  <span>+91-9598172971</span>
                </div>
                <div className="contact-item">
                  <FaMapMarkerAlt className="contact-icon" />
                  <span>Bangalore, India</span>
                </div>

                <div className="social-links">
                  <motion.a
                    href="https://linkedin.com/in/adarsh-sahu-333783298"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaLinkedin />
                  </motion.a>
                  <motion.a
                    href="https://github.com/adarshaady17"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaGithub />
                  </motion.a>
                </div>
              </div>
            </motion.div>
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
