import React, { useState } from 'react'
import { SquareLoader } from 'react-spinners'

function Product(props) {

    const [arrayImage, setArrayImage] = useState([0,1,2,3])

    const handleImageChange = (event) => {

        let newArray = [...arrayImage];

        // Swap the first image with the clicked image
        let temp = newArray[0];
        newArray[0] = newArray[event];
        newArray[event] = temp;

        setArrayImage(newArray);
        
    }

    

    
    if (!props.dataFromParent) {
        // Data is not yet available, render a loading message
        return <div>
            <div className='bg-gray-900 h-screen'>
                <div className='flex justify-center'>
                    <SquareLoader color="#2d3748" className='md:mt-96 sm:ml-64' />
                </div>
            </div>
        </div>;
    } else {

        return (
            <div className='sm:ml-64'>
                <section className='mx-auto max-w-5xl h-screen'>

                    <div class="flex flex-col lg:flex-row lg:justify-between">
                    
                    <div class="mt-[265px] text-white w-[450px]">
                        <h2 className='text-4xl'>{props.dataFromParent.title}</h2>
                        <p className='mt-4 to-cyan-100'>{props.dataFromParent.userId}</p>
                        <p className='text-lg mt-10 break-words pb-8 border-b border-gray-700'>
                        {props.dataFromParent.desc}
                        </p>
                        
                        
                        

                        <button
                type='button'
                className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4
                focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-10 mb-2 dark:bg-gray-800
                    dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-24'
                >
                    Buy
                </button>

                <button
                type='button'

                className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4
                focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-10 mb-2 dark:bg-gray-800
                    dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-24 ml-10'
                >
                    Offer
                </button>
                
                    </div>
                    
            
            
                            <div className="grid gap-4 max-w-sm float-right mt-44">
                                <div>
                                    <img className="max-w-full max-h-full aspect-square rounded-lg cursor-pointer" onClick={() => handleImageChange(0)} src={props.dataFromParent.imageFile[arrayImage[0]]} alt=""></img>
                                </div>
                                <div className="grid grid-cols-3 gap-4">
                                    <div>
                                        <img className="h-auto max-w-full rounded-lg cursor-pointer" onClick={() => handleImageChange(1)} src={props.dataFromParent.imageFile[arrayImage[1]]} alt=""></img>
                                    </div>
                                    <div>
                                        <img className="h-auto max-w-full rounded-lg cursor-pointer" onClick={() => handleImageChange(2)} src={props.dataFromParent.imageFile[arrayImage[2]]} alt=""></img>
                                    </div>
                                    <div>
                                        <img className="h-auto max-w-full rounded-lg cursor-pointer" onClick={() => handleImageChange(3)} src={props.dataFromParent.imageFile[arrayImage[3]]} alt=""></img>
                                    </div>
                                </div>
                            </div>

                        

                        
                        </div>
                    </section>
                </div>
          )
    }
}

export default Product