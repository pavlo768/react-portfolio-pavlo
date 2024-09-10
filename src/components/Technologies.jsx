import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion } from "framer-motion";
import './Technologies.css'; // Додаємо файл зі стилями

const iconsVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="technologies-container">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="technologies-title"
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="technologies-icons-container"
      >
        <motion.div
          variants={iconsVariants(2.5)}
          initial="initial"
          animate="animate"
          className="technology-icon-wrapper"
        >
          <RiReactjsLine className="technology-icon text-cyan-500" />
        </motion.div>
        <motion.div
          variants={iconsVariants(3)}
          initial="initial"
          animate="animate"
          className="technology-icon-wrapper"
        >
          <FaNodeJs className="technology-icon text-green-500" />
        </motion.div>
        <motion.div
          variants={iconsVariants(5)}
          initial="initial"
          animate="animate"
          className="technology-icon-wrapper"
        >
          <TbBrandNextjs className="technology-icon text-white" />
        </motion.div>
        <motion.div
          variants={iconsVariants(2)}
          initial="initial"
          animate="animate"
          className="technology-icon-wrapper"
        >
          <SiMongodb className="technology-icon text-green-500" />
        </motion.div>
        <motion.div
          variants={iconsVariants(6)}
          initial="initial"
          animate="animate"
          className="technology-icon-wrapper"
        >
          <FaGithub className="technology-icon text-white" />
        </motion.div>
        <motion.div
          variants={iconsVariants(4)}
          initial="initial"
          animate="animate"
          className="technology-icon-wrapper"
        >
          <BiLogoPostgresql className="technology-icon text-sky-700" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
