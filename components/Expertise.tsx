import React from "react";
import { Box, Flex, Grid, Text } from "@chakra-ui/react";

import SkillTile from "./ui/SkillTile";
import { skills, SkillName } from "./skills";

interface ExpertiseGroup {
  label: string;
  skills: SkillName[];
}

const expertise: ExpertiseGroup[] = [
  {
    label: "Languages",
    skills: ["Dart", "JavaScript", "SQL", "TypeScript", "Java", "Python"],
  },
  {
    label: "Frameworks",
    skills: ["Flutter", "React", "Next.js", "Node.js"],
  },
  {
    label: "Databases",
    skills: ["PostgreSQL", "Oracle", "MySQL"],
  },
  {
    label: "Tools",
    skills: ["DBeaver", "Postman", "GitHub", "Figma"],
  },
];

const Expertise = () => {
  return (
    <Box id="expertise">
      {/* Two groups per row: Languages and Frameworks, Databases and Tools */}
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
        columnGap={{ md: "8", lg: "12" }}
        rowGap="8"
      >
        {expertise.map((group) => (
          <Box as="section" key={group.label}>
            <Text as="h4" textStyle="eyebrow" color="muted" mb="4">
              {group.label}
            </Text>
            <Flex
              as="ul"
              listStyleType="none"
              wrap="wrap"
              gap={{ base: "2", sm: "3", md: "2", lg: "3" }}
            >
              {group.skills.map((name) => (
                <SkillTile key={name} {...skills[name]} />
              ))}
            </Flex>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default Expertise;
