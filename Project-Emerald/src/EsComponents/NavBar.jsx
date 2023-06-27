import React, { useState, useEffect } from 'react';
import './NavBar.css';
import logo from '../assets/Logo.jpeg';
import { Image, Text } from '@chakra-ui/react';

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
  
     <Image
     boxShadow='dark-lg' p='1' rounded='md' bg='transparent'
     Dark lg
     className='logo'
  borderRadius='full'
  boxSize='5em'
  src={logo}
  alt='Dan Abramov'
/>

      {/* <ul className={`navigation-menu ${isOpen ? 'show' : ''}`}> */}
      <ul className={`navigation-menu ${isMounted ? 'fade-in' : ''}`}>

        <li className='navigation-item'>Home</li>
        <li className='navigation-item'>About</li>
        <li className='navigation-item'>Services</li>
        <li className='navigation-item'>Contact</li>
      </ul>
     
      {/* <button
        className={`navigation-toggle ${isOpen ? 'hidden' : ''}`}
        onClick={toggleNavigation}
      >
        Menu
      </button> */}
     
    </div>
    
  );
};

export default NavBar;
