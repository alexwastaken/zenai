import React from 'react'
import { SquareLoader } from 'react-spinners'

function product(props) {

    console.log(props)
    

    
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
            <section className='mx-auto max-w-5xl h-screen'>
                    
                <div class="flex flex-col lg:flex-row lg:justify-between items-center sm:ml-64 ">
                <div class="mt-44 text-white w-96">
                    <h2 className='text-4xl'>{props.dataFromParent.title}</h2>
                    <p className='text-xl mt-10 break-words'>
                    {props.dataFromParent.desc}
                    </p>
                    <p className='text-sm mt-10'>{props.dataFromParent.userId}</p>

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
                dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-24'
            >
                Offer
            </button>
                </div>
                
        
        
                        <div class="grid gap-4 max-w-md float-right mt-44 ">
                            <div>
                                <img class="h-auto max-w-full rounded-lg" src={props.dataFromParent.imageFile[0]} alt=""></img>
                            </div>
                            <div class="grid grid-cols-3 gap-4">
                                <div>
                                    <img class="h-auto max-w-full rounded-lg" src={props.dataFromParent.imageFile[1]} alt=""></img>
                                </div>
                                <div>
                                    <img class="h-auto max-w-full rounded-lg" src={props.dataFromParent.imageFile[2]} alt=""></img>
                                </div>
                                <div>
                                    <img class="h-auto max-w-full rounded-lg" src={props.dataFromParent.imageFile[3]} alt=""></img>
                                </div>
                            </div>
                        </div>

                    

                       
                    </div>
                </section>
          )
    }
}

export default product