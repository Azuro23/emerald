import React, { useState, useEffect } from "react";
import "./azuraAnimation.css";
import logo from "../assets/Logo.jpeg";
import Carousel from "../Carousel.jsx";

const AzuraAnimation = () => {
    const [isAnimating, setIsAnimating] = useState(true);
    const [showCarousel, setShowCarousel] = useState(false);
  
    useEffect(() => {
      const animationTimeout = setTimeout(() => {
        setIsAnimating(false);
      }, 10);
  
      const carouselTimeout = setTimeout(() => {
        setShowCarousel(true);
      }, 4000);
  
      return () => {
        clearTimeout(animationTimeout);
        clearTimeout(carouselTimeout);
      };
    }, []);
  
    return (
      <div className={`azura-container ${isAnimating ? "fade-in" : ""}`}>
        {isAnimating && (
          <div className="azura-text">
            <img src={logo} alt="azuralogo" className="logo" />
            AZURA
          </div>
        )}
        {showCarousel && !isAnimating && <Carousel />}
      </div>
    );
  };
  
export default AzuraAnimation;
