// src/components/Devs.jsx
import React, { useState } from 'react';
import { Avatar, useDisclosure, ScaleFade, Image, Text } from '@chakra-ui/react';
import './devs.css';
// need data file

const Devs = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const { isOpen, onToggle } = useDisclosure()
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div>
       
       <Image
  borderRadius='full'
  boxSize='150px'
  src='https://bit.ly/dan-abramov'
  alt='Dan Abramov'
/>

      <Button onClick={onToggle}>Click Me</Button>
      <ScaleFade initialScale={0.9} in={isOpen}>
        <Box
        width={'100%'}
          p='40px'
          color='white'
          mt='4'
          bg='teal.500'
          rounded='md'
          shadow='md'
        >
       
        </Box>
      </ScaleFade>
    </div>
  );
};

export default Devs;
