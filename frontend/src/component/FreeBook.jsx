import React from 'react'
import list from '../../public/list.json'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from './Card';

function FreeBook() {
   const filterData= list.filter((data)=>data.category==="free")
   
   var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 z-50 '>
        <h1 className='text-semibold text-2xl'>Free Offered Cource</h1>
        <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, rerum.</p>
        <div className="slider-container mt-4">
      <Slider {...settings}>
       {filterData.map((item)=>(
        <Card item={item} key={item.id} />
       ))}
      </Slider>
    </div>
    </div>
    
  )
}

export default FreeBook