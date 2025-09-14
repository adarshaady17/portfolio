import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaTrophy, FaMedal, FaChartLine } from "react-icons/fa";
import "./CodingPlatforms.css";

const CodingPlatforms = () => {
  const platforms = [
    {
      name: "LeetCode",
      icon: <FaCode />,
      profile: "https://leetcode.com/adarshaady17",
      stats: [
        { label: "Problems Solved", value: "100+" },
        { label: "Contest Rating", value: "1000+" },
        { label: "Badges Earned", value: "15+" },
      ],
      description: "Competitive programming and algorithm practice platform",
      color: "#ff6b35",
    },
    {
      name: "HackerRank",
      icon: <FaTrophy />,
      profile: "https://hackerrank.com/adarshaady17",
      stats: [
        { label: "Skills Verified", value: "8+" },
        { label: "Certificates", value: "5+" },
        { label: "Ranking", value: "Top 20%" },
      ],
      description: "Technical skills assessment and certification platform",
      color: "#2ec866",
    },
  ];

  return (
    <section className="coding-platforms">
      <div className="container">
        <motion.div
          className="platforms-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            <span className="orange-line"></span>
            Coding Platforms
          </h2>

          <div className="platforms-grid">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                className="platform-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="platform-header">
                  <div
                    className="platform-icon"
                    style={{ color: platform.color }}
                  >
                    {platform.icon}
                  </div>
                  <h3 className="platform-name">{platform.name}</h3>
                </div>

                <p className="platform-description">{platform.description}</p>

                <div className="platform-stats">
                  {platform.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="stat-item">
                      <div
                        className="stat-value"
                        style={{ color: platform.color }}
                      >
                        {stat.value}
                      </div>
                      <div className="stat-label">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <motion.a
                  href={platform.profile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="platform-link"
                  style={{ borderColor: platform.color, color: platform.color }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Profile
                </motion.a>
              </motion.div>
            ))}
          </div>

          <div className="achievements-section">
            <motion.div
              className="achievements-content"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="achievements-title">
                <FaMedal className="achievement-icon" />
                Key Achievements
              </h3>
              <div className="achievements-list">
                <div className="achievement-item">
                  <FaChartLine className="achievement-bullet" />
                  <span>
                    Consistent problem-solving on competitive platforms
                  </span>
                </div>
                <div className="achievement-item">
                  <FaTrophy className="achievement-bullet" />
                  <span>
                    Multiple skill certifications in various technologies
                  </span>
                </div>
                <div className="achievement-item">
                  <FaMedal className="achievement-bullet" />
                  <span>
                    Active participation in coding contests and challenges
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CodingPlatforms;
