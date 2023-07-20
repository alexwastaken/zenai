import React from 'react'
import logo from '../img/Vector.png'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'

function header() {
  return (
    <header className="flex justify-between mx-16 py-4 lg:mx-auto max-w-4xl text-white font-sans tracking-wide">
        <img src={logo} />
        <div className="flex justify-center gap-28 text-md">
        <div className='hidden md:block'>Profile</div>
        <div className='hidden md:block'>Favorites</div>
        <div className='hidden md:block'>My Books</div>
        </div>
        <LoginButton />
        <LogoutButton />
    </header>
  )
}

export default header