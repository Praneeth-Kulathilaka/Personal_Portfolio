import React from 'react'
import { CONTACT } from '../constants'
import { FaLinkedin } from 'react-icons/fa6'
import { FaGithub } from 'react-icons/fa6'
import { FaWhatsapp } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa6'
import { FaFacebook } from 'react-icons/fa6'
import { motion } from 'framer-motion'
import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-4'>
        <motion.h1
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity:0, y: -100 }}
            transition={{ duration: 0.5, }}
            className='my-10 text-center text-4xl'>Get In Touch
        </motion.h1>
        <div className='flex flex-wrap justify-between'>
            <div className='border border-neutral-900 w-full items-center lg:w-1/2 lg:items-start lg:left-0'>
                <ContactForm />
            </div>
            <div className='text-center tracking-tighter w-full lg:w-1/2'>
                <motion.p 
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity:0, y: 100 }}
                    transition={{ duration: 0.5, delay: 0.25 }}
                    className='my-4'>{CONTACT.address}</motion.p>
                <motion.p 
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity:0, y: 100 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className='my-4'>{CONTACT.phoneNo}</motion.p>
                <motion.a 
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity:0, y: 100 }}
                    transition={{ duration: 0.5, delay: 0.75 }}
                    href="#" >{CONTACT.email}</motion.a>
                <motion.div             
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity:0, y: 100 }}
                    transition={{ duration: 0.5, delay: 0.75 }}
                    className='m-8 flex items-center justify-center gap-4 text-2xl'>
                    <a href="https://www.linkedin.com/in/praneeth-kulathilaka"><FaLinkedin/></a>
                    <a href="https://github.com/Praneeth-Kulathilaka"><FaGithub/></a>
                    <a href="https://wa.me/+94758294030"><FaWhatsapp/></a>
                    <a href="www.linkedin.com/in/praneeth-kulathilaka"><FaInstagram/></a>
                    <a href="https://www.linkedin.com/in/praneeth-kulathilaka"><FaFacebook/></a>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Contact