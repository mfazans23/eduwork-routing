import React from 'react'

const Home = () => {
  return (
    <section id='home' className='home mb-16 lg:mb-32'>
      <div className='flex flex-wrap gap-y-8'>
        <div className='flex flex-col flex-auto justify-center items-start lg:order-1 basis-1/6 lg:basis-1/12 gap-8 lg:gap-10 text-center w-1/3'>
          <a href='#' className='social-link'>
            <i className='fab fa-linkedin text-5xl lg:text-4xl'></i>
          </a>
          <a href='#' className='social-link text-5xl lg:text-4xl'>
            <i className='fab fa-github'></i>
          </a>
          <a href='#' className='social-link'>
            <i className='fa-regular fa-envelope text-5xl lg:text-4xl'></i>
          </a>
        </div>

        <div className='flex-auto basis-5/6 lg:basis-4/12 lg:order-last relative rounded-full truncate aspect-square'>
          <img src='./img/pexels-suliman-sallehi-1704488.jpg' />
        </div>

        <div className='flex flex-col flex-auto justify-center gap-8 order-last lg:order-2 lg:basis-6/12'>
          <div>
            <h1 className='text-5xl lg:text-6xl font-bold mb-1'>
              Hi, I'm Faza
            </h1>
            <div className='text-gray-500 text-xl lg:text-2xl'>
              Frontend Developer
            </div>
          </div>
          <p className='text-gray-800 text-2xl lg:text-3xl leading-relaxed'>
            Self taugh web developer. Experienced in using javascript
            technologies frontend and backend. Love solving problem.
          </p>
          <a href='#contact'>
            <button className='btn bg-purple-800 text-white lg:text-lg p-4 rounded-t-lg rounded-bl-lg w-fit'>
              Contact Me
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Home
