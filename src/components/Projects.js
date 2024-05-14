import React from 'react'
import { PROJECTS } from '../constants'
import { motion } from 'framer-motion'

const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <h1 className='my-20 text-center text-4xl'>Projects</h1>
        <div>
            {
                PROJECTS.map((proj, index)=>(
                    <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                        <motion.div className='w-full lg:w-1/4'
                        whileInView={{opacity:1, x:0}}
                        initial={{opacity: 0, x: -100}}
                        transition={{duration: 0.5}}
                        >
                            <img width={150} height={150}src={proj.image} alt='projimg' className='mb-6 rounded'></img>
                        </motion.div>
                        <motion.div className='w-full max-w-xl lg:w-3/4'
                        whileInView={{opacity:1, x:0}}
                        initial={{opacity: 0, x: 100}}
                        transition={{duration: 0.5}}>
                            <h6 className='mb-2 font-semibold'>{proj.title}</h6>
                            <p className='mb-4 text-neutral-400'>{proj.description}</p>
                            {
                                proj.technologies.map((tech, index)=>(
                                    <span key={index} className="px-2 text-sm font-medium text-purple-500 mr-2 bg-neutral-900 rounded-lg">{tech}</span>
                                ))
                            }
                        </motion.div>
                    </div>
                ))
            }

        </div>
    
    </div>

  )
}

export default Projects