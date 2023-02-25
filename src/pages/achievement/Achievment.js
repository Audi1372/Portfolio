import React from 'react'
import audi2 from '../../assests/audi2.png'

const Achievment = () => {
    return (
        <div name='about'
            className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                        Achievments
                    </p>

                </div>
                <img src={audi2} width={500} alt='' className='rounded-bl-3xl rounded-tr-3xl' />


            </div>
        </div>

    )
}

export default Achievment
