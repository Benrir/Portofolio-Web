"use client";

import React, { useState } from "react";
import {
  Box,
  Button,
  chakra,
  Container,
  Flex,
  IconButton,
  Link,
} from "@chakra-ui/react";

import { Link as ScrollLink } from "react-scroll";

import { IoMdMenu, IoMdClose } from "react-icons/io";

const sections = [
  { to: "about", label: "About" },
  { to: "experiences", label: "Experience" },
  { to: "publications", label: "Publication" },
  { to: "hobbies", label: "Hobbies" },
];

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <Box
      as="header"
      position="sticky"
      top="0"
      zIndex="sticky"
      bg="rgba(6, 10, 19, 0.72)"
      backdropFilter="blur(14px) saturate(140%)"
      borderBottomWidth="1px"
      borderColor="line"
    >
      <Container>
        <Flex align="center" justify="space-between" gap="6" h="68px">
          <Link
            href="#main"
            aria-label="Mario Nursalim, to the top"
            display="inline-flex"
            alignItems="center"
            gap="2.5"
            fontFamily="heading"
            fontSize="2xl"
            fontWeight="600"
            color="fg"
            textDecoration="none"
            whiteSpace="nowrap"
            _hover={{ textDecoration: "none", color: "brandHi" }}
          >
            Mario Nursalim
          </Link>

          <IconButton
            hideFrom="md"
            variant="outline"
            size="md"
            w="40px"
            px="0"
            aria-expanded={navbar}
            aria-controls="nav-menu"
            aria-label={navbar ? "Close menu" : "Open menu"}
            onClick={() => setNavbar(!navbar)}
          >
            {navbar ? (
              <IoMdClose size={20} aria-hidden="true" />
            ) : (
              <IoMdMenu size={20} aria-hidden="true" />
            )}
          </IconButton>

          <Flex
            as="nav"
            id="nav-menu"
            aria-label="Sections"
            display={{ base: navbar ? "flex" : "none", md: "flex" }}
            direction={{ base: "column", md: "row" }}
            align={{ base: "stretch", md: "center" }}
            gap={{ base: "4", md: "8" }}
            position={{ base: "absolute", md: "static" }}
            left="var(--gutter)"
            right="var(--gutter)"
            top="calc(100% + 8px)"
            p={{ base: "4", md: "0" }}
            borderRadius={{ base: "card", md: "0" }}
            borderWidth={{ base: "1px", md: "0" }}
            borderColor="line"
            bg={{ base: "surface2", md: "transparent" }}
            boxShadow={{ base: "card", md: "none" }}
          >
            <Flex
              as="ul"
              listStyleType="none"
              direction={{ base: "column", md: "row" }}
              align={{ base: "stretch", md: "center" }}
              gap={{ base: "1", md: "1" }}
            >
              {sections.map((section) => (
                <li key={section.to}>
                  <chakra.span
                    asChild
                    display="block"
                    px="3"
                    py="2"
                    borderRadius="full"
                    color="fg2"
                    fontFamily="label"
                    fontSize={{ base: "sm", md: "xs" }}
                    fontWeight="600"
                    letterSpacing="0.14em"
                    textTransform="uppercase"
                    whiteSpace="nowrap"
                    cursor="pointer"
                    transitionProperty="color, background-color"
                    transitionDuration="short"
                    _hover={{ color: "fg", bg: "whiteAlpha.50" }}
                    css={{
                      "&.active": { color: "brandHi", bg: "brandSoft" },
                    }}
                  >
                    <ScrollLink
                      to={section.to}
                      href={`#${section.to}`}
                      smooth={true}
                      offset={-88}
                      duration={500}
                      spy={true}
                      onClick={() => setNavbar(false)}
                    >
                      {section.label}
                    </ScrollLink>
                  </chakra.span>
                </li>
              ))}
            </Flex>
            <Button asChild size="md">
              <a href="#contact" onClick={() => setNavbar(false)}>
                Contact me
              </a>
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
