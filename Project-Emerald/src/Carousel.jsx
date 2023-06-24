import { Box, Button, Flex, HStack, Image, Text, Textarea } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import data from "./data";

const Carousel = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    // Do something when the component mounts
  }, []);

  const handleSlideChange = (index) => {
    setSlideIndex(index);
  };

  const getNextIndex = () => {
    return (slideIndex + 1) % data.length;
  };

  const nextIndex = getNextIndex();

  return (
    <Flex
      flexFlow={[null, "row nowrap", "row nowrap", "column nowrap"]}
      placeContent="center"
      placeItems="center"
      textAlign="center"
      h="100vh"
      w="100vw"
    >
      <Box
        width="100%"
        height="100%"
        minW="500px"
        minH="500px"
        borderRadius="10px"
        overflow="hidden"
      >
        {data.map((card, index) => (
          <Box
            key={index}
            className={slideIndex === index ? "active" : ""}
            style={{
              display: slideIndex === index ? "flex" : "none",
            }}
          >
            <Image
              src={card.secondaryImageUrl}
              boxSize="30%"
              
           
              onClick={() => handleSlideChange(index)}
            />
                 <Image
              src={card.imageUrl}
              boxSize="30%"
              
           
              onClick={() => handleSlideChange(index)}
            />
            <Box ml="60px" p="10px" color="gray" fontSize="14px" fontWeight="bold">
              {card.title}
            </Box>
            <Text ml="60px" p="10px" color="gray" fontSize="14px" fontWeight="normal">
              {card.description}
            </Text>
          </Box>
        ))}
      </Box>
      <Flex flexFlow="column" ml="auto" mr="auto" w="20%" h="40px">
        <Button
          onClick={() => handleSlideChange(slideIndex === 0 ? data.length - 1 : slideIndex - 1)}
          disabled={slideIndex === 0}
          color="gray"
          size="sm"
        >
          Previous
        </Button>
        <Button
          onClick={() => handleSlideChange(nextIndex)}
          disabled={slideIndex === nextIndex}
          color="gray"
          size="sm"
        >
          Next
        </Button>
      </Flex>
      <Box mt="2" w="100%" textAlign="center">
        <Text color="gray" fontSize="14px" fontWeight="bold">
          Preview:
        </Text>
        <Box mt="2" w="200px" h="200px" borderRadius="10px" overflow="hidden">
          <Image src={data[nextIndex].imageUrl} boxSize="100%" />
        </Box>
        <Box mt="2" color="gray" fontSize="14px" fontWeight="bold">
          {data[nextIndex].title}
        </Box>
      </Box>
    </Flex>
  );
};

export default Carousel;
