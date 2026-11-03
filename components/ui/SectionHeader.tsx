import React, { ReactNode } from "react";
import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";

import { Sparkle } from "./Ornaments";

// Each section is introduced like a drawn card: its arcana number and name.
interface SectionHeaderProps {
  index: string;
  label: string;
  title: ReactNode;
  id?: string;
  children?: ReactNode;
}

const SectionHeader = ({
  index,
  label,
  title,
  id,
  children,
}: SectionHeaderProps) => {
  return (
    <Stack gap="5" maxW="40rem">
      <Flex align="center" gap="3" textStyle="eyebrow">
        <Text as="span" color="fg">
          {index}
        </Text>
        <Box w="6" h="1px" bg="brandLine" />
        <Sparkle size={8} />
        <Box w="6" h="1px" bg="brandLine" />
        <Text as="span">{label}</Text>
      </Flex>
      <Heading as="h2" id={id}>
        {title}
      </Heading>
      {children && <Text textStyle="lead">{children}</Text>}
    </Stack>
  );
};

export default SectionHeader;
