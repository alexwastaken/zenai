import React from 'react'
import { Link } from 'react-router-dom';
import { SquareLoader } from 'react-spinners';
import { useParams } from 'react-router-dom';

function Grid(props) {


  if (!props.dataFromParent || props.dataFromParent.length === 0) {

    return (
    <div className=' h-screen'>
        <div className='flex justify-center'>
            <SquareLoader color="#2d3748" className='md:mt-96 sm:ml-64' />
        </div>
    </div>
    )
  } else {

    


    if (Math.ceil(props.dataFromParent[1] / 21) > 1) {

    } else {
        console.log('null')
    }

    return (
        <div class="xl:px-64 sm:ml-64">
            <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700"></div>
                <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10 mx-5">
                    <div className='bg-gray-500 bg-opacity-5 rounded-lg'>
                        <Link className='aspect-square flex items-center justify-center' to={`/prompt/${props.dataFromParent[0][0]?.id[0]}`}>
                            <img class="max-h-full max-w-full mx-auto rounded-lg cursor-pointer" src={props.dataFromParent[0][0]?.imageFile[0]} alt="" />
                        </Link>
                    </div>
                    <div className='bg-gray-500 bg-opacity-5 rounded-lg'>
                        <Link className='aspect-square flex items-center justify-center' to={`/prompt/${props.dataFromParent[0][0]?.id[0]}`}>
                            <img class="max-h-full max-w-full mx-auto rounded-lg cursor-pointer" src={props.dataFromParent[0][0]?.imageFile[0]} alt="" />
                        </Link>
                    </div>
                    <div className='bg-gray-500 bg-opacity-5 rounded-lg'>
                        <Link className='aspect-square flex items-center justify-center' to={`/prompt/${props.dataFromParent[0][0]?.id[0]}`}>
                            <img class="max-h-full max-w-full mx-auto rounded-lg cursor-pointer" src={props.dataFromParent[0][0]?.imageFile[0]} alt="" />
                        </Link>
                    </div>
                    <div className='bg-gray-500 bg-opacity-5 rounded-lg'>
                        <Link className='aspect-square flex items-center justify-center' to={`/prompt/${props.dataFromParent[0][0]?.id[0]}`}>
                            <img class="max-h-full max-w-full mx-auto rounded-lg cursor-pointer" src={props.dataFromParent[0][0]?.imageFile[0]} alt="" />
                        </Link>
                    </div>
                    <div className='bg-gray-500 bg-opacity-5 rounded-lg'>
                        <Link className='aspect-square flex items-center justify-center' to={`/prompt/${props.dataFromParent[0][0]?.id[0]}`}>
                            <img class="max-h-full max-w-full mx-auto rounded-lg cursor-pointer" src={props.dataFromParent[0][0]?.imageFile[0]} alt="" />
                        </Link>
                    </div>
                    <div className='bg-gray-500 bg-opacity-5 rounded-lg'>
                        <Link className='aspect-square flex items-center justify-center' to={`/prompt/${props.dataFromParent[0][0]?.id[0]}`}>
                            <img class="max-h-full max-w-full mx-auto rounded-lg cursor-pointer" src={props.dataFromParent[0][0]?.imageFile[0]} alt="" />
                        </Link>
                    </div>
                    <div className='bg-gray-500 bg-opacity-5 rounded-lg'>
                        <Link className='aspect-square flex items-center justify-center' to={`/prompt/${props.dataFromParent[0][0]?.id[0]}`}>
                            <img class="max-h-full max-w-full mx-auto rounded-lg cursor-pointer" src={props.dataFromParent[0][0]?.imageFile[0]} alt="" />
                        </Link>
                    </div>
                    <div className='bg-gray-500 bg-opacity-5 rounded-lg'>
                        <Link className='aspect-square flex items-center justify-center' to={`/prompt/${props.dataFromParent[0][0]?.id[0]}`}>
                            <img class="max-h-full max-w-full mx-auto rounded-lg cursor-pointer" src={props.dataFromParent[0][0]?.imageFile[0]} alt="" />
                        </Link>
                    </div>
                    <div className='bg-gray-500 bg-opacity-5 rounded-lg'>
                        <Link className='aspect-square flex items-center justify-center' to={`/prompt/${props.dataFromParent[0][0]?.id[0]}`}>
                            <img class="max-h-full max-w-full mx-auto rounded-lg cursor-pointer" src={props.dataFromParent[0][0]?.imageFile[0]} alt="" />
                        </Link>
                    </div>
                    <div className='bg-gray-500 bg-opacity-5 rounded-lg'>
                        <Link className='aspect-square flex items-center justify-center' to={`/prompt/${props.dataFromParent[0][0]?.id[0]}`}>
                            <img class="max-h-full max-w-full mx-auto rounded-lg cursor-pointer" src={props.dataFromParent[0][0]?.imageFile[0]} alt="" />
                        </Link>
                    </div>
                    <div className='bg-gray-500 bg-opacity-5 rounded-lg'>
                        <Link className='aspect-square flex items-center justify-center' to={`/prompt/${props.dataFromParent[0][0]?.id[0]}`}>
                            <img class="max-h-full max-w-full mx-auto rounded-lg cursor-pointer" src={props.dataFromParent[0][0]?.imageFile[0]} alt="" />
                        </Link>
                    </div>
                    <div className='bg-gray-500 bg-opacity-5 rounded-lg'>
                        <Link className='aspect-square flex items-center justify-center' to={`/prompt/${props.dataFromParent[0][0]?.id[0]}`}>
                            <img class="max-h-full max-w-full mx-auto rounded-lg cursor-pointer" src={props.dataFromParent[0][0]?.imageFile[0]} alt="" />
                        </Link>
                    </div>
                    <div className='bg-gray-500 bg-opacity-5 rounded-lg'>
                        <Link className='aspect-square flex items-center justify-center' to={`/prompt/${props.dataFromParent[0][0]?.id[0]}`}>
                            <img class="max-h-full max-w-full mx-auto rounded-lg cursor-pointer" src={props.dataFromParent[0][0]?.imageFile[0]} alt="" />
                        </Link>
                    </div>
                    <div className='bg-gray-500 bg-opacity-5 rounded-lg'>
                        <Link className='aspect-square flex items-center justify-center' to={`/prompt/${props.dataFromParent[0][0]?.id[0]}`}>
                            <img class="max-h-full max-w-full mx-auto rounded-lg cursor-pointer" src={props.dataFromParent[0][0]?.imageFile[0]} alt="" />
                        </Link>
                    </div>
                    <div className='bg-gray-500 bg-opacity-5 rounded-lg'>
                        <Link className='aspect-square flex items-center justify-center' to={`/prompt/${props.dataFromParent[0][0]?.id[0]}`}>
                            <img class="max-h-full max-w-full mx-auto rounded-lg cursor-pointer" src={props.dataFromParent[0][0]?.imageFile[0]} alt="" />
                        </Link>
                    </div>
                    <div className='bg-gray-500 bg-opacity-5 rounded-lg'>
                        <Link className='aspect-square flex items-center justify-center' to={`/prompt/${props.dataFromParent[0][0]?.id[0]}`}>
                            <img class="max-h-full max-w-full mx-auto rounded-lg cursor-pointer" src={props.dataFromParent[0][0]?.imageFile[0]} alt="" />
                        </Link>
                    </div>
                    <div className='bg-gray-500 bg-opacity-5 rounded-lg'>
                        <Link className='aspect-square flex items-center justify-center' to={`/prompt/${props.dataFromParent[0][0]?.id[0]}`}>
                            <img class="max-h-full max-w-full mx-auto rounded-lg cursor-pointer" src={props.dataFromParent[0][0]?.imageFile[0]} alt="" />
                        </Link>
                    </div>
                    <div className='bg-gray-500 bg-opacity-5 rounded-lg'>
                        <Link className='aspect-square flex items-center justify-center' to={`/prompt/${props.dataFromParent[0][0]?.id[0]}`}>
                            <img class="max-h-full max-w-full mx-auto rounded-lg cursor-pointer" src={props.dataFromParent[0][0]?.imageFile[0]} alt="" />
                        </Link>
                    </div>
                    <div className='bg-gray-500 bg-opacity-5 rounded-lg'>
                        <Link className='aspect-square flex items-center justify-center' to={`/prompt/${props.dataFromParent[0][0]?.id[0]}`}>
                            <img class="max-h-full max-w-full mx-auto rounded-lg cursor-pointer" src={props.dataFromParent[0][0]?.imageFile[0]} alt="" />
                        </Link>
                    </div>
                    <div className='bg-gray-500 bg-opacity-5 rounded-lg'>
                        <Link className='aspect-square flex items-center justify-center' to={`/prompt/${props.dataFromParent[0][0]?.id[0]}`}>
                            <img class="max-h-full max-w-full mx-auto rounded-lg cursor-pointer" src={props.dataFromParent[0][0]?.imageFile[0]} alt="" />
                        </Link>
                    </div>
                    <div className='bg-gray-500 bg-opacity-5 rounded-lg'>
                        <Link className='aspect-square flex items-center justify-center' to={`/prompt/${props.dataFromParent[0][0]?.id[0]}`}>
                            <img class="max-h-full max-w-full mx-auto rounded-lg cursor-pointer" src={props.dataFromParent[0][0]?.imageFile[0]} alt="" />
                        </Link>
                    </div>
                    
    
                    
            </div>
                    <div class="flex justify-center mt-10 mb-10 gap-10">
                        <button class="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-l">
                            Prev
                        </button>
                        <button class="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-r">
                            Next
                        </button>
                    </div>
        </div>
      )

  }
  

  
}

export default Grid