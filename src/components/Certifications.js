import React from "react";
import { motion } from "framer-motion";
import { FaCertificate, FaAward, FaGraduationCap } from "react-icons/fa";
import "./Certifications.css";

const Certifications = () => {
  const certifications = [
    {
      icon: <FaCertificate />,
      title: "MERN Stack Development Certification",
      issuer: "Apna College",
      date: "2024",
      description:
        "In-depth course covering MongoDB, Express.js, React.js, and Node.js with practical projects and hands-on experience in full-stack development",
    },
    {
      icon: <FaAward />,
      title: "Data Structures and Algorithms Certification",
      issuer: "Apna College",
      date: "2024",
      description:
        "Proficiency in solving complex problems using data structures and algorithms, including arrays, linked lists, trees, graphs, and dynamic programming",
    },
    {
      icon: <FaGraduationCap />,
      title: "Master of Computer Applications",
      issuer: "IET Lucknow",
      date: "2023-2025",
      description:
        "Currently pursuing MCA with 8.13 CGPA, focusing on advanced computer science concepts and practical application development",
    },
    {
      icon: <FaCertificate />,
      title: "Bachelor of Science",
      issuer: "University of Allahabad",
      date: "2019-2022",
      description:
        "B.Sc in Mathematics, Physics, Defence and Strategic Studies with 80.9% marks, providing strong analytical and problem-solving foundation",
    },
  ];

  return (
    <section className="certifications">
      <div className="container">
        <motion.div
          className="certifications-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            <span className="orange-line"></span>
            Certifications
          </h2>

          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                className="certification-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="cert-icon">{cert.icon}</div>
                <div className="cert-content">
                  <h3 className="cert-title">{cert.title}</h3>
                  <p className="cert-issuer">{cert.issuer}</p>
                  <p className="cert-date">{cert.date}</p>
                  <p className="cert-description">{cert.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
