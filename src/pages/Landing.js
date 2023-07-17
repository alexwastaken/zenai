import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import background from '../img/asdddd.png';
import Ellipse from '../img/Ellipse.png';
import Rectangle1 from '../img/rectangle1.png';
import Rectangle2 from '../img/rectangle2.png';
import Rectangle3 from '../img/rectangle3.png';
import ImageBottom from '../img/ImageBottom.png'
import Button from '../img/button.png'
import BGFA from '../img/framz.png'
import ballmovegif from '../img/ballmovegif.png'
import ballmovegif2 from '../img/ballmovegif2.png'

export default function Home() {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ellipse = document.querySelector('#ellipse');

    gsap.to(ellipse, {
      rotation: 360,
      scrollTrigger: {
        start: 'top top',
        end: 'bottom bottom',
        scrub: true
      }
    });
  }, []);
  
  return (
    <div className="overflow-y-hidden bg-black font-sans">
      <section className="relative">
        <div
          className="h-screen bg-no-repeat bg-fixed bg-center bg-cover"
          style={{ backgroundImage: `url(${background})` }}
        />
        <img
              src={Ellipse}
              id="ellipse"
              className="absolute mx-auto top-4/5 inset-x-0"
              alt="Ellipse"
            />
        <div className="absolute inset-x-0 flex flex-col bottom-3/4 sm:bottom-2/3 items-center">
          <span className="text-right">
            <h1 className="text-white text-9xl sm:text-custom font-helvetica ">
              ZEN AI
            </h1>
            <p className="text-white leading-3 text-2xl font-bold mr-[10px]">
              Bookstore
            </p>
          </span>
        </div>
      </section>

      <div
          className="bg-cover bg-center"
          style={{ backgroundImage: `url(${BGFA})` }}
      >

      <section className="flex items-center justify-center h-screen relative">
        <div className='w-[400px] sm:w-[400px] md:w-[600px] lg:w-[800px] xl:w-[1200px]'>
          <div className="flex flex-col items-center xl:flex-row lg:justify-center">
            <div className="flex relative font-bold">
              <img src={Rectangle3} className='w-full transform rotate-90 sm:rotate-0' alt="Line3" />

              <h1 className='hidden md:block absolute md:top-[90px] lg:top-[100px] text-6xl left-1/2 transform -translate-x-1/2 w-8/12 text-gray-200 tracking-wide'>AI Bookstore</h1>
              <h1 className='md:hidden block absolute text-6xl w-6/12 transform translate-x-1/2 text-gray-200'>AI Books</h1>


              <p className='hidden md:block absolute md:top-[200px] lg:top-[210px] left-1/2 transform -translate-x-1/2 w-8/12 tracking-wide text-gray-200'>Every Book is created with Artificial Intelligence. You can post your own books and sell them as well. With the power of AI we are bringing a new form of digital books to the market. Every Book is created with Artificial Intelligence. With the power of AI we are bringing a new form of digital books to the market</p>
              <p className='md:hidden block absolute top-1/2 w-6/12 transform translate-x-1/2 text-gray-200'>Every Book is created with Artificial Intelligence. With the power of AI we are bringing a new form of digital books to the market.</p>
            </div>
            <div className="flex flex-wrap w-[520px]">
              <img src={Rectangle1} className='hidden xl:block ml-[25px]' alt="Line3" />
              <img src={Rectangle2} className='hidden xl:block ml-[36px] mt-[-100px] mb-[13px]' alt="Line3" />
            </div>
          </div>
        </div>
      </section>


      <section className="flex justify-center h-screen relative">
      <img src={ballmovegif} className='block absolute w-[1000px] top-0 left-0 z-0 max-w-none'/>
      <img src={ballmovegif2} className='hidden xl:block absolute w-[1000px] top-0 right-0 transform rotate-180' />
      <div className='flex justify-center w-[400px] sm:w-[400px] md:w-[600px] lg:w-[800px] xl:w-[1200px]'>
        <div className='flex flex-col xl:ml-[400px] mt-[175px]'>
          <h1 className='w-[300px] text-4xl font-bold text-gray-200 z-10'>Books available in all genres:</h1>
          <p className='w-[350px] mt-[20px] font-semibold tracking-wide text-gray-200 z-10'>Every Book is created with Artificial Intelligence. You can post your own books and sell them as well. With the power of AI we are bringing a new form of digital books to the market.</p>
        </div>
      </div>
      </section>


      <section className="flex justify-center items-center h-screen">
        <div className='flex justify-center w-[400px] sm:w-[400px] md:w-[600px] lg:w-[800px] xl:w-[1200px]'>
          <div className='flex flex-col items-center md:flex-row gap-y-24 gap-x-32 lg:gap-x-44 xl:gap-x-80'>
            <img src={ImageBottom} className='w-8/12 md:w-6/12 xl:w-4/12 xl:ml-[70px]' alt="ImageBottom" />
            <div className='flex flex-col gap-y-20 items-center'>
              <div>
                <h1 className='text-white text-5xl sm:text-5xl lg:text-6xl xl:text-7xl'>Jump In</h1>
                <p className='text-white text-xl sm:text-xl md:text-lg lg:text-2xl xl:text-3xl text-center mt-[15px]'>It's Free!</p>
              </div>
              <Link to="/home">
                <img src={Button} className='w-[71px] cursor-pointer' alt="ImageBottom" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
    
  );
}