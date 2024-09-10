import { HERO_CONTENT } from '../information';
import profilePic from "../assets/kevinRushProfile.png";
import { motion } from "framer-motion";
import "./Hero.css";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay }
  }
});

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-inner">
        <div className="hero-text-container">
          <div className="hero-text-content">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="hero-title"
            >
              Pavlo Radionov
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="hero-subtitle"
            >
              Frontend Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="hero-description"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="hero-image-container">
          <div className="hero-image-wrapper">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic}
              alt="Pavlo Radionov"
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
