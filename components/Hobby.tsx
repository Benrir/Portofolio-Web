"use client";

import React, { useState } from "react";
import { Box, chakra, Container, Grid, Heading, Text } from "@chakra-ui/react";

import Image from "next/image";

import SectionHeader from "./ui/SectionHeader";
import { CardCorners, Sparkle } from "./ui/Ornaments";

const numerals = ["I", "II", "III"];

interface Hobby {
  title: string;
  label: string;
  imgpath: string;
  kind: string;
}

const hobby: Hobby[] = [
  {
    title: "Granblue Fantasy",
    label:
      "My favorite game right now, i have playing this game since 2017. Very simple game but it is so addicting and the characters design is so great",
    imgpath: "/gbf.jpeg",
    kind: "Game",
  },
  {
    title: "Blue Lock",
    label:
      "My favorite manga of all times, i have reread this so many times. The psychology battle, clashing ideas, egoist concept, and so many amazing moments feels amazing to me !!!",
    imgpath: "/bluelock.jpeg",
    kind: "Manga",
  },
  {
    title: "About You - The 1975",
    label:
      "Goated song ever fr fr. The melody, the lyrics, and the memories everything remind me of her. I listen to this every single day since the first time i heard it.",
    imgpath: "/aboutyou.jpeg",
    kind: "Song",
  },
];

const HobbyCarousel = () => {
  const [active, setActive] = useState(0);

  return (
    <Box
      as="section"
      id="hobbies"
      py="var(--section-gap)"
      aria-labelledby="hobby-title"
    >
      <Container>
        <Box mb={{ base: "10", md: "14" }}>
          <SectionHeader
            index="XIX"
            label="The Sun"
            id="hobby-title"
            title="Games, Manga, Music, Art, & Etc."
          >
            Things i like to do when im not working or in weekends
          </SectionHeader>
        </Box>

        <Grid
          as="ul"
          templateColumns={{ base: "1fr", sm: "repeat(3, minmax(0, 1fr))" }}
          gap={{ base: "5", md: "6" }}
          listStyleType="none"
        >
          {hobby.map((m, i) => {
            const isActive = i === active;
            return (
              <chakra.li key={m.title} display="grid" gap="5" alignContent="start">
                <chakra.button
                  type="button"
                  aria-pressed={isActive}
                  aria-label={`Show ${m.title}`}
                  onClick={() => setActive(i)}
                  position="relative"
                  display="flex"
                  flexDirection="column"
                  w="100%"
                  p="2.5"
                  borderRadius="18px"
                  borderWidth="1px"
                  borderColor={isActive ? "brandHi" : "lineStrong"}
                  bg="surface"
                  color="fg"
                  cursor="pointer"
                  boxShadow={isActive ? "lift" : "card"}
                  transform={isActive ? "translateY(-8px)" : "none"}
                  transitionProperty="transform, box-shadow, border-color"
                  transitionDuration="long"
                  transitionTimingFunction="out"
                  _hover={{ borderColor: "brandHi" }}
                  _focusVisible={{
                    outline: "2px solid",
                    outlineColor: "brandHi",
                    outlineOffset: "4px",
                  }}
                  css={{
                    "& img": {
                      transition: "transform 600ms cubic-bezier(0.16, 1, 0.3, 1)",
                    },
                    "&:hover img": { transform: "scale(1.04)" },
                  }}
                >
                  <CardCorners inset="16px" />
                  <Box
                    as="span"
                    display="flex"
                    flexDirection="column"
                    flex="1"
                    borderRadius="12px"
                    borderWidth="1px"
                    borderColor="line"
                    overflow="hidden"
                  >
                    <Box
                      as="span"
                      display="block"
                      py="2.5"
                      fontFamily="label"
                      fontWeight="600"
                      fontSize="sm"
                      color={isActive ? "brandHi" : "fg2"}
                    >
                      {numerals[i]}
                    </Box>
                    <Box
                      as="span"
                      display="block"
                      position="relative"
                      aspectRatio="3 / 4"
                      mx="3"
                      overflow="hidden"
                      borderRadius="999px 999px 8px 8px"
                      bg="surface2"
                    >
                      <Image
                        fill
                        sizes="(min-width: 60rem) 25vw, (min-width: 40rem) 33vw, 100vw"
                        src={m.imgpath}
                        alt=""
                        style={{ objectFit: "cover" }}
                      />
                    </Box>
                    <Box
                      as="span"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      gap="2"
                      py="3.5"
                      fontFamily="label"
                      fontWeight="600"
                      fontSize="xs"
                      letterSpacing="0.2em"
                      textTransform="uppercase"
                      color={isActive ? "brandHi" : "fg"}
                    >
                      <Sparkle size={7} />
                      The {m.kind}
                      <Sparkle size={7} />
                    </Box>
                  </Box>
                </chakra.button>
                <Box px="1">
                  <Heading as="h3" size="sm" color={isActive ? "brandHi" : "fg"}>
                    {m.title.replace(" - ", ", ")}
                  </Heading>
                  <Text mt="2" fontSize="sm" color={isActive ? "fg2" : "muted"}>
                    {m.label}
                  </Text>
                </Box>
              </chakra.li>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default HobbyCarousel;
