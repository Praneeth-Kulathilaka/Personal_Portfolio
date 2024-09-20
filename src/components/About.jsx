import React from 'react'
import { ABOUT_TEXT } from '../constants'
import aboutImage from '../assets/about.png'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-4'>
        <motion.h1 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity:0, y: -100 }}
            transition={{ duration: 0.5, }}
            className='mt-20 mb-8 text-center text-4xl'>
            About
            <span className='text-neutral-700'> Me</span>
        </motion.h1>
        <div className='flex flex-wrap'>
            <motion.div
                whileInView={{ opacity: 1, x:0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className='w-full lg:w-1/2'>
                    <div className='flex items-center justify-center'>
                        <img className='rounded-full' src={aboutImage} alt="About Image" />
                    </div>
            </motion.div>
            <motion.div
                whileInView={{ opacity:1, x:0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5 }} 
                className='w-full lg:w-1/2'>
                <div className='flex justify-center lg:justify-start lg:mt-20'>
                    <p className='my-2 max-w-xl py-6 text-justify'>{ABOUT_TEXT}</p>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default About