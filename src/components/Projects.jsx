import React, { useState } from 'react'
import { PROJECTS } from '../constants'
import { motion, AnimatePresence } from 'framer-motion'
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

const Projects = () => {
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
    const projectsPerPage = 1;

    const currentProject = PROJECTS.slice(currentProjectIndex, currentProjectIndex + projectsPerPage)[0];

    const handleNext = () => {
        if (currentProjectIndex < PROJECTS.length - 1){
            setCurrentProjectIndex(currentProjectIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentProjectIndex > 0) {
            setCurrentProjectIndex(currentProjectIndex - 1);
        }
    }

    const handleClick = (link) =>{
        console.log("Called",link);
        window.location.href = link
    }
  return (
//     
    <div className='border-b border-neutral-900 pb-4'>
    <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className='my-20 text-center text-4xl'
    >
        Projects
    </motion.h1>

    <div className='flex flex-col items-center justify-center'>
        <AnimatePresence mode='wait'>
        <motion.div 
            key={currentProjectIndex} // Use index as the key to trigger animation
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className='mb-8 flex flex-col items-center text-center'>    
            <img
                src={currentProject.image}
                width={150}
                height={150}
                alt={currentProject.title}
                className='mb-6 rounded justify-center h-40 w-40'
            />
            
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5 }}
                className='w-full max-w-xl'
            >
                <h6 className='font-bold'>{currentProject.title}</h6>
                <p className='text-center'>{currentProject.description}</p>
                {currentProject.technologies.map((tech, index) => (
                    <span
                        key={index}
                        className='mr-2 mt-4 rounded bg-gradient-to-r from-purple-900 via-purple-600 to-pink-500 bg-clip-text text-transparent hover:border-2 hover:border-purple-900 hover:scale-150 px-2 py-1 text-sm font-medium text-center'
                    >
                        {tech}
                    </span>
                ))}
            </motion.div>
            <div className='mt-4'>
                <button
                    onClick={() => handleClick(currentProject.link)}
                    className="rounded-2xl bg-transparent border-4 border-neutral-700 font-semibold px-4 py-2 transition-all duration-200 hover:bg-gradient-to-r from-purple-900 to-pink-500 hover:border-purple-600"
                >
                    Get the code
                </button>
            </div>
        </motion.div>
        </AnimatePresence>

        <div className='flex justify-between w-full mt-8'>
            <button
                onClick={handlePrev}
                disabled={currentProjectIndex === 0}
                className= 'px-4 py-2 bg-gray-300/10 border-2 border-neutral-700 rounded disabled:opacity-50 hover:scale-150 hover:bg-neutral-900 transition-all duration-200 hover:border-4 hover:border-purple-600'
            >
                <MdNavigateBefore />
            </button>
            <button
                onClick={handleNext}
                disabled={currentProjectIndex >= PROJECTS.length - 1}
                className='px-4 py-2 bg-gray-300/10 border-2 border-neutral-700 rounded disabled:opacity-50 hover:scale-150 hover:bg-neutral-900 transition-all duration-200 hover:border-4 hover:border-purple-600'
            >
                <MdNavigateNext />
            </button>
        </div>
    </div>
    </div>
    );
}

export default Projects