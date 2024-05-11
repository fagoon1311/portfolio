import React from 'react'
import { EXPERIENCES } from '../constants'

import {experience} from '../constants'
const Experience = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <h1 className='my-20 text-center text-4xl'> Experience</h1>
        <div>
            {EXPERIENCES.map((exp, index)=>(
                <div key={index}
                className='mb-8 flex flex-wrap lg:justify-center'>
                    <div className='w-full lg:w-1/4'>
                        <p className='mb-2 text-sm text-neutral-400'>{exp.year}</p>
                    </div>
                    <div className='w-full max-w-xl lg:w-3/4'>
                        <h6 className='mb-2 font-semibold'>{exp.role}-<span className='text-sm text-purple-500'>{exp.company}</span></h6>
                        <p className='mb-4 text-neutral-400'>{exp.description}</p>
                        {exp.technologies.map((tech, index)=>(
                            <span className="px-2 text-sm font-medium text-purple-500 mr-2 bg-neutral-900 rounded-lg"key={index}>{tech}</span>
                        ))}
                    </div>

                </div>
            ))}
        </div>

    </div>
  )
}

export default Experience