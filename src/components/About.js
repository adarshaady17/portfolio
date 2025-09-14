import React from "react";
import { motion } from "framer-motion";
import "./About.css";

const About = () => {
  const stats = [
    { number: "15+", label: "Completed Projects" },
    { number: "8.13", label: "MCA CGPA" },
    { number: "1+", label: "Years of experience" },
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          className="about-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">About me</h2>

          <p className="about-text">
            I'm an aspiring MERN Stack Developer with 1+ year of hands-on
            experience in building full-stack applications. Currently pursuing
            Master of Computer Applications from IET Lucknow with 8.13 CGPA. I
            have practical experience in developing web applications using
            modern technologies like React.js, Node.js, Express.js, and MongoDB.
            I specialize in website hosting and deployment using Vercel and
            Render platforms. I'm passionate about creating impactful software
            solutions and eager to contribute to meaningful projects through
            practical problem-solving and modern web technologies.
          </p>

          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="stat-item"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
