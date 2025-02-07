import React from "react";
import ReactTypingEffect from "react-typing-effect";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styles from './Home.module.css';

function Home() {
  return (
    <>
     <div style={{ overflow: "visible" }}>
      <motion.div
        className={styles.main}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.5 }} // Trigger when 50% of the element is visible
      >
        <div className={styles.tx}>
          <h1>
            Best Web & App Development Company in
            <ReactTypingEffect
              text={["USA ", "UK ", "India ", "UAE ", "Qatar "]}
              speed={300} // Typing speed of each character
              eraseSpeed={100} // Erase speed of each character
              typingDelay={200} // Delay before typing each word
              eraseDelay={1200} // Delay before erasing each word
              className={styles.type}
            />
          </h1>
          <p>Transforming Visions into Reality</p>
          <article className={styles.longar}>
            We are committed to developing a user-friendly website that can
            rapidly increase audience engagement and conversion rates. Get
            cost-effective, high-quality website design services from us to
            boost your digital marketing campaigns. Using our web development
            and digital marketing services, we assist businesses of all sizes in
            expanding their operations.
          </article>
          <article className={styles.shortar}>
            Enhance engagement and conversions with our user-friendly,
            high-quality web design services. We help businesses grow with
            impactful, affordable website solutions.
          </article>
          <Link to="/contact">
            <button className={styles["button-85"]}>Contact Us ➜</button>
          </Link>
        </div>

        <div className={styles.gif}>
          <img src="./im2.gif" alt="Animation"/>
        </div>
      </motion.div>
      </div>
    </>
  );
}

export default Home;
