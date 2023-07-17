import React from 'react'
import backgroundhome from '../img/backgroundhome.png'

function Home() {
  return (
    <div
      className="h-screen bg-no-repeat bg-fixed bg-center bg-cover"
      style={{ backgroundImage: `url(${backgroundhome})` }}
    >
      <header>
        <div className='flex flex-row justify-center gap-24'>
            <div>blah</div>
            <div>blah</div>
            <div>blah</div>
            <div>blah</div>
            <div>blah</div>
        </div>
      </header>
    </div>
  )
}

export default Home