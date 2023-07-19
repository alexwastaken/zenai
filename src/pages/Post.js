import React from 'react'
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

        <section className='mx-auto max-w-3xl mt-24 md:mt-56'>
            <div className='flex flex-col space-y-20 md:space-y-0 md:flex-row'>
                <div className='flex-1 h-60'>
                    <h1 className='text-white text-xl tracking-wide text-center'>Title</h1>
                    <img className='mx-auto mt-4' src={textrectangle} alt="ImageBottom" />
                </div>
                <div className='flex-1 h-60'>
                    <h1 className='text-white text-xl tracking-wide text-center'>Description</h1>
                    <div className='relative w-[165px]'>
                        <img className='mx-auto mt-4' src={descriptionrectangle} alt="ImageBottom" />
                        <textarea className='absolute top-0 right-0 bottom-0 left-0 items-start justify-start bg-transparent font-sans w-full max-w-full resize-none outline-none text-white' rows='3' placeholder='Enter text here'></textarea>
                    </div>
                    <img src={submit} className='hidden md:block mt-32 mx-auto' alt="ImageBottom" />
                </div>
                <div className='flex-1 h-60'>
                    <h1 className='text-white text-xl tracking-wide text-center'>Add Files</h1>
                    <div className='grid grid-cols-2 mt-11 gap-x-0 gap-y-8'>
                        <img className='justify-self-end mr-5' src={plus} alt="ImageBottom" />
                        <img className='justify-self-start ml-5' src={plus} alt="ImageBottom" />
                        <img className='justify-self-end mr-5' src={plus} alt="ImageBottom" />
                        <img className='justify-self-start ml-5' src={plus} alt="ImageBottom" />
                    </div>
                    <img src={submit} className='cursor-pointer block md:hidden mt-32 mx-auto' alt="ImageBottom" />
                </div> 
                
            </div>
            {/* <footer className='fixed bottom-0 w-full flex flex-row gap-x-24 justify-center h-[50px] text-gray-200 opacity-30 z-10'>
                <div>FAQ</div>
                <div>Contact</div>
                <div>Terms Of Service</div>
                <div>© 2023</div>
            </footer> */}
        </section>
        
    
        </div>
        
    </div>
  )
}

export default Post