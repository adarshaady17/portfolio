import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "MyPrepSpot",
      description:
        "Library Booking & Productivity Platform with Admin, Owner, and User Panels. Features Google Authentication, real-time availability, Pomodoro Timer, and Razorpay integration for seat-based pricing.",
      technologies: [
        "Next.js",
        "Node.js",
        "Express.js",
        "Supabase",
        "Tailwind CSS",
        "Razorpay",
        "Google Maps API",
        "Vercel",
      ],
      github: "https://github.com/adarshaady17",
      live: "https://myprepspot.com",
      image: "/api/placeholder/400/300",
    },
    {
      title: "QuickKart",
      description:
        "Full-stack E-commerce Grocery Platform with secure authentication, inventory management, payment integration, and comprehensive admin panel for product approval and order management.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
        "Cloudinary",
        "Razorpay",
        "Vercel",
      ],
      github: "https://github.com/adarshaady17",
      live: "https://quick-kart-lilac.vercel.app",
      image: "/api/placeholder/400/300",
    },
    {
      title: "Sorting Algorithm Visualizer",
      description:
        "Interactive web application to visualize sorting algorithms including Insertion, Selection, Bubble, Merge, and Quick Sort with efficiency comparison (O(n²) vs. O(n log n)).",
      technologies: ["HTML", "CSS", "JavaScript", "Vercel"],
      github: "https://github.com/adarshaady17",
      live: "https://sorting-visualizer-three-pi.vercel.app",
      image: "/api/placeholder/400/300",
    },
    {
      title: "Career-Friendly",
      description:
        "Job portal platform where job seekers can create profiles, upload resumes, search & apply for jobs, while recruiters can post jobs and manage applications with RESTful APIs.",
      technologies: [
        "React.js",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Cloudinary",
      ],
      github: "https://github.com/adarshaady17",
      live: "https://github.com/adarshaady17",
      image: "/api/placeholder/400/300",
    },
    {
      title: "WanderLust",
      description:
        "Travel listing platform where users can signup, login, create, edit, and delete listings with reviews/ratings system and integrated RESTful APIs with Cloudinary for media handling.",
      technologies: [
        "JavaScript",
        "Bootstrap",
        "Node.js",
        "Express.js",
        "Cloudinary",
        "Render",
      ],
      github: "https://github.com/adarshaady17",
      live: "https://wanderlust-k6jr.onrender.com",
      image: "/api/placeholder/400/300",
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          className="projects-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            <span className="orange-line"></span>
            Projects
          </h2>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="project-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="project-image">
                  <div className="project-placeholder">
                    <span>Project Image</span>
                  </div>
                </div>

                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  <div className="project-technologies">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-links">
                    <a href={project.github} className="project-link">
                      <FaGithub />
                      Code
                    </a>
                    <a href={project.live} className="project-link">
                      <FaExternalLinkAlt />
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
