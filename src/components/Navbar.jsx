import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from "../assets/kevinRushLogo.png"
import Projects from './Projects'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  

  return (
    <div className='mb-20 flex items-center justify-center py-6 '>
      <div className='md:hidden'>
        <div>
          <div></div>

          <button onClick={toggleMenu} className=' hover:text-gray-600 focus:outline-none'>
            {isOpen ? (
              <FaTimes className="w-6 h-6" /> // Close icon when menu is open
            ) : (
              <FaBars className="w-6 h-6" /> // Hamburger icon when menu is closed
            )}
          </button>
        </div>
      </div>
        <div className={`flex-col md:flex-row md:flex items-center justify-center ${isOpen ? 'flex' : 'hidden'} md:flex md:items-center md:gap-16 text-2xl`}>
            <a href="#home" className='hover:bg-gray-600/60 active:bg-gray-500/60 focus:outline-none focus:ring focus:ring-gray-300/60 ... py-3 px-3 rounded-3xl'>Home</a>
            <a href="#about" className='hover:bg-gray-600/60 active:bg-gray-500/60 focus:outline-none focus:ring focus:ring-gray-300/60 ... py-3 px-3 rounded-3xl'>About</a>
            <a href="#technologies" className='hover:bg-gray-600/60 active:bg-gray-500/60 focus:outline-none focus:ring focus:ring-gray-300/60 ... py-3 px-3 rounded-3xl'>Technologies</a>
            <a href="#projects" className='hover:bg-gray-600/60 active:bg-gray-500/60 focus:outline-none focus:ring focus:ring-gray-300/60 ... py-3 px-3 rounded-3xl'>Projects</a>
            <a href="#contact" className='hover:bg-gray-600/60 active:bg-gray-500/60 focus:outline-none focus:ring focus:ring-gray-300/60 ... py-3 px-3 rounded-3xl'>Contact</a>
        </div>
    </div>
  )
}

export default Navbar