import React from "react";
import "./Navbar.css";

const Navbar = () => {
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
    </div>
  );
};

export default Navbar;
