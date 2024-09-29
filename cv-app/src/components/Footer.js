// Footer.js
import React from 'react';
import '../styles/FormStyles.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2024 My Resume App</p>
        <p>✨ Hi there! I'm Suvanshi Gupta, a passionate coder weaving dreams into reality, one pixel at a time! 🚀</p>
        <p>For inquiries, drop me a line at: 
          <a href="mailto:isuvanshi@gmail.com" style={{ color: 'darkblue' }}>isuvanshi@gmail.com</a>
        </p>
        <p>
          Connect with me on LinkedIn: 
          <a 
            href="https://www.linkedin.com/in/suvanshi?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B8HSOhJxkRHm8DUc%2Bb1UGqA%3D%3D" 
            style={{ color: 'darkblue' }} 
            target="_blank" 
            rel="noopener noreferrer"
          >
          Suvanshi Gupta
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
