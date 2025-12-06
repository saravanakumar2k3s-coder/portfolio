// Footer.jsx
import React from "react";
import "../App.css";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
        
          <span>Saravanakumar</span>
         
        </div>
        <div className="footer-social">
          <a href="https://www.linkedin.com/in/saravanakumar-s-b977672b5/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/saravanakumar2k3s-coder" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://twitter.com/yourname" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025Saravanakumar. All rights reserved.</p>
           <p>Crafted by San-&co</p>
      </div>
    </footer>
  );
};

export default Footer;
