import React from 'react'

const Contact = () => {
  return (
    <section id='contact' className='contact mb-16 lg:mb-32'>
      <h1 className='text-2xl lg:text-5xl font-bold text-center'>Contact Me</h1>
      <div className='mb-8 lg:text-xl lg:mt-2 lg:mb-16 text-center'>
        Leave a message
      </div>
      <div className='flex flex-col md:flex-row md:gap-x-4'>
        <form className='md:order-2 md:flex-1'>
          <textarea
            className='block w-full h-40 resize-none bg-slate-200 rounded-lg p-4 md:h-60 focus:outline-none placeholder:text-slate-600'
            placeholder='Write your message...'
          ></textarea>
          <button className='block bg-purple-800 text-white ml-auto mt-2 py-1 px-4 rounded-lg'>
            Send
            <i className='fa-regular fa-paper-plane text-white'></i>
          </button>
        </form>
        <div className='mt-8 md:order-1 md:flex-1'>
          <div className='flex flex-wrap gap-4'>
            <div className='flex flex-auto gap-x-2 md:gap-x-4'>
              <i className='fa-solid fa-phone self-center text-2xl md:text-3xl lg:text-5xl'></i>
              <div className='flex flex-col'>
                <span className='font-medium md:text-lg lg:text-2xl'>
                  Call me
                </span>
                <span className='text-sm text-gray-700 md:text-lg'>
                  081325457xxx
                </span>
              </div>
            </div>

            <div className='flex flex-auto gap-x-2 md:gap-x-4'>
              <i className='fa-solid fa-envelope self-center text-2xl md:text-3xl lg:text-5xl'></i>
              <div className='flex flex-col'>
                <span className='font-medium md:text-lg lg:text-2xl'>
                  Email
                </span>
                <span className='text-sm text-gray-700 md:text-lg'>
                  mfaza16717@gmail.com
                </span>
              </div>
            </div>

            <div className='flex flex-auto gap-x-2 md:gap-x-4'>
              <i className='fa-solid fa-location-dot self-center text-2xl md:text-4xl lg:text-5xl'></i>
              <div className='flex flex-col'>
                <span className='font-medium md:text-lg lg:text-2xl'>
                  Location
                </span>
                <span className='text-sm text-gray-700 md:text-lg'>
                  Yk, Indonesia
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
