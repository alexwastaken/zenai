import React from 'react'
import backgroundhome from '../img/backgroundhome.png'
import logo from '../img/Vector.png'
import plug from '../img/plus.png'
import { Link } from 'react-router-dom'; 


function Home() {
  return (
    <div
      className="h-screen bg-no-repeat bg-fixed bg-center bg-cover"
      style={{ backgroundImage: `url(${backgroundhome})` }}
    >
    <header className="flex justify-between py-4 mx-auto max-w-4xl text-white font-sans tracking-wide">
      <img src={logo} />
        <div className="flex justify-center gap-28 text-lg">
            <div>Profile</div>
            <div>Favorites</div>
            <div>My Books</div>
        </div>
        <div className='text-lg'>Sign In</div>
    </header>

    <section className='mx-auto max-w-6xl'>
        <h1 className='text-center text-white text-3xl pt-20 pb-14'>All Books</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8 gap-y-12 bottom-0 justify-items-center">
            <div className="w-28 h-40 bg-gray-300"></div>
            <div className="w-28 h-40 bg-gray-300"></div>
            <div className="w-28 h-40 bg-gray-300"></div>
            <div className="w-28 h-40 bg-gray-300 hidden sm:block"></div>
            <div className="w-28 h-40 bg-gray-300 hidden sm:block"></div>
            <div className="w-28 h-40 bg-gray-300 hidden md:block"></div>
            <div className="w-28 h-40 bg-gray-300 hidden md:block"></div>
            <div className="w-28 h-40 bg-gray-300 hidden lg:block"></div>
            <div className="w-28 h-40 bg-gray-300 hidden lg:block"></div>
            <div className="w-28 h-40 bg-gray-300 hidden xl:block"></div>
            <div className="w-28 h-40 bg-gray-300 hidden xl:block"></div>
            <div className="w-28 h-40 bg-gray-300 hidden xl:block"></div>
            <div className="w-28 h-40 bg-gray-300 hidden xl:block"></div>
            <div className="w-28 h-40 bg-gray-300 hidden xl:block"></div>
            <div className="w-28 h-40 bg-gray-300 hidden xl:block"></div>
            <div className="w-full flex items-center justify-center">
                <Link to="/post">
                    <img src={plug} className='cursor-pointer' alt="ImageBottom" />
                </Link>
            </div>
        </div>
    </section>

    <footer className='fixed bottom-0 w-full flex flex-row gap-x-24 justify-center h-[50px] text-gray-200 opacity-30'>
        <div>FAQ</div>
        <div>Contact</div>
        <div>Terms Of Service</div>
        <div>© 2023</div>
    </footer>
    </div>
  )
}

export default Home