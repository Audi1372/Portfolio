import React from 'react'
import { NavLink } from 'react-router-dom'
import audi1 from '../../assests/audi1.jpg'
import { MdKeyboardArrowRight } from "react-icons/md"
const Home = () => {
  return (
    <div
      name='home'
      className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-4xl sm:text-7xl font-bold text-white'>
            I'm Full Stack Mern Developer
          </h2>

          <p className='text-gray-500 py-4 max-w-md'> I am new enthusiastic,self-motivated responsible  and hard working person
            I have good interpersonal skills, am an excellent team worker and am keen and very willing to learn and develop new skills.</p>
          <div>
            <NavLink to='/projects' className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 '>
              Portfolio
              <span className='group-hover:rotate-90 duration-300'>
                <MdKeyboardArrowRight size={25} className='ml-l' />
              </span>
            </NavLink>
          </div>
        </div>
        <div>
          {/* <img src={audi} alt='audi' className='rounded-xl mx-auto w-2/3 h-96 md:w-full' /> */}
          <img src={audi1} alt='' className='w-[24rem] h-[10rem] object-cover rounded-bl-3xl rounded-tr-3xl sm:h-96 sm:col-span-2 lg:col-span-full' />

        </div>
      </div>

    </div>
  )
}

export default Home
