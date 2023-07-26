import { React, useState, useEffect } from 'react'
import backgroundhome from '../img/backgroundhome.png'
import Header from '../components/header'
import Sidebar from '../components/sidebar';
import Product from '../components/product';
import { useParams } from 'react-router-dom';

function Prompt() {
  
    const { id } = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
    fetch(`http://localhost:3001/promptID/${id}`)
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error('An error occurred:', error));
    }, [id]);

    console.log(data)

    if (!data) {
        // Data is not yet available, render a loading message
        return <div>Loading...</div>;
    }

  return (

    <div
      className="bg-black"
    >
        <Sidebar />
        <Product dataFromParent={data} />
    </div>
        

  )
}

export default Prompt