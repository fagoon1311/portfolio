import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { FaPython } from "react-icons/fa";
import { AiOutlineJavaScript } from "react-icons/ai";
import { SiPowerbi } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { motion } from 'framer-motion';

const iconVar = (duration) =>(
    {
        initial: {y:-10},
        animate: {
            y:[10, -10],
            transition: {
                duration: duration,
                ease: 'linear',
                repeat: Infinity,
                repeatType: 'reverse'
            }
        }
    }
)
     


const Technology = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <motion.h1 
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:1.5}}
        className='my-20 text-center text-4xl'>Technologies</motion.h1>
        <motion.div 
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:-100}}
        transition={{duration:1.5}}
        className='flex flex-wrap items-center justify-center gap-4'>
            <motion.div 
            variants={iconVar(2.5)}
            initial='initial'
            animate='animate'
            className=' rounded-2xl border-4 border-neutral-800 p-4'>
                <RiReactjsLine  className='text-7xl text-cyan-400'/>  
            </motion.div>

            <motion.div 
            variants={iconVar(3)}
            initial='initial'
            animate='animate'
            className=' rounded-2xl border-4 border-neutral-800 p-4'>
                <AiOutlineJavaScript  className='text-7xl text-yellow-300'/>  
            </motion.div>

            <motion.div 
            variants={iconVar(2)}
            initial='initial'
            animate='animate'
            className=' rounded-2xl border-4 border-neutral-800 p-4'>
                <FaPython  className='text-7xl text-blue-500'/>
 
            </motion.div>
            <motion.div 
            variants={iconVar(5)}
            initial='initial'
            animate='animate'
            className=' rounded-2xl border-4 border-neutral-800 p-4'>
            <SiPowerbi  className='text-7xl text-yellow-300'/>  
            </motion.div>
            <motion.div variants={iconVar(2.3)}
            initial='initial'
            animate='animate'
            className=' rounded-2xl border-4 border-neutral-800 p-4'>
            <SiMysql  className='text-7xl text-blue-800'/>  
            </motion.div>
            
        </motion.div>
    </div>
  )
}

export default Technology