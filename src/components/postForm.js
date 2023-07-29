import React, { useState, useEffect } from 'react';
import Resizer from "react-image-file-resizer";
import CurrencyInput from 'react-currency-input-field';

function Postform(props) {

  const user = props.userInfo

  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState('');
  const [prompt, setPrompt] = useState('');
  const [showMore, setShowMore] = useState(true);
  const [image, setImage] = useState([]);
  const [binary, setBinary] = useState([]);
  const [submitForm, setSubmitForm] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [LargeImage, setLargeImage] = useState(false);
  const [ManyImages, setManyImages] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };


  const handleButtonClick = () => {
    setShowMore((prevShowMore) => !prevShowMore);
  };

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
    if (event.target.files && event.target.files.length > 0) {

      if (event.target.files[0].size > 2097152) {
        setLargeImage(true)
        return;
      } else {
        setLargeImage(false)
      }

      if (image.length >= 4) {
        setManyImages(true)
        return;
      } else{
        setManyImages(false)
      }

      const newImages = [...image];
      newImages.push(URL.createObjectURL(event.target.files[0]));
      setImage(newImages);
      
      const resized = await resizeFile(event.target.files[0]);
      setBinary((prevBinary) => [...prevBinary, resized]);
    }
  };

  const handleFormSubmit = () => {
    if (!title) {
        setSubmitForm(true)
        return;
    }
    if (!desc) {
        setSubmitForm(true)
        return;
    }
    if (!price) {
        setSubmitForm(true)
        return;
    }
    if(binary.length === 0){
        setSubmitForm(true)
        return;
    }

    fetch('http://localhost:3001/mypost', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title,
        desc,
        price,
        userId: user.name,
        imageFile: binary
      })
    })
      .then(response => {
        if (response.ok) {
          window.location.href = 'http://localhost:3000/';
        }
      })
      .catch(error => {
        // Handle error
      });
  };

  useEffect(() => {
    // Access the 'my-alert' element inside useEffect
    const myAlert = document.getElementById('my-alert');

    // Fade in
    if (LargeImage || ManyImages) {
      myAlert.classList.remove('opacity-0');
      myAlert.classList.add('opacity-100');
    }

    // Fade out after a delay
    setTimeout(() => {
      myAlert.classList.remove('opacity-100');
      myAlert.classList.add('opacity-0');
    }, 2000);

    setLargeImage(false)
    setManyImages(false)
    
  }, [LargeImage, ManyImages]);

  return (
    <div className='sm:ml-64'>
      <div className='flex flex-col max-w-sm lg:max-w-3xl mx-auto bg-gray-900'>
        {showMore ? (
          <form className='mt-32'>
            <label htmlFor='first_name' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
              Title
            </label>
            <input
              type='text'
              id='first_name'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='Short intro'
              onChange={e => setTitle(e.target.value)}
              required
            />

            <label htmlFor='message' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-12'>
              Description
            </label>
            <textarea
              id='message'
              rows='4'
              className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='Tell us about your pictures'
              onChange={e => setDesc(e.target.value)}
            ></textarea>

            <div id="my-alert" class={`flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800 transition-opacity duration-500 ease-in-out fixed bottom-0 ${(!LargeImage && !ManyImages) ? 'opacity-0' : 'opacity-100'}`} role="alert">
                <svg class="flex-shrink-0 inline w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                </svg>
                <span class="sr-only">Info</span>
                <div>
                    <span class="font-medium">Items Missing! </span>
                    {ManyImages && LargeImage && 'Oops! You can only upload up to four images, and each image should be under two megabytes.'}
                    {ManyImages && 'Oops! You can only upload up to four images to showcase your items.'}
                    {LargeImage && 'Oh no! The image you selected is too large. Please ensure each image is under two megabytes.'}
                </div>
            </div>


            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16'>
              <div>
              <div className='w-[180px] h-[139px] mx-auto rounded-lg bg-gray-800 opacity-30'>
              <img
                className='max-w-[180px] max-h-[139px] mx-auto'
                src={image[0]}
                alt=''
                />
                </div>

              </div>
              <div>
              <div className='w-[180px] h-[139px] mx-auto rounded-lg bg-gray-800 opacity-30'>
              <img
                className='max-w-[180px] max-h-[139px] mx-auto'
                src={image[1]}
                alt=''
                />
                </div>

              </div>
              <div>
              <div className='w-[180px] h-[139px] mx-auto rounded-lg bg-gray-800 opacity-30'>
              <img
                className='max-w-[180px] max-h-[139px] mx-auto'
                src={image[2]}
                alt=''
                />
                </div>

              </div>
              <div>
              <div className='w-[180px] h-[139px] mx-auto rounded-lg bg-gray-800 opacity-30'>
              <img
                className='max-w-[180px] max-h-[139px] mx-auto'
                src={image[3]}
                alt=''
                />
                </div>

              </div>
            </div>
            
            <div className='flex items-center justify-center mt-10'>
              <label
                htmlFor='image-input'
                className='flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600'
              >
                <div className='flex flex-col items-center justify-center pt-5 pb-6'>
                  <svg
                    className='w-8 h-8 mb-4 text-gray-500 dark:text-gray-400'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 20 16'
                  >
                    <path
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2'
                    />
                  </svg>
                  <p className='mb-2 text-sm text-gray-500 dark:text-gray-400'>
                    <span className='font-semibold'>Click to upload</span> or drag and drop
                  </p>
                  <p className='text-xs text-gray-500 dark:text-gray-400'>SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                </div>
                <input
                    type='file'
                    accept='image/*'
                    onChange={handleImageChange}
                    className='hidden'
                    id='image-input'
                    multiple
                />
              </label>
            </div>

          </form>
        ) : (
            
          <div className='text-4xl text-white'>

            <div class={`flex items-center p-4 mb-4 mt-44 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800 ${!submitForm || (title && desc && price && binary.length > 0 && isChecked && prompt) ? 'invisible' : ''}`} role="alert">
                <svg class="flex-shrink-0 inline w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                </svg>
                <span class="sr-only">Info</span>
                <div>
                <span class="font-medium">Items Missing! </span>
                {!title && 'Title'}
                {!title && (!desc || !price || binary.length === 0 || !isChecked || !prompt) && ', '}
                {!desc && 'Description'}
                {!desc && (!price || binary.length === 0 || !isChecked || !prompt) && ', '}
                {!price && 'Price'}
                {!price && (binary.length === 0 || !isChecked || !prompt) && ', '}
                {binary.length === 0 && 'Image'}
                {binary.length === 0 && (!isChecked || !prompt) && ', '}
                {!isChecked && 'Terms and conditions'}
                {!isChecked && !prompt && ', '}
                {!prompt && 'Prompt'}
                </div>
            </div>

            <label htmlFor='message' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white '>
              Price
            </label>
            <CurrencyInput
              id='input-example'
              name='input-name'
              placeholder='Max 99$'
              defaultValue={1000}
              prefix='$ '
              maxLength={2}
              onChange={e => setPrice(e.target.value)}
              className=' bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            />

            <label htmlFor='message' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-12'>
              Prompt
            </label>
            <textarea
              id='message'
              rows='4'
              className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='Enter your Prompt'
              onChange={e => setPrompt(e.target.value)}
            ></textarea>

            <div class="flex items-start mb-6 mt-10">
                <div class="flex items-center h-5">
                <input id="remember" type="checkbox" checked={isChecked} onChange={handleCheckboxChange} value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300
                    dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 cursor-pointer" required />
                </div>
                <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
            </div>
                

            
          </div>
        )}
        <div className='space-x-10 mx-auto'>
        <button
              type='button'
              onClick={handleButtonClick}
              className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4
               focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-10 mb-2 dark:bg-gray-800
                dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-24'
            >
              {showMore ? 'Next' : 'Back'}
            </button>

            {!showMore && (
              <button
                type='submit'
                className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4
                 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-10 mb-2 dark:bg-gray-800
                  dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-24'
                  onClick={handleFormSubmit}
              >
                Submit
              </button>
            )}

            </div>
            
      </div>
    </div>
  );
}

export default Postform;