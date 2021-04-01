import React from "react"
import { Link } from "gatsby"
// import { OutboundLink } from "gatsby-plugin-google-analytics"

const Footer = () => {
  return (
    <footer>
      <div className="footer-bar">
        <Link to="https://ldcjr.dev/about">
          The Gymnastics Network &copy; All Rights Reserved
        </Link>
      </div>
    </footer>
  )
}

export default Footer
