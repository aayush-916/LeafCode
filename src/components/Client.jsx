import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import styles from './Client.module.css';

function Client() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    fade: true
  };

  const reviews = [
    {
      name: "John Doe",
      review: "Exceptional work! Our website looks professional and functions flawlessly. The team exceeded our expectations. Highly recommended!",
      company: "Tech Innovations"
    },
    {
      name: "Oliver P.",
      review: "Amazing team! They understood my requirements perfectly.",
      company: "FinTech Solutions"
    },
    {
      name: "Liam R.",
      review: "Quick and efficient service! Our e-commerce site was live in days, boosting our online sales tremendously.",
      company: "Style Haven"
    },
    {
      name: "Emma C.",
      review: "Fantastic experience! They perfectly understood our brand and delivered a stunning, user-friendly website.",
      company: "Urban Architects"
    },
    {
      name: "Noah J.",
      review: "Impressive technical expertise! They built a fast and secure platform, which our clients love.",
      company: "Legal Dynamics"
    },
    {
      name: "Ava L.",
      review: "Professional and reliable team. Communication was seamless, and the results were exactly what we envisioned.",
      company: "Healthy Living Co."
    },
    {
      name: "Ethan M",
      review: "The design and functionality are superb! Our customer engagement improved significantly with the new layout.",
      company: "Digital Printworks"
    }
  ];

  return (
    <>
      <div className={styles.main3}>
        <div className={styles.hed}>
          <h2>WHAT OUR CLIENTS THINK OF LEAFCODE</h2>
          <h1>Over the years, we've built up fantastic relationships with our customers. We are now recognized all around the world as a reliable digital partner.</h1>
        </div>

        <div className={styles["client-review-section"]}>
          <Slider {...settings}>
            {reviews.map((client, index) => (
              <div key={index} className={styles["review-card"]}>
                <p className={styles["review-text"]}>"{client.review}"</p>
                <p className={styles["client-name"]}>- {client.name}, {client.company}</p>
              </div>
            ))}
          </Slider>
        </div>

        <div className={styles.cl}>
          <h1>Our Happy Clients</h1>
        </div>

        <div className={styles.marq}>
          <marquee scrolldelay="5">
            <img src='/weavekala-logo.avif' alt="Weavekala Logo" />
            <img src='/fixerman-logo.png' alt="Fixerman Logo" />
            <h2>Balaji Trading</h2>
            <img src='/om-logo.png' alt="Om Logo" />
            <img src='/GVS-Logo.webp' alt="GVS Logo" />
            <img src='/weavekala-logo.avif' alt="Weavekala Logo" />
            <img src='/fixerman-logo.png' alt="Fixerman Logo" />
            <h2>Balaji Trading</h2>
            <img src='/om-logo.png' alt="Om Logo" />
            <img src='/GVS-Logo.webp' alt="GVS Logo" />
            <img src='/weavekala-logo.avif' alt="Weavekala Logo" />
            <img src='/fixerman-logo.png' alt="Fixerman Logo" />
            <h2>Balaji Trading</h2>
            <img src='/om-logo.png' alt="Om Logo" />
            <img src='/GVS-Logo.webp' alt="GVS Logo" />
            <img src='/weavekala-logo.avif' alt="Weavekala Logo" />
            <img src='/fixerman-logo.png' alt="Fixerman Logo" />
            <h2>Balaji Trading</h2>
            <img src='/om-logo.png' alt="Om Logo" />
            <img src='/GVS-Logo.webp' alt="GVS Logo" />
            <img src='/weavekala-logo.avif' alt="Weavekala Logo" />
            <img src='/fixerman-logo.png' alt="Fixerman Logo" />
            <h2>Balaji Trading</h2>
            <img src='/om-logo.png' alt="Om Logo" />
            <img src='/GVS-Logo.webp' alt="GVS Logo" />
            <img src='/weavekala-logo.avif' alt="Weavekala Logo" />
            <img src='/fixerman-logo.png' alt="Fixerman Logo" />
            <h2>Balaji Trading</h2>
            <img src='/om-logo.png' alt="Om Logo" />
            <img src='/GVS-Logo.webp' alt="GVS Logo" />
            <img src='/weavekala-logo.avif' alt="Weavekala Logo" />
            <img src='/fixerman-logo.png' alt="Fixerman Logo" />
            <h2>Balaji Trading</h2>
            <img src='/om-logo.png' alt="Om Logo" />
            <img src='/GVS-Logo.webp' alt="GVS Logo" />
            <img src='/weavekala-logo.avif' alt="Weavekala Logo" />
            <img src='/fixerman-logo.png' alt="Fixerman Logo" />
            <h2>Balaji Trading</h2>
            <img src='/om-logo.png' alt="Om Logo" />
            <img src='/GVS-Logo.webp' alt="GVS Logo" />
            <img src='/weavekala-logo.avif' alt="Weavekala Logo" />
            <img src='/fixerman-logo.png' alt="Fixerman Logo" />
            <h2>Balaji Trading</h2>
            <img src='/om-logo.png' alt="Om Logo" />
            <img src='/GVS-Logo.webp' alt="GVS Logo" />
            <img src='/weavekala-logo.avif' alt="Weavekala Logo" />
            <img src='/fixerman-logo.png' alt="Fixerman Logo" />
            <h2>Balaji Trading</h2>
            <img src='/om-logo.png' alt="Om Logo" />
            <img src='/GVS-Logo.webp' alt="GVS Logo" />
            <img src='/weavekala-logo.avif' alt="Weavekala Logo" />
            <img src='/fixerman-logo.png' alt="Fixerman Logo" />
            <h2>Balaji Trading</h2>
            <img src='/om-logo.png' alt="Om Logo" />
            <img src='/GVS-Logo.webp' alt="GVS Logo" />
            <img src='/weavekala-logo.avif' alt="Weavekala Logo" />
            <img src='/fixerman-logo.png' alt="Fixerman Logo" />
            <h2>Balaji Trading</h2>
            <img src='/om-logo.png' alt="Om Logo" />
            <img src='/GVS-Logo.webp' alt="GVS Logo" />
            <img src='/weavekala-logo.avif' alt="Weavekala Logo" />
            <img src='/fixerman-logo.png' alt="Fixerman Logo" />
            <h2>Balaji Trading</h2>
            <img src='/om-logo.png' alt="Om Logo" />
            <img src='/GVS-Logo.webp' alt="GVS Logo" />
            <img src='/weavekala-logo.avif' alt="Weavekala Logo" />
            <img src='/fixerman-logo.png' alt="Fixerman Logo" />
            <h2>Balaji Trading</h2>
            <img src='/om-logo.png' alt="Om Logo" />
            <img src='/GVS-Logo.webp' alt="GVS Logo" />
            <img src='/weavekala-logo.avif' alt="Weavekala Logo" />
            <img src='/fixerman-logo.png' alt="Fixerman Logo" />
            <h2>Balaji Trading</h2>
            <img src='/om-logo.png' alt="Om Logo" />
            <img src='/GVS-Logo.webp' alt="GVS Logo" />
            <img src='/weavekala-logo.avif' alt="Weavekala Logo" />
            <img src='/fixerman-logo.png' alt="Fixerman Logo" />
            <h2>Balaji Trading</h2>
            <img src='/om-logo.png' alt="Om Logo" />
            <img src='/GVS-Logo.webp' alt="GVS Logo" />
            
          </marquee>
        </div>
      </div>
    </>
  );
}

export default Client;
