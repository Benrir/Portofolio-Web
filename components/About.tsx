"use client";

import React, { useEffect, useState } from "react";

import Expertise from "./Expertise";

import HobbyCarousel from "./Hobby";

interface Slide {
  label: string;
  title: string;
  body: string;
  display?: React.ReactNode;
}

const slides: Slide[] = [
  {
    label: "Education",
    title: "Bina Nusantara University",
    body: "Computer Science graduate with a 3.84 GPA, with a background in AI and Web Development. Took me 3.5 years to finish college",
  },
  {
    label: "What I Do",
    title: "Mobile & Web Development",
    body: "I build mobile-first applications, with a focus on creating interfaces that feel intuitive, responsive, and practical to use. My strongest area is mobile development with Flutter, where I work across UI implementation, state management (GetX), API integration, and application architecture. I also build web applications with React and Next.js, bringing the same attention to usability and interaction to the web. While frontend is my main focus, I’m comfortable working beyond the UI — creating APIs, data handling, working with databases, and troubleshooting backend issues when needed",
  },
  {
    label: "Skills",
    title: "Field Of Expertise",
    body: "",
    display: <Expertise />,
  },
  {
    label: "Things I Like",
    title: "Games, Manga, Music, Art, & Etc.",
    body: "Things i like to do when im not working or in weekends",
    display: <HobbyCarousel />,
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#0a0a0a] px-6 py-10 text-white sm:px-10 md:py-14"
    >
      <div className="mx-auto max-w-[94rem]">
        <h2 className="text-4xl font-black leading-[0.9] tracking-tight sm:text-5xl">
          About Me
        </h2>
        <div className="pt-4 text-neutral-400 text-justify md:text-left">
          I&apos;m Mario Nursalim — most people call me Mario or Mar, though a
          few somehow ended up calling me io (yo). I&apos;m an application
          developer at PT Mayora Indah Tbk, this is where I spend most of my
          time building things, solving problems, breaking things, fixing them,
          and occasionally wondering things. Outside of work, I&apos;m usually
          doing whatever feels interesting to me at the moment — whether
          that&apos;s working out, playing games, reading novels, or pixel art.
        </div>

        {/* List */}
        <ul className="mt-14">
          {slides.map((slide) => (
            <li
              key={slide.label}
              className="border-b border-white/10 py-8 first:pt-0 last:border-b-0 last:pb-0"
            >
              <p className="text-sm font-medium uppercase tracking-wide text-[#3d6bff]">
                {slide.label}
              </p>
              <h3 className="mt-2 text-2xl font-bold leading-snug sm:text-3xl">
                {slide.title}
              </h3>
              <p className="mt-4 max-w-7xl text-neutral-400 text-justify md:text-left">
                {slide.body}
              </p>
              {slide.display && <div className="mt-6">{slide.display}</div>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;
