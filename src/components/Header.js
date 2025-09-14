import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h2>Adarsh Sahu</h2>
          </div>

          <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
            <ul className="nav-list">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="nav-link"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="nav-link"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("experience")}
                  className="nav-link"
                >
                  Experience
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="nav-link"
                >
                  Projects
                </button>
              </li>
            </ul>
          </nav>

          <button className="menu-toggle" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
