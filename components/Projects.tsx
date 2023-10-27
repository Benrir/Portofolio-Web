"use client"
import React from 'react';
import {motion} from 'framer-motion'
import Image from 'next/image'

const projectsData = [
    {
        title : "NoKa3",
        description : 
            "I created and designed this game website called NoKa3. This website is my final project assignment for the Human and Computer Interaction course.",
        tags : ["HTML", "CSS", "JavaScript", "Figma"],
        imageUrl : "/NoKa3.png",
        gitUrl: "https://github.com/Benrir/NoKa-3"
    },

    {
        title : "Clickbait Detection Website Using XLNET",
        description : 
            "I created a website for detecting clickbait headlines using Transfer Learning (XLNet Model). This program is my final project assignment for NLP course.",
        tags : ["Deep Learning", "NLP", "Python"],
        imageUrl : "/clickbait.jpg",
        gitUrl : "https://github.com/Benrir/NLP"
    },

    {
        title : "SMKG Website",
        description : 
            "I redesigned a supermarket website called Summarecon Mall Kelapa Gading. This website is my final project assignment for the Human and Computer Interaction course.",
        tags : ["HTML", "CSS", "Figma"],
        imageUrl : "/SMKG.png",
        gitUrl : "https://github.com/Benrir/MKG-Mall"
    },

    {
        title : "Chess Piece Image Recognition",
        description : 
            "I have created a research paper for detecting chesspieces. My group's paper has been accepted by AIDAS Conference 2023 and is currently awaiting publication.",
        tags : ["Deep Learning", "Machine Learning", "Python"],
        imageUrl : "/Chess.jpg",
        gitUrl : "https://github.com/Benrir/ChessPieceImageRecognition"
    },

    {
        title : "Speech Emotion Recognition",
        description : 
            "I have created a speech emotion recognition model for detecting emotion based on someone speech. This is my final project assignment for Speech Recognition course.",
        tags : ["Machine Learning", "Speech Recognition", "Python"],
        imageUrl : "/Speech.png",
        gitUrl : "https://github.com/Benrir/SR"
    },

    {
        title : "Autism Spectrum Disorder Recognition",
        description : 
            "I have created a data vizualitation and prediction model for detecting autism. This is my final project assignment for Computational Biology course.",
        tags : ["Machine Learning", "Python"],
        imageUrl : "/Autism.jpg",
        gitUrl : "https://github.com/Benrir/COMPBIO"
    }
]

const Projects = () => {

    return(
        <section id='projects'>
            <div>
                <h1 className='text-center font-bold text-3xl text-[#3b4878] mt-10 mb-10'>
                    Projects
                </h1>
                <div className='flex-col md:flex items-center'>
                    {
                        projectsData.map((project, index) => (
                            <React.Fragment key={index}>
                                <Project {...project}/>
                            </React.Fragment>
                        )
                    )}
                </div>
            </div>
        </section>
    )
}

type ProjectProps = (typeof projectsData)[number];

function Project({title, description, tags, imageUrl, gitUrl} : ProjectProps){
    return (
        <motion.section 
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:"spring"}}
        className='group bg-[#808080]/[0.1] max-w-[42rem] border border-black/[0.2] rounded-lg overflow-hidden sm:pr-8 relative 
        sm:h-[20rem] mb-3 sm:mb-8 last:mb-0 odd:pr-8 even:pl-8 hover:bg-[#808080]/[0.2]'>
            <a href={gitUrl} className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full md:group-odd:mr-[18rem] md:group-even:ml-[18rem]">
                <h3 className='text-2xl font-semibold'>{title}</h3>
                <p className='mt-2 leading-relaxed text-black-700 pb-4'>{description}</p>
                <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
                    {tags.map((tag, index) => (
                        <li className="bg-[#3b4878] px-3 py-1 text-[0.7rem] tracking-wider text-white rounded-full" 
                        key={index} > {tag}
                        </li>
                    ))}
                </ul>
            </a>

            <a href={gitUrl}>
                <Image src={imageUrl} alt={title} width={500} height={300} className="md:absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl 
            
                group-hover:scale-[1.04] transition  
                group-odd:group-hover:-translate-x-3 group-odd:group-hover:translate-y-3 group-odd:group-hover:-rotate-2
                group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:-rotate-2 
                group-odd:left-[initial] group-odd:-right-40
                group-even:right-[initial] group-even:-left-40"/>
            </a>
        </motion.section>
    )
}

export default Projects