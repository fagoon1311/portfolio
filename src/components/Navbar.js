import React, { useState } from 'react'
// import logo from '../assets/kevinRushLogo.png'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import { MdEmail } from "react-icons/md";
import { IoDocumentAttach } from "react-icons/io5";
import { motion } from 'framer-motion';


const Navbar = () => {
  const [isVisible, setIsVisible] = useState('')
  return (
    <nav className='mb-10 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <h1 className=' text-4xl font-bold text-neutral-900 border border-neutral-400 p-3 rounded-3xl bg-white'>FS</h1>
        </div>

        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            
            <div className='relative flex flex-col items-center'>
              <motion.a whileHover={{scale: 1.1}} href='https://www.linkedin.com/in/fagoon-sharma-a29640172/' target='_blank' rel="noreferrer" onMouseEnter={()=>setIsVisible('LD')} onMouseLeave={()=>setIsVisible('')}><FaLinkedin/></motion.a>
              {isVisible==='LD' && <span className='absolute top-full mt-1 text-xs bg-neutral-700 text-white opacity-50 p-2 rounded-2xl'>Linkedin</span>}
            </div>
            
            <div className='relative flex flex-col items-center'>
              <motion.a whileHover={{scale: 1.1}} href='https://github.com/fagoon1311' target='_blank' rel="noreferrer" onMouseEnter={()=>setIsVisible('GH')} onMouseLeave={()=>setIsVisible('')}><FaGithub /></motion.a>
              {isVisible==='GH' && <span className='absolute top-full mt-1 text-xs bg-neutral-700 text-white opacity-50 p-2 rounded-2xl'>GitHub</span>}
            </div>

            <div className='relative flex flex-col items-center'>
              <motion.a whileHover={{scale: 1.1}} href='mailto:fs14smailbox65@gmail.com' onMouseEnter={()=>setIsVisible('GM')} onMouseLeave={()=>setIsVisible('')}><MdEmail/></motion.a>
              {isVisible==='GM' && <span className='absolute top-full mt-1 text-xs bg-neutral-700 text-white opacity-50 p-2 rounded-2xl'>GMail</span>}
            </div>
            
            <div className='relative flex flex-col items-center'>
              <motion.a whileHover={{scale: 1.1}} href='./resume-2024.pdf' download={true} onMouseEnter={()=>setIsVisible('RS')} onMouseLeave={()=>setIsVisible('')}><IoDocumentAttach /></motion.a>
              {isVisible==='RS' && <span className='absolute top-full mt-1 text-xs bg-neutral-700 text-white opacity-50 p-2 rounded-2xl'>Resume</span>}
            </div>
        </div>
    </nav>
  )
}

export default Navbar