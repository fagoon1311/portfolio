import React from 'react'
// import logo from '../assets/kevinRushLogo.png'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import { MdEmail } from "react-icons/md";

import { IoDocumentAttach } from "react-icons/io5";


const Navbar = () => {
  return (
    <nav className='mb-10 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <h1 className=' text-4xl font-bold text-neutral-900 border border-neutral-400 p-3 rounded-3xl bg-white'>FS</h1>
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <a href='https://www.linkedin.com/in/fagoon-sharma-a29640172/' target='_blank' rel="noreferrer"><FaLinkedin /></a>
            <a href='https://github.com/fagoon1311' target='_blank' rel="noreferrer"><FaGithub /></a>
            <a href='mailto:fs14smailbox65@gmail.com'><MdEmail/></a>
            <a href='www.google.com'><IoDocumentAttach /></a>
        </div>
    </nav>
  )
}

export default Navbar