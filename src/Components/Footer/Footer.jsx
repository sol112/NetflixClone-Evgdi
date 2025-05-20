import React from 'react'
import  './Footer.css'
function Footer() {
  return (
    <footer className="netflix-footer">
      <div className="footer-top">
        <a className="footer-link" href="#">Questions? Contact us</a>
      </div>
      <div className="footer-links-grid">
        <div className="footer-column">
          <a href="#">FAQ</a>
          <a href="#">Investor Relations</a>
          <a href="#">Privacy</a>
          <a href="#">Speed Test</a>
        </div>
        <div className="footer-column">
          <a href="#">Help Center</a>
          <a href="#">Jobs</a>
          <a href="#">Cookie Preferences</a>
          <a href="#">Legal Notices</a>
        </div>
        <div className="footer-column">
          <a href="#">Account</a>
          <a href="#">Ways to Watch</a>
          <a href="#">Corporate Information</a>
          <a href="#">Only on Netflix</a>
        </div>
        <div className="footer-column">
          <a href="#">Media Center</a>
          <a href="#">Terms of Use</a>
          <a href="#">Contact Us</a>
        </div>
      </div>
      <div className="footer-language">
        <select>
          <option>English</option>
          <option>Spanish</option>
        </select>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Netflix, Inc.</p>
      </div>
    </footer>
  );
};

export default Footer