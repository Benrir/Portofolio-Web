import React from "react";
import Image from "next/image";
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";

import SectionHeader from "./ui/SectionHeader";
import { CardCorners } from "./ui/Ornaments";
import { ArrowUpRightIcon } from "./ui/icons";

interface DetailsProps {
  name: string;
  time: string;
  role: string;
  work: string;
  image: string;
  link?: string;
}

const Details: React.FC<DetailsProps> = ({
  name,
  time,
  role,
  work,
  image,
  link,
}) => {
  return (
    <Grid
      layerStyle="card"
      templateColumns={{ base: "1fr", md: "1fr 1fr" }}
      gap={{ base: "8", md: "12" }}
      alignItems="center"
      p={{ base: "5", sm: "8", md: "10" }}
      overflow="hidden"
    >
      <CardCorners inset="16px" />
      <Stack gap="6" minW="0">
        <Flex wrap="wrap" gap="2">
          {[
            <time key="year" dateTime={time}>
              {time}
            </time>,
            role,
            "IEEE Xplore",
          ].map((tag, i) => (
            <Text
              as="span"
              key={i}
              px="3"
              py="1"
              borderRadius="full"
              borderWidth="1px"
              borderColor={i === 0 ? "brandLine" : "line"}
              bg={i === 0 ? "brandSoft" : "whiteAlpha.50"}
              color={i === 0 ? "brandHi" : "fg2"}
              fontFamily="label"
              fontSize="xs"
            >
              {tag}
            </Text>
          ))}
        </Flex>
        <Heading as="h3" size="card" fontSize="3xl">
          {name}
        </Heading>
        <Text>{work}</Text>
        {link && (
          <Box>
            <Button asChild variant="outline">
              <a href={link} target="_blank" rel="noopener noreferrer">
                Read the paper on IEEE Xplore
                <ArrowUpRightIcon aria-hidden="true" />
              </a>
            </Button>
          </Box>
        )}
      </Stack>

      <Box
        as="figure"
        position="relative"
        p="3"
        borderRadius="16px"
        bg="surface2"
        borderWidth="1px"
        borderColor="line"
        transform={{ md: "rotate(1.5deg)" }}
        boxShadow="0 30px 60px -30px rgba(37, 99, 235, 0.5)"
      >
        <Box asChild w="100%" h="auto" borderRadius="inner">
          <Image
            src={image}
            alt="The acceptance notice for the chess piece recognition paper"
            width={986}
            height={749}
            sizes="(min-width: 60rem) 45vw, 100vw"
          />
        </Box>
      </Box>
    </Grid>
  );
};

const Publication = () => {
  return (
    <Box as="section" id="publications" py="var(--section-gap)">
      <Container>
        <Box mb={{ base: "10", md: "14" }}>
          <SectionHeader
            index="V"
            label="The Hierophant"
            title="Publications"
          />
        </Box>
        <Details
          name="Chess Piece Image Recognition Using Transfer Learning, Simple Neural Network, and Convolutional Neural Network"
          time="2023"
          role="Bina Nusantara University"
          image="/MLPAPER.png"
          work="Group paper accepted at AIDAS Conference 2023, comparing transfer learning against simple neural network and CNN approaches for classifying chess pieces from images."
          link="https://ieeexplore.ieee.org/document/10284718"
        />
      </Container>
    </Box>
  );
};

export default Publication;
