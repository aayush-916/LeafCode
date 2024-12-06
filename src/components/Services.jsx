import React from "react";
import './Services.css'
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
function Services() {
  return (
    <motion.div
        className="service-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        id="services"
      >
        <Helmet>
        <title>Services - LeafCode Technology</title>
        <meta
          name="description"
          content="Discover premium services at LeafCode Technology – the best website design, app development, software solutions, and SEO services in Patna. Empowering your business with innovative digital solutions."
        />
      </Helmet>

      <h2 id="service" class="service-heading">
        Our <span>Services</span>
      </h2>
      <p class="service-description">
      Our custom web design, web development, mobile app, and digital marketing services can aid at the beginning of your business, the expansion of your online presence, and the promotion of your brand. In today's era of technological innovation, we assist our clients in becoming digital industry leaders.
      </p>

      <div class="service-grid">

        <div class="service-card">
          {/* <img src="/web-d.png" alt="CCTV Installation" /> */}
          <div className="icon-container">
          <div className="icon">
          <svg xmlns="http://www.w3.org/2000/svg" height="76px" viewBox="0 -960 960 960" width="76px" fill="#111" className="icon1"><path d="M160-120v-170l527-526q12-12 27-18t30-6q16 0 30.5 6t25.5 18l56 56q12 11 18 25.5t6 30.5q0 15-6 30t-18 27L330-120H160Zm80-80h56l393-392-28-29-29-28-392 393v56Zm560-503-57-57 57 57Zm-139 82-29-28 57 57-28-29ZM560-120q74 0 137-37t63-103q0-36-19-62t-51-45l-59 59q23 10 36 22t13 26q0 23-36.5 41.5T560-200q-17 0-28.5 11.5T520-160q0 17 11.5 28.5T560-120ZM183-426l60-60q-20-8-31.5-16.5T200-520q0-12 18-24t76-37q88-38 117-69t29-70q0-55-44-87.5T280-840q-45 0-80.5 16T145-785q-11 13-9 29t15 26q13 11 29 9t27-13q14-14 31-20t42-6q41 0 60.5 12t19.5 28q0 14-17.5 25.5T262-654q-80 35-111 63.5T120-520q0 32 17 54.5t46 39.5Z"/></svg>
          </div>
            <div className="rotating-ball"></div>
          </div>
          <div class="service-card-content">
            <h3 class="service-card-title">Website Design</h3>
            <p class="service-card-text">
            A well-designed website is key to creating a strong first impression, establishing trust, and building confidence with potential customers from the start.
            </p>
            <Link to="/contact">
            <button className="button-87">Discuss Project ➜</button>
            </Link>
          </div>
        </div>

        <div class="service-card">
          {/* <img src="/web-d.png" alt="CCTV Installation" /> */}
          <div className="icon-container">
          <div className="icon">
          <svg xmlns="http://www.w3.org/2000/svg" height="76px" viewBox="0 -960 960 960" width="76px" fill="#e8eaed"><path d="m384-336 56-58-86-86 86-86-56-58-144 144 144 144Zm192 0 144-144-144-144-56 58 86 86-86 86 56 58ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h168q13-36 43.5-58t68.5-22q38 0 68.5 22t43.5 58h168q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm280-590q13 0 21.5-8.5T510-820q0-13-8.5-21.5T480-850q-13 0-21.5 8.5T450-820q0 13 8.5 21.5T480-790ZM200-200v-560 560Z"/></svg>
          </div>
            <div className="rotating-ball2"></div>
          </div>
          <div class="service-card-content">
            <h3 class="service-card-title">Website Development</h3>
            <p class="service-card-text">
            Obtain engaging UI designs and robust web app development using WordPress, JavaScript, PHP, Node.js, React.js and Vue.js. Experience rock-solid UX with animations.</p>
            <Link to="/contact">
            <button className="button-87">Discuss Project ➜</button>
            </Link>
          </div>
        </div>

        <div class="service-card">
          {/* <img src="/web-d.png" alt="CCTV Installation" /> */}
          <div className="icon-container">
          <div className="icon">
          <svg xmlns="http://www.w3.org/2000/svg" height="76px" viewBox="0 -960 960 960" width="76px" fill="#e8eaed"><path d="M40-240q9-107 65.5-197T256-580l-74-128q-6-9-3-19t13-15q8-5 18-2t16 12l74 128q86-36 180-36t180 36l74-128q6-9 16-12t18 2q10 5 13 15t-3 19l-74 128q94 53 150.5 143T920-240H40Zm240-110q21 0 35.5-14.5T330-400q0-21-14.5-35.5T280-450q-21 0-35.5 14.5T230-400q0 21 14.5 35.5T280-350Zm400 0q21 0 35.5-14.5T730-400q0-21-14.5-35.5T680-450q-21 0-35.5 14.5T630-400q0 21 14.5 35.5T680-350Z"/></svg>
          </div>
            <div className="rotating-ball3"></div>
          </div>
          <div class="service-card-content">
            <h3 class="service-card-title">Mobile App Development</h3>
            <p class="service-card-text">
            Our skilled developers are prepared to meet your needs, whether you're looking for native apps like React Native or hybrid apps for Android and iPhone.
            </p>
            <Link to="/contact">
            <button className="button-87">Discuss Project ➜</button>
            </Link>
          </div>
        </div>

        <div class="service-card">
          {/* <img src="/web-d.png" alt="CCTV Installation" /> */}
          <div className="icon-container">
          <div className="icon">
          <svg xmlns="http://www.w3.org/2000/svg" height="76px" viewBox="0 -960 960 960" width="76px" fill="#e8eaed"><path d="m438-338 226-226-57-57-169 169-84-84-57 57 141 141Zm42 258q-139-35-229.5-159.5T160-516v-244l320-120 320 120v244q0 152-90.5 276.5T480-80Zm0-84q104-33 172-132t68-220v-189l-240-90-240 90v189q0 121 68 220t172 132Zm0-316Z"/></svg>
          </div>
            <div className="rotating-ball2"></div>
          </div>
          <div class="service-card-content">
            <h3 class="service-card-title">Software Development</h3>
            <p class="service-card-text">
            We ensure the timely delivery of high-quality, adaptable software. Our software developers create effective solutions tailored to your needs.
            </p>
            <Link to="/contact">
            <button className="button-87">Discuss Project ➜</button>
            </Link>
          </div>
        </div>

        <div class="service-card">
          {/* <img src="/web-d.png" alt="CCTV Installation" /> */}
          <div className="icon-container">
          <div className="icon">
          <svg xmlns="http://www.w3.org/2000/svg" height="76px" viewBox="0 -960 960 960" width="76px" fill="#e8eaed"><path d="m480-560-56-56 63-64H320v-80h167l-64-64 57-56 160 160-160 160ZM280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM40-800v-80h131l170 360h280l156-280h91L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68.5-39t-1.5-79l54-98-144-304H40Z"/></svg>
          </div>
            <div className="rotating-ball"></div>
          </div>
          <div class="service-card-content">
            <h3 class="service-card-title">Ecommerce Development</h3>
            <p class="service-card-text">
            E-commerce sites are the go-to destinations for trendy shoppers. We offer eCommerce services designed to meet the diverse needs of our clients.
            </p>
            <Link to="/contact">
            <button className="button-87">Discuss Project ➜</button>
            </Link>
          </div>
        </div>

        <div class="service-card">
          {/* <img src="/web-d.png" alt="CCTV Installation" /> */}
          <div className="icon-container">
          <div className="icon">
          <svg xmlns="http://www.w3.org/2000/svg" height="76px" viewBox="0 -960 960 960" width="76px" fill="#e8eaed"><path d="M280-280h80v-200h-80v200Zm320 0h80v-400h-80v400Zm-160 0h80v-120h-80v120Zm0-200h80v-80h-80v80ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/></svg></div>
            <div className="rotating-ball3"></div>
          </div>
          <div class="service-card-content">
            <h3 class="service-card-title">Digital Marketing</h3>
            <p class="service-card-text">
            Our team of experts creates effective digital marketing strategies that form the foundation of your branding that help you build customer loyalty.</p>
            <Link to="/contact">
            <button className="button-87">Discuss Project ➜</button>
            </Link>
          </div>
        </div>

        <div class="service-card">
          {/* <img src="/web-d.png" alt="CCTV Installation" /> */}
          <div className="icon-container">
          <div className="icon">
          <svg xmlns="http://www.w3.org/2000/svg" height="76px" viewBox="0 -960 960 960" width="76px" fill="#e8eaed"><path d="m136-240-56-56 296-298 160 160 208-206H640v-80h240v240h-80v-104L536-320 376-480 136-240Z"/></svg>
          </div>
            <div className="rotating-ball3"></div>
          </div>
          <div class="service-card-content">
            <h3 class="service-card-title">Website Optimisation</h3>
            <p class="service-card-text">
            Enhance Website Ranking with On-page & Off-page SEO, CSS, Javascript file optimization, Load Balancing, Site Page & Server Side Rendering Acceleration Lite-Speed Server.
            </p>
            <Link to="/contact">
            <button className="button-87">Discuss Project ➜</button>
            </Link>
          </div>
        </div>

        <div class="service-card">
          {/* <img src="/web-d.png" alt="CCTV Installation" /> */}
          <div className="icon-container">
          <div className="icon">
          <svg xmlns="http://www.w3.org/2000/svg" height="76px" viewBox="0 -960 960 960" width="76px" fill="#e8eaed"><path d="M480-80q-139-35-229.5-159.5T160-516v-244l320-120 320 120v227q-19-8-39-14.5t-41-9.5v-147l-240-90-240 90v188q0 47 12.5 94t35 89.5Q310-290 342-254t71 60q11 32 29 61t41 52q-1 0-1.5.5t-1.5.5Zm200 0q-83 0-141.5-58.5T480-280q0-83 58.5-141.5T680-480q83 0 141.5 58.5T880-280q0 83-58.5 141.5T680-80ZM480-494Zm180 334h40v-100h100v-40H700v-100h-40v100H560v40h100v100Z"/></svg>
          </div>
            <div className="rotating-ball2"></div>
          </div>
          <div class="service-card-content">
            <h3 class="service-card-title">Blockchain Development</h3>
            <p class="service-card-text">
            We develop software for creating and managing blockchain nodes, designing decentralized applications (dApps), and crafting smart contracts for transaction execution.</p>
            <Link to="/contact">
            <button className="button-87">Discuss Project ➜</button>
            </Link>
          </div>
        </div>


      </div>
    </motion.div>
  );
}

export default Services;
