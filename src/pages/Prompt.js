import { React, useState, useEffect } from 'react'
import backgroundhome from '../img/backgroundhome.png'
import Header from '../components/header'
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
      className="h-screen bg-no-repeat bg-fixed bg-center bg-cover"
      style={{ backgroundImage: `url(${backgroundhome})` }}
    >
        <Header />

        <section className='mx-auto max-w-5xl'>
            
        <div class="flex flex-col lg:flex-row lg:justify-between items-center">
        <div class="mt-44 text-white w-96">
            <h2 className='text-4xl'>{data.title}</h2>
            <p className='text-xl mt-10 break-words'>
            {data.desciption}
            </p>
            <p className='text-sm mt-10'>{data.userId}</p>
        </div>


                <div class="grid gap-4 max-w-md float-right mt-44">
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src={data.imageFile} alt=""></img>
                    </div>
                    <div class="grid grid-cols-5 gap-4">
                        <div>
                            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt=""></img>
                        </div>
                        <div>
                            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt=""></img>
                        </div>
                        <div>
                            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt=""></img>
                        </div>
                        <div>
                            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" alt=""></img>
                        </div>
                        <div>
                            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" alt=""></img>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
  )
}

export default Prompt