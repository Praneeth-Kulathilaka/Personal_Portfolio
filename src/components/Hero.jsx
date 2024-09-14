import React from 'react'
import { HERO_CONTENT } from '../constants'
import prophoto from '../assets/IMG_2420.png'
import { motion } from 'framer-motion'
import cv from '../assets/Praneeth-CV.pdf'
import { TypeAnimation } from 'react-type-animation';

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
    <div className='border-b border-neutral-900 h-full pb-24 lg:mb-4'>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2 space-x-2 py-14'>
                <div className='flex flex-col items-center lg:items-start '>
                    <motion.h1
                        variants={container(0)}
                        initial="hidden"
                        animate="visible"
                        className='pb-6 text-4xl font-thin tracking-tight lg:mt-12 lg:text-5xl'>
                            Hi! I'm Praneeth Kulathilaka
                    </motion.h1>
                    <TypeAnimation
                         sequence={[
                            'Software Developer',
                            1000, 
                            ' ',
                            1000,
                          ]}
                          wrapper="span"
                          speed={50}
                          className='bg-gradient-to-r from-purple-900 to-pink-500 bg-clip-text text-6xl pb-1 tracking-tight text-transparent'
                          repeat={Infinity}
                    >
                    </TypeAnimation>
                    <TypeAnimation
                         sequence={[
                            "Passionate about crafting innovative solutions through code. Let's build something amazing together.",
                            500, 
                          ]}
                          wrapper="span"
                          speed={50}
                          className='pb-6 text-xl font-thin tracking-tight lg:mt-0 lg:text-xl'
                          repeat={Infinity}
                    >
                    </TypeAnimation>
                    <a href={cv} role='button' className='w-15 h-10 inline-flex items-center justify-center px-8 py-6 text-sm font-bold text-white transition-all duration-200 bg-primary-color rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 bg-gradient-to-r from-purple-900 to-pink-500 border-4 border-white/100 hover:border-purple-600 hover:scale-105 hover:drop-shadow-xl'>Download CV</a>
                </div>
            </div>
            <div className='relative rounded-full w-full lg:w-1/2 lg:top-0'>
                <div className='flex justify-center lg:pb-0 h-96 '>
                    <motion.img
                        className='rounded-full border-4 border-purple-600/70' 
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