import React from 'react'

const About = () => {
  return (
    <section id='about' className='about text-center mb-16 lg:mb-32'>
      <h1 className='text-2xl lg:text-5xl font-bold'>About Me</h1>
      <div className='lg:text-xl lg:mt-2 lg:mb-16'>My introduction</div>
      <div className='lg:flex gap-x-8'>
        <div className='w-1/3 lg:w-1/3 mx-auto my-8 lg:my-0 aspect-square truncate rounded-full'>
          <img src='./img/pexels-mohamed-abdelghaffar-771742.jpg' alt='' />
        </div>
        <div className='lg:w-2/3'>
          <p className='text-xl lg:text-3xl lg:text-justify lg:w-5/6 mx-auto'>
            Selft taught web developer who never stops to learn and create.
            Always hungry to know more because web development is a
            fast-changing field. Currently focus on React and Nodejs.
          </p>

          <div className='flex justify-between sm:gap-x-4 mt-16 lg:w-5/6 mx-auto'>
            <div>
              <div className='text-4xl md:text-5xl lg:text-5xl font-bold mb-1'>
                02+
              </div>
              <div className='text-xl lg:text-2xl font-gray-800'>
                Years of experience
              </div>
            </div>
            <div>
              <div className='text-4xl md:text-5xl lg:text-5xl font-bold mb-1'>
                05+
              </div>
              <div className='text-xl lg:text-2xl font-gray-800'>
                Completed projects
              </div>
            </div>
            <div>
              <div className='text-4xl md:text-5xl lg:text-5xl font-bold mb-1'>
                00
              </div>
              <div className='text-xl lg:text-2xl font-gray-800'>
                Companies worked
              </div>
            </div>
          </div>
          <span className='inline-block lg:block lg:w-5/6 lg:text-left mt-12 lg:mt-16 mx-auto'>
            <button className='btn bg-purple-800 p-4 lg:text-lg text-white rounded-lg'>
              Download CV
            </button>
          </span>
        </div>
      </div>
    </section>
  )
}

export default About
