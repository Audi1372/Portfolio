import React from 'react'
import weather from '../../assests/weather.png'
import Dictonary from '../../assests/Dictonary.png'
import password from '../../assests/password.png'
import brewery from '../../assests/brewery.png'
import countryWeather from '../../assests/countryWeather.png'
import reactShopcart from '../../assests/reactShopcart.png'
import { NavLink } from 'react-router-dom'

const Projects = () => {
    const projects = [
        {
            id: 1,
            src: weather,
            discription: 'Its weather api we can use it to search the weather',
            link: 'https://weatherincity.netlify.app/',
            codelink: 'https://github.com/Audi1372/'
        },
        {
            id: 2,
            src: Dictonary,
            discription: 'Its dictonary api we can use it to search the words',
            link: 'https://dictionarysearchforword.netlify.app/',
            codelink: 'https://github.com/Audi1372/'


        },
        {
            id: 3,
            src: password,
            discription: 'Its pincode api  we can use it to search the location with pincode',
            link: 'https://pincode-search.netlify.app/',
            codelink: 'https://github.com/Audi1372/'



        },
        {
            id: 4,
            src: brewery,
            discription: 'Its brewery api',
            link: 'https://breweryslist.netlify.app/',
            codelink: 'https://github.com/Audi1372/'


        },
        {
            id: 5,
            src: countryWeather,
            discription: 'Its weather api we can use it to search the weather with the flag of the country',
            link: 'https://weather-and-rest-countries.netlify.app/',
            codelink: 'https://github.com/Audi1372/'


        },
        {
            id: 6,
            src: reactShopcart,
            discription: 'Itsreact shopcart api  we can use it to make count of the items',
            link: 'https://audishopcart.netlify.app/',
            codelink: 'https://github.com/Audi1372/'



        }
    ]

    return (
        <div name='protfolio'
            className='w-full h-full bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                        Portfolio
                    </p>
                    <p className='py-6'>here is the list of  some ofmy works</p>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-30 sm:px-0'>

                    {
                        projects.map(({ id, src, discription, link }) => (

                            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                                <img src={src} alt='' className=' rounded-md duration-200 hover:scale-105' />
                                <p className='py-6 text-amber-400'>{discription}</p>
                                <div className='flex items-center justify-center'>
                                    <NavLink to={link} target='_blank' className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</NavLink>
                                    <NavLink to={link} target='_blank' className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</NavLink>

                                </div>
                            </div>

                        ))}
                </div>
            </div>

        </div>
    )
}

export default Projects
