import React, { useState } from 'react'
import backgroundhome from '../img/backgroundhome.png'
import plus from '../img/plus.png'
import logo from '../img/Vector.png'
import submit from '../img/submit.png'
import Header from '../components/header.js'
import { useAuth0 } from '@auth0/auth0-react'

function Post() {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const { user } = useAuth0()

  return (
    <div>
      <div
        className="md:h-screen bg-no-repeat bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${backgroundhome})` }}
      >
        <Header />
        <section className='mx-auto max-w-3xl mt-24 px-20 sm:px-40 md:px-0 md:mt-56'>
          <div className='flex flex-col space-y-20 md:space-x-8 md:space-y-0 md:flex-row'>
            <div className='flex-1 h-60 text-center'>
              <label className="font-medium text-gray-900 dark:text-white">Title</label>
              <div className='pl-5 pr-5'>
                <textarea id="message" rows="3" maxLength="50" onChange={e => setTitle(e.target.value)} className="mt-8 w-full mx-auto p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 resize-none" placeholder="Add a title"></textarea>
              </div>
            </div>
            <div className='flex-1 h-60 text-center'>
              <label className="font-medium text-gray-900 dark:text-white">Description</label>
              <textarea id="message" rows="10" onChange={e => setDescription(e.target.value)} className="mt-8 w-full mx-auto p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 resize-none" placeholder="Add your description"></textarea>
              <img
                src={submit}
                className='hidden md:block mt-32 mx-auto w-[60px] cursor-pointer'
                alt="ImageBottom"
                onClick={() => {
                    fetch('http://localhost:3001/mypost', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        title,
                        description,
                        userId: user.name
                    })
                    })
                    .then(response => {
                        if (response.ok) {
                          window.location.href = 'http://localhost:3000/home'
                        }
                      })
                    .catch(error => {
                    // Handle error
                    })
                }}
                />
            </div>
            <div className='flex-1 h-60 text-center'>
                <label className="font-medium text-gray-900 dark:text-white">Upload</label>
              <div className='grid grid-cols-2 mt-16 gap-y-3'>
                <img className='justify-self-end mr-5 cursor-pointer' src={plus} alt="ImageBottom" />
                <img className='justify-self-start ml-6 cursor-pointer' src={plus} alt="ImageBottom" />
                <img className='justify-self-end mr-5 cursor-pointer' src={plus} alt="ImageBottom" />
                <img className='justify-self-start ml-6 cursor-pointer' src={plus} alt="ImageBottom" />
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