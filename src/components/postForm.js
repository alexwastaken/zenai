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
  const [BothAre, setBothAre] = useState(false);
  const [ManyImages, setManyImages] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [duplicateImage, setDuplicateImage] = useState(false);
  const [duplicateImageStorage, setDuplicateImageStorage] = useState([]);

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

        console.log(event.target.value, 'this is the value')
        console.log(event.target.files[0], 'here it is')
        console.log(duplicateImageStorage, 'this is the storage')

    setLargeImage(false)
    setManyImages(false)
    setDuplicateImage(false)
    setBothAre(false)

    if (duplicateImageStorage.includes(event.target.value)) {
        setDuplicateImage(true)
        ring()
        const zom = [...duplicateImageStorage];
        const index = zom.indexOf(event.target.value);
        if (index !== -1) {
            zom.splice(index, 1);
            setDuplicateImageStorage(zom);
        }
        return;
    } else {
    }


    if (event.target.files[0].size > 2097152 && image.length >= 4) {
        setBothAre(true)
        ring()
        return;
    } else if (event.target.files[0].size > 2097152) {
        setLargeImage(true)
        ring()
        return;
    } else if (image.length >= 4) {
        setManyImages(true)
        ring()
        return;
    }

      const newImages = [...image];
      newImages.push(URL.createObjectURL(event.target.files[0]));
      setImage(newImages);
      
      const resized = await resizeFile(event.target.files[0]);
      setBinary((prevBinary) => [...prevBinary, resized]);

      const zom = [...duplicateImageStorage];
        zom.push(event.target.value);
        setDuplicateImageStorage(zom);

    }
    event.target.value = null;
  };

    let lastCalled = 0;

    function ring() {
        const now = Date.now();
        if (now - lastCalled < 3000) {
            return;
        }
        lastCalled = now;
        setShowAlert(true)

        setTimeout(() => {
            setShowAlert(false)
        }, 3000);
    }

    function deleteImage(index) {
        setImage(prevItems => prevItems.filter((item, i) => i !== index));
        setBinary(prevItems => prevItems.filter((item, i) => i !== index));
        const zom = [...duplicateImageStorage];
        zom.pop();
        setDuplicateImageStorage(zom);
        // i need to make it so the instance of the duplicated image in the storage is deleted, and also there is multiple lines in the alert for some reason
        
    }

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

  const handleUpdatePrice = (inputValue) => {
    const parsedNumber = parseFloat(inputValue.replace(/[^\d.]/g, ''));
    if (!isNaN(parsedNumber)) {
      const firstTwoDigits = parsedNumber.toString().slice(0, 2);
      setPrice(firstTwoDigits);
    } else {
      setPrice(null);
    }
  };

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
              value={title}
              required
            />

            <label htmlFor='message' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-12'>
              Description
            </label>
            <textarea
              id='message'
              rows='4'
              className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='Tell us more'
              onChange={e => setDesc(e.target.value)}
              value={desc}
            ></textarea>
            
            <div id="my-alert" class={`flex items-center pointer-events-none max-w-sm lg:max-w-3xl mx-auto w-full fixed bottom-0 p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800 transition-opacity duration-500 ease-in-out ${showAlert ? 'opacity-100': 'opacity-0'}`} role="alert">
                <svg class="flex-shrink-0 inline w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                </svg>
                <span class="sr-only">Info</span>
                <div>
                    <span class="font-medium">Items Missing! </span>
                    {BothAre && 'Oops! You can only upload up to four images, and each image should be under 2MB.'}
                    {ManyImages && 'Oops! You can only upload up to four images.'}
                    {LargeImage && 'Oh no! The image you selected is too large. Please ensure each image is under two megabytes.'}
                    {duplicateImage && "Sorry! You can't upload the same image twice."}
                </div>
            </div>


            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16'>
              <div>
              <div className='w-[180px] h-[139px] mx-auto rounded-lg bg-gray-800 flex items-center relative'>
              {image[0] ? (
                <div onClick={() => deleteImage(0)} className='rounded-full absolute bg-gray-700 w-7 h-7 top-[-10px] right-[-10px] flex items-center justify-center opacity-70'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="cursor-pointer w-5 h-10 text-red-500">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                </div>
              ) : ( '' )}

              <img
                className='max-w-[180px] max-h-[139px] mx-auto'
                src={image[0]}
                alt=''
                />
                </div>

              </div>
              <div>
              <div className='w-[180px] h-[139px] mx-auto rounded-lg bg-gray-800 flex items-center relative'>

              {image[1] ? (
                <div onClick={() => deleteImage(1)} className='rounded-full absolute bg-gray-700 w-7 h-7 top-[-10px] right-[-10px] flex items-center justify-center opacity-70'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="cursor-pointer w-5 h-10 text-red-500">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                </div>
              ) : ( '' )}

              <img
                className='max-w-[180px] max-h-[139px] mx-auto'
                src={image[1]}
                alt=''
                />
                </div>

              </div>
              <div>
              <div className='w-[180px] h-[139px] mx-auto rounded-lg bg-gray-800 flex items-center relative'>

              {image[2] ? (
                <div onClick={() => deleteImage(2)} className='rounded-full absolute bg-gray-700 w-7 h-7 top-[-10px] right-[-10px] flex items-center justify-center opacity-70'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="cursor-pointer w-5 h-10 text-red-500">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                </div>
              ) : ( '' )}

              <img
                className='max-w-[180px] max-h-[139px] mx-auto'
                src={image[2]}
                alt=''
                />
                </div>

              </div>
              <div>
              <div className='w-[180px] h-[139px] mx-auto rounded-lg bg-gray-800 flex items-center relative'>

              {image[3] ? (
                <div  onClick={() => deleteImage(3)} className='rounded-full absolute bg-gray-700 w-7 h-7 top-[-10px] right-[-10px] flex items-center justify-center opacity-70'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="cursor-pointer w-5 h-10 text-red-500">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                </div>
              ) : ( '' )}

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
                <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                </svg>

                  <p className='mb-2 text-sm text-gray-500 dark:text-gray-400'>
                    <span className='font-semibold'>Click to upload</span> or drag and drop
                  </p>
                  <p className='text-xs text-gray-500 dark:text-gray-400'>PNG, JPG or GIF (MAX 2MB)</p>
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
                prefix='$ '
                maxLength={2} // Assuming you want to allow up to 5 characters (including the "$" and two digits).
                onChange={(e) => handleUpdatePrice(e.target.value)} // Pass the event object to the function.
                value={price}
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
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
              value={prompt}
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