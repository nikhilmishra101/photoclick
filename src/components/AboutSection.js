import React from "react";
import home1 from "../img/home1.png";
import { About, Description, Hide, Image } from "../styles.js";
//Framer motion
import { motion } from "framer-motion";

const AboutSection = () => {
  const titleAnimation = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 2 } },
  };

  const container = {
    hidden: { x: 100 },
    show: {
      x: 0,
      transition: {
        duration: 0.75,
        ease: "easeOut",
        staggerChildren: 1,
      },
    },
  };
  return (
    <About>
      <Description>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="title"
        >
          <Hide>
            <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>true.</motion.h2>
          </Hide>
        </motion.div>
        <p>
          Contact us for any website or app development ideas that you have.We
          have professionals with amazing skills.
        </p>
        <button>Contact Us.</button>
      </Description>
      <Image>
        <img src={home1} alt="computer with webstack" />
      </Image>
    </About>
  );
};

export default AboutSection;
