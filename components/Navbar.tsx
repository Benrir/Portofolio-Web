"use client"
import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { IoMdMenu, IoMdClose } from 'react-icons/io';

const cycle = ['Welcome!', 'Benvenuta!', '欢迎!', '환영!', 'Grata!'];

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
    <header className="w-full mx-auto px-4 sm:px-20 fixed top-0 z-50 shadow bg-white border-b border-black-600">
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className="flex items-centered justify-between py-3">
            <div className="md:py-5 md:block">
                <h2 className="text-2xl font-bold text-[#3b4878]">
                  {cycle[currWordIdx]}
                </h2>
            </div>

            <div className="md:hidden">
              <button onClick={() => setNavbar(!navbar)}>
                {navbar ? <IoMdMenu size={30} style={{ color: 'black' }}/> : <IoMdMenu size={30} style={{ color: 'black' }} />}
              </button>
            </div>
          </div>
        </div>

        <div>
          <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'block' : 'hidden'}`}>
            <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <ScrollLink to = "profile" smooth={true} offset={-100} duration={500}>
                <h2 className="text-l text-black pb-3 hover:text-[#3b4878] hover:cursor-pointer">Profile</h2>
              </ScrollLink>
              <ScrollLink to = "about" smooth={true} offset={-100} duration={500}>
                <h2 className="text-l text-black pb-3 hover:text-[#3b4878] hover:cursor-pointer">About</h2>
              </ScrollLink>
              <ScrollLink to = "projects" smooth={true} offset={-100} duration={500}>
                <h2 className="text-l text-black pb-3 hover:text-[#3b4878] hover:cursor-pointer">Project</h2>
              </ScrollLink>
              <ScrollLink to = "experiences" smooth={true} offset={-100} duration={500}>
                <h2 className="text-l text-black pb-3 hover:text-[#3b4878] hover:cursor-pointer">Experience</h2>
              </ScrollLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
