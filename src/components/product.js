import React from 'react'

function product(props) {
    
  return (
    <section className='mx-auto max-w-5xl h-screen'>
            
        <div class="flex flex-col lg:flex-row lg:justify-between items-center sm:ml-64">
        <div class="mt-44 text-white w-96">
            <h2 className='text-4xl'>{props.dataFromParent.title}</h2>
            <p className='text-xl mt-10 break-words'>
            {props.dataFromParent.desciption}
            </p>
            <p className='text-sm mt-10'>{props.dataFromParent.userId}</p>
        </div>


                <div class="grid gap-4 max-w-md float-right mt-44">
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src={props.dataFromParent.imageFile} alt=""></img>
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
  )
}

export default product