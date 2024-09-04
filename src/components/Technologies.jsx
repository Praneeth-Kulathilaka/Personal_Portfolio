import React from 'react'
import { RiReactjsLine } from "react-icons/ri";
import { RiNodejsLine } from "react-icons/ri";
import { TbBrandMysql } from "react-icons/tb";
import { FaGolang } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { RiJavaLine } from "react-icons/ri";
import javaIcon from "../assets/java.png"

import { motion } from 'framer-motion';

const Technologies = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-4'>
        <motion.h1 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity:0, y: -100 }}
            transition={{ duration: 0.5, }}
            className='my-20 text-center text-4xl'>Technologies</motion.h1>
        <div className='flex flex-wrap items-center justify-center gap-4'>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <h5>React Js</h5>
            </div>  
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
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
            </div>         
        </div>
    </div>
  )
}

export default Technologies