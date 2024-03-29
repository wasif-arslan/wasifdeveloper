import React, { useState, useEffect } from "react";
import man from "images/dev.png";
import { motion, AnimatePresence } from "framer-motion";
// Router
import { Link } from "react-scroll";
import "./home.css";

const contentVariants = {
  initial: {
    translateX: "-100vw",
    opacity: 0,
  },

  animate: {
    translateX: "0vw",
    opacity: 1,
    transition: {
      duration: 2,
      when: "beforeChildren",
    },
  },
};

const childrenVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },

  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      type: "spring",
      delay: 0.5,
    },
  },

  exit: {
    opacity: 0,
    y: -200,
    transition: { duration: 0.2 },
  },
};

const Home = () => {
  // State
  const [showHeadingOne, setShowHeadingOne] = useState(true);
  const [showHeadingTwo, setShowHeadingTwo] = useState(false);
  const [showHeadingThree, setShowHeadingThree] = useState(false);
  const [showHeadingFour, setShowHeadingFour] = useState(false);
  const [showHeadingFive, setShowHeadingFive] = useState(false);


  // Timeout
  useEffect(() => {
    setTimeout(() => {
      if (showHeadingOne) {
        setShowHeadingOne(false);
        setShowHeadingThree(false);
        setShowHeadingTwo(true);
        setShowHeadingFour(false);
        setShowHeadingFive(false);

      } else if (showHeadingTwo) {
        setShowHeadingOne(false);
        setShowHeadingTwo(false);
        setShowHeadingThree(true);
        setShowHeadingFour(false);
        setShowHeadingFive(false);

      } else if (showHeadingThree) {
        setShowHeadingOne(false);
        setShowHeadingTwo(false);
        setShowHeadingThree(false);
        setShowHeadingFour(true);
        setShowHeadingFive(false);

      } else if (showHeadingFour) {
        setShowHeadingOne(false);
        setShowHeadingTwo(false);
        setShowHeadingThree(true);
        setShowHeadingFour(false);
        setShowHeadingFive(true);

      } else {
        setShowHeadingOne(true);
        setShowHeadingTwo(false);
        setShowHeadingThree(false);
        setShowHeadingFour(false);
        setShowHeadingFive(false);
      }
    }, 3000);
  }, [showHeadingOne, showHeadingTwo, showHeadingThree, showHeadingFour, showHeadingFive]);

  return (
    <section className="home-container" id="home" name="home">
      <motion.div
        className="content-container"
        variants={contentVariants}
        initial="initial"
        animate="animate"
      >
        <h4 className="welcome-content">WELCOME TO MY WORLD</h4>
        <br />
        <h1 className="main-heading">Hi, I’m Wasif</h1>
        {/* Animate Skill Content */}
        <div className="skill-animation">
          <AnimatePresence>
            {showHeadingOne && (
              <motion.h2
                className="skill-content"
                variants={childrenVariants}
                exit="exit"
                animate="animate"
                initial="initial"
              >
                DevOps Engineer
              </motion.h2>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {showHeadingTwo && (
              <motion.h2
                className="skill-content"
                variants={childrenVariants}
                exit="exit"
                animate="animate"
                initial="initial"
              >
                Full Stack Web Developer
              </motion.h2>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {showHeadingThree && (
              <motion.h2
                className="skill-content"
                variants={childrenVariants}
                exit="exit"
                animate="animate"
                initial="initial"
              >
                ReactJS / GatsbyJs Developer
              </motion.h2>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {showHeadingFour && (
              <motion.h2
                className="skill-content"
                variants={childrenVariants}
                exit="exit"
                animate="animate"
                initial="initial"
              >
                Data Scientist
              </motion.h2>
            )}
          </AnimatePresence>
          
          <AnimatePresence>
            {showHeadingFive && (
              <motion.h2
                className="skill-content"
                variants={childrenVariants}
                exit="exit"
                animate="animate"
                initial="initial"
              >
                Fiverr Level One Seller
              </motion.h2>
            )}
          </AnimatePresence>
          
        </div>
        {/* // */}
        <Link
          className="button home-btn"
          to={"portfolio"}
          hashSpy={true}
          spy={true}
          smooth={true}
          delay={100}
          offset={-100}
          duration={500}
        >
          See My Work
        </Link>
      </motion.div>

      <motion.div
        className="svg-container"
        animate={{ translateY: [-20, 0, -20, 0] }}
        transition={{ yoyo: Infinity, duration: 6 }}
      >
        <img className="svg" src={man} alt="" />
      </motion.div>
    </section>
  );
};

export default Home;
