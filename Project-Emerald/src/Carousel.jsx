import React, { useState, useEffect } from "react";
import { Box, Button, Center,  Image, Text } from "@chakra-ui/react";
import data from "./data";
import "./carousel.css";
import NavBar from "./EsComponents/NavBar";


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
    height={850}
      className="carousel-container"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
          <NavBar />
          <Text mb={10}
      color={"white"} > -The Azuro Agency is a network of software developers that specialize in web design and development. </Text>
      <Box
        key={slideIndex}
        className={`card ${slideIndex % 2 === 0 ? "card-container" : "card-container2"} fade-in`}
      >
  
        <Center>
          {slideIndex % 2 === 0 ? (
            <>
              <Box className="text-container">
                <h2 className="text-css">{data[slideIndex].title}</h2>
                <span className="text-css">{data[slideIndex].description}</span> 
   

              </Box>
              <Box className="image1-div">
                <Image
                mt={'.4em'}
                width={'25em'}
                  src={data[slideIndex].secondaryImageUrl}
                  className="primary-image"
                  onClick={() => handleSlideChange(slideIndex)}
                />
              </Box>
              <Box className="image2-div">
                <Image
                mt={'.4em'}
                width={'25em'}
               
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
                mt={'.4em'}
               
                width={'25em'}
                  src={data[slideIndex].secondaryImageUrl}
                  className="primary-image"
                  onClick={() => handleSlideChange(slideIndex)}
                />
              </Box>
              <Box className="image2-div">
                <Image
                mt={'.4em'}
                width={'25em'}
                  src={data[slideIndex].imageUrl}
                  className="secondary-image"
                  onClick={() => handleSlideChange(slideIndex)}
                />
              </Box>
              <Box className="text-container">
                <h2 className="text-css">{data[slideIndex].title}</h2>
                <span className="text-css">{data[slideIndex].description}</span> 
   

              </Box> 
            </>
          )}
        </Center>

      </Box>

      <Center className="controls">
        <Button color='black.50'
          className="button-slide"
          onClick={() =>
            handleSlideChange(slideIndex === 0 ? data.length - 1 : slideIndex - 1)
          }
        >
          Prev
        </Button>
        <Box className="preview-image-container">
          <Image 
          borderRadius={'50%'}
          src={data[nextIndex].imageUrl} className="preview-image" />
        </Box>
        <Button className="button-slide" onClick={() => handleSlideChange(nextIndex)}>
          Next
        </Button>
      </Center>

      <Center className="preview">
       
     
        <Text className="preview-title">{data[nextIndex].title}</Text>
      </Center>
    </Box>
  );
};

export default Carousel;
