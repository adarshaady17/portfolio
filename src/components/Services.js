import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaMobile, FaCloud, FaRocket } from "react-icons/fa";
import "./Services.css";

const Services = () => {
  const services = [
    {
      icon: <FaCode />,
      title: "Full-Stack Development",
      description:
        "Building complete web applications using MERN stack (MongoDB, Express.js, React.js, Node.js) with modern development practices and scalable architecture",
    },
    {
      icon: <FaMobile />,
      title: "Frontend Development",
      description:
        "Creating responsive and interactive user interfaces using React.js, HTML5, CSS3, and Tailwind CSS with focus on user experience and performance",
    },
    {
      icon: <FaCloud />,
      title: "Backend Development",
      description:
        "Developing robust server-side applications using Node.js, Express.js, and databases like MongoDB and MySQL with RESTful API design",
    },
    {
      icon: <FaRocket />,
      title: "Website Hosting & Deployment",
      description:
        "Expert in deploying and hosting web applications using Vercel and Render platforms with 1+ year of experience in production deployment and maintenance",
    },
  ];

  return (
    <section className="services">
      <div className="container">
        <motion.div
          className="services-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            <span className="orange-line"></span>
            Services
          </h2>

          <div className="services-list">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="service-item"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
