import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
const SocialLink = () => {
    let url = 'https://accounts.google.com/v3/signin/identifier?dsh=S-1861586098%3A1677308455015438&flowName=GlifWebSignIn&flowEntry=ServiceLogin&ifkv=AWnogHfLmsLsbje5TUm507_zsxGnJA-S15wiF7WztgmkF5PBEYbl6j7Vr2p8JW6bLdSONgXS8NwV'
    return (
        <div className='flex flex-col top-[35%] left-0 fixed'>
            <NavLink to='https://www.linkedin.com/' target='_blank' className={'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:file:rounded-md duration-300 bg-gray-500 rounded-tr-md text-white'}><>Linkedin <FaLinkedin size={30} /></></NavLink>
            <NavLink to='https://github.com/Audi1372' target='_blank' className={'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:file:rounded-md duration-300 bg-gray-500  text-white'}><>Github <FaGithub size={30} /></></NavLink>
            <NavLink to={url} target='_blank' className={'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:file:rounded-md duration-300 bg-gray-500  text-white'} ><>Mail <HiOutlineMail size={30} /></></NavLink>
            <NavLink to='/resume.pdf' target='_blank' className={'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:file:rounded-md duration-300 bg-gray-500 rounded-br-md text-white'}  ><>Resume <BsFillPersonLinesFill size={30} /></></NavLink>

        </div>
    )
}

export default SocialLink
