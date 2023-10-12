import React,{useState} from 'react'

import {Navigation, Pagination, Scrollbar, A11y, Controller } from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

import Bandipur from '../assets/places/Bandipur.png';
import Chitwan from '../assets/places/Chitwan.png';
import Kathmandu from '../assets/places/Kathmandu.png';
import Manang from '../assets/places/Manang.png';
import Pokhara from '../assets/places/Pokhara.png';
import Janakpur from '../assets/places/Janakpur.png';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Banner = () => {


  return (
    
    <div className="banner--section bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${Kathmandu})`}}>
        <div className='bg-black w-full h-full opacity-25'>
        
        </div>
      <div className=' my-[105px] pl-[150px] pb-[170px] overflow-hidden relative min-h-[675px] pt-[200px] opacity-100'>
      <div className='content--section flex justify-between gap-[95px]'>
            {/* Content */}
        <div className='content---Section w-[24%]'>
          <p className='font-["IBM_Plex_Sans"] font-[500] leading-[28px] text-[14px] text-white pb-2'>TOP DESTINATION</p>
          <h1 className='font-["Manrope"] font-[800] leading-[60px] text-[48px] text-white pb-4'>Kathmandu</h1>
          <p className='font-["IBM_Plex_Sans"] font-[500] text-white text-[16px] pb-8'>Kathmandu, also spelled Kathmandu or Kantipur, capital of Nepal. It lies in a hilly region near the confluence of the Bagmati at an elevatoin of 4,344 feet.</p>
          <button type='button' className='px-4 py-2 bg-[#19A948] rounded-md text-white font-["IBM_Plex_Sans"]'>View details</button>
        </div>


        <div className='slider---Section flex'>
          {/* Slider */}
         
          <img src={Pokhara} alt=""/>
          <img src={Bandipur} alt="" />
          <img src={Chitwan} alt="" />
          <img src={Manang} alt="" />
          <img src={Janakpur} alt="" />
        </div>
      </div>
      </div>
    </div>

    
  )
}

export default Banner