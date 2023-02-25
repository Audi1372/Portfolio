import React, { useState } from 'react'
import graduate from './graduate.png'
// import './navbar.css'
// import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa';


const Navbar = () => {
    const [nav, setNav] = useState(false);
    return (
        <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-cyan-700'>
            <div className='flex items-center'>
                <img src={graduate} width={80} alt='scholar' />
                <h2 className='text-4xl font-signature '>AudiLakshmi.T</h2>

            </div>
            <div className='hidden md:flex'>
                <NavLink to='/' className='px-4 cursor-pointer capitalize font-medium  text-emerald-400 hover: scale-105 duration-200'>Home</NavLink>
                <NavLink to='/about' className='px-4 cursor-pointer capitalize font-mediumr text-emerald-400  hover:scale-105 duration-200'>About</NavLink>
                <NavLink to='/projects' className='px-4 cursor-pointer capitalize font-medium text-emerald-400 hover:scale-105 duration-200'>Projects</NavLink>
                <NavLink to='/skills' className='px-4 cursor-pointer capitalize font-medium    text-emerald-400 hover:scale-105 duration-200' >Skills</NavLink>
                <NavLink to='/contact' className='px-4 cursor-pointer capitalize font-medium    text-emerald-400 hover:scale-105 duration-200' >Contact</NavLink>
                <NavLink to='/achievement' className='px-4 cursor-pointer capitalize font-medium  text-emerald-400 hover:scale-105 duration-200'>Achievment</NavLink>

            </div>
            <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-white-500 md:hidden:'>
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>
            {nav && <div className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 hover:scale-105 duration-200'>
                <NavLink to='/' className='px-4 cursor-pointer capitalize py-6 text-4xl  text-emerald-400' onClick={() => setNav(!nav)} >Home</NavLink>
                <NavLink to='/about' className='px-4 cursor-pointer capitalize py-6 text-4xl  text-emerald-400' onClick={() => setNav(!nav)} >About</NavLink>
                <NavLink to='/projects' className='px-4 cursor-pointer capitalize py-6 text-4xl  text-emerald-400' onClick={() => setNav(!nav)} >Projects</NavLink>
                <NavLink to='/skills' className='px-4 cursor-pointer capitalize py-6 font-medium text-4xl text-emerald-400 hover:scale-105 duration-200' onClick={() => setNav(!nav)} >Skills</NavLink>
                <NavLink to='/contact' className='px-4 cursor-pointer capitalize  py-6 font-medium text-4xl   text-emerald-400 hover:scale-105 duration-200' onClick={() => setNav(!nav)}>Contact</NavLink>
                <NavLink to='/achievement' className='px-4 cursor-pointer capitalize  py-6 font-medium text-4xl   text-emerald-400 hover:scale-105 duration-200' onClick={() => setNav(!nav)}>Achievment</NavLink>

            </div>}


        </div>
    )
}

export default Navbar
