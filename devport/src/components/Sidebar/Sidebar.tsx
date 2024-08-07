import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar: React.FC = () => {
    return (
        <div className='w-64 h-screen sticky top-0 bg-background p-8'>
            <div className='mb-8'>
                /* Links to / */
                <Link to='/' className=''>
                    <img src='/images/logo.png' alt='Logo' className='mb-4 w-1/4' />
                </Link>
                <nav className='text-2xl'>
                    <ul>
                        <li className='mb-4'>
                            <Link to='/about' className='text-gray-800 hover:text-black'>
                                About
                            </Link>
                        </li>
                        <li className='mb-4'>
                            <Link to='/blog' className='text-gray-800 hover:text-black'>
                                Blog
                            </Link>
                        </li>
                        <li className=''>
                            <Link to='/cv' className='text-gray-800 hover:text-black'>
                                CV
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className='mb-8'>
                <h4 className='text-gray-500 text-base mb-2'>PROJECTS</h4>
                <ul>
                    <li className='mb-1'>
                        <Link to='/' className='text-gray-800 hover:text-black'>
                            Project 1
                        </Link>
                    </li>
                    <li className='mb-1'>
                        <Link to='/' className='text-gray-800 hover:text-black'>
                            Project 2
                        </Link>
                    </li>
                </ul>
            </div>
            <div>
                <h4 className='text-gray-500 text-sm mb-2'>CONTACT</h4>
                <ul>
                    <li className='mb-1'>
                        <a
                            href='mailto:jle.inquiries@gmail.com'
                            className='text-gray-800 hover:text-black'
                        >
                            Mail
                        </a>
                    </li>
                    <li className='mb-1'>
                        <a
                            href='https://linkedin.com/in/jwonnyleaf'
                            target='_blank'
                            className='text-gray-800 hover:text-black'
                        >
                            LinkedIn
                        </a>
                    </li>
                    <li className='mb-1'>
                        <a
                            href='https://instagram.com/jwonnyleaf'
                            target='_blank'
                            className='text-gray-800 hover:text-black'
                        >
                            Instagram
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
