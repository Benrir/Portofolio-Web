import React from "react";
import { Box, BoxProps, Flex, FlexProps } from "@chakra-ui/react";

// A four-point star, the deck's recurring mark.
export const Sparkle = ({ size = 12 }: { size?: number | string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M12 0C12.6 7.4 16.6 11.4 24 12C16.6 12.6 12.6 16.6 12 24C11.4 16.6 7.4 12.6 0 12C7.4 11.4 11.4 7.4 12 0Z" />
  </svg>
);

// Small stars tucked into the four corners of a card's inner frame.
export const CardCorners = ({ inset = "12px", ...props }: BoxProps & { inset?: string }) => {
  const spots = [
    { top: inset, left: inset },
    { top: inset, right: inset },
    { bottom: inset, left: inset },
    { bottom: inset, right: inset },
  ];
  return (
    <>
      {spots.map((spot, i) => (
        <Box
          key={i}
          aria-hidden="true"
          position="absolute"
          zIndex="1"
          color="brandHi"
          opacity={0.55}
          lineHeight="0"
          pointerEvents="none"
          {...spot}
          {...props}
        >
          <Sparkle size={8} />
        </Box>
      ))}
    </>
  );
};

// The back of a tarot card: a framed star over a field of fine lines.
export const CardBack = (props: FlexProps) => (
  <Flex
    aria-hidden="true"
    position="relative"
    align="center"
    justify="center"
    aspectRatio="5 / 8"
    p="1.5"
    borderRadius="10px"
    borderWidth="1px"
    borderColor="brandLine"
    bg="brand"
    boxShadow="0 18px 40px -16px rgba(37, 99, 235, 0.7)"
    {...props}
  >
    <Flex
      w="100%"
      h="100%"
      align="center"
      justify="center"
      borderRadius="6px"
      borderWidth="1px"
      borderColor="rgba(234, 240, 253, 0.45)"
      backgroundImage="repeating-linear-gradient(45deg, rgba(234, 240, 253, 0.08) 0 1px, transparent 1px 7px), repeating-linear-gradient(-45deg, rgba(234, 240, 253, 0.08) 0 1px, transparent 1px 7px)"
      color="white"
    >
      <Flex
        align="center"
        justify="center"
        w="55%"
        aspectRatio="1"
        borderRadius="full"
        borderWidth="1px"
        borderColor="rgba(234, 240, 253, 0.5)"
        bg="brandHover"
      >
        <Sparkle size="45%" />
      </Flex>
    </Flex>
  </Flex>
);
