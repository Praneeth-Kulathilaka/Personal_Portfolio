import React from 'react'
import { PROJECTS } from '../constants'
import { motion } from 'framer-motion'

const Projects = () => {
    const handleClick = (link) =>{
        console.log("Called",link);
        window.location.href = link
    }
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <motion.h1 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity:0, y: -100 }}
            transition={{ duration: 0.5, }}
            className='my-20 text-center text-4xl'>Projects</motion.h1>
        
            <div className='flex flex-wrap align-center justify-between '>
                {PROJECTS.map((project,index)=>(
                    <div key={index} className='mb-8 lg:justify-between lg:w-1/4 mr-2'>
                        <motion.div 
                            whileInView={{ opacity: 1, x:0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5 }}
                            className='w-full object-center'>
                            <img 
                                src={project.image}
                                width={150}
                                height={150} 
                                alt={project.title}
                                className='mb-6 rounded' />
                        </motion.div>
                        <motion.div 
                            whileInView={{ opacity:1, x:0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 0.5 }} 
                            className='w-full max-w-xl lg:w-3/4'>
                            <h6>{project.title}</h6>
                            <p className='text-justify'>{project.description}</p>
                            {project.technologies.map((tech,index) => (
                                <span
                                key={index}
                                className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900 text-justify'>
                                    {tech}
                                </span>
                            ))}
                        </motion.div>
                        <div className='mt-4'>
                            <button 
                                onClick={() => handleClick(project.link)}
                                className="rounded-2xl bg-transparent border-4 border-neutral-700 font-semibold px-4 py-2 transition-all duration-200 hover:bg-gradient-to-r from-purple-900 to-pink-500 hover:border-purple-600 ...">Get the code</button>
                        </div>
                        {/* <div class="max-w-sm lg:w-1/3 rounded overflow-hidden shadow-lg">
                            <img class="w-full" src={project.image} alt="Sunset in the mountains"/>
                            <div class="px-6 py-4">
                                <div class="font-bold text-xl mb-2">{project.title}</div>
                                <p class="text-gray-700 text-base">
                                {project.description}
                                </p>
                            </div>
                            <div class="px-6 pt-4 pb-2">
                                {project.technologies.map((tech,index) => (
                                    <span key={index} class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tech}</span>
                                ))}    
                            </div>
                        </div> */}
                    </div>
                ))}
            </div>
        
    </div>
  )
}

export default Projects