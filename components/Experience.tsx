import React from "react";
import { Box, Container, Flex, Heading, Link, Text } from "@chakra-ui/react";

import SectionHeader from "./ui/SectionHeader";
import { Sparkle } from "./ui/Ornaments";
import { ArrowRightIcon } from "./ui/icons";

// Oldest first, so the road reads from where it started to where it is now
const stops = [
  {
    numeral: "I",
    year: "2024",
    term: "Intern",
    time: "Feb 2024 to Feb 2025",
    datetime: "2024-02/2025-01",
  },
  {
    numeral: "II",
    year: "2025",
    term: "Contract",
    time: "Mar 2025 to Mar 2026",
    datetime: "2025-03/2026-03",
  },
  {
    numeral: "III",
    year: "2026",
    term: "Current",
    time: "Apr 2026 to present",
    datetime: "2026-04",
    lead: true,
  },
];

// The road is drawn in a 1200 x 160 box. Each stop sits where the curve
// flattens out, at the centre of its column (150, 450, 750, 1050), and its
// y here sets where its marker is placed. The last one is the open stop.
const roadHeight = 160;
const stopY = [110, 40, 110, 40];
const roadPath =
  "M0 125 C75 125 75 110 150 110 C300 110 300 40 450 40 C600 40 600 110 750 110 C900 110 900 40 1050 40 C1125 40 1125 30 1200 30";

// The year is sized down on desktop so four cards fit in a row
const yearSize = { base: "figure", md: "clamp(3.5rem, 5vw, 5rem)" };

const Road = () => (
  <Box
    aria-hidden="true"
    hideBelow="md"
    position="absolute"
    top="0"
    left="0"
    right="0"
    h={`${roadHeight}px`}
    pointerEvents="none"
  >
    <svg
      width="100%"
      height="100%"
      viewBox={`0 0 1200 ${roadHeight}`}
      preserveAspectRatio="none"
      overflow="visible"
      fill="none"
    >
      <defs>
        {/* Walked road brightens toward today, the road ahead fades out */}
        <linearGradient
          id="road"
          gradientUnits="userSpaceOnUse"
          x1="0"
          x2="1200"
          y1="0"
          y2="0"
        >
          <stop offset="0" stopColor="#8593b0" stopOpacity="0.2" />
          <stop offset="0.35" stopColor="#7fb2ff" stopOpacity="0.7" />
          <stop offset="0.625" stopColor="#7fb2ff" />
          <stop offset="0.8" stopColor="#7fb2ff" stopOpacity="0.35" />
          <stop offset="1" stopColor="#7fb2ff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d={roadPath}
        stroke="rgba(37, 99, 235, 0.35)"
        strokeWidth="14"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
        style={{ filter: "blur(10px)" }}
      />
      <path
        d={roadPath}
        stroke="url(#road)"
        strokeWidth="1.5"
        strokeDasharray="2 8"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  </Box>
);

type MarkerKind = "past" | "lead" | "open";

const markerStyles = {
  past: {
    borderStyle: "solid",
    borderColor: "brandLine",
    bg: "bg",
    color: "brandHi",
    boxShadow: "0 0 0 6px {colors.bg}",
  },
  lead: {
    borderStyle: "solid",
    borderColor: "fg",
    bg: "fg",
    color: "bg",
    boxShadow:
      "0 0 0 6px {colors.bg}, 0 0 0 7px rgba(127, 178, 255, 0.35), 0 0 40px rgba(37, 99, 235, 0.8)",
  },
  open: {
    borderStyle: "dashed",
    borderColor: "lineStrong",
    bg: "bg",
    color: "fg2",
    boxShadow: "0 0 0 6px {colors.bg}",
  },
} as const;

// A stop's marker on the road: on desktop it rises up into the drawn curve
const Marker = ({
  kind,
  y,
  children,
}: {
  kind: MarkerKind;
  y: number;
  children: React.ReactNode;
}) => (
  <Flex
    aria-hidden="true"
    position="absolute"
    zIndex="1"
    left={{ base: "0", md: "50%" }}
    top={{ base: "5", md: `${y - roadHeight}px` }}
    transform={{ md: "translate(-50%, -50%)" }}
    w={{ base: "9", md: "12" }}
    h={{ base: "9", md: "12" }}
    align="center"
    justify="center"
    borderRadius="full"
    borderWidth="1px"
    fontFamily="label"
    fontSize={{ base: "xs", md: "sm" }}
    fontWeight="600"
    {...markerStyles[kind]}
  >
    {children}
  </Flex>
);

const StopItem = ({ children }: { children: React.ReactNode }) => (
  <Box
    as="li"
    position="relative"
    pl={{ base: "14", md: "3" }}
    pr={{ md: "3" }}
    pb={{ base: "8", md: "0" }}
    _last={{ pb: "0" }}
  >
    {children}
  </Box>
);

const Year = ({
  children,
  color,
}: {
  children: React.ReactNode;
  color: string;
}) => (
  <Text
    mt="2"
    fontFamily="heading"
    fontSize={yearSize}
    fontWeight="500"
    lineHeight="0.9"
    letterSpacing="tighter"
    color={color}
  >
    {children}
  </Text>
);

const pill = {
  px: "2.5",
  py: "0.5",
  borderRadius: "full",
  fontFamily: "label",
  fontSize: "xs",
  fontWeight: "600",
  letterSpacing: "0.08em",
} as const;

const cardBase = {
  layerStyle: "card",
  direction: "column",
  h: "100%",
  p: { base: "5", sm: "7", md: "5", lg: "6" },
  textAlign: { md: "center" },
} as const;

type StopProps = {
  numeral: string;
  year: string;
  term: string;
  time: string;
  datetime: string;
  lead?: boolean;
  y: number;
};

const Stop = ({ numeral, year, term, time, datetime, lead, y }: StopProps) => (
  <StopItem>
    <Marker kind={lead ? "lead" : "past"} y={y}>
      {lead ? <Sparkle size={18} /> : numeral}
    </Marker>

    <Flex
      {...cardBase}
      borderColor={lead ? "brandLine" : "line"}
      bg={
        lead
          ? "linear-gradient(160deg, rgba(37, 99, 235, 0.2), rgba(11, 18, 33, 1) 65%)"
          : "surface"
      }
      boxShadow={lead ? "lift" : "card"}
    >
      <Text textStyle="eyebrow" color={lead ? "brandHi" : "muted"}>
        Stop {numeral}
      </Text>
      <Year color={lead ? "fg" : "fg2"}>{year}</Year>
      <Heading as="h3" size="card" mt="4">
        Application Developer
      </Heading>
      <Flex
        align="center"
        justify={{ md: "center" }}
        wrap="wrap"
        gap="2"
        mt="3"
      >
        <Text
          as="span"
          {...pill}
          bg={lead ? "brand" : "whiteAlpha.100"}
          color={lead ? "white" : "fg2"}
        >
          {term}
        </Text>
        <Text as="span" fontSize="sm" color="muted">
          PT Mayora Indah Tbk
        </Text>
      </Flex>
      <Box flexShrink={0} h="5" />
      {/* Pinned to the bottom so the dates line up across the row */}
      <Box
        mt="auto"
        pt="4"
        borderTopWidth="1px"
        borderColor="line"
        textStyle="meta"
        fontSize={{ md: "xs", lg: "sm" }}
      >
        <time dateTime={datetime}>{time}</time>
      </Box>
    </Flex>
  </StopItem>
);

// The next stop on the road, still unwritten
const OpenStop = ({ y }: { y: number }) => (
  <StopItem>
    <Marker kind="open" y={y}>
      ?
    </Marker>

    <Flex
      {...cardBase}
      bg="rgba(11, 18, 33, 0.45)"
      boxShadow="none"
      borderStyle="dashed"
      borderColor="lineStrong"
      _after={{ display: "none" }}
    >
      <Text textStyle="eyebrow" color="muted">
        Stop IV
      </Text>
      <Year color="muted">?</Year>
      <Heading as="h3" size="card" mt="4">
        The Road Ahead
      </Heading>
      <Flex align="center" justify={{ md: "center" }} gap="2" mt="3">
        <Text
          as="span"
          {...pill}
          borderWidth="1px"
          borderStyle="dashed"
          borderColor="lineStrong"
          color="fg2"
        >
          Upcoming
        </Text>
      </Flex>
      <Box flexShrink={0} h="5" />
      <Text as="span" fontSize="sm" color="muted">
        {`Could be your company :))`}
      </Text>
      <Box mt="auto" pt="4" borderTopWidth="1px" borderColor="line">
        <Link
          href="#contact"
          display="inline-flex"
          alignItems="center"
          gap="2"
          textStyle="meta"
          color="brandHi"
          textDecoration="none"
          css={{ "& svg": { transition: "transform 200ms" } }}
          _hover={{
            color: "fg",
            textDecoration: "none",
            "& svg": { transform: "translateX(3px)" },
          }}
        >
          Let&apos;s talk
          <ArrowRightIcon aria-hidden="true" />
        </Link>
      </Box>
    </Flex>
  </StopItem>
);

const Experience = () => {
  return (
    <Box as="section" id="experiences" py="var(--section-gap)">
      <Container>
        <Box mb={{ base: "12", md: "6" }}>
          <SectionHeader index="VII" label="The Chariot" title="Experience">
            From intern to developer at PT Mayora Indah Tbk, one stop at a time.
          </SectionHeader>
        </Box>

        <Box position="relative" pt={{ md: `${roadHeight}px` }}>
          <Road />
          <Box
            as="ol"
            position="relative"
            display="grid"
            gridTemplateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }}
            listStyleType="none"
            // On mobile the road runs straight down the left edge, fading
            // out toward the open stop
            _before={{
              content: '""',
              display: { md: "none" },
              position: "absolute",
              left: "17.5px",
              top: "5",
              bottom: "10",
              borderLeftWidth: "1.5px",
              borderStyle: "dashed",
              borderColor: "brandLine",
              maskImage: "linear-gradient(to bottom, black 70%, transparent)",
            }}
          >
            {stops.map((stop, i) => (
              <Stop key={stop.term} {...stop} y={stopY[i]} />
            ))}
            <OpenStop y={stopY[stops.length]} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Experience;
