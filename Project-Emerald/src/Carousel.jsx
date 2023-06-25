import React, { useState, useEffect } from "react";
import { Box, Button, Center, Image, Text } from "@chakra-ui/react";
import data from "./data";
import "./carousel.css";

const Carousel = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setSlideIndex((prevIndex) => (prevIndex + 1) % data.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleSlideChange = (index) => {
    setSlideIndex(index);
  };

  const nextIndex = (slideIndex + 1) % data.length;

  return (
    <Box
      className="carousel-container"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <Box
        key={slideIndex}
        className={`card ${slideIndex % 2 === 0 ? "card-container" : "card-container2"} fade-in`}
      >
        <Center>
          {slideIndex % 2 === 0 ? (
            <>
              <Box className="text-container">
                <Text className="title">{data[slideIndex].title}</Text>
                <Text className="description">{data[slideIndex].description}</Text>
              </Box>
              <Box className="image1-div">
                <Image
                  src={data[slideIndex].secondaryImageUrl}
                  className="primary-image"
                  onClick={() => handleSlideChange(slideIndex)}
                />
              </Box>
              <Box className="image2-div">
                <Image
                  src={data[slideIndex].imageUrl}
                  className="secondary-image"
                  onClick={() => handleSlideChange(slideIndex)}
                />
              </Box>
            </>
          ) : (
            <>
              <Box className="image1-div">
                <Image
                  src={data[slideIndex].secondaryImageUrl}
                  className="primary-image"
                  onClick={() => handleSlideChange(slideIndex)}
                />
              </Box>
              <Box className="image2-div">
                <Image
                  src={data[slideIndex].imageUrl}
                  className="secondary-image"
                  onClick={() => handleSlideChange(slideIndex)}
                />
              </Box>
              <Box className="text-container">
                <Text className="title">{data[slideIndex].title}</Text>
                <Text className="description">{data[slideIndex].description}</Text>
              </Box>
            </>
          )}
        </Center>
      </Box>

      <Center className="controls">
        <Button
          className="button"
          onClick={() =>
            handleSlideChange(slideIndex === 0 ? data.length - 1 : slideIndex - 1)
          }
        >
          Previous
        </Button>
        <Button className="button" onClick={() => handleSlideChange(nextIndex)}>
          Next
        </Button>
      </Center>

      <Center className="preview">
        <Text className="preview-text">Preview:</Text>
        <Box className="preview-image-container">
          <Image src={data[nextIndex].imageUrl} className="preview-image" />
        </Box>
        <Text className="preview-title">{data[nextIndex].title}</Text>
      </Center>
    </Box>
  );
};

export default Carousel;
