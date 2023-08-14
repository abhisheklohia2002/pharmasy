import React, { useEffect, useState } from 'react';
import { InputGroup, Input, InputRightElement, Button, Flex } from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';
// useEffect
let count = 0
const SearchBox = () => {
    const arr = ["Health Drinks", "Shampoo", "Medicine", "Injection"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % arr.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [arr.length]);


  return (
    <InputGroup>
    
      <Input
    
        placeholder={"Search for"+" "+arr[currentIndex]}
        borderRadius="md"
        size="md"
        pr="4rem"
        focusBorderColor="blue.300"
      />
      <InputRightElement width="4rem">
        <Button h="100%" size="md" colorScheme="teal">
         
          Search
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};

export default SearchBox;
