import React, { useState, useEffect } from "react";
import data from "./data";
import "./carousel.css";

const Carousel = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [reverseOrder, setReverseOrder] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % data.length);
      setReverseOrder((prevOrder) => !prevOrder);
    }, 5000);

    return () => clearInterval(interval); 
  }, []);

  const handleSlideChange = (index) => {
    setSlideIndex(index);
    setReverseOrder((prevOrder) => !prevOrder);
  };

  const nextIndex = (slideIndex + 1) % data.length;

  return (
    <div className="carousel-container">
      <div className="cards-container">
        {data.map((card, index) => (
          <div
            className={`card ${slideIndex === index ? "active" : ""}`}
            key={index}
          >
            {reverseOrder ? (
              <>
                <div className="text-container">
                  <div className="title">{card.title}</div>
                  <div className="description">{card.description}</div>
                </div>
                <img
                  src={card.secondaryImageUrl}
                  className="primary-image"
                  onClick={() => handleSlideChange(index)}
                />
                <img
                  src={card.imageUrl}
                  className="secondary-image"
                  onClick={() => handleSlideChange(index)}
                />
              </>
            ) : (
              <>
                <img
                  src={card.secondaryImageUrl}
                  className="primary-image"
                  onClick={() => handleSlideChange(index)}
                />
                <img
                  src={card.imageUrl}
                  className="secondary-image"
                  onClick={() => handleSlideChange(index)}
                />
                <div className="text-container">
                  <div className="title">{card.title}</div>
                  <div className="description">{card.description}</div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      <div className="controls">
        <button
          className="button"
          onClick={() =>
            handleSlideChange(slideIndex === 0 ? data.length - 1 : slideIndex - 1)
          }
        >
          Previous
        </button>
        <button className="button" onClick={() => handleSlideChange(nextIndex)}>
          Next
        </button>
      </div>

      <div className={`preview ${slideIndex === data.length - 1 ? "active" : ""}`}>
        <div className="preview-text">Preview:</div>
        <div className="preview-image-container">
          <img src={data[nextIndex].imageUrl} className="preview-image" />
        </div>
        <div className="preview-title">{data[nextIndex].title}</div>
      </div>
    </div>
  );
};

export default Carousel;
