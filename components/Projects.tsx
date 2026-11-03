import React from "react";
import Image from "next/image";
import { Box, Flex, Grid, Heading, Stack, Text } from "@chakra-ui/react";

import { CardCorners, Sparkle } from "./ui/Ornaments";
import SkillTile from "./ui/SkillTile";
import { skills, SkillName } from "./skills";

// Fill in `summary`, `stack`, `tags` and `image` (a file in /public, e.g.
// "/wms.png") as each project's details and screenshot come in. `stack`
// takes skill names from skills.ts, e.g. ["Flutter", "Dart", "Oracle"].
interface Project {
  name: string;
  summary?: string;
  stack?: SkillName[];
  tags?: string[];
  image?: string;
}

const projects: Project[] = [
  {
    name: "WMS Dashboard",
    stack: ["Next.js", "Node.js", "Java", "PostgreSQL", "Oracle"],
  },
  {
    name: "WMS Mobile",
    stack: ["Flutter", "Node.js", "Java", "PostgreSQL", "Oracle"],
  },
  {
    name: "Career Management System",
    stack: ["Next.js", "Node.js", "Java", "PostgreSQL", "Oracle"],
  },
  { name: "MyCosmo", stack: ["Flutter", "Node.js", "PostgreSQL"] },
  { name: "Thesis Online", stack: ["Next.js", "Node.js", "PostgreSQL"] },
  {
    name: "Online Test Assessment",
    stack: ["Next.js", "Node.js", "PostgreSQL"],
  },
];

const numerals = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];

// Stands in for a screenshot until one is added
const ScreenshotPlaceholder = () => (
  <Flex
    direction="column"
    align="center"
    justify="center"
    gap="3"
    aspectRatio="16 / 10"
    borderRadius="inner"
    borderWidth="1px"
    borderStyle="dashed"
    borderColor="lineStrong"
    backgroundImage="repeating-linear-gradient(45deg, rgba(127, 178, 255, 0.05) 0 1px, transparent 1px 9px)"
    color="brandHi"
  >
    <Sparkle size={18} />
    <Text textStyle="meta" fontSize="xs">
      Screenshot coming soon
    </Text>
  </Flex>
);

// Stands in for the stack tiles until a project's stack is filled in
const StackPlaceholder = () => (
  <>
    {[0, 1, 2].map((i) => (
      <Flex
        as="li"
        key={i}
        direction="column"
        align="center"
        gap="2"
        w="60px"
        aria-hidden="true"
      >
        <Flex
          align="center"
          justify="center"
          w="44px"
          h="44px"
          borderRadius="12px"
          borderWidth="1px"
          borderStyle="dashed"
          borderColor="lineStrong"
          color="muted"
          fontFamily="label"
          fontSize="sm"
        >
          ?
        </Flex>
        <Text fontSize="xs" color="muted" lineHeight="1.3">
          Soon
        </Text>
      </Flex>
    ))}
  </>
);

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const { name, summary, stack, tags, image } = project;
  // Every other card puts its screenshot on the left
  const flipped = index % 2 === 1;

  return (
    <Grid
      as="li"
      layerStyle="card"
      templateColumns={{ base: "1fr", md: "1fr 1fr" }}
      gap={{ base: "8", md: "12" }}
      alignItems="center"
      p={{ base: "5", sm: "8", md: "10" }}
      overflow="hidden"
    >
      <CardCorners inset="16px" />
      <Stack gap="5" minW="0" order={{ md: flipped ? 2 : 1 }}>
        <Text textStyle="eyebrow">Project {numerals[index]}</Text>
        <Heading as="h4" size="card" fontSize="3xl">
          {name}
        </Heading>
        <Text color={summary ? "fg2" : "muted"}>
          {summary ?? "Description coming soon."}
        </Text>
        <Box>
          <Text textStyle="eyebrow" color="muted" mb="3">
            Built with
          </Text>
          <Flex as="ul" listStyleType="none" wrap="wrap" gap="2">
            {stack && stack.length > 0 ? (
              stack.map((skill) => (
                <SkillTile key={skill} {...skills[skill]} size="sm" />
              ))
            ) : (
              <StackPlaceholder />
            )}
          </Flex>
        </Box>
        {tags && tags.length > 0 && (
          <Flex wrap="wrap" gap="2">
            {tags.map((tag) => (
              <Text
                as="span"
                key={tag}
                px="3"
                py="1"
                borderRadius="full"
                borderWidth="1px"
                borderColor="line"
                bg="whiteAlpha.50"
                color="fg2"
                fontFamily="label"
                fontSize="xs"
              >
                {tag}
              </Text>
            ))}
          </Flex>
        )}
      </Stack>

      <Box
        as="figure"
        position="relative"
        order={{ md: flipped ? 1 : 2 }}
        p="3"
        borderRadius="16px"
        bg="surface2"
        borderWidth="1px"
        borderColor="line"
        transform={{ md: flipped ? "rotate(-1.5deg)" : "rotate(1.5deg)" }}
        boxShadow="0 30px 60px -30px rgba(37, 99, 235, 0.5)"
      >
        {image ? (
          <Box asChild w="100%" h="auto" borderRadius="inner">
            <Image
              src={image}
              alt={`A screenshot of ${name}`}
              width={1280}
              height={800}
              sizes="(min-width: 60rem) 45vw, 100vw"
            />
          </Box>
        ) : (
          <ScreenshotPlaceholder />
        )}
      </Box>
    </Grid>
  );
};

const Projects = () => (
  <Box as="ol" display="grid" gap="6" listStyleType="none">
    {projects.map((project, i) => (
      <ProjectCard key={project.name} project={project} index={i} />
    ))}
  </Box>
);

export default Projects;
