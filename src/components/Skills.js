import React from "react";
import { motion } from "framer-motion";
import "./Skills.css";

const Skills = () => {
  const skills = [
    // Programming Languages
    "Java",
    "C Programming",
    "JavaScript",

    // Backend Technologies
    "Node.js",
    "Express.js",
    "RESTful APIs",
    "Object Oriented Programming",

    // Frontend Technologies
    "React.js",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Bootstrap",

    // Databases
    "MySQL",
    "MongoDB",

    // Version Control & Deployment
    "Git",
    "GitHub",
    "Vercel",
    "Render",

    // Languages
    "Hindi",
    "English",

    // Soft Skills
    "Teamwork",
    "Time Management",
    "Problem-solving",

    // Computer Science
    "DSA (Data Structures & Algorithms)",
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
