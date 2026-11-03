"use client";

import { Box } from "@chakra-ui/react";

import Profile from "@/components/Profile";
import About from "@/components/About";
import Publication from "@/components/Publication";
import Experience from "@/components/Experience";
import HobbyCarousel from "@/components/Hobby";

export default function Home() {
  return (
    <Box as="main" id="main">
      <Profile />
      <About />
      <Experience />
      <Publication />
      <HobbyCarousel />
    </Box>
  );
}
