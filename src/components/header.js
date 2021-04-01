import { Link } from "gatsby";
import React, { useState, useRef } from "react";
// import { OutboundLink } from "gatsby-plugin-google-analytics"

//COMPONENTS
import { useOnClickOutside } from "./hooks";

import logo from "../assets/images/logo.png";

const Header = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <header id="header">
      <div className="image">
        <Link to="/">
          <img src={logo} alt="Gymnastics Network Logo" />
        </Link>
      </div>

      <div id="nav" ref={node}>
        <button
          className="nav-button"
          open={open}
          onClick={() => setOpen(!open)}
          style={{
            backgroundColor: open ? "#151515" : "#fcfefc",
          }}
          aria-label="open navigation menu"
        >
          <div
            style={{
              transform: open ? "rotate(45deg)" : "rotate(0)",
              background: open ? "#fcfefc" : "#151515",
            }}
          />
          <div
            style={{
              opacity: open ? "0" : "1",
              transform: open ? "translateX(-20px)" : "translateX(0)",
            }}
          />
          <div
            style={{
              transform: open ? "rotate(-45deg)" : "rotate(0)",
              background: open ? "#fcfefc" : "#151515",
            }}
          />
        </button>
        <nav
          className="nav-menu"
          open={open}
          // style={{ transform: open ? "translatey(0)" : "translatey(-100%)" }}
          style={{
            boxShadow: open ? "-5px 0px 10px #151515" : "none",
            transform: open ? "translatex(0)" : "translatex(100%)",
          }}
        >
          <Link to="/" activeClassName="active">
            Work
          </Link>

          <Link to="/about/" activeClassName="active">
            About
          </Link>
          <Link to="/blog/" activeClassName="active">
            Blog
          </Link>
          {/* <OutboundLink
            rel="preconnect"
            href="https://personal-things.s3.amazonaws.com/LeroyClarkeJrResume.pdf"
            // activeClassName="active"
          >
            Resume
          </OutboundLink> */}

          {/* <div className="socials">
            <p>Connect with me</p>
            <div className="social-icons">
              <Link to="https://github.com/ldcjrStudio">
                <img src={github} alt="Github Logo" />
              </Link>
              <Link to="https://www.linkedin.com/in/leroy-clarke-jr/">
                <img src={linkedin} alt="LinkedIn Logo" />
              </Link>
            </div>
          </div> */}
          <div className="email">
            <p>Or drop me an email </p>
            <a href="mailto:hello@ldcjr.dev" className="mailto">
              hello@ldcjr.dev
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
