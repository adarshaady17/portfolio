import React from "react";
import { motion } from "framer-motion";
import "./Skills.css";

const Skills = () => {
  const skills = [
    "JavaScript",
    "Node.js",
    "Express.js",
    "React.js",
    "MongoDB",
    "MySQL",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Bootstrap",
    "Java",
    "C Programming",
    "RESTful APIs",
    "Vercel",
    "Render",
    "Git",
    "GitHub",
  ];

  return (
    <section className="skills">
      <div className="container">
        <motion.div
          className="skills-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="skills-list">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                className="skill-item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
