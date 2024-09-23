import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../information";
import { motion } from "framer-motion";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">
        About 
        <span className="about-me-text">
          Me
        </span>
      </h1>
      <div className="about-content">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.2 }}
          className="about-image-container"
        >
          <div className="about-image-wrapper">
            <img className="about-image" src={aboutImg} alt="about" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="about-text-container"
        >
          <div className="about-text-wrapper">
            <p className="about-text">{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
