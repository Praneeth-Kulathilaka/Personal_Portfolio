import React from 'react'
import { HERO_CONTENT } from '../constants'
import prophoto from '../assets/IMG_2420.png'
import { motion } from 'framer-motion'
import cv from '../assets/Praneeth-CV.pdf'

const container = (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible: {
        x: 0,
        opacity: 1,
        transition: {duration: 0.5, delay: delay}
    }
})

const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-4'>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2'>
                <div className='flex flex-col items-center lg:items-start'>
                    <motion.h1
                        variants={container(0)}
                        initial="hidden"
                        animate="visible"
                        className='pb-16 text-4xl font-thin tracking-tight lg:mt-12 lg:text-6xl'>
                            Praneeth Kulathilaka
                    </motion.h1>
                    <motion.span 
                        variants={container(0.5)}
                        initial="hidden"
                        animate="visible"
                        className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent'>Software Developer
                    </motion.span>
                    <motion.p 
                        variants={container(1)}
                        initial="hidden"
                        animate="visible"
                        className='text-justify my-2 max-w-xl py-6 font-light tracking-tighter'>{HERO_CONTENT}
                    </motion.p>
                    {/* <motion.div className='relative inline-flex group my-1'>
                        <div className='absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF6756] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200'></div>
                        <a href="/" role='button' className='w-15 h-10 inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-primary-color rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900'>Download Resume</a>
                    </motion.div> */}
                    <a href={cv} role='button' className='w-15 h-10 inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-primary-color rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 bg-gradient-to-r from-purple-900 to-pink-500 ...'>Download Resume</a>
                </div>
            </div>
            <div className='w-full lg:w-1/2 lg:py-0 lg:top-0 bg-zinc-400/60'>
                <div className='flex justify-center py-0 h-96'>
                    <motion.img 
                        initial={{ x:100, opacity:0 }}
                        animate={{ x:0, opacity:1 }}
                        transition={{ duration:1, delay:1.2 }}
                        src={prophoto} 
                        alt="Praneeth Kulathilaka" 
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero