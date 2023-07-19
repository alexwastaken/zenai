import React, { useState } from 'react'
import backgroundhome from '../img/backgroundhome.png'
import textrectangle from '../img/textrectangle.png'
import descriptionrectangle from '../img/descriptionrectangle.png'
import plus from '../img/plus.png'
import logo from '../img/Vector.png'
import submit from '../img/submit.png'

function Post() {

  return (
    <div>
      <div
        className="md:h-screen bg-no-repeat bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${backgroundhome})` }}
      >
        <header className="flex justify-between mx-16 py-4 lg:mx-auto max-w-4xl text-white font-sans tracking-wide">
          <img src={logo} />
          <div className="flex justify-center gap-28 text-lg">
            <div className='hidden lg:block'>Profile</div>
            <div className='hidden lg:block'>Favorites</div>
            <div className='hidden lg:block'>My Books</div>
          </div>
          <div className='hidden lg:block text-lg'>Sign In</div>
          <div className='lg:hidden text-lg'>Other</div>
        </header>

        <section className='mx-auto max-w-3xl mt-24 px-20 sm:px-40 md:px-0 md:mt-56'>
          <div className='flex flex-col space-y-20 md:space-x-8 md:space-y-0 md:flex-row'>
            <div className='flex-1 h-60 text-center'>
              <label className="font-medium text-gray-900 dark:text-white">Title</label>
              <div className='pl-10 pr-10'>
                <textarea id="message" rows="3" maxLength="50" className="mt-8 w-full mx-auto p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 resize-none" placeholder="Add a title"></textarea>
              </div>
            </div>
            <div className='flex-1 h-60 text-center'>
              <label className="font-medium text-gray-900 dark:text-white">Description</label>
              <textarea id="message" rows="10" className="mt-8 w-full mx-auto p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 resize-none" placeholder="Add your description"></textarea>
              <img src={submit} className='hidden md:block mt-32 mx-auto w-[60px]' alt="ImageBottom" />
            </div>
            <div className='flex-1 h-60 text-center'>
                <label className="font-medium text-gray-900 dark:text-white">Upload</label>
              <div className='grid grid-cols-2 mt-16 gap-y-3'>
                <img className='justify-self-end mr-5' src={plus} alt="ImageBottom" />
                <img className='justify-self-start ml-6' src={plus} alt="ImageBottom" />
                <img className='justify-self-end mr-5' src={plus} alt="ImageBottom" />
                <img className='justify-self-start ml-6' src={plus} alt="ImageBottom" />
              </div>
              <img src={submit} className='cursor-pointer block md:hidden mt-32 mx-auto w-[60px]' alt="ImageBottom" />
            </div>

          </div>
        </section>


      </div>

    </div>
  )
}

export default Post