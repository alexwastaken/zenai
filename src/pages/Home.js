import React, { useState, useEffect } from 'react'
import backgroundhome from '../img/backgroundhome.png'
import logo from '../img/Vector.png'
import plug from '../img/plus.png'
import Header from '../components/header.js'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import Sidebar from '../components/sidebar.js'



function Home() {

    const { isAuthenticated } = useAuth0()

    const [data, setData] = useState([]);

    useEffect(() => {
        console.log('useEffect called');
        fetch('http://localhost:3001/users')
          .then((response) => response.json())
          .then((data) => {
            console.log(data, 'd211d');
            setData(data);
          })
          .catch((error) => console.error('An error occurred:', error));
      }, []);
      
      console.log(data, 'this is appear')
  return (
    <div
      className="bg-black"
    //   style={{ backgroundImage: `url(${backgroundhome})` }}
    >

    <Sidebar dataFromParent={data} />

    {/* <section className='mx-auto max-w-6xl'>
    <h1 className='text-center text-white text-3xl pt-20 pb-14'>All Books</h1>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8 gap-y-6 bottom-0 justify-items-center">
        {data.map((item, index) => (
            <div
            key={item.title}
            className={`w-48 h-40 bg-gray-300 ${
                index >= 3 && index < 5 ? 'hidden sm:block' : ''
            } ${index >= 5 && index < 7 ? 'hidden md:block' : ''} ${
                index >= 7 && index < 9 ? 'hidden lg:block' : ''
            } ${index >= 9 ? 'hidden xl:block' : ''}`}
            >
            <div>{item.title}</div>
            <div>{item.description}</div>
            <Link to={`/prompt/${item.id}`}><img src={item.imageFile} alt={item.title} /></Link>
            </div>
        ))}
        <div className="w-full flex items-center justify-center">
            {isAuthenticated ? (
            <Link to="/post">
                <img src={plug} className='cursor-pointer' alt="ImageBottom" />
            </Link>
            ) : (
            <div className='text-white'>Log In to Post</div>
            )}
        </div>
        </div>
    </section> */}

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