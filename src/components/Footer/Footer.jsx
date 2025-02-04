import React from "react";
import "./Footer.css";
import { assets } from "../../assests/assets";
const Footer = () => {
  return (
    <footer className="footer" id="Footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h3>About Us</h3>
          <p>
            Welcome to MoveFit! We help you achieve your fitness products. Join
            us for a healthier tomorrow!
          </p>
        </div>
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#header">Home</a>
            </li>
            <li>
              <a href="#Footer">About Us</a>
            </li>
            <li>
              <a href="#explore-menu">Products</a>
            </li>
            <li>
              <a href="#cart-Section">Cart</a>
            </li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Email: yashsharma4841@gmail.com</p>
          <p>Phone: (+91) 9571790228</p>
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/yashsharma0228/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={assets.linkedin_icon} alt="Linkedin" />
            </a>
            <a
              href="https://x.com/Yashsharma0228"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={assets.twitter_icon} alt="Twitter" />
            </a>
            <a
              href="https://github.com/yashsharma228"
              target="_blank"
              rel="noopener noreferrer" 
            >
              <img className="github" src={assets.Github_Logo} alt="GitHub" />
            </a>
            <a
              href="mailto:yashsharma4841@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="mail" src={assets.mail_Icon} alt="Mail" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 MoveFit. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
