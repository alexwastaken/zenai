import React from 'react'
import { Link } from 'react-router-dom';
import { SquareLoader } from 'react-spinners';

function grid(props) {

  if (!props.dataFromParent || props.dataFromParent.length === 0) {
    return (
    <div className=' h-screen'>
        <div className='flex justify-center'>
            <SquareLoader color="#2d3748" className='md:mt-96 sm:ml-64' />
        </div>
    </div>
    )
  }

  return (
    <div class="xl:px-64 sm:ml-64">
        <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700"></div>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10 mx-5">
                <div className='bg-gray-500 bg-opacity-5 rounded-lg'>
                    <Link className='aspect-square flex items-center justify-center' to={`/prompt/${props.dataFromParent[0]?.id}`}>
                        <img class="max-h-full max-w-full mx-auto rounded-lg cursor-pointer" src={props.dataFromParent[0]?.imageFile[0]} alt="" />
                    </Link>
                </div>
                <div className='bg-gray-500 bg-opacity-5 rounded-lg'>
                    <Link className='aspect-square flex items-center justify-center' to={`/prompt/${props.dataFromParent[1]?.id}`}>
                        <img class="max-h-full max-w-full mx-auto rounded-lg cursor-pointer" src={props.dataFromParent[1]?.imageFile[0]} alt="" />
                    </Link>
                </div>
                <div className='bg-gray-500 bg-opacity-5 rounded-lg'>
                    <Link className='aspect-square flex items-center justify-center' to={`/prompt/${props.dataFromParent[2]?.id}`}>
                        <img class="max-h-full max-w-full mx-auto rounded-lg cursor-pointer" src={props.dataFromParent[2]?.imageFile[0]} alt="" />
                    </Link>
                </div>
                <div className='bg-gray-500 bg-opacity-5 rounded-lg'>
                    <Link className='aspect-square flex items-center justify-center' to={`/prompt/${props.dataFromParent[3]?.id}`}>
                        <img class="max-h-full max-w-full mx-auto rounded-lg cursor-pointer" src={props.dataFromParent[3]?.imageFile[0]} alt="" />
                    </Link>
                </div>
                <div className='bg-gray-500 bg-opacity-5 rounded-lg'>
                    <Link className='aspect-square flex items-center justify-center' to={`/prompt/${props.dataFromParent[4]?.id}`}>
                        <img class="max-h-full max-w-full mx-auto rounded-lg cursor-pointer" src={props.dataFromParent[4]?.imageFile[0]} alt="" />
                    </Link>
                </div>
                <div className='bg-gray-500 bg-opacity-5 rounded-lg'>
                    <Link className='aspect-square flex items-center justify-center' to={`/prompt/${props.dataFromParent[5]?.id}`}>
                        <img class="max-h-full max-w-full mx-auto rounded-lg cursor-pointer" src={props.dataFromParent[5]?.imageFile[0]} alt="" />
                    </Link>
                </div>
                <div className='bg-gray-500 bg-opacity-5 rounded-lg'>
                    <Link className='aspect-square flex items-center justify-center' to={`/prompt/${props.dataFromParent[6]?.id}`}>
                        <img class="max-h-full max-w-full mx-auto rounded-lg cursor-pointer" src={props.dataFromParent[6]?.imageFile[0]} alt="" />
                    </Link>
                </div>
                <div className='bg-gray-500 bg-opacity-5 rounded-lg'>
                    <Link className='aspect-square flex items-center justify-center' to={`/prompt/${props.dataFromParent[7]?.id}`}>
                        <img class="max-h-full max-w-full mx-auto rounded-lg cursor-pointer" src={props.dataFromParent[7]?.imageFile[0]} alt="" />
                    </Link>
                </div>
                <div className='bg-gray-500 bg-opacity-5 rounded-lg'>
                    <Link className='aspect-square flex items-center justify-center' to={`/prompt/${props.dataFromParent[8]?.id}`}>
                        <img class="max-h-full max-w-full mx-auto rounded-lg cursor-pointer" src={props.dataFromParent[8]?.imageFile[0]} alt="" />
                    </Link>
                </div>
                <div className='bg-gray-500 bg-opacity-5 rounded-lg'>
                    <Link className='aspect-square flex items-center justify-center' to={`/prompt/${props.dataFromParent[9]?.id}`}>
                        <img class="max-h-full max-w-full mx-auto rounded-lg cursor-pointer" src={props.dataFromParent[9]?.imageFile[0]} alt="" />
                    </Link>
                </div>
                <div className='bg-gray-500 bg-opacity-5 rounded-lg'>
                    <Link className='aspect-square flex items-center justify-center' to={`/prompt/${props.dataFromParent[10]?.id}`}>
                        <img class="max-h-full max-w-full mx-auto rounded-lg cursor-pointer" src={props.dataFromParent[10]?.imageFile[0]} alt="" />
                    </Link>
                </div>
                <div className='bg-gray-500 bg-opacity-5 rounded-lg'>
                    <Link className='aspect-square flex items-center justify-center' to={`/prompt/${props.dataFromParent[11]?.id}`}>
                        <img class="max-h-full max-w-full mx-auto rounded-lg cursor-pointer" src={props.dataFromParent[11]?.imageFile[0]} alt="" />
                    </Link>
                </div>
                <div className='bg-gray-500 bg-opacity-5 rounded-lg'>
                    <Link className='aspect-square flex items-center justify-center' to={`/prompt/${props.dataFromParent[12]?.id}`}>
                        <img class="max-h-full max-w-full mx-auto rounded-lg cursor-pointer" src={props.dataFromParent[12]?.imageFile[12]} alt="" />
                    </Link>
                </div>
                <div className='bg-gray-500 bg-opacity-5 rounded-lg'>
                    <Link className='aspect-square flex items-center justify-center' to={`/prompt/${props.dataFromParent[13]?.id}`}>
                        <img class="max-h-full max-w-full mx-auto rounded-lg cursor-pointer" src={props.dataFromParent[13]?.imageFile[13]} alt="" />
                    </Link>
                </div>
                <div className='bg-gray-500 bg-opacity-5 rounded-lg'>
                    <Link className='aspect-square flex items-center justify-center' to={`/prompt/${props.dataFromParent[14]?.id}`}>
                        <img class="max-h-full max-w-full mx-auto rounded-lg cursor-pointer" src={props.dataFromParent[14]?.imageFile[14]} alt="" />
                    </Link>
                </div>
                <div className='bg-gray-500 bg-opacity-5 rounded-lg'>
                    <Link className='aspect-square flex items-center justify-center' to={`/prompt/${props.dataFromParent[15]?.id}`}>
                        <img class="max-h-full max-w-full mx-auto rounded-lg cursor-pointer" src={props.dataFromParent[15]?.imageFile[15]} alt="" />
                    </Link>
                </div>
                <div className='bg-gray-500 bg-opacity-5 rounded-lg'>
                    <Link className='aspect-square flex items-center justify-center' to={`/prompt/${props.dataFromParent[16]?.id}`}>
                        <img class="max-h-full max-w-full mx-auto rounded-lg cursor-pointer" src={props.dataFromParent[16]?.imageFile[16]} alt="" />
                    </Link>
                </div>
                <div className='bg-gray-500 bg-opacity-5 rounded-lg'>
                    <Link className='aspect-square flex items-center justify-center' to={`/prompt/${props.dataFromParent[17]?.id}`}>
                        <img class="max-h-full max-w-full mx-auto rounded-lg cursor-pointer" src={props.dataFromParent[17]?.imageFile[17]} alt="" />
                    </Link>
                </div>
                <div className='bg-gray-500 bg-opacity-5 rounded-lg'>
                    <Link className='aspect-square flex items-center justify-center' to={`/prompt/${props.dataFromParent[18]?.id}`}>
                        <img class="max-h-full max-w-full mx-auto rounded-lg cursor-pointer" src={props.dataFromParent[18]?.imageFile[18]} alt="" />
                    </Link>
                </div>
                <div className='bg-gray-500 bg-opacity-5 rounded-lg'>
                    <Link className='aspect-square flex items-center justify-center' to={`/prompt/${props.dataFromParent[19]?.id}`}>
                        <img class="max-h-full max-w-full mx-auto rounded-lg cursor-pointer" src={props.dataFromParent[19]?.imageFile[19]} alt="" />
                    </Link>
                </div>
                <div className='bg-gray-500 bg-opacity-5 rounded-lg'>
                    <Link className='aspect-square flex items-center justify-center' to={`/prompt/${props.dataFromParent[20]?.id}`}>
                        <img class="max-h-full max-w-full mx-auto rounded-lg cursor-pointer" src={props.dataFromParent[20]?.imageFile[20]} alt="" />
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

export default grid