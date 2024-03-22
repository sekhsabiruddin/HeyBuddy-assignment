import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <nav className="footer-nav">
        <ul className="footer-nav-list">
          <li className="footer-nav-item">
            <a href="#">About</a>
          </li>
          <li className="footer-nav-item">
            <a href="#">Help Center</a>
          </li>
          <li className="footer-nav-item">
            <a href="#">Terms of Service</a>
          </li>
          <li className="footer-nav-item">
            <a href="#">Privacy Policy</a>
          </li>
          <li className="footer-nav-item">
            <a href="#">Cookie Policy</a>
          </li>

          <li className="footer-nav-item">
            <a href="#">Brand Resources</a>
          </li>
          <li className="footer-nav-item">
            <a href="#">Advertising</a>
          </li>
          <li className="footer-nav-item">
            <a href="#">Marketing</a>
          </li>
          <li className="footer-nav-item">
            <a href="#">Twitter for Business</a>
          </li>
          <li className="footer-nav-item">
            <a href="#">Developers</a>
          </li>
          <li className="footer-nav-item">
            <a href="#">Directory</a>
          </li>

          <li>
            <p className="footer-copyright">
              &copy; {new Date().getFullYear()} Twitter, Inc.
            </p>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
