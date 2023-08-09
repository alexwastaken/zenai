import { React, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { SquareLoader } from 'react-spinners';
import { useParams } from 'react-router-dom';

function Grid(props) {

    const { blah } = useParams();
    const gridValue = blah || 1;
    const [page, setPage] = useState([]);

    useEffect(() => {
        const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
        const currentPage = gridValue
      
        const offset = (currentPage - 1) * 21;
        const modifiedValues = values.map(value => value + offset);
      
        setPage(modifiedValues);
        console.log(modifiedValues)
      }, []);
    

  if (!props.dataFromParent || props.dataFromParent.length === 0) {

    return (
    <div className=' h-screen'>
        <div className='flex justify-center'>
            <SquareLoader color="#2d3748" className='md:mt-96 sm:ml-64' />
        </div>
    </div>
    )
  } else {

    console.log(props.dataFromParent[0][1], 'jlakaskljf')

    


    // if (Math.ceil(props.dataFromParent[1] / 21) > gridValue) {
        
        

    //     console.log(page)


    // } else {
    //     console.log('blehhh')
    // }


    //this is not the solution i need to make it so the database grabs data based on the page that im on

    return (
        <div class="xl:px-64 sm:ml-64">
            <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700"></div>
                <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10 mx-5">
                    <div className='bg-gray-500 bg-opacity-5 rounded-lg'>
                        <Link className='aspect-square flex items-center justify-center' to={`/prompt/${props.dataFromParent[0][0]?.id[page[0]]}`}>
                            <img class="max-h-full max-w-full mx-auto rounded-lg cursor-pointer" src={props.dataFromParent[0][0]?.imageFile[page[0]]} alt="" />
                        </Link>
                    </div>
                    <div className='bg-gray-500 bg-opacity-5 rounded-lg'>
                        <Link className='aspect-square flex items-center justify-center' to={`/prompt/${props.dataFromParent[0][1]?.id[page[1]]}`}>
                            <img class="max-h-full max-w-full mx-auto rounded-lg cursor-pointer" src={props.dataFromParent[0][1]?.imageFile[page[1]]} alt="" />
                        </Link>
                    </div>
                    <div className='bg-gray-500 bg-opacity-5 rounded-lg'>
                        <Link className='aspect-square flex items-center justify-center' to={`/prompt/${props.dataFromParent[0][2]?.id[page[2]]}`}>
                            <img class="max-h-full max-w-full mx-auto rounded-lg cursor-pointer" src={props.dataFromParent[0][2]?.imageFile[page[2]]} alt="" />
                        </Link>
                    </div>
                    <div className='bg-gray-500 bg-opacity-5 rounded-lg'>
                        <Link className='aspect-square flex items-center justify-center' to={`/prompt/${props.dataFromParent[0][3]?.id[page[3]]}`}>
                            <img class="max-h-full max-w-full mx-auto rounded-lg cursor-pointer" src={props.dataFromParent[0][3]?.imageFile[page[3]]} alt="" />
                        </Link>
                    </div>
                    <div className='bg-gray-500 bg-opacity-5 rounded-lg'>
                        <Link className='aspect-square flex items-center justify-center' to={`/prompt/${props.dataFromParent[0][4]?.id[page[4]]}`}>
                            <img class="max-h-full max-w-full mx-auto rounded-lg cursor-pointer" src={props.dataFromParent[0][4]?.imageFile[page[4]]} alt="" />
                        </Link>
                    </div>
                    <div className='bg-gray-500 bg-opacity-5 rounded-lg'>
                        <Link className='aspect-square flex items-center justify-center' to={`/prompt/${props.dataFromParent[0][5]?.id[page[5]]}`}>
                            <img class="max-h-full max-w-full mx-auto rounded-lg cursor-pointer" src={props.dataFromParent[0][5]?.imageFile[page[5]]} alt="" />
                        </Link>
                    </div>
                    <div className='bg-gray-500 bg-opacity-5 rounded-lg'>
                        <Link className='aspect-square flex items-center justify-center' to={`/prompt/${props.dataFromParent[0][0]?.id[page[6]]}`}>
                            <img class="max-h-full max-w-full mx-auto rounded-lg cursor-pointer" src={props.dataFromParent[0][0]?.imageFile[page[6]]} alt="" />
                        </Link>
                    </div>
                    <div className='bg-gray-500 bg-opacity-5 rounded-lg'>
                        <Link className='aspect-square flex items-center justify-center' to={`/prompt/${props.dataFromParent[0][0]?.id[page[7]]}`}>
                            <img class="max-h-full max-w-full mx-auto rounded-lg cursor-pointer" src={props.dataFromParent[0][0]?.imageFile[page[7]]} alt="" />
                        </Link>
                    </div>
                    <div className='bg-gray-500 bg-opacity-5 rounded-lg'>
                        <Link className='aspect-square flex items-center justify-center' to={`/prompt/${props.dataFromParent[0][0]?.id[page[8]]}`}>
                            <img class="max-h-full max-w-full mx-auto rounded-lg cursor-pointer" src={props.dataFromParent[0][0]?.imageFile[page[8]]} alt="" />
                        </Link>
                    </div>
                    <div className='bg-gray-500 bg-opacity-5 rounded-lg'>
                        <Link className='aspect-square flex items-center justify-center' to={`/prompt/${props.dataFromParent[0][0]?.id[page[9]]}`}>
                            <img class="max-h-full max-w-full mx-auto rounded-lg cursor-pointer" src={props.dataFromParent[0][0]?.imageFile[page[9]]} alt="" />
                        </Link>
                    </div>
                    <div className='bg-gray-500 bg-opacity-5 rounded-lg'>
                        <Link className='aspect-square flex items-center justify-center' to={`/prompt/${props.dataFromParent[0][0]?.id[page[10]]}`}>
                            <img class="max-h-full max-w-full mx-auto rounded-lg cursor-pointer" src={props.dataFromParent[0][0]?.imageFile[page[10]]} alt="" />
                        </Link>
                    </div>
                    <div className='bg-gray-500 bg-opacity-5 rounded-lg'>
                        <Link className='aspect-square flex items-center justify-center' to={`/prompt/${props.dataFromParent[0][0]?.id[page[11]]}`}>
                            <img class="max-h-full max-w-full mx-auto rounded-lg cursor-pointer" src={props.dataFromParent[0][0]?.imageFile[page[11]]} alt="" />
                        </Link>
                    </div>
                    <div className='bg-gray-500 bg-opacity-5 rounded-lg'>
                        <Link className='aspect-square flex items-center justify-center' to={`/prompt/${props.dataFromParent[0][0]?.id[page[12]]}`}>
                            <img class="max-h-full max-w-full mx-auto rounded-lg cursor-pointer" src={props.dataFromParent[0][0]?.imageFile[page[12]]} alt="" />
                        </Link>
                    </div>
                    <div className='bg-gray-500 bg-opacity-5 rounded-lg'>
                        <Link className='aspect-square flex items-center justify-center' to={`/prompt/${props.dataFromParent[0][0]?.id[page[13]]}`}>
                            <img class="max-h-full max-w-full mx-auto rounded-lg cursor-pointer" src={props.dataFromParent[0][0]?.imageFile[page[13]]} alt="" />
                        </Link>
                    </div>
                    <div className='bg-gray-500 bg-opacity-5 rounded-lg'>
                        <Link className='aspect-square flex items-center justify-center' to={`/prompt/${props.dataFromParent[0][0]?.id[page[14]]}`}>
                            <img class="max-h-full max-w-full mx-auto rounded-lg cursor-pointer" src={props.dataFromParent[0][0]?.imageFile[page[14]]} alt="" />
                        </Link>
                    </div>
                    <div className='bg-gray-500 bg-opacity-5 rounded-lg'>
                        <Link className='aspect-square flex items-center justify-center' to={`/prompt/${props.dataFromParent[0][0]?.id[page[15]]}`}>
                            <img class="max-h-full max-w-full mx-auto rounded-lg cursor-pointer" src={props.dataFromParent[0][0]?.imageFile[page[15]]} alt="" />
                        </Link>
                    </div>
                    <div className='bg-gray-500 bg-opacity-5 rounded-lg'>
                        <Link className='aspect-square flex items-center justify-center' to={`/prompt/${props.dataFromParent[0][0]?.id[page[16]]}`}>
                            <img class="max-h-full max-w-full mx-auto rounded-lg cursor-pointer" src={props.dataFromParent[0][0]?.imageFile[page[16]]} alt="" />
                        </Link>
                    </div>
                    <div className='bg-gray-500 bg-opacity-5 rounded-lg'>
                        <Link className='aspect-square flex items-center justify-center' to={`/prompt/${props.dataFromParent[0][0]?.id[page[17]]}`}>
                            <img class="max-h-full max-w-full mx-auto rounded-lg cursor-pointer" src={props.dataFromParent[0][0]?.imageFile[page[17]]} alt="" />
                        </Link>
                    </div>
                    <div className='bg-gray-500 bg-opacity-5 rounded-lg'>
                        <Link className='aspect-square flex items-center justify-center' to={`/prompt/${props.dataFromParent[0][0]?.id[page[18]]}`}>
                            <img class="max-h-full max-w-full mx-auto rounded-lg cursor-pointer" src={props.dataFromParent[0][0]?.imageFile[page[18]]} alt="" />
                        </Link>
                    </div>
                    <div className='bg-gray-500 bg-opacity-5 rounded-lg'>
                        <Link className='aspect-square flex items-center justify-center' to={`/prompt/${props.dataFromParent[0][0]?.id[page[19]]}`}>
                            <img class="max-h-full max-w-full mx-auto rounded-lg cursor-pointer" src={props.dataFromParent[0][0]?.imageFile[page[19]]} alt="" />
                        </Link>
                    </div>
                    <div className='bg-gray-500 bg-opacity-5 rounded-lg'>
                        <Link className='aspect-square flex items-center justify-center' to={`/prompt/${props.dataFromParent[0][0]?.id[page[20]]}`}>
                            <img class="max-h-full max-w-full mx-auto rounded-lg cursor-pointer" src={props.dataFromParent[0][0]?.imageFile[page[20]]} alt="" />
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