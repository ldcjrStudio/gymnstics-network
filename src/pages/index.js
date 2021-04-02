import React from "react";

//components
import Layout from "../components/layout";
import Hero from "../components/hero";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

//ASSETS
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
//styles

import "../styles/styles.scss";

import logo from "../assets/images/GN-logo.png";
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1b3c5d",
    },
    // secondary: {
    //   main: green[500],
    // },
  },
});

const IndexPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Hero />

        <section id="connect">
          <div className="section-wrapper">
            <div className="form-container">
              <div>
                <h3>Join Our Journey to Push Gymnastics forward</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                  assumenda iusto, eaque voluptatem nihil repellendus unde
                  blanditiis eius aliquid dolores fuga est dolorum aut tempora
                  distinctio. Cupiditate ex molestias consequatur.
                </p>
              </div>
              <form className="form">
                <label class="name-label" htmlFor="name">
                  First Name
                </label>
                <TextField id="name" label="John Doe" variant="filled" />
                <Button
                  size="large"
                  disableElevation
                  variant="contained"
                  color="primary"
                >
                  Get notified
                </Button>
              </form>
            </div>

            <div className="info-container">
              <div className="img-container">
                <img src={logo} alt="The gymnastics network Logo" />
              </div>
              <div className="contact-us">
                <h2>Contact</h2>
                <p>ouremail@domain.com</p>
              </div>

              <div className="connect">
                <h2>Connect with us</h2>
                <div className="social-links">
                  <InstagramIcon />
                  <FacebookIcon />
                  <TwitterIcon />
                  <YouTubeIcon />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </ThemeProvider>
  );
};

export default IndexPage;
