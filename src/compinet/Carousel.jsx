import React from 'react'
import Category from '../compinet/Category'
import {getData} from '../context/DataContext'
import { useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft,faArrowRight } from '@fortawesome/free-solid-svg-icons';
function Carousel() {
     const {data,fetchAllProducts}=getData();

            useEffect(()=>{
              fetchAllProducts();
            },[])

          
            const PrevArrow = ({ onClick }) => (
    <div
      onClick={onClick}
      style={{
        zIndex: 3,
        left: "50px",
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
      }}
    >
      <FontAwesomeIcon
        icon={faArrowLeft}
        className="text-white bg-indigo-400 p-2 rounded-full text-xl cursor-pointer"
      />
    </div>
            );

         const NextArrow = ({ onClick }) => (
    <div
      onClick={onClick}
      style={{
        zIndex: 3,
        right: "50px",
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
      }}
    >
      <FontAwesomeIcon
        icon={faArrowRight}
        className="text-white bg-indigo-400 p-2 rounded-full text-xl cursor-pointer"
      />
    </div>
  );

            // slider setting

            const settings={
           dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: false,
    prevArrow: <PrevArrow />,
    nextArrow:<NextArrow/>
  
            }
    return (
           
        <>

<Slider {...settings}>
        {data?.slice(0,7)?.map((item,index)=>( 
          <div 
          key={index} className='bg-black'>
            <div className="flex flex-col md:flex-row items-center justify-center px-4  gap-10 h[600px]" >
                <div className="text-cyan-700 md: space-x-6 space-y-3 max-w-xl">
                    <h3 className='text-yellow-500 text-sm font-sm font-semibold'>
                        Powering your Wrold  with the Best in Electioncs
                    </h3>

                    <h1 className='text-xl md:text-4xl font-bold uppercase line-clamp-2'>
                        {item.title}
                    </h1>
                    <p className='text-gry-400 line-clamp-3 '>
                      {item.description}</p>
                    <button className='bg-gradient-to-r from-purple-500 to-indigo-400 text-white px-4 py-2 rounded-lg'>Shop Now</button>
                </div>

                {/* Right Saction */}


                <div className="relative w-[300px] h-[300px] md:w-[400px]  md:h-[400px] flex items-center justify-center">
                    <div className="absolute w-full h-full bg-slate-100 rounded-full shadow-lg shadow-red-300 animate-spin"></div>
                    <img className='w-[250px] h-[250px] object-contain rounded-full z-10' src={item.image} alt={item.title} ></img>
                </div>
            </div>
           
        </div>

    ))}
    </Slider>
     
        <Category/>
        
        </>

    )
}

export default Carousel;
