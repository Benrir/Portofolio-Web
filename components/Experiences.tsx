"use client"
import React from 'react'
import {useRef} from 'react';
import {motion, useScroll} from "framer-motion"
import Lilcon from './Lilcon';

interface DetailsProps{
    name: string;
    time: string;
    role: string;
    work: string;
    image: React.ReactNode;
}

const Details: React.FC<DetailsProps> = ({name, time, role, work, image}) => {
    return <li className='my-8 first:mt-0 last:mb-0 md:w-[70%] w-[70%] mx-auto flex flex-col items-center justify-between border border-gray-300 shadow-md rounded-lg pr-5 pl-5 pt-1 pb-1'>
        <Lilcon/>
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:"spring"}}>
            <h3 className='capitalize font-bold text-xl'>{name}&nbsp;</h3>
            <span className='capitalize font-medium text-dark/75'>
                {time} | {role}
            </span>
            <p className='w-full'>
                {image}
            </p>
            <p className='font-medium text-xl/2 w-full'>
                {work}
            </p>
        </motion.div>
    </li>
}

const Experiences = () => {
    const ref = useRef(null);
        const {scrollYProgress} = useScroll(
            {
                target: ref,
                offset: ["start end", "center start"]
            }
        )

    return (
        <section id='experiences'>
            <div className='my-12 pb-12 md:pt-16 md:pb-38'>
                <div>
                    <h1 className='text-center font-bold text-2xl md:text-3xl text-[#3b4878] pb-10'>
                        Experiences & Achievements
                    </h1>
                </div>
                <div ref={ref} className='w-[75%] mx-auto relative'>
                <motion.div 
                style={{scaleY: scrollYProgress}}
                    className='absolute left-9 top-0 w-[4px] h-[90%] md:h-full bg-black origin-top'/>
                    <ul className='w-full flex flex-col items-start justify-between ml-4'>
                        
                        <Details
                            name ="INC 2022"
                            time = "3rd Semester"
                            role = "Bina Nusantara University"
                            image = {<img src='INC.png'></img>}
                            work = "I participated in the INC 2022 contest and my team achieved a top-50 ranking on the leaderboard."
                        />
                    
                        <Details
                            name ="ICPC 2022"
                            time = "3rd Semester"
                            role = "Bina Nusantara University"
                            image = {<img src='INC.png'></img>}
                            work = "Me and my team participated in the ICPC 2022 contest. However we didn't qualify for the next stage"
                        />
                    

                        <Details
                            name ="AIDAS CONFERENCE 2023"
                            time = "4th Semester"
                            role = "Bina Nusantara University"
                            image = {<img src='MLPAPER.png'></img>}
                            work = "My group paper 'Chess Piece Image Recognition Using Transfer Learning, Simple Neural Network Convolutional Neural Network' was accepted in AIDAS Conference 2023."
                        />

                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Experiences