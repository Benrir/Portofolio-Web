import React from "react";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <hr className="w-full h-0.5 mx-auto mt-8 border-0" />
      <div className="mx-auto p-4 flex flex-col text-center text-neutral-900 gap-4 md:flex-row md:justify-between">
        <div className="text-white">&copy; 2026 Mario Nursalim</div>
        <div className="flex flex-row items-center justify-center gap-8 mb-1">
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
              size={30}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/mario-nursalim-722a73278/"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineLinkedin
              className="hover:animate-bounce transition-transform cursor-pointer text-white"
              size={30}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
