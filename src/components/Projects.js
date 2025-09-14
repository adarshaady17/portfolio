import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./Projects.css";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

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
      live: "https://myprepspot.com",
    },
    {
      title: "Quick-Kart",
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
      github: "https://github.com/adarshaady17/Quick-Kart",
      live: "https://quick-kart-lilac.vercel.app",
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
        "JavaScript",
      ],
      github: "https://github.com/adarshaady17/Career-Friendly",
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
      github: "https://github.com/adarshaady17/WanderLust",
      live: "https://wanderlust-k6jr.onrender.com/listings",
    },
    {
      title: "Sorting Visualizer",
      description:
        "Interactive web application to visualize sorting algorithms including Insertion, Selection, Bubble, Merge, and Quick Sort with efficiency comparison (O(n²) vs. O(n log n)).",
      technologies: ["HTML", "CSS", "JavaScript", "Vercel"],
      github: "https://github.com/adarshaady17/Sorting-Visualizer",
      live: "https://sorting-visualizer-three-pi.vercel.app",
    },
    {
      title: "FastKart",
      description:
        "E-commerce platform with modern UI/UX, shopping cart functionality, product filtering, and responsive design for seamless online shopping experience.",
      technologies: [
        "React.js",
        "CSS3",
        "JavaScript",
        "Local Storage",
        "Vercel",
      ],
      github: "https://github.com/adarshaady17/FastKart",
    },
    {
      title: "Todo App",
      description:
        "Task management application with add, edit, delete, and mark complete functionality. Features local storage persistence and clean, intuitive interface.",
      technologies: [
        "React.js",
        "CSS3",
        "JavaScript",
        "Local Storage",
        "Vercel",
      ],
      github: "https://github.com/adarshaady17/Todoapp",
    },
    {
      title: "Tic Tac Toe",
      description:
        "Classic Tic Tac Toe game with interactive UI, win detection, score tracking, and reset functionality. Built with modern JavaScript and responsive design.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Vercel"],
      github: "https://github.com/adarshaady17/Tic_Tak_Toe",
      live: "https://tic-tak-toe-weld-xi.vercel.app/",
    },
    {
      title: "Countdown Timer",
      description:
        "Customizable countdown timer application with multiple timer options, visual progress indicators, and audio notifications for time management.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Web Audio API", "Vercel"],
      github: "https://github.com/adarshaady17/Countdown-timer",
    },
    {
      title: "Simon Game",
      description:
        "Memory-based Simon game with increasing difficulty levels, sound effects, and score tracking. Tests and improves memory and pattern recognition skills.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Web Audio API", "Vercel"],
      github: "https://github.com/adarshaady17/simon-Game",
    },
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 6);

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
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.title}
                className="project-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
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
                    {project.github && (
                      <a href={project.github} className="project-link">
                        <FaGithub />
                        Code
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} className="project-link">
                        <FaExternalLinkAlt />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {projects.length > 6 && (
            <motion.div
              className="see-more-container"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.button
                className="see-more-btn"
                onClick={() => setShowAll(!showAll)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {showAll ? "Show Less" : "See More Projects"}
              </motion.button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
