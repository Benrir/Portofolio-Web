"use client"
import React from 'react';
import  {
    AiOutlineGithub,
    AiOutlineWhatsApp,
    AiOutlineLinkedin,
    AiOutlineMail,
} from "react-icons/ai"

const About = () => {
    return(
        <section id="about">
            <div className='md:mt-2'>
            <h1 className='text-center font-bold text-2xl md:text-3xl text-[#3b4878] pb-5'>
                About Me
            </h1>
            <p className='text-center font-light mt-1.5 text-base md:text-lg'>I&apos;m Mario Nursalim, people often called me Mario. I&apos;m an undergraduate student at Bina Nusantara University, 
            currently in my third year of study Computer Science focusing in Artificial Intelligence with academic record 3.84 GPA.</p>
            <p className='text-center font-light mt-1.5 text-base md:text-lg pb-2'>My favorite part of programming is the problem-solving aspect. I find immense satisfaction in applying my programming skills to solve an existing problem. Whether it&apos;s creating an AI model and building a web application to solve a problem</p>
            <p className='text-center font-light mt-1.5 text-base md:text-lg'>My journey into the world of coding began during my time at university. I discovered that web development 
            and data science are the things I enjoy working on the most. Currently, I am looking forward to opportunities to learn, grow, and hone my abilities in data science and web development. When i&apos;m not coding, i enjoy playing video games, reading manga, and watching anime.</p>
            </div>
            <div className="md:mt-4 mt-2 mb-10">
                <div className="flex flex-row space-x-2 items-center text-center justify-center">
                    <a href="https://wa.me/+6287873082860" rel="noreferrer" target="_blank">
                        <AiOutlineWhatsApp
                            className='hover:animate-bounce transition-transform cursor-pointer text-black'
                            size={35}
                        />
                    </a>
                    <a href="https://github.com/Benrir" rel="noreferrer" target="_blank">
                        <AiOutlineGithub
                            className='hover:animate-bounce transition-transform cursor-pointer text-black'
                            size={35}
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/mario-nursalim-722a73278/" rel="noreferrer" target="_blank">
                        <AiOutlineLinkedin
                            className='hover:animate-bounce transition-transform cursor-pointer text-black'
                            size={35}
                        />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default About