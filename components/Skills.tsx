"use client"
import React from 'react';
import { useState } from 'react'
import { Link as ScrollLink } from 'react-scroll';

const Skills = () => {
    const [scattered, setScat] = useState(false);

    const togScat = () => {
        setScat(!scattered);
        
        if(scattered){
            window.scrollTo({
                top: 1000,
                behavior: 'smooth',
            });
        }
    };

    return(
        <section id='Skills'>
            <div>
                <section id={"mfoe"} className='text-center font-bold text-2xl text-[#3b4878] mb-10'>My Field Of Expertise</section>
                    <div className="flex justify-center items-center">
                        <div className='flex flex-col items-center'>

                        <div onClick={togScat} className={`hover:cursor-pointer grid grid-cols-2 md:grid-cols-5 justify-center ${scattered ? 'mb-28 md:mb-32 gap-4 md:gap-10' : 'mb-56 md:mb-64 gap-36 md:gap-10'}`}>
                            <div className={`md:h-auto flex flex-col text-center bg-white shadow-lg border border-black/[0.2] p-4 rounded-lg transform transition-transform ${ scattered ? 'translate-x-0 translate-y-2' : 'absolute translate-x-8'}`}
                            style={{ transitionDuration: `500ms`}}>
                                <img className='' src='c.jpeg' width={150}></img>
                                <span className='font-bold mt-1 w-full'>C</span>
                            </div>
                            <div className={`md:h-auto flex flex-col text-center bg-white shadow-lg border border-black/[0.2] p-4 rounded-lg transform transition-transform ${ scattered ? 'translate-x-0 translate-y-2' : 'absolute translate-x-4'}`}
                            style={{ transitionDuration: `500ms` }}>
                                <img className='' src='cpp.png' width={150}></img>
                                <span className='font-bold mt-1 w-full'>C++</span>
                            </div>
                            <div className={`md:h-auto flex flex-col text-center bg-white shadow-lg border border-black/[0.2] p-4 rounded-lg transform transition-transform ${ scattered ? 'translate-x-0 translate-y-2' : 'absolute translate-x-0'}`}
                            style={{ transitionDuration: `500ms` }}>
                                <img className='' src='HTML.png' width={150}></img>
                                <span className='font-bold mt-1 w-full'>HTML</span>
                            </div>
                            <div className={`md:h-auto flex flex-col text-center bg-white shadow-lg border border-black/[0.2] p-4 rounded-lg transform transition-transform ${ scattered ? 'translate-x-0 translate-y-2' : 'absolute -translate-x-4'}`}
                            style={{ transitionDuration: `500ms` }}>
                                <img className='' src='css.png' width={150}></img>
                                <span className='font-bold mt-1 w-full'>CSS</span>
                            </div>
                            <div className={`md:h-auto flex flex-col text-center bg-white shadow-lg border border-black/[0.2] p-4 rounded-lg transform transition-transform ${ scattered ? 'translate-x-0 translate-y-2' : 'absolute -translate-x-8'}`}
                            style={{ transitionDuration: `500ms` }}>
                                <img className='' src='python.jpeg' width={150}></img>
                                <span className='font-bold mt-1 w-full'>Python</span>
                            </div>
                            <div className={`md:h-auto flex flex-col text-center bg-white shadow-lg border border-black/[0.2] p-4 rounded-lg transform transition-transform ${ scattered ? 'translate-x-0 translate-y-2' : 'absolute translate-x-8 hover:rotate-[35deg]'}`}
                            style={{ transitionDuration: `500ms`}}>
                                <img className='' src='Java.png' width={150}></img>
                                <span className='font-bold mt-1 w-full'>Java</span>
                            </div>
                            <div className={`md:h-auto flex flex-col text-center bg-white shadow-lg border border-black/[0.2] p-4 rounded-lg transform transition-transform ${ scattered ? 'translate-x-0 translate-y-2' : 'absolute translate-x-4 hover:rotate-[28deg]'}`}
                            style={{ transitionDuration: `500ms` }}>
                                <img className='' src='JS.png' width={150}></img>
                                <span className='font-bold mt-1 w-full'>Java Script</span>
                            </div>
                            <div className={`md:h-auto flex flex-col text-center bg-white shadow-lg border border-black/[0.2] p-4 rounded-lg transform transition-transform ${ scattered ? 'translate-x-0 translate-y-2' : 'absolute translate-x-0 hover:rotate-[21deg]'}`}
                            style={{ transitionDuration: `500ms` }}>
                                <img className='' src='DL.jpg' width={150}></img>
                                <span className='font-bold mt-1 w-full'>Deep Learning</span>
                            </div>
                            <div className={`md:h-auto flex flex-col text-center bg-white shadow-lg border border-black/[0.2] p-4 rounded-lg transform transition-transform ${ scattered ? 'translate-x-0 translate-y-2' : 'absolute -translate-x-4 hover:rotate-[14deg]'}`}
                            style={{ transitionDuration: `500ms` }}>
                                <img className='' src='ML.jpeg' width={150}></img>
                                <span className='font-bold mt-1 w-full'>Machine Learning</span>
                            </div>
                            <div className={`md:h-auto flex flex-col items-center text-center bg-white shadow-lg border border-black/[0.2] p-4 rounded-lg transform transition-transform ${ scattered ? 'translate-x-0 translate-y-2' : 'absolute -translate-x-8 hover:rotate-[7deg]'}`}
                            style={{ transitionDuration: `500ms` }}>
                                <img className='' src='React.png' width={150}></img>
                                <span className='font-bold mt-1 w-full'>React</span>
                            </div>
                            <div className={`md:h-auto flex flex-col items-center text-center bg-white shadow-lg border border-black/[0.2] p-4 rounded-lg transform transition-transform ${ scattered ? 'translate-x-0 translate-y-2' : 'absolute -translate-x-8 hover:rotate-[7deg]'}`}
                            style={{ transitionDuration: `500ms` }}>
                                <img className='' src='ts.png' width={150} height={150}></img>
                                <span className='font-bold mt-1 w-full'>Type Script</span>
                            </div>
                            <div className={`md:h-auto flex flex-col items-center text-center bg-white shadow-lg border border-black/[0.2] p-4 rounded-lg transform transition-transform ${ scattered ? 'translate-x-0 translate-y-2' : 'absolute -translate-x-4 hover:rotate-[7deg]'}`}
                            style={{ transitionDuration: `500ms` }}>
                                <img className='' src='Laravel.png' width={150} height={150}></img>
                                <span className='font-bold mt-1 w-full'>Laravel</span>
                            </div>
                            <div className={`md:h-auto flex flex-col items-center text-center bg-white shadow-lg border border-black/[0.2] p-4 rounded-lg transform transition-transform ${ scattered ? 'translate-x-0 translate-y-2' : 'absolute -translate-x-0 hover:rotate-[7deg]'}`}
                            style={{ transitionDuration: `500ms` }}>
                                <img className='' src='mysql.png' width={150} height={150}></img>
                                <span className='font-bold mt-1 w-full'>MySQL</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills