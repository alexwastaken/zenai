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

  console.log(props.dataFromParent)
  return (
    <div class="p-4 sm:ml-64">
        <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700"></div>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10 mx-5">
                <div className='bg-gray-500 bg-opacity-5 rounded-lg'>
                    <Link className='aspect-square flex items-center justify-center' to={`/prompt/${props.dataFromParent[0].id}`}>
                        <img class="max-h-full max-w-full mx-auto rounded-lg cursor-pointer" src={props.dataFromParent[0].imageFile[0]} alt="" />
                    </Link>
                </div>
                <div className='bg-gray-500 bg-opacity-5 rounded-lg'>
                    <Link className='aspect-square flex items-center justify-center' to={`/prompt/${props.dataFromParent[1].id}`}>
                        <img class="max-h-full max-w-full mx-auto rounded-lg cursor-pointer" src={props.dataFromParent[1].imageFile[0]} alt="" />
                    </Link>
                </div>
                <div className='bg-gray-500 bg-opacity-5 rounded-lg'>
                    <Link className='aspect-square flex items-center justify-center' to={`/prompt/${props.dataFromParent[2].id}`}>
                        <img class="max-h-full max-w-full mx-auto rounded-lg cursor-pointer" src={props.dataFromParent[2].imageFile[0]} alt="" />
                    </Link>
                </div>
                <div className='bg-gray-500 bg-opacity-5 rounded-lg'>
                    <Link className='aspect-square flex items-center justify-center' to={`/prompt/${props.dataFromParent[3].id}`}>
                        <img class="max-h-full max-w-full mx-auto rounded-lg cursor-pointer" src={props.dataFromParent[3].imageFile[0]} alt="" />
                    </Link>
                </div>
                <div className='bg-gray-500 bg-opacity-5 rounded-lg'>
                    <Link className='aspect-square flex items-center justify-center' to={`/prompt/${props.dataFromParent[4].id}`}>
                        <img class="max-h-full max-w-full mx-auto rounded-lg cursor-pointer" src={props.dataFromParent[4].imageFile[0]} alt="" />
                    </Link>
                </div>
                <div className='bg-gray-500 bg-opacity-5 rounded-lg'>
                    <Link className='aspect-square flex items-center justify-center' to={`/prompt/${props.dataFromParent[5].id}`}>
                        <img class="max-h-full max-w-full mx-auto rounded-lg cursor-pointer" src={props.dataFromParent[5].imageFile[0]} alt="" />
                    </Link>
                </div>
                <div className='bg-gray-500 bg-opacity-5 rounded-lg'>
                    <Link className='aspect-square flex items-center justify-center' to={`/prompt/${props.dataFromParent[6].id}`}>
                        <img class="max-h-full max-w-full mx-auto rounded-lg cursor-pointer" src={props.dataFromParent[6].imageFile[0]} alt="" />
                    </Link>
                </div>
                <div className='bg-gray-500 bg-opacity-5 rounded-lg'>
                    <Link className='aspect-square flex items-center justify-center'>
                        <img class="max-h-full max-w-full mx-auto rounded-lg cursor-pointer" src={props.dataFromParent[7].imageFile[0]} alt="" />
                    </Link>
                </div>
                <div className='bg-gray-500 bg-opacity-5 rounded-lg'>
                    <Link className='aspect-square flex items-center justify-center'>
                        <img class="max-h-full max-w-full mx-auto rounded-lg cursor-pointer" src={props.dataFromParent[8].imageFile[0]} alt="" />
                    </Link>
                </div>
                <div className='bg-gray-500 bg-opacity-5 rounded-lg'>
                    <Link className='aspect-square flex items-center justify-center'>
                        <img class="max-h-full max-w-full mx-auto rounded-lg cursor-pointer" src={props.dataFromParent[9].imageFile[0]} alt="" />
                    </Link>
                </div>
                <div className='bg-gray-500 bg-opacity-5 rounded-lg'>
                    <Link className='aspect-square flex items-center justify-center'>
                        <img class="max-h-full max-w-full mx-auto rounded-lg cursor-pointer" alt="" />
                    </Link>
                </div>
                <div className='bg-gray-500 bg-opacity-5 rounded-lg'>
                    <Link className='aspect-square flex items-center justify-center'>
                        <img class="max-h-full max-w-full mx-auto rounded-lg cursor-pointer" alt="" />
                    </Link>
                </div>
                <div className='bg-gray-500 bg-opacity-5 rounded-lg'>
                    <Link className='aspect-square flex items-center justify-center'>
                        <img class="max-h-full max-w-full mx-auto rounded-lg cursor-pointer" alt="" />
                    </Link>
                </div>
                <div className='bg-gray-500 bg-opacity-5 rounded-lg'>
                    <Link className='aspect-square flex items-center justify-center'>
                        <img class="max-h-full max-w-full mx-auto rounded-lg cursor-pointer"  alt="" />
                    </Link>
                </div>
                <div className='bg-gray-500 bg-opacity-5 rounded-lg'>
                    <Link className='aspect-square flex items-center justify-center'>
                        <img class="max-h-full max-w-full mx-auto rounded-lg cursor-pointer" alt="" />
                    </Link>
                </div>
                <div className='bg-gray-500 bg-opacity-5 rounded-lg'>
                    <Link className='aspect-square flex items-center justify-center'>
                        <img class="max-h-full max-w-full mx-auto rounded-lg cursor-pointer" alt="" />
                    </Link>
                </div>
                <div className='bg-gray-500 bg-opacity-5 rounded-lg'>
                    <Link className='aspect-square flex items-center justify-center'>
                        <img class="max-h-full max-w-full mx-auto rounded-lg cursor-pointer"alt="" />
                    </Link>
                </div>
                <div className='bg-gray-500 bg-opacity-5 rounded-lg'>
                    <Link className='aspect-square flex items-center justify-center' >
                        <img class="max-h-full max-w-full mx-auto rounded-lg cursor-pointer" alt="" />
                    </Link>
                </div>
        </div>
    </div>
  )
}

export default grid