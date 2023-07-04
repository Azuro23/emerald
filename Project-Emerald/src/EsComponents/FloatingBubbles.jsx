import React, { useEffect, useState } from "react";
import "./FloatingBubbles.css";

const FloatingBubbles = () => {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    const createBubble = () => {
      const bubble = {
        id: Date.now(),
        size: Math.floor(Math.random() * 30) + 10,
        x: Math.random() * window.innerWidth,
        y: window.innerHeight,
        speed: Math.random() * 2 + 1, // Adjust speed for smoother movement
        opacity: Math.random() * 0.7 + 0.3,
      };
      setBubbles((prevBubbles) => [...prevBubbles, bubble]);
    };

    const animationInterval = setInterval(() => {
      createBubble();
    }, 500); // Adjust interval for more bubbles

    return () => {
      clearInterval(animationInterval);
    };
  }, []);

  return (
    <div className="floating-bubbles">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="bubble"
          style={{
            width: `${bubble.size}7px`,
            height: `${bubble.size}px`,
            left: `${bubble.x}px`,
            top: `${bubble.y}px`,
            opacity: bubble.opacity,
            animationDuration: `${Math.random() * 3 + 1}s`, // Adjust duration for slower animation
            animationDelay: `${Math.random() * 2}s`, // Add delay for staggered animation
            animationTimingFunction: `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`, // Randomize timing function for more variation
          }}
        ></div>
      ))}
    </div>
  );
};

export default FloatingBubbles;
