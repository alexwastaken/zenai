import React, { useState } from 'react'
import backgroundhome from '../img/backgroundhome.png'
import plus from '../img/plus.png'
import logo from '../img/Vector.png'
import submit from '../img/submit.png'
import { useAuth0 } from '@auth0/auth0-react'
import Resizer from "react-image-file-resizer";
import Sidebar from '../components/sidebar'
import PostForm from '../components/postForm.js'

function Post() {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const { user } = useAuth0()

  const [image, setImage] = useState([]);
  const [binary, setBinary] = useState([]);

  const resizeFile = (file) =>
  new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      640,
      828,
      "JPEG",
      100,
      0,
      (uri) => {
        resolve(uri);
      },
      "base64"
    );
  });

  const handleImageChange = async (event) => {
    if (event.target.files) {
      const newImages = [...image];
      newImages.push(URL.createObjectURL(event.target.files[0]));
      setImage(newImages);
      
      const resized = await resizeFile(event.target.files[0]);
      setBinary((prevBinary) => [...prevBinary, resized]);
    }
  };

  return (
    <div>
      <div
        className="bg-gray-900 h-screen"
      >
        <Sidebar />
        <PostForm userInfo={user} />
        {/* <div className='ml-64 mt-14'>
          <section className='mx-auto max-w-3xl'>
            <div className='flex flex-col md:space-x-8 md:flex-row'>
              <div className='flex-1 h-60 text-center mt-52'>
                <label className="font-medium text-gray-900 dark:text-white">Title</label>
                <div className='pl-5 pr-5'>
                  <textarea id="message" rows="3" maxLength="50" onChange={e => setTitle(e.target.value)} className="mt-8 w-full mx-auto p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 resize-none" placeholder="Add a title"></textarea>
                </div>
              </div>
              <div className='flex-1 h-60 text-center mt-52'>
                <label className="font-medium text-gray-900 dark:text-white">Description</label>
                <textarea id="message" rows="10" onChange={e => setDescription(e.target.value)} className="mt-8 w-full mx-auto p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 resize-none" placeholder="Add your description"></textarea>
                <img
                  src={submit}
                  className='hidden md:block mt-32 mx-auto w-[60px] cursor-pointer'
                  alt="ImageBottom"
                  onClick={() => {
                      console.log(binary)
                      fetch('http://localhost:3001/mypost', {
                      method: 'POST',
                      headers: {
                          'Content-Type': 'application/json'
                      },
                      body: JSON.stringify({
                          title,
                          description,
                          userId: user.name,
                          imageFile: binary
                      })
                      })
                      .then(response => {
                          if (response.ok) {
                            window.location.href = 'http://localhost:3000/'
                          }
                        })
                      .catch(error => {
                      // Handle error
                      })
                  }}
                  />
              </div>
              <div className='flex-1 h-60 text-center mt-52'>
                  <label className="font-medium text-gray-900 dark:text-white">Upload</label>
                  <div className='grid grid-cols-2 mt-16 gap-y-3'>
                    <input
                      type='file'
                      accept='image/*'
                      onChange={handleImageChange}
                      className='hidden'
                      id='image-input'
                    />
                    {image.length === 0 && (
                      <>
                        <label htmlFor='image-input'>
                          <img className='justify-self-end mr-5 cursor-pointer' src={plus} alt="ImageBottom" />
                        </label>
                        <label htmlFor='image-input'>
                          <img className='justify-self-start ml-6 cursor-pointer' src={plus} alt="ImageBottom" />
                        </label>
                        <label htmlFor='image-input'>
                          <img className='justify-self-end mr-5 cursor-pointer' src={plus} alt="ImageBottom" />
                        </label>
                        <label htmlFor='image-input'>
                          <img className='justify-self-start ml-6 cursor-pointer' src={plus} alt="ImageBottom" />
                        </label>
                      </>
                    )}
                    {image.length === 1 && (
                      <>
                        <label htmlFor='image-input'>
                          <img src={image[0]} alt='Uploaded' />
                        </label>
                        <label htmlFor='image-input'>
                          <img className='justify-self-start ml-6 cursor-pointer' src={plus} alt="ImageBottom" />
                        </label>
                        <label htmlFor='image-input'>
                          <img className='justify-self-end mr-5 cursor-pointer' src={plus} alt="ImageBottom" />
                        </label>
                        <label htmlFor='image-input'>
                          <img className='justify-self-start ml-6 cursor-pointer' src={plus} alt="ImageBottom" />
                        </label>
                      </>
                    )}
                    {image.length === 2 && (
                      <>
                        <label htmlFor='image-input'>
                          <img src={image[0]} alt='Uploaded' />
                        </label>
                        <label htmlFor='image-input'>
                          <img src={image[1]} alt='Uploaded' />
                        </label>
                        <label htmlFor='image-input'>
                          <img className='justify-self-end mr-5 cursor-pointer' src={plus} alt="ImageBottom" />
                        </label>
                        <label htmlFor='image-input'>
                          <img className='justify-self-start ml-6 cursor-pointer' src={plus} alt="ImageBottom" />
                        </label>
                      </>
                    )}
                    {image.length === 3 && (
                      <>
                        <label htmlFor='image-input'>
                          <img src={image[0]} alt='Uploaded' />
                        </label>
                        <label htmlFor='image-input'>
                          <img src={image[1]} alt='Uploaded' />
                        </label>
                        <label htmlFor='image-input'>
                          <img src={image[2]} alt='Uploaded' />
                        </label>
                        <label htmlFor='image-input'>
                          <img className='justify-self-start ml-6 cursor-pointer' src={plus} alt="ImageBottom" />
                        </label>
                      </>
                    )}
                    {image.length === 4 && (
                      <>
                        <label htmlFor='image-input'>
                          <img src={image[0]} alt='Uploaded' />
                        </label>
                        <label htmlFor='image-input'>
                          <img src={image[1]} alt='Uploaded' />
                        </label>
                        <label htmlFor='image-input'>
                          <img src={image[2]} alt='Uploaded' />
                        </label>
                        <label htmlFor='image-input'>
                          <img src={image[3]} alt='Uploaded' />
                        </label>
                      </>
                    )}
                  </div>
                  </div>

            </div>
          </section>
        </div> */}


      </div>

    </div>
  )
}

export default Post