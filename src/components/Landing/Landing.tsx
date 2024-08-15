import React from 'react'
import '../../App.css'

const Landing: React.FC = () => {
    return (
        <div className='flex flex-col items-start space-y-4 gap-10'>
            <p className='text-secondary text-2xl font-montserrat font-bold'>
                Howdy howdy, <span className='font-bold'>chào mừng!</span>
            </p>
            <h1 className='text-secondary text-5xl font-montserrat font-bold'>
                I am a developer designing innovative software solutions at Texas A&M University. I
                am passionate about creating software that is both functional and beautiful.
                Previously, at Halliburton. I am currently seeking a full-time Software Engineering
                position starting in May 2025.
            </h1>
        </div>
    )
}

export default Landing
