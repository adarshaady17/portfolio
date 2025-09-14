import React from "react";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaUniversity,
  FaCalendarAlt,
  FaAward,
} from "react-icons/fa";
import "./Education.css";

const Education = () => {
  const education = [
    {
      icon: <FaGraduationCap />,
      degree: "Master of Computer Applications",
      institution: "Institute of Engineering and Technology, Lucknow",
      duration: "Sept 2023 - May 2025",
      grade: "CGPA: 8.13",
      description:
        "Currently pursuing MCA with focus on advanced computer science concepts, software engineering, and practical application development",
    },
    {
      icon: <FaUniversity />,
      degree: "Bachelor of Science",
      institution: "University of Allahabad",
      duration: "Aug 2019 - June 2022",
      grade: "Percentage: 80.9%",
      description:
        "B.Sc in Mathematics, Physics, Defence and Strategic Studies, providing strong analytical and problem-solving foundation",
    },
  ];

  return (
    <section className="education">
      <div className="container">
        <motion.div
          className="education-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            <span className="orange-line"></span>
            Education
          </h2>

          <div className="education-timeline">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                className="education-item"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="education-icon">{edu.icon}</div>
                <div className="education-content-item">
                  <div className="education-header">
                    <h3 className="education-degree">{edu.degree}</h3>
                    <div className="education-grade">
                      <FaAward className="grade-icon" />
                      <span>{edu.grade}</span>
                    </div>
                  </div>
                  <h4 className="education-institution">{edu.institution}</h4>
                  <div className="education-duration">
                    <FaCalendarAlt className="duration-icon" />
                    <span>{edu.duration}</span>
                  </div>
                  <p className="education-description">{edu.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
