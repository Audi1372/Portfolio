import React from 'react'
import html from '../../assests/html.png'
import css from '../../assests/css.png'
import javascript from '../../assests/javascript.png'
import react from '../../assests/react.png'
import tailwind from '../../assests/tailwind.png'
import node from '../../assests/node.png'
import github from '../../assests/github.png'
import bootstrap from '../../assests/bootstrap.png'
import mongodb from '../../assests/mongodb.png'
import mysql from '../../assests/mysql.png'



const Skills = () => {
    const skills = [{
        id: 1,
        src: html,
        title: ' Html',
        style: 'shadow-orange-500'


    },
    {
        id: 2,
        src: css,
        title: 'Css',
        style: 'shadow-sky-800'


    },
    {
        id: 3,
        src: javascript,
        title: 'JavaScript',
        style: 'shadow-yellow-500'


    },
    {
        id: 4,
        src: react,
        title: 'React',
        style: 'shadow-blue-600'

    },
    {
        id: 5,
        src: tailwind,
        title: 'Tailwind',
        style: 'shadow-sky-400'


    },
    {
        id: 6,
        src: node,
        title: 'Node',
        style: 'shadow-green-500'

    },


    {
        id: 7,
        src: github,
        title: 'Github',
        style: 'shadow-white'

    },
    {
        id: 8,
        src: bootstrap,
        title: 'Bootstrap',
        style: 'shadow-purple-600'

    },
    {
        id: 9,
        src: mongodb,
        title: 'Mongodb',
        style: ' shadow-green-600'
    },
    {
        id: 10,
        src: mysql,
        title: 'Mysql',
        style: 'shadow-sky-600'
    }

    ]
    return (
        <div name='skills'
            className='w-full h-full bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                        Skills
                    </p>
                    <p className='py-6'>Here is the list of my technologies that i worked</p>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-30 sm:px-0'>

                    {
                        skills.map(({ id, src, title, style }) => (

                            <div key={id} className={`shadow-md shadow-gray-600 rounded-lg flex  flex-col justify-center items-center ${style}`}>
                                <img src={src} width={100} alt='' className=' rounded-md duration-200 hover:scale-105' />
                                <p>{title}</p>
                            </div>

                        ))}
                </div>
            </div>

        </div>
    )
}

export default Skills
