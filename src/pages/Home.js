import React from 'react'
import backgroundhome from '../img/backgroundhome.png'
import logo from '../img/Vector.png'

function Home() {
  return (
    <div
      className="h-screen bg-no-repeat bg-fixed bg-center bg-cover"
      style={{ backgroundImage: `url(${backgroundhome})` }}
    >
    <header class="flex justify-between py-4 mx-auto max-w-4xl text-white font-sans tracking-wide">
      <img src={logo} />
        <div class="flex justify-center gap-24 text-lg">
            <div>Profile</div>
            <div>Favorites</div>
            <div>My Books</div>
        </div>
        <div className='text-lg'>Sign In</div>
    </header>

    <section class="grid grid-cols-9 gap-9 mx-auto max-w-6xl">
    <div class="w-14 h-24 bg-gray-300"></div>
    <div class="w-14 h-24 bg-gray-300"></div>
    <div class="w-14 h-24 bg-gray-300"></div>
    <div class="w-14 h-24 bg-gray-300"></div>
    <div class="w-14 h-24 bg-gray-300"></div>
    <div class="w-14 h-24 bg-gray-300"></div>
    <div class="w-14 h-24 bg-gray-300"></div>
    <div class="w-14 h-24 bg-gray-300"></div>
    <div class="w-14 h-24 bg-gray-300"></div>
    <div class="w-14 h-24 bg-gray-300"></div>
    <div class="w-14 h-24 bg-gray-300"></div>
    <div class="w-14 h-24 bg-gray-300"></div>
    <div class="w-14 h-24 bg-gray-300"></div>
    <div class="w-14 h-24 bg-gray-300"></div>
    <div class="w-14 h-24 bg-gray-300"></div>
    <div class="w-14 h-24 bg-gray-300"></div>
    <div class="w-14 h-24 bg-gray-300"></div>
    <div class="w-14 h-24 bg-gray-300"></div>
    
    </section>
    </div>
  )
}

export default Home