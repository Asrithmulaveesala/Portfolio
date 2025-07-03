import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <p>&copy; {new Date().getFullYear()} Koushik | All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
