import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Education from "./components/Eduction";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import CodingPlatforms from "./components/CodingPlatforms";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Skills />
      <div className="main-content">
        <Services />
        <About />
      </div>
      <Education />
      <Experience />
      <Projects />
      <CodingPlatforms />
      <Certifications />
      <Contact />
    </div>
  );
}

export default App;
