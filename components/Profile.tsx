import Image from "next/image";

import React from "react";
import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";

import { Sparkle } from "./ui/Ornaments";

import { GithubIcon, LinkedinIcon, WhatsappIcon } from "./ui/icons";

const socials = [
  {
    label: "WhatsApp",
    href: "https://wa.me/+6287873082860",
    Icon: WhatsappIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mario-nursalim-722a73278/",
    Icon: LinkedinIcon,
  },
  { label: "GitHub", href: "https://github.com/Benrir", Icon: GithubIcon },
];

// Shared by the top row and the band below it, so their columns line up.
// The name column is narrow on purpose: the name runs out over the portrait.
const columns = {
  base: "minmax(0, 1fr)",
  md: "minmax(0, 0.75fr) minmax(0, 1.2fr) minmax(0, 1fr)",
};

// The portrait card's shadow, and the same shadow cast by the name's letters
const cardShadow =
  "0 40px 80px -30px rgba(0, 0, 0, 0.85), 0 0 80px -20px rgba(37, 99, 235, 0.45)";

const nameShadow =
  "0 16px 40px rgba(0, 0, 0, 0.85), 0 0 40px rgba(37, 99, 235, 0.45)";

// The side columns share top and bottom padding, so the name lines up with
// the quote and the role label lines up with the GitHub row
const sidePadding = { pt: { md: "16" }, pb: { md: "20" } };

const capsLabel = {
  fontFamily: "label",
  fontSize: "sm",
  fontWeight: "600",
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  lineHeight: "1.5",
} as const;

// The portrait as card I of the deck: an arched window over a name plate
const PortraitCard = () => (
  <Box
    position="relative"
    ml={{ base: "auto", md: "-8" }}
    mr="auto"
    w="min(100%, 380px)"
  >
    {/* A second card tucked behind, offset down and to the right */}
    <Box
      aria-hidden="true"
      position="absolute"
      inset="0"
      transform={{
        base: "translate(14px, 14px)",
        md: "translate(28px, 28px)",
      }}
      borderRadius="999px 999px 22px 22px"
      backgroundImage="repeating-linear-gradient(45deg, rgba(127, 178, 255, 0.07) 0 1px, transparent 1px 8px), linear-gradient(160deg, rgba(37, 99, 235, 0.45), rgba(11, 18, 33, 0.9) 70%)"
      boxShadow="0 40px 80px -30px rgba(0, 0, 0, 0.85)"
    />
    <Box
      position="relative"
      p="2.5"
      borderRadius="999px 999px 22px 22px"
      borderWidth="1px"
      borderColor="brandLine"
      bg="surface"
      boxShadow={cardShadow}
    >
      <Box
        position="relative"
        aspectRatio="3 / 4"
        overflow="hidden"
        borderRadius="999px 999px 14px 14px"
      >
        <Image
          src="/pp.jpeg"
          alt="Mario Nursalim"
          fill
          sizes="(min-width: 60rem) 380px, 90vw"
          style={{ objectFit: "cover", objectPosition: "50% 35%" }}
          priority
        />
        <Box
          position="absolute"
          inset="2"
          borderRadius="999px 999px 10px 10px"
          borderWidth="1px"
          borderColor="rgba(234, 240, 253, 0.28)"
          pointerEvents="none"
        />
        <Text
          position="absolute"
          top="9"
          left="50%"
          transform="translateX(-50%)"
          fontFamily="label"
          fontWeight="600"
          fontSize="lg"
          color="fg"
          textShadow="0 2px 12px rgba(0, 0, 0, 0.6)"
        >
          I
        </Text>
      </Box>
      <Flex
        align="center"
        justify="center"
        gap="3"
        pt="4"
        pb="6"
        color="brandHi"
      >
        <Sparkle size={9} />
        <Text {...capsLabel} color="fg" letterSpacing="0.22em">
          The Developer
        </Text>
        <Sparkle size={9} />
      </Flex>
    </Box>

    <Flex
      aria-hidden="true"
      position="absolute"
      bottom="-7"
      left="50%"
      transform="translateX(-50%)"
      w="14"
      h="14"
      align="center"
      justify="center"
      borderRadius="full"
      bg="fg"
      color="bg"
      boxShadow="0 0 0 6px {colors.bg}"
    >
      <Sparkle size={20} />
    </Flex>
  </Box>
);

const Profile = () => {
  return (
    <Box as="section" id="profile" position="relative">
      <Container>
        <Grid
          templateColumns={columns}
          columnGap={{ md: "10" }}
          rowGap="14"
          pt={{ base: "12", md: "16" }}
          pb={{ base: "16", md: "0" }}
        >
          {/* Name and role, layered over the portrait */}
          <Flex
            position="relative"
            zIndex="2"
            direction="column"
            justify="space-between"
            gap="10"
            {...sidePadding}
          >
            <Heading
              as="h1"
              size="hero"
              fontSize={{ base: "hero", md: "clamp(5rem, 7vw, 8.75rem)" }}
              whiteSpace="nowrap"
              textShadow={nameShadow}
            >
              Mario
              <br />
              Nursalim
            </Heading>
            <Box>
              <Text {...capsLabel} color="fg">
                Application
                <br />
                Developer
              </Text>
              <Box mt="3" w="10" h="2px" bg="brand" />
            </Box>
          </Flex>

          {/* Card I */}
          <Box pb={{ md: "16" }}>
            <PortraitCard />
          </Box>

          {/* Quote and socials */}
          <Flex
            direction="column"
            justify="space-between"
            gap="10"
            {...sidePadding}
          >
            <Box>
              <Text
                aria-hidden="true"
                fontFamily="heading"
                fontSize="6xl"
                lineHeight="0.5"
                color="brand"
                mb="2"
              >
                &ldquo;
              </Text>
              <Text
                fontFamily="heading"
                fontSize="3xl"
                fontWeight="500"
                lineHeight="1.1"
                color="fg"
                maxW="16ch"
              >
                I like building things that actually{" "}
                <Box as="span" color="brandHi" fontStyle="italic">
                  make sense
                </Box>
              </Text>
            </Box>

            <Stack gap="5" maxW="18rem">
              <Text {...capsLabel} fontSize="xs" color="fg2">
                Find me on WhatsApp, LinkedIn and GitHub
              </Text>
              <Flex align="center" gap="5">
                {socials.map(({ label, href, Icon }) => (
                  <Link
                    key={label}
                    href={href}
                    rel="noreferrer"
                    target="_blank"
                    aria-label={label}
                    color="fg"
                    fontSize="2xl"
                    transitionProperty="color"
                    transitionDuration="short"
                    _hover={{ color: "brandHi" }}
                  >
                    <Icon aria-hidden="true" />
                  </Link>
                ))}
                <Box flex="1" h="1px" bg="lineStrong" />
              </Flex>
            </Stack>
          </Flex>
        </Grid>
      </Container>
    </Box>
  );
};

export default Profile;
