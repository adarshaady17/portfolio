import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaTrophy, FaMedal, FaChartLine } from "react-icons/fa";
import "./CodingPlatforms.css";

const CodingPlatforms = () => {
  const platforms = [
    {
      name: "LeetCode",
      icon: <FaCode />,
      profile: "https://leetcode.com/u/adarshaady/",
      stats: [
        { label: "Problems Solved", value: "339" },
        { label: "Easy Problems", value: "162/899" },
        { label: "Medium Problems", value: "167/1918" },
        { label: "Hard Problems", value: "10/869" },
        { label: "Max Streak", value: "19 days" },
        { label: "Active Days", value: "152 days" },
      ],
      description: "Competitive programming and algorithm practice platform",
      color: "#ff6b35",
    },
    {
      name: "HackerRank",
      icon: <FaTrophy />,
      profile: "https://www.hackerrank.com/profile/adarshsahu6236",
      stats: [
        { label: "Problem Solving", value: "5 ⭐" },
        { label: "SQL", value: "5 ⭐" },
        { label: "Java", value: "4 ⭐" },
        { label: "C Language", value: "Badge" },
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
                    Solved 339 problems on LeetCode with strong performance
                    across all difficulty levels
                  </span>
                </div>
                <div className="achievement-item">
                  <FaTrophy className="achievement-bullet" />
                  <span>
                    Achieved 5-star rating in Problem Solving and SQL on
                    HackerRank
                  </span>
                </div>
                <div className="achievement-item">
                  <FaMedal className="achievement-bullet" />
                  <span>
                    Earned 4-star rating in Java and C Language badge on
                    HackerRank
                  </span>
                </div>
                <div className="achievement-item">
                  <FaCode className="achievement-bullet" />
                  <span>
                    Maintained 19-day maximum streak and 152 active days on
                    LeetCode
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
