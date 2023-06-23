// src/components/Devs.jsx
import React, { useState } from 'react';
import { Avatar } from '@chakra-ui/react';
import './devs.css';

const Devs = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className={`popup-container ${isPopupOpen ? 'active' : ''}`}>
      <button className="popup-button" onClick={togglePopup}>
        Meet the Developer
      </button>
      {isPopupOpen && (
        <div className="popup-content">
          <Avatar
            className="avatar-image"
            src='https://media.licdn.com/dms/image/D5603AQGmev-aLB5dkA/profile-displayphoto-shrink_400_400/0/1685027977275?e=1692835200&v=beta&t=-hhLp9keshD4tO_5hMnVhRXtJ6_OWrut-m4qtpN3T60'
            alt="Avatar"
          />
          <p className="about-me">
            I'm a passionate developer with a love for clean code and
            problem-solving. I enjoy creating innovative solutions and thrive in
            collaborative environments. With a strong foundation in web
            development, I'm constantly exploring new technologies to enhance
            user experiences and deliver efficient applications.
          </p>
        </div>
      )}
    </div>
  );
};

export default Devs;
