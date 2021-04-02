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
        ></nav>
      </div>
    </header>
  );
};

export default Header;
