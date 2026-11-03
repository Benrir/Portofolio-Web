import React from "react";
import { Box } from "@chakra-ui/react";

const Lilcon = () => {
  return (
    <Box as="figure" position="absolute" left="0" aria-hidden="true">
      <Box asChild transform="rotate(-90deg)">
        <svg width="75" height="75" viewBox="0 0 100 100" aria-hidden="true">
          <circle
            cx="75"
            cy="50"
            r="20"
            strokeWidth="1"
            fill="transparent"
            stroke="var(--chakra-colors-rule)"
          />
          <circle
            cx="75"
            cy="50"
            r="20"
            strokeWidth="5"
            fill="var(--chakra-colors-ink)"
            stroke="var(--chakra-colors-paper)"
          />
          <circle
            cx="75"
            cy="50"
            r="10"
            strokeWidth="1"
            fill="var(--chakra-colors-rule)"
          />
        </svg>
      </Box>
    </Box>
  );
};

export default Lilcon;
