import React from 'react'
import {HERO_CONTENT} from '../constants'
import { useRef } from 'react'
import { Typewriter } from 'react-simple-typewriter'


import {motion} from 'framer-motion'
import Lottie from 'lottie-react'
import animationData from '../assets/Animation - 1715785393784.json'

const container = (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible: {x: 0, opacity: 1, transition: {duration: 0.5, delay: delay}}
});

const Hero = () => {
  const animRef = useRef(null)
  
    return (
        <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
            <div className='flex flex-wrap'>
                <div className='w-full lg:w-1/2'>
                    <div className='flex flex-col items-center lg:items-start'>
                        <motion.h1 
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>Fagoon Sharma
                        </motion.h1>
                        <motion.span 
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'
                            style={{lineHeight: '1.8'}}>
                              I am a <span>
                                <Typewriter 
                                  words={['Software Engineer', 'Front End Engineer', 'Data Analyst', 'PowerBI Developer', 'Teacher']}
                                  loop={5}
                                  cursor
                                  cursorStyle='|'
                                  cursorColor='white'
                                  typeSpeed={120}
                                  deleteSpeed={100}
                              
                              /></span>
                        </motion.span>

                        <motion.p 
                            variants={container(1)}
                            initial="hidden"
                            animate="visible"
                            className='my-2 max-w-xl py-6 font-light tracking-tighter'>{HERO_CONTENT}
                        </motion.p>
                    </div>
                </div>
                <div className='w-full lg:w-1/2 lg:p-8'>
                    <motion.div 
                        initial={{x: 100, opacity: 0}}
                        animate={{x: 0, opacity: 1}}
                        transition={{duration: 1, delay: 0.5}}
                        className='flex justify-center ml-10'>
                        {/* <img className="h-[25rem] w-[25rem] rounded-3xl pl-4" alt='herp' src={hero}></img> */}
                        <Lottie animationData={animationData} lottieRef={animRef} loop={false}/>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Hero
