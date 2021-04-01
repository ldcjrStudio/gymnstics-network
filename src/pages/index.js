import React from "react";

//components
import Layout from "../components/layout";
import Hero from "../components/hero";

//styles

import "../styles/styles.scss";

import logo from "../assets/images/GN-logo.png";

const IndexPage = () => {
  return (
    <Layout>
      <Hero />

      <section id="about">
        <div className="container">
          <div id="contact">
            <div className="form-container">
              <div>
                <h3>Join Our Journey to Push Black Tech Forward</h3>
                <p>
                  Stay up to date on our latest content and valuable resourcess.
                </p>
              </div>
              <form className="form">
                <label htmlFor="fname">First Name</label>
                <input type="text" id="fname" />
                <button variant="contained" color="primary">
                  Get notified
                </button>
              </form>
            </div>

            <div className="info-container">
              <div className="img-container">
                <img src={logo} alt="The gymnastics network Logo" />
              </div>
              <div className="contact-us">
                <h2>Contact Us</h2>
                <p>ouremail@domain.com</p>
              </div>

              <div className="connect">
                <h2>Connect with us</h2>
                <div className="social-icons">
                  <div className="social-links">
                    {/* <Link to="linkedin.com">
                      <img src={linkedin} alt="Linked in icon." />
                    </Link>
                    <Link to="facebook.com">
                      <img src={fb} alt="Facebook icon" />
                    </Link>
                    <Link to="twitter.com">
                      <img src={twitter} alt="Twitter icon." />
                    </Link> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;
