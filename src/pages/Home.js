import React, { useState, useEffect } from 'react'
import backgroundhome from '../img/backgroundhome.png'
import logo from '../img/Vector.png'
import plug from '../img/plus.png'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import Sidebar from '../components/sidebar.js'
import Grid from '../components/grid.js'


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

    <Sidebar />
    <Grid dataFromParent={data} />

    </div>
  )
}

export default Home