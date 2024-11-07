import React from 'react';
import styles from './Project.module.css';

function Project() {
  return (
    <>
      <div className={styles.main2}>
        <div className={styles.tx2}>
          <h2>Our Awesome Work!</h2>
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
            <p>Website For Phone Service Center in UAE</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
