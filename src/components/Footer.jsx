import React from 'react';
import '../styles/Footer.css';
import devOpsVisionsLogo from '../assets/images/DevOps-Visions.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="elmentor-footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo-attribution">
            <img src={devOpsVisionsLogo} alt="DevOps Visions Logo" className="footer-devops-logo" />
            <p className="footer-attribution">
              Crafted with ❤️ and code by the Elmentor Community, supercharged by GitHub Copilot. Empowering growth through mentorship.
            </p>
          </div>
          <div className="footer-links">
            <h5 className="footer-links-title">Quick Links</h5>
            <a href="#contact" className="footer-link">Contact Us</a>
            <a href="#code-of-conduct" className="footer-link">Code of Conduct</a> {/* Placeholder link */}
            <a href="#privacy" className="footer-link">Privacy Policy</a> {/* Placeholder link */}
          </div>
        </div>
        <div className="footer-copyright">
          <p>&copy; {currentYear} Elmentor Community. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
