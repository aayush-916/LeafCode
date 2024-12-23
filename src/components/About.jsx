import React from "react";
import Nav from "./Nav"; // Import your Nav component
import Footer from "./Footer"; // Import your Footer component
import styles from './About.module.css';
import { Helmet } from "react-helmet";
import { useEffect } from "react";

function About() {
  useEffect(() =>{
    window.scrollTo(0,0);
  })
  return (
    <>
    <Helmet>
        <title>About Us - LeafCode Technology</title>
        <meta
          name="description"
          content="LeafCode Technology - Your trusted partner for website design, app development, and software solutions in Patna. We specialize in modern, user-friendly websites, innovative apps, and comprehensive IT services to help businesses grow."
        />
      </Helmet>
      <Nav />
      <div className={styles["about-us"]}>
        <div className={styles["about-hero"]}>
          <div className={styles["hero-content"]}>
            <h1 className={styles["hero-title"]}>About Us</h1>
            <h2 className={styles["hero-title2"]}>Empowering Your Digital Presence</h2>
            <p className={styles["hero-subtitle"]}>
              Bringing together innovation and expertise in Website and App development, e-commerce, and SEO.
            </p>
          </div>
        </div>
        <div className={styles["about-sections"]}>
          <div className={styles.section}>
            <h2>Our Mission</h2>
            <p>
              To provide scalable and secure digital solutions that help businesses thrive in a competitive market. Whether it's custom web applications, advanced e-commerce platforms, we prioritize quality and client satisfaction.
            </p>
          </div>
          <div className={styles.section}>
            <h2>What We Offer</h2>
            <div className={styles["service-list"]}>
              <div className={styles["service-item"]}>
                <h3>Website Development</h3>
                <p>Creating responsive, dynamic websites that capture attention and drive engagement.</p>
              </div>
              <div className={styles["service-item"]}>
                <h3>App Development</h3>
                <p>Building intuitive mobile applications with seamless user experiences.</p>
              </div>
              <div className={styles["service-item"]}>
                <h3>E-commerce Solutions</h3>
                <p>End-to-end e-commerce setups with Shopify and custom platforms for your retail needs.</p>
              </div>
              <div className={styles["service-item"]}>
                <h3>WordPress Development</h3>
                <p>Customized WordPress sites that align with your brand identity.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
