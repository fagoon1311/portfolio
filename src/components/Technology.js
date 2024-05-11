import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { FaPython } from "react-icons/fa";
import { AiOutlineJavaScript } from "react-icons/ai";
import { SiPowerbi } from "react-icons/si";
import { SiMysql } from "react-icons/si";

const Technology = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <h1 className='my-20 text-center text-4xl'>Technologies</h1>
        <div className='flex flex-wrap items-center justify-center gap-4'>
            <div className=' rounded-2xl border-4 border-neutral-800 p-4'>
                <RiReactjsLine  className='text-7xl text-cyan-400'/>  
            </div>
            <div className=' rounded-2xl border-4 border-neutral-800 p-4'>
                <AiOutlineJavaScript  className='text-7xl text-yellow-300'/>  
            </div>
            <div className=' rounded-2xl border-4 border-neutral-800 p-4'>
                <FaPython  className='text-7xl text-blue-500'/>
 
            </div>
            <div className=' rounded-2xl border-4 border-neutral-800 p-4'>
            <SiPowerbi  className='text-7xl text-yellow-300'/>  
            </div>
            <div className=' rounded-2xl border-4 border-neutral-800 p-4'>
            <SiMysql  className='text-7xl text-blue-800'/>  
            </div>
            
        </div>
    </div>
  )
}

export default Technology