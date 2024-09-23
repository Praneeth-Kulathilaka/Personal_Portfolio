import React from 'react'
import reactIcon from '../assets/react.png'
import nodeIcon from '../assets/nodejs.png'
import java from '../assets/java.png'
import mysql from '../assets/mysql.png'
import mssql from '../assets/sql-server.png'
import python from '../assets/icons8-python-color/python.png'
import cLogo from '../assets/icons8-c-programming-color/c.png'
import mongo from '../assets/MongoDB.png'
import next from '../assets/nextjs-icon.png'
import nest from '../assets/nestjs-vector-logo-seeklogo/nest.svg'
import graph from '../assets/icons8-graphql-color/graph.png'

import { motion } from 'framer-motion';

const Technologies = () => {
  const logoVariants = {
    initial: { opacity: 0, scale:0.5, x: -100 },
    animate: { opacity: 1, scale: 1, x:0 },
    whileHover: { scale: 1.2 },
  };

  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-4'>
      <motion.h1 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity:0, y: -100 }}
        transition={{ duration: 0.5 }}
        className='my-20 text-center text-4xl'>
        Technologies
      </motion.h1>
      <div className='flex gap-4 items-center'>
        <div className='rounded-2xl p-6 items-center w-full'>
          <div className='grid grid-cols-2 gap-4 lg:grid-cols-8 justify-center items-center'>
            {[java, python, cLogo, reactIcon, nodeIcon, next, nest, graph, mysql, mongo, mssql].map((logo, index) => (
              <motion.div 
                key={index}
                className='flex items-center justify-center transition-all duration-100'
                variants={logoVariants}
                initial="initial"
                animate="animate"
                whileHover="whileHover"
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                <img src={logo} alt="technology" className='h-24 w-24' />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Technologies
