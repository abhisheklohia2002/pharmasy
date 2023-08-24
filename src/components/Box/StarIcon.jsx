import React from "react";
import { StarIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;

  const stars = Array(5).fill().map((_, index) => {
    if (index < fullStars) {
      return <StarIcon key={index} color="yellow.400" />;
    } else if (index === fullStars && hasHalfStar) {
      return (
        <Box key={index} as="span" color="yellow.400">
          <StarIcon />
          <StarIcon half />
        </Box>
      );
    } else {
      return <StarIcon key={index} color="gray.300" />;
    }
  });

  return <Box>{stars}</Box>;
};

export default StarRating;
