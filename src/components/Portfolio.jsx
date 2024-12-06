import React from 'react';
import Contact from './Contact';
import Footer from './Footer';
import Nav from './Nav';
import Whatsapp from './Whatsapp';
// import styles from './Portfolio.module.css'; // Only use styles from Portfolio.module.css here
import styles from './Project.module.css';
import { Helmet } from "react-helmet";

function Portfolio() {
  return (
    <>
    <Helmet>
        <title>Portfolio - LeafCode Technology</title>
        <meta
          name="description"
          content="Explore the portfolio of LeafCode Technology – the best website design, app development, and software company in Patna. View our successful projects and see how we deliver innovative IT solutions for businesses."
        />
      </Helmet>
      <Nav />
      <Whatsapp />

      <div className={styles.main2}>
        <div className={styles.tx2}>
          <h2>Portfolio</h2>
          <p>
            We are thrilled to have worked with many satisfied clients across various industries. Our deep market knowledge spans multiple sectors, allowing us to bring valuable insights to each project. Below, you’ll find a selection of our esteemed clients.
          </p>
        </div>
        
        <div className={styles.grd}>
          <div className={styles.crd}>
            <a href='https://www.tachyonsecurity.eu/'>
              <img src="/techyon.png" alt="TechYon Security" />
            </a>
            <h3>TechYon Security</h3>
            <p>Cyber Security Company Website</p>
          </div>

          <div className={styles.crd}>
            <a href='https://weavekala.com/collections/noor-collection?srsltid=AfmBOopNAI1GChe8smA0-guCradd14gD5Jc0dabUI-z1Z_HyM6idjlVb'>
              <img src="/noor.png" alt="WeaveKala" />
            </a>
            <h3>WeaveKala</h3>
            <p>Ecommerce Website</p>
          </div>

          <div className={styles.crd}>
            <a href='https://balajitradingcompany.netlify.app'>
              <img src="/btc.png" alt="BTC" />
            </a>
            <h3>BTC</h3>
            <p>A Security System Company Website</p>
          </div>

          <div className={styles.crd}>
            <a href='https://fixermanme.com/'>
              <img src="/fixermanme.png" alt="Fixermanme" />
            </a>
            <h3>Fixermanme</h3>
            <p>Website for Phone Service Center in UAE</p>
          </div>

          <div className={styles.crd}>
            <a href='https://www.gatewayvisasolution.com/'>
              <img src="/gateway.png" alt="Gateway Visa" />
            </a>
            <h3>Gateway Visa</h3>
            <p>Gateway Visa Solution Website</p>
          </div>

          <div className={styles.crd}>
            <a href='https://omprinter.netlify.app'>
              <img src="/om.png" alt="Om Printers" />
            </a>
            <h3>Om Printers</h3>
            <p>Wedding Card Store Website</p>
          </div>
        </div>
      </div>

      <Contact />
      <Footer />
    </>
  );
}

export default Portfolio;
