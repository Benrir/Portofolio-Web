import React, { ReactNode } from "react";

import Image from "next/image";

import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";

import Expertise from "./Expertise";
import Projects from "./Projects";

import SectionHeader from "./ui/SectionHeader";

import { CardCorners, Sparkle } from "./ui/Ornaments";

// A titled part of the section, opened by a starred eyebrow
const Part = ({ title, children }: { title: string; children: ReactNode }) => (
  <Box as="section" pt="8">
    <Flex align="center" gap="3" mb="6" textStyle="eyebrow">
      <Sparkle size={8} />
      <Heading as="h3" textStyle="eyebrow" fontSize="xs" letterSpacing="caps">
        {title}
      </Heading>
    </Flex>
    {children}
  </Box>
);

// The duck as card 0 of the deck, with a second card fanned out behind it
const DuckCard = () => (
  <Box
    position="relative"
    w="min(100%, 340px)"
    mx={{ base: "auto", md: "0" }}
    transform={{ md: "rotate(-2deg)" }}
  >
    <Box
      aria-hidden="true"
      position="absolute"
      inset="0"
      transform="rotate(6deg) translate(10px, 6px)"
      borderRadius="22px"
      borderColor="brandLine"
      backgroundImage="repeating-linear-gradient(45deg, rgba(127, 178, 255, 0.07) 0 1px, transparent 1px 8px), linear-gradient(160deg, rgba(37, 99, 235, 0.4), rgba(11, 18, 33, 0.9) 70%)"
    />
    <Box
      as="figure"
      position="relative"
      p="2.5"
      borderRadius="22px"
      borderWidth="1px"
      borderColor="brandLine"
      bg="surface"
      boxShadow="0 40px 80px -30px rgba(0, 0, 0, 0.85), 0 0 60px -20px rgba(37, 99, 235, 0.45)"
    >
      <Box
        position="relative"
        aspectRatio="4 / 5"
        overflow="hidden"
        borderRadius="14px"
      >
        <Image
          src="/the_hermit.png"
          alt="A rubber duck keycap sitting on a keyboard"
          fill
          sizes="(min-width: 60rem) 340px, 90vw"
          style={{
            objectFit: "cover",
            objectPosition: "55% 35%",
          }}
        />
        <Box
          position="absolute"
          inset="2"
          borderRadius="10px"
          borderWidth="1px"
          borderColor="rgba(234, 240, 253, 0.3)"
          pointerEvents="none"
        />
      </Box>
      <Flex
        as="figcaption"
        align="center"
        justify="center"
        gap="3"
        pt="4"
        pb="3"
        color="brandHi"
      >
        <Sparkle size={9} />
        <Text
          fontFamily="label"
          fontSize="sm"
          fontWeight="600"
          letterSpacing="0.22em"
          textTransform="uppercase"
          color="fg"
        >
          The Rubber Duck
        </Text>
        <Sparkle size={9} />
      </Flex>
    </Box>
  </Box>
);

const About = () => {
  return (
    <Box as="section" id="about" py="var(--section-gap)">
      <Container>
        <SectionHeader index="IX" label="The Hermit" title="About Me" />

        {/* Card 0 beside the introduction */}
        <Grid
          templateColumns={{ base: "1fr", md: "auto 1fr" }}
          gap={{ base: "12", md: "16", lg: "24" }}
          alignItems="center"
        >
          <Stack gap="6" maxW="38rem">
            <Text
              fontFamily="heading"
              fontSize={{ base: "2xl", md: "3xl" }}
              fontWeight="500"
              lineHeight="1.2"
              letterSpacing="tight"
              color="fg"
              textWrap="balance"
            >
              I&apos;m Mario Nursalim. Most people call me Mario or Mar, though
              a few somehow ended up calling me{" "}
              <Box as="span" color="brandHi" fontStyle="italic">
                io
              </Box>{" "}
              (yo).
            </Text>
            <Text textStyle="lead">
              I&apos;m an application developer at PT Mayora Indah Tbk. This is
              where I spend most of my time building things, solving problems,
              breaking things, fixing them, and occasionally wondering things.
            </Text>
            <Text color="fg2">
              I like figuring out how things work, building things that actually
              make sense, and turning &ldquo;why the hell is this broken?&rdquo;
              into something I can learn from.
            </Text>
          </Stack>

          <Box w={{ md: "280px", lg: "340px" }}>
            <DuckCard />
          </Box>
        </Grid>

        {/* What I do, skills, then schooling, each running the full width */}
        <Stack gap="14" mt={{ base: "16", md: "24" }}>
          <Part title="What I do">
            <Text textStyle="lead" maxW="40rem" mb="10">
              I build mobile-first applications, with a focus on creating
              interfaces that feel intuitive, responsive, and practical to use.
            </Text>
            <Projects />
          </Part>

          <Part title="Field of expertise">
            <Expertise />
          </Part>

          <Part title="Education">
            <Flex
              position="relative"
              overflow="hidden"
              direction={{ base: "column", sm: "row" }}
              align={{ base: "flex-start", sm: "center" }}
              gap={{ base: "5", sm: "10", md: "14" }}
              p={{ base: "6", sm: "8" }}
              borderColor="brandLine"
            >
              <CardCorners inset="16px" />
              <Box flexShrink={0}>
                <Text
                  aria-hidden="true"
                  fontFamily="heading"
                  fontWeight="500"
                  fontSize="clamp(3.5rem, 6vw, 5.5rem)"
                  lineHeight="1.2"
                  letterSpacing="tighter"
                  bgImage="linear-gradient(180deg, #eaf0fd, #7fb2ff)"
                  bgClip="text"
                  color="transparent"
                >
                  3.84
                </Text>
                <Text textStyle="eyebrow" mt="2">
                  GPA
                </Text>
              </Box>
              <Stack gap="2" maxW="40rem">
                <Heading as="h4" size="card">
                  Bina Nusantara University
                </Heading>
                <Text>
                  Computer Science graduate with a 3.84 GPA, with a background
                  in AI and Web Development. Took me 3.5 years to finish
                  college.
                </Text>
              </Stack>
            </Flex>
          </Part>
        </Stack>
      </Container>
    </Box>
  );
};

export default About;
