import React from "react";
import home1 from "../img/home1.png";
import { About, Description, Hide, Image } from "../styles.js";
//Framer motion
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2>true.</motion.h2>
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
