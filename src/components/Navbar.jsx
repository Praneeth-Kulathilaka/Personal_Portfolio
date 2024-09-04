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
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#technologies">Technologies</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
        </div>
    </div>
  )
}

export default Navbar