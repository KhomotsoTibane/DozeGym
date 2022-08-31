import React from "react"
import "./Footer.css"
import {BsInstagram, BsFacebook, BsTwitter} from "react-icons/bs"

const Footer = () => {
  return (
    <footer>
      <hr />
      <div className="container">
        <div className="social-links">
          <a href="https://instagram.com" target="_blank" rel="noreferrer"><BsInstagram/></a>
          <a href="https://facebook.com/" target="_blank" rel="noreferrer"><BsFacebook/></a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer"><BsTwitter/></a>
        </div>
        <div className="footer-text">
          <p>&copy; Doze Fitness | Khomotso Tibane</p>
        </div>
      </div>
      <div className="blur blur-footer-1"></div>
      <div className="blur blur-footer-1"></div>
    </footer>
  )
}

export default Footer