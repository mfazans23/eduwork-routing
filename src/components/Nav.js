import React from 'react'

const Nav = () => {
  return (
    <nav className='header hidden sm:block sm:mt-12'>
      <div className='flex'>
        <div className='nav-logo justify-start text-2xl font-bold w-fit mr-auto p-3 border-2 rounded-tr-lg rounded-bl-lg'>
          Faza
        </div>
        <a href='#home' className='text-lg p-4 md:text-xl'>
          Home
        </a>
        <a href='#about' className='text-lg p-4 md:text-xl'>
          About
        </a>
        <a href='#skill' className='text-lg p-4 md:text-xl'>
          Skills
        </a>
        <a href='#contact' className='text-lg p-4 md:text-xl'>
          Contact
        </a>
        <a href='#' className='text-lg p-4 md:text-xl'>
          <i className='fas fa-moon'></i>
        </a>
      </div>
    </nav>
  )
}

export default Nav
