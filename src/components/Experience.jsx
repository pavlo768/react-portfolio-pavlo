import { EXPERIENCES } from "../information";
import { motion } from "framer-motion";
import "./Experience.css"; 

const Experience = () => {
  return (
    <div className="experience-container">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="experience-title"
      >
        Experience - Courses
      </motion.h1>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="experience-item">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="experience-year"
            >
              <p className="experience-year-text">{experience.year}</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="experience-details"
            >
              <h6 className="experience-role">
                {experience.role} -{" "}
                <span className="experience-company">{experience.company}</span>
              </h6>
              <p className="experience-description">{experience.description}</p>

              <div className="experience-technologies">
                {experience.technologies.map((tech, index) => (
                  <span key={index} className="technology-tag">
                    {tech}
                  </span>
                ))}
              </div>

              {experience.certificateLink && (
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href={experience.certificateLink}
                  className="certificate-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Certificate
                </motion.a>
              )}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
