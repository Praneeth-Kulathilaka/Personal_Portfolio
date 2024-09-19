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
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-4'>
        <motion.h1 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity:0, y: -100 }}
            transition={{ duration: 0.5, }}
            className='my-20 text-center text-4xl'>Technologies</motion.h1>
        <div className='flex justify-center gap-4 items-center'>
            <div className='rounded-2xl p-4 items-center w-full'>
                <div className='grid grid-cols-2 gap-4 lg:grid-cols-8 justify-center items-center '>
                    <div className='pl-2items-center transition-all duration-200 hover:border-4 hover:border-purple-700 hover:scale-110'>
                        <img src={java} alt="react" className='h-24 w-24 justify-center' />
                    </div>
                    <div className='transition-all duration-200 hover:border-4 hover:border-purple-700 hover:scale-110'>
                        <img src={python} alt="react" className='h-24 w-24' />
                    </div>
                    <div className='transition-all duration-200 hover:border-4 hover:border-purple-700 hover:scale-110'>
                        <img src={cLogo} alt="react" className='h-24 w-24' />
                    </div>
                    <div className='transition-all duration-200 hover:border-4 hover:border-purple-700 hover:scale-110'>
                        <img src={reactIcon} alt="react" className='h-24 w-24' />
                    </div>
                    <div className='transition-all duration-200 hover:border-4 hover:border-purple-700 hover:scale-110'>
                        <img src={nodeIcon} alt="react" className='h-24 w-24' />
                    </div>
                    <div className='transition-all duration-200 hover:scale-125'>
                        <img src={next} alt="react" className='h-24 w-24 items-center' />
                    </div>
                    <div className='transition-all duration-200 hover:border-4 hover:border-purple-700 hover:scale-110'>
                        <img src={nest} alt="react" className='h-24 w-24' />
                    </div>
                    <div className='transition-all duration-200 hover:border-4 hover:border-purple-700 hover:scale-110'>
                        <img src={graph} alt="react" className='h-24 w-24' />
                    </div>
                    <div className='transition-all duration-200 hover:border-4 hover:border-purple-700 hover:scale-110'>
                        <img src={mysql} alt="react" className='h-24 w-24' />
                    </div>
                    <div className='transition-all duration-200 hover:border-4 hover:border-purple-700 hover:scale-110'>
                        <img src={mongo} alt="react" className='h-20 w-24' />
                    </div>
                    <div className='transition-all duration-200 hover:border-4 hover:border-purple-700 hover:scale-110'>
                        <img src={mssql} alt="react" className='h-24 w-24' />
                    </div>
                </div>
            </div>  
            {/* <div className='rounded-2xl border-4 border-neutral-800 p-4 items-center w-1/5 h-1/3 
            transition-all duration-200 hover:border-4 hover:border-purple-700 hover:scale-110 '>
                    <div>
                        <h5 className='text-center mb-4'>Web & Mobile Development</h5>
                    </div>
                    <div className='grid grid-cols-2 gap-4 justify-between align-middle'>
                        <img src={reactIcon} alt="react" className='h-8 w-1/2' />
                        <img src={nodeIcon} alt="node" className='h-8 w-1/2' />
                        <img src={nodeIcon} alt="node" className='h-8 w-1/2' />

                    </div>
            </div>  
            <div className='rounded-2xl border-4 border-neutral-800 p-4 items-center w-1/5 h-1/3 
            transition-all duration-200 hover:border-4 hover:border-purple-700 hover:scale-110 '>
                    <div>
                        <h5 className='text-center mb-4'>Databases</h5>
                    </div>
                    <div className='grid grid-cols-2 gap-4 justify-between align-middle'>
                        <img src={mongo} alt="react" className='h-8 w-1/2' />
                        <img src={mysql} alt="node" className='h-8 w-1/2' />
                        <img src={mssql} alt="node" className='h-8 w-1/2' />

                    </div>
            </div>   */}
            {/* <div className='rounded-2xl border-4 border-neutral-800 p-4 items-center w-1/5 h-1/3 
            transition-all duration-200 hover:border-4 hover:border-purple-700 hover:scale-110 '>
                    <div>
                        <h5 className='text-center mb-4'>Version Control</h5>
                    </div>
                    <div className='grid grid-cols-2 gap-4 justify-between align-middle'>
                        <img src={reactIcon} alt="react" className='h-8 w-1/2' />
                        <img src={nodeIcon} alt="node" className='h-8 w-1/2' />
                        <img src={nodeIcon} alt="node" className='h-8 w-1/2' />

                    </div>
            </div>  
            <div className='rounded-2xl border-4 border-neutral-800 p-4 items-center w-1/5 h-1/3 
            transition-all duration-200 hover:border-4 hover:border-purple-700 hover:scale-110 '>
                    <div>
                        <h5 className='text-center mb-4'>Operating Systems</h5>
                    </div>
                    <div className='grid grid-cols-2 gap-4 justify-between align-middle'>
                        <img src={reactIcon} alt="react" className='h-8 w-1/2' />
                        <img src={nodeIcon} alt="node" className='h-8 w-1/2' />
                        <img src={nodeIcon} alt="node" className='h-8 w-1/2' />

                    </div>
            </div>   */}
            {/* <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <h5>Node Js</h5>
            </div>  
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <h5>MySQL</h5>
            </div>  
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <h5>MsSQL</h5>
            </div>  
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <h5>Flutter</h5>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <h5>Java</h5>
            </div>          */}
        </div>
    </div>
  )
}

export default Technologies