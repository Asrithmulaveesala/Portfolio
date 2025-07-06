import React, { useState } from 'react';
import './navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false); 
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">KoushikAsrith Mulavisala</div>

      <div 
        className="menu-toggle" 
        onClick={() => setMenuOpen(!menuOpen)}
      >
        &#9776;
      </div>

      <ul className={`navbar-links ${menuOpen ? 'show' : ''}`}>
        <li onClick={() => scrollToSection('hero')}>Home</li>
        <li onClick={() => scrollToSection('about')}>About</li>
        <li onClick={() => scrollToSection('skills')}>Skills</li>
        <li onClick={() => scrollToSection('projects')}>Projects</li>
        <li onClick={() => scrollToSection('contact')}>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
