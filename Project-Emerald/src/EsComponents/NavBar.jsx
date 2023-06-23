import React, { useState, useEffect } from 'react';
import "./NavBar.css";
import logo from "../assets/Logo.jpeg";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleNavigation = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`navigation ${isMounted ? 'fade-in' : ''}`}>
      <img className='logo' src={logo} alt='logo' />
      <button className="navigation-toggle" onClick={toggleNavigation}>
        Menu
      </button>
      <ul className={`navigation-menu ${isOpen ? 'show' : ''}`}>
        <li className="navigation-item">Home</li>
        <li className="navigation-item">About</li>
        <li className="navigation-item">Services</li>
        <li className="navigation-item">Contact</li>
      </ul>
    </div>
  );
};

export default NavBar;
