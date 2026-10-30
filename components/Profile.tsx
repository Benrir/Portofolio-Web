"use client";
import Image from "next/image";

import React from "react";

import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";

import { Link as ScrollLink } from "react-scroll";

const Profile = () => {
  return (
    <section
      id="profile"
      className="relative bg-[#0a0a0a] text-white overflow-hidden px-6 py-32 sm:px-10"
    >
      {/* ---------- Mobile / tablet: simple stacked layout ---------- */}
      <div className="mx-auto flex flex-col items-start gap-8 md:hidden">
        <h1 className="text-6xl font-black leading-[0.9] tracking-tight">
          APPLICATION
        </h1>
        <p className="text-neutral-400">
          A software developer who turns ideas into working — and occasionally
          breaking — apps.
        </p>

        <div className="relative w-full">
          <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl bg-[#01082D]" />
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src="/pp.jpeg"
              alt="Mario Nursalim"
              width={600}
              height={720}
              className="h-[420px] w-full object-cover"
              priority
            />
            <span className="absolute right-5 top-5 text-sm font-semibold uppercase tracking-wide text-white/70">
              Developer
            </span>
          </div>
        </div>

        <p className="text-neutral-400">
          My approach is rooted in clean code and curiosity, turning bugs into
          learning moments.
        </p>

        <h2 className="text-6xl font-black leading-[0.9] tracking-tight">
          MARIO
        </h2>

        <div className="flex gap-8">
          <a
            href="https://wa.me/+6287873082860"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineWhatsApp
              className="hover:animate-bounce transition-transform cursor-pointer text-white"
              size={35}
            />
          </a>
          <a href="https://github.com/Benrir" rel="noreferrer" target="_blank">
            <AiOutlineGithub
              className="hover:animate-bounce transition-transform cursor-pointer text-white"
              size={35}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/mario-nursalim-722a73278/"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineLinkedin
              className="hover:animate-bounce transition-transform cursor-pointer text-white"
              size={35}
            />
          </a>
        </div>
      </div>

      {/* ---------- Desktop: composed hero layout ---------- */}
      <div className="mx-auto hidden max-w-7xl md:block">
        <div className="relative min-h-[760px]">
          {/* Image with orange offset frame — sits behind the headline */}
          <div className="absolute left-[380px] top-[30px] z-0 w-[500px]">
            <div className="absolute inset-0 translate-x-5 translate-y-5 rounded-2xl bg-[#01082D]" />
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="/pp.jpeg"
                alt="Mario Nursalim"
                width={520}
                height={660}
                className="h-[660px] w-full object-cover"
                priority
              />
              <span className="absolute right-6 top-6 text-sm font-semibold uppercase tracking-wide text-white/70">
                Developer
              </span>
            </div>
          </div>

          {/* Headline, top-left — layered above the image */}
          <h1 className="absolute left-0 top-0 z-20 text-7xl font-black leading-[0.9] tracking-tight [text-shadow:8px_8px_0px_#1F357F] lg:text-8xl lg:[text-shadow:10px_10px_0px_#1F357F]">
            APPLICATION
          </h1>

          {/* Intro paragraph, under headline */}
          <p className="absolute left-0 top-[120px] z-20 max-w-[260px] text-neutral-400">
            A software developer who builds things, sometimes refactor things
            and then gets curious about why the code broke 🗿 🗿
          </p>

          {/* Small blurb, right of image */}
          <p className="absolute right-0 top-[600px] z-20 max-w-[320px] text-neutral-400 text-right">
            I like figuring out how things work, building things that actually
            make sense, and turning “why the hell is this broken?” into
            something I can learn from.
          </p>

          {/* Name, bottom-right, overlapping the frame */}
          <h2 className="absolute bottom-0 right-0 z-20 translate-y-1/3 text-7xl font-black leading-[0.9] tracking-tight [text-shadow:8px_8px_0px_#1F357F] lg:text-8xl lg:[text-shadow:10px_10px_0px_#1F357F]">
            MARIO
          </h2>

          <div>
            <div className="absolute bottom-0 left-0 z-20 inline-flex cursor-pointer items-center gap-6 bg-black">
              <a
                href="https://wa.me/+6287873082860"
                rel="noreferrer"
                target="_blank"
              >
                <AiOutlineWhatsApp
                  className="hover:animate-bounce transition-transform cursor-pointer text-white"
                  size={35}
                />
              </a>
              <a
                href="https://github.com/Benrir"
                rel="noreferrer"
                target="_blank"
              >
                <AiOutlineGithub
                  className="hover:animate-bounce transition-transform cursor-pointer text-white"
                  size={35}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/mario-nursalim-722a73278/"
                rel="noreferrer"
                target="_blank"
              >
                <AiOutlineLinkedin
                  className="hover:animate-bounce transition-transform cursor-pointer text-white"
                  size={35}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
