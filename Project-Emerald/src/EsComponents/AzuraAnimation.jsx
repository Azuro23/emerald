import React, { useState, useEffect } from "react";
import "./azuraAnimation.css";
import logo from "../assets/Logo.jpeg";
import Carousel from "../Carousel.jsx";
import FloatingBubbles from "./FloatingBubbles.jsx";
import FloatingMatrix from "./FloatingMatrix.jsx";

const AzuraAnimation = () => {
  const [isAnimating, setIsAnimating] = useState(true);
  const [showCarousel, setShowCarousel] = useState(false);

  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setIsAnimating(false);
      setShowCarousel(true); // Set showCarousel state after animation completes
    }, 5000);

    return () => {
      clearTimeout(animationTimeout);
    };
  }, []);

  return (
    <>
      {isAnimating && (
        <div className={`azura-container ${isAnimating ? "fade-in" : "fade-out"}`}>
       
          <FloatingMatrix />
          {/* <FloatingBubbles/> */}
          <img src={logo} alt="azuralogo" className="logoAnimation" />
          <div className="azura-text-container">
            
            <div className={`azura-text fade-in`}>A</div>
            <div className={`azura-text fade-in delay-1`}>Z</div>
            <div className={`azura-text fade-in delay-2`}>U</div>
            <div className={`azura-text fade-in delay-3`}>R</div>
            <div className={`azura-text fade-in delay-4`}>A</div>
          </div>
        </div>
      )}
      {showCarousel && !isAnimating && <Carousel />}
    </>
  );
};

export default AzuraAnimation;
