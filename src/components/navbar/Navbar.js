import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="navbar">
      <h1 className="name-logo">Shahrukh</h1>

      <ul className="menu-list" id="menu-list">
        <li className="menu-item">Home</li>
        <li className="menu-item">About</li>
        <li className="menu-item">Projects</li>
        <li className="menu-item">Services</li>
        <li className="menu-item">Experience</li>
      </ul>

      <div className="contact-div">
        <button id="contact-btn">Contact Me</button>
      </div>

      <div className="menu-container">
        <div
          className={`menu-icon ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        <nav className={`menu ${isOpen ? "menu-open" : ""}`}>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Experience</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
