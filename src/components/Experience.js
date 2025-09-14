import React from "react";
import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCheckCircle,
} from "react-icons/fa";
import "./Experience.css";

const Experience = () => {
  const experiences = [
    {
      company: "GFAM MEDIATECH",
      position: "Full Stack Developer",
      duration: "Current",
      location: "Remote",
      type: "Full-time",
      description:
        "Currently working as a Full Stack Developer, building scalable web applications and contributing to innovative projects with focus on deployment and production-ready solutions.",
      technologies: [
        "React.js",
        "Node.js",
        "MongoDB",
        "Express.js",
        "JavaScript",
        "CSS3",
        "Next.js",
        "Supabase",
        "Tailwind CSS",
        "Razorpay",
        "Nodemailer",
        "Google Maps API",
        "Vercel",
        "Deployment",
        "SEO",
        "Open Graph",
      ],
      achievements: [
        "Implemented Google Authentication (Supabase) and OTP verification with Nodemailer for secure signup/login",
        "Built a library booking system with real-time availability and Google Maps integration",
        "Added a Pomodoro Timer to boost study productivity",
        "Integrated Razorpay for payments with seat-based pricing and platform fee collection",
        "Created role-based panels: Admin (approve libraries, oversee bookings) and Owner (manage libraries, track bookings)",
        "Enhanced SEO with Open Graph (OG) tags, sitemap.xml, and robots.txt",
        "Delivered responsive, user-friendly UI with React.js + Tailwind CSS for smooth user experience",
        "Building scalable web applications and contributing to innovative projects",
      ],
    },
    {
      company: "Canvas Chrome",
      position: "MERN Stack Developer Intern",
      duration: "4 months",
      location: "Remote",
      type: "Internship",
      description:
        "Successfully completed a 4-month internship as a Full Stack Developer, gaining hands-on experience in building full-stack applications.",
      technologies: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "Cloudinary",
        "Razorpay",
        "Nodemailer",
        "Tailwind CSS",
        "Redux",
        "REST APIs",
        "Vercel",
      ],
      achievements: [
        "Built Quick Kart - Grocery E-Commerce Website with Razorpay Integration",
        "Developed Career Friendly - Job Portal with Role-Based Authentication",
        "Gained experience with Cloudinary, Razorpay, and Nodemailer",
        "Worked with Tailwind CSS, Redux, and REST APIs",
        "Learned deployment workflows and best practices",
      ],
    },
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.div
          className="experience-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            <span className="orange-line"></span>
            Experience
          </h2>

          <div className="experience-timeline">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                className="experience-item"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="experience-header">
                  <div className="experience-icon">
                    <FaBriefcase />
                  </div>
                  <div className="experience-info">
                    <h3 className="experience-position">{exp.position}</h3>
                    <h4 className="experience-company">{exp.company}</h4>
                    <div className="experience-meta">
                      <div className="experience-duration">
                        <FaCalendarAlt className="meta-icon" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="experience-location">
                        <FaMapMarkerAlt className="meta-icon" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="experience-type">
                        <span className="type-badge">{exp.type}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="experience-description">{exp.description}</p>

                <div className="experience-technologies">
                  <h5>Technologies Used:</h5>
                  <div className="tech-tags">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="experience-achievements">
                  <h5>Key Achievements:</h5>
                  <ul className="achievements-list">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="achievement-item">
                        <FaCheckCircle className="achievement-icon" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
