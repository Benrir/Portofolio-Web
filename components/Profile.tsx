"use client"
import Image from 'next/image'
import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Profile = () =>{
    
    return(
        <section id="profile">
            <div className="flex flex-col text-center items-center justify-center my-10 py-16 sm:py-16 md:flex-row md:text-left md:py-32">
                <div className='md:w-1/2 md:mt-2'>
                    <Image className='rounded shadow-2xl' src="/pp.jpg" alt="" width={300} height={300} />
                </div>
                <div className='md:w-1/2 md:mt-2'>
                    <h1 className='font-bold mt-1.5 text-3xl md:text-5xl text-[#3b4878]'>I&apos;m Mario Nursalim</h1>
                    <h1 className='font-light mt-1.5 text-xl md:text-2xl pb-8'>I have a dream to become a Data Scientist or Web Developer.</h1>
                    <div className='flex justify-center md:justify-normal'>
                        <ScrollLink smooth={true} offset={-100} duration={500} to="about" className="text-neutral-100 font-semibold px-6 py-3 bg-[#3b4878] rounded shadow hover:bg-[#657aae] hover:cursor-pointer">
                            Learn More
                        </ScrollLink>
                        <ScrollLink smooth={true} offset={-100} duration={500} to="projects" className="text-neutral-100 font-semibold px-6 py-3 bg-[#3b4878] rounded shadow hover:bg-[#657aae] ml-10 hover:cursor-pointer">
                            My Projects
                        </ScrollLink>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Profile