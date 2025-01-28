import React from 'react'
import logo from '../assets/logo.png';
import {FaGithub, FaInstagram, FaLinkedin} from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-8 px-16 border-b border-stone-900">
        <div className="flex flex-shrink-0 items-center">
            <a href="/" aria-label='Home'>
                <img src={logo} alt="Logo" className='mx-2 sizw-10' width={50} height={33}/>
            </a>
        </div>

        <div className="mx-8 flex items-center justify-center gap-12 text-2xl">
            <a href="http://www.linkedin.com/in/imhjaiswal"
            target='_blank'
            rel='noopener noreferrer'
            aria-label='LinkedIn'
            >
                <FaLinkedin />
            </a>

            <a href="https://www.instagram.com/imhjaiswal/"
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Instagram'
            >
                <FaInstagram />
            </a>

            <a href="https://github.com/Imhjaiswal/"
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Github'
            >
                <FaGithub />
            </a>

        </div>
        
    </div>
  )
}

export default Navbar