"use client";

import React, { useState, useEffect } from "react";

import { Link as ScrollLink } from "react-scroll";

import { IoMdMenu, IoMdClose } from "react-icons/io";

const cycle = ["Welcome!", "Benvenuta!", "欢迎!", "환영!", "Grata!"];

const Navbar = () => {
  const [currWordIdx, setCurrWordIdx] = useState(0);
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrWordIdx((prevWordIdx) => (prevWordIdx + 1) % cycle.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="w-full mx-auto px-6 py-3 sm:px-20 sm:py-4 fixed top-0 z-50 shadow bg-[#0a0a0a]">
      <div className="justify-between md:items-center md:flex">
        <div className="flex-1">
          <div className="flex items-center justify-between py-3">
            <div className="md:py-2 md:block">
              <h2 className="text-2xl font-bold text-white">
                {cycle[currWordIdx]}
              </h2>
            </div>

            <div className="md:hidden">
              <button onClick={() => setNavbar(!navbar)}>
                {navbar ? (
                  <IoMdClose size={30} style={{ color: "white" }} />
                ) : (
                  <IoMdMenu size={30} style={{ color: "white" }} />
                )}
              </button>
            </div>
          </div>
        </div>

        <div
          className={`flex-1 pb-3 mt-6 md:mt-0 md:pb-0  ${
            navbar ? "block" : "hidden md:block"
          }`}
        >
          <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:gap-10">
            <ScrollLink to="about" smooth={true} offset={-100} duration={500}>
              <h2 className="text-xl text-white hover:text-[#3d6bff] hover:cursor-pointer transition-colors">
                About Me
              </h2>
            </ScrollLink>
            <ScrollLink
              to="projects"
              smooth={true}
              offset={-100}
              duration={500}
            >
              <h2 className="text-xl text-white hover:text-[#3d6bff] hover:cursor-pointer transition-colors">
                My Works
              </h2>
            </ScrollLink>
            <ScrollLink
              to="experiences"
              smooth={true}
              offset={-100}
              duration={500}
            >
              <h2 className="text-xl text-white hover:text-[#3d6bff] hover:cursor-pointer transition-colors">
                Experience
              </h2>
            </ScrollLink>
            <ScrollLink
              to="publications"
              smooth={true}
              offset={-100}
              duration={500}
            >
              <h2 className="text-xl text-white hover:text-[#3d6bff] hover:cursor-pointer transition-colors">
                Publication
              </h2>
            </ScrollLink>
          </div>
        </div>

        <div className="flex-1 flex flex-row md:justify-end gap-2 pb-3 md:pb-0">
          <div className="text-lg text-white font-semibold whitespace-nowrap">
            {"Mario Nursalim 🐶"}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
