import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from 'react-slick';


import React, { useState } from 'react'

import {FaQuoteRight} from 'react-icons/fa'
import data from "../data";

const SllickCarousel = () => {

   const [list, setList] = useState(data)

   console.log(list)
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        
      };
  return (
    <Slider {...settings}>
     {list.map( item => {
        const {id, image, quote, title, name} = item;

     return (
            <article key={id} className=" flex flex-col flex-1 justify-center items-center text-center space-y-2">
                <img src={image} alt="" className="mx-auto  h-[120px] w-[120px] object-cover border-2 border-blue-300 rounded-full" />
                <h3 className=" text-lg font-medium leading-6">{name}</h3>
                <h2 className=" text-lg tracking-wider text-gray-400">{title}</h2>
                <p>{quote}</p>
            </article>
            )
     })}
  </Slider>
  )
}

export default SllickCarousel