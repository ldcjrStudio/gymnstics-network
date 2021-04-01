import React from "react";
import BackgroundImage from "gatsby-background-image";
import { useStaticQuery, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";
import scrollTo from "gatsby-plugin-smoothscroll";

// import sal from "sal.js"

// const Highlight = ({ color, children }) => (
//   <span className={`relative highlight highlight-${color}`}>
//     <span className="relative z-2">{children}</span>
//   </span>
// )

const Hero = () => {
  const data = useStaticQuery(graphql`
    query HeroQuery {
      desktop: file(name: { eq: "hero" }) {
        childImageSharp {
          gatsbyImageData(blurredOptions: { toFormat: WEBP })
        }
      }
      mobile: file(name: { eq: "hero-mobile" }) {
        childImageSharp {
          gatsbyImageData(blurredOptions: { toFormat: WEBP })
        }
      }
    }
  `);

  const heroImage = getImage(data.desktop.childImageSharp.gatsbyImageData);
  const mobileHero = getImage(data.mobile.childImageSharp.gatsbyImageData);
  const bgImage = convertToBgImage(heroImage);
  const mobileBgImage = convertToBgImage(mobileHero);

  return (
    <section id="hero">
      <div className="overlay"></div>
      <BackgroundImage
        Tag="section"
        // fluid={data.desktop.childImageSharp.fluid}
        backgroundColor={`#040e18`}
        id="desktop-bg"
        style={{ backgroundPosition: "center 25%" }}
        {...bgImage}
      />
      <BackgroundImage
        Tag="section"
        // fluid={data.mobile.childImageSharp.fluid}
        {...mobileBgImage}
        backgroundColor={`#040e18`}
        id="mobile-bg"
        style={{ backgroundPosition: "center 25%" }}
      />

      <div className="title">
        <h3>Creating new opportunities for the sport fo gymnastics.</h3>
      </div>
      <div
        className="scroll"
        onClick={() => scrollTo("#about")}
        role="button"
        aria-pressed="false"
      ></div>

      {/* <div className="hero-copy">
        <h2>Creating innovative solutions for the sport of gymnastics.</h2>
      </div> */}

      {/* <div className="form">
        <h1>form sstuff</h1>
      </div> */}
    </section>
  );
};

export default Hero;
