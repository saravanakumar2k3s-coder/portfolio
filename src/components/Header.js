import React from "react";

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header>
      <div className="logo">Saravanakumar S</div>
      <nav className="nav">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#services">Services</a>
        <a href="#portfolio">Projects</a>
        <a href="#contact">Contact</a>
        
      </nav>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "☀️" : "🌙"}
      </button>
    </header>
  );
};

export default Header;
