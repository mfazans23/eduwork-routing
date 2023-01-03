import React from 'react'
import { Link } from 'react-scroll'

const Nav = () => {
  return (
    <nav className='header hidden sm:block sm:mt-12'>
      <div className='flex'>
        <div className='nav-logo justify-start text-2xl font-bold w-fit mr-auto p-3 border-2 rounded-tr-lg rounded-bl-lg'>
          Faza
        </div>
        <Link
          to='home'
          spy={true}
          smooth={true}
          duration={500}
          className='text-lg font-medium cursor-pointer p-4 md:text-xl'
        >
          Home
        </Link>
        <Link
          to='about'
          spy={true}
          smooth={true}
          duration={500}
          className='text-lg font-medium cursor-pointer p-4 md:text-xl'
        >
          About
        </Link>
        <Link
          to='skill'
          spy={true}
          smooth={true}
          duration={500}
          className='text-lg font-medium cursor-pointer p-4 md:text-xl'
        >
          Skills
        </Link>
        <Link
          to='contact'
          spy={true}
          smooth={true}
          duration={500}
          className='text-lg font-medium cursor-pointer p-4 md:text-xl'
        >
          Contact
        </Link>
      </div>
    </nav>
  )
}

export default Nav
