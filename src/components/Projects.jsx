import { PROJECTS } from "../information";
import { motion } from "framer-motion";
import './Projects.css';

const Projects = () => {
  return (
    <div className="projects-container">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="projects-title"
      >
        Projects
      </motion.h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="project-wrapper">
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -100 }}
              transition={{ duration: 1 }}
              className="project-image-container"
            >
              <img
                src={project.image}
                width={150}
                height={150}
                alt={project.title}
                className="project-image"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 100 }}
              transition={{ duration: 1 }}
              className="project-description-container"
            >
              <h6 className="project-title">{project.title}</h6>
              <p className="project-description">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span key={index} className="project-technology">
                  {tech}
                </span>
              ))}
              {project.demoLink && (
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="demo-button"
                >
                  Demo
                </a>
              )}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
