import React, { useEffect, useState } from "react";
import "./floatingMatrix.css";

const FloatingMatrix = () => {
  const [matrixText, setMatrixText] = useState([]);

  useEffect(() => {
    const createMatrixText = () => {
      const newText = {
        id: Date.now(),
        text: Math.random() < 0.5 ? "0" : "1",
        x: Math.random() * window.innerWidth,
        y: -20, // Start above the viewport
        speed: Math.random() * 5+ 2, // Adjust speed for smoother movement
        opacity: Math.random() * 0.7 + 0.3,
      };
      setMatrixText((prevText) => [...prevText, newText]);
    };

    const animationInterval = setInterval(() => {
      createMatrixText();
    }, 100); // Adjust interval for more characters

    return () => {
      clearInterval(animationInterval);
    };
  }, []);

  return (
    <div className="floating-matrix">
      {matrixText.map((text) => (
        <span
          key={text.id}
          className="matrix-char"
          style={{
            left: `${text.x}px`,
            top: `${text.y}px`,
            opacity: text.opacity,
            animationDuration: `${Math.random() * 3 + 1}s`, // Adjust duration for slower animation
            animationDelay: `${Math.random() * 2}s`, // Add delay for staggered animation
            animationTimingFunction: `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`, // Randomize timing function for more variation
          }}
        >
          {text.text}
        </span>
      ))}
    </div>
  );
};

export default FloatingMatrix;
