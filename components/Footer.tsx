import React from "react";
import {
  Box,
  Container,
  Flex,
  Grid,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";

import SectionHeader from "./ui/SectionHeader";
import { CardCorners } from "./ui/Ornaments";
import {
  ArrowUpIcon,
  ArrowUpRightIcon,
  GithubIcon,
  LinkedinIcon,
  WhatsappIcon,
} from "./ui/icons";

const contacts = [
  {
    label: "WhatsApp",
    href: "https://wa.me/+6287873082860",
    text: "+62 878 7308 2860",
    Icon: WhatsappIcon,
  },
  {
    label: "GitHub",
    href: "https://github.com/Benrir",
    text: "Benrir",
    Icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mario-nursalim-722a73278/",
    text: "Mario Nursalim",
    Icon: LinkedinIcon,
  },
];

const Footer = () => {
  return (
    <Box as="footer" id="contact" pt="var(--section-gap)" pb="8">
      <Container>
        <Box
          position="relative"
          overflow="hidden"
          p={{ base: "6", sm: "10", md: "14" }}
          borderRadius="28px"
          borderWidth="1px"
          borderColor="brandLine"
          bg="linear-gradient(140deg, rgba(37, 99, 235, 0.28), {colors.surface} 50%)"
        >
          <Box
            aria-hidden="true"
            position="absolute"
            right="-10%"
            top="-40%"
            w="60%"
            h="140%"
            bg="radial-gradient(closest-side, rgba(59, 130, 246, 0.3), transparent)"
            pointerEvents="none"
          />
          <CardCorners inset="18px" />
          <Box position="relative">
            <SectionHeader index="XVII" label="The Star" title="Message me">
              The quickest way to reach me is WhatsApp. I&apos;m also on GitHub
              and LinkedIn.
            </SectionHeader>

            <Grid
              as="ul"
              templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
              gap="4"
              mt={{ base: "10", md: "12" }}
              listStyleType="none"
            >
              {contacts.map(({ label, href, text, Icon }) => (
                <li key={label}>
                  <Link
                    href={href}
                    rel="noreferrer"
                    target="_blank"
                    display="flex"
                    alignItems="center"
                    gap="4"
                    p="5"
                    borderRadius="16px"
                    borderWidth="1px"
                    borderColor="line"
                    bg="rgba(6, 10, 19, 0.55)"
                    textDecoration="none"
                    transitionProperty="border-color, background-color, transform"
                    transitionDuration="short"
                    transitionTimingFunction="out"
                    _hover={{
                      textDecoration: "none",
                      borderColor: "brandLine",
                      bg: "rgba(16, 26, 47, 0.9)",
                      transform: "translateY(-2px)",
                    }}
                    css={{
                      "&:hover .arrow": {
                        color: "brandHi",
                        transform: "translate(2px, -2px)",
                      },
                    }}
                  >
                    <Flex
                      align="center"
                      justify="center"
                      flexShrink={0}
                      w="11"
                      h="11"
                      borderRadius="inner"
                      bg="brandSoft"
                      color="brandHi"
                      fontSize="lg"
                    >
                      <Icon aria-hidden="true" />
                    </Flex>
                    <Stack gap="0" flex="1" minW="0">
                      <Text textStyle="eyebrow" color="muted">
                        {label}
                      </Text>
                      <Text color="fg" fontWeight="500" truncate>
                        {text}
                      </Text>
                    </Stack>
                    <Box
                      className="arrow"
                      color="muted"
                      fontSize="lg"
                      transitionProperty="color, transform"
                      transitionDuration="short"
                    >
                      <ArrowUpRightIcon aria-hidden="true" />
                    </Box>
                  </Link>
                </li>
              ))}
            </Grid>
          </Box>
        </Box>

        <Flex
          mt="8"
          pt="6"
          borderTopWidth="1px"
          borderColor="line"
          justify="space-between"
          align="center"
          gap="4"
          wrap="wrap"
        >
          <Text textStyle="meta">&copy; 2026 Mario Nursalim</Text>
          <Link
            href="#main"
            display="inline-flex"
            alignItems="center"
            gap="2"
            textStyle="meta"
            textDecoration="none"
            _hover={{ color: "brandHi", textDecoration: "none" }}
          >
            Back to top
            <ArrowUpIcon aria-hidden="true" />
          </Link>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
