import { useState } from "react";

import Carousel from '../components/carousels/Carousel'

import { ImSearch } from "react-icons/im";

import Model from '../assets/Picture/Hero--Carousel/model.png'

import First from "../assets/Picture/Hero/hero_first.png";
import Second from "../assets/Picture/Hero/hero_second.png";
import Third from "../assets/Picture/Hero/hero_third.png";

const Hero = () => {

  const [showBtn, setShowBtn] = useState(false);

  const data = [
    {
        "id": 1,
        "url": Model,
        "location": "Boudha Stupa, Kathmandu"
    },
    {
        "id": 2,
        "url": Model,
        "location": "Boudha Stupa 2, Kathmandu"
    },
    {
        "id": 3,
        "url": Model,
        "location": "Boudha Stupa 3, Kathmandu"
    },
    {
        "id": 4,
        "url": Model,
        "location": "Boudha Stupa 4, Kathmandu"
    }
]

  const toggleBtn = () => {
    setShowBtn(!showBtn);
    console.log(showBtn)
  }

  return (
    <div className="xl:mx-24 mx-4 md:mx-8 lg:mx-16 relative mb-24">
      <Carousel data={data} />

      <div className="flex py-1 md:py-4 md:pl-8 pl-2 md:pr-4 pr-1 bg-white items-center justify-end md:justify-center lg:justify-between lg:gap-12 rounded-[20px] drop-shadow-xl absolute 2xl:left-[30%] xl:left-[20%] md:left-[30%] lg:left-[10%] left-[12%] md:bottom-[-7%] bottom-[-5%]">
        <div className="hidden lg:block">
          {" "}
          {/* Individual Components*/}
          <div className="flex gap-1 items-center justify-center">
            {/* Icons */}
            <img src={First} alt="" className="w-4" />
            <p className='font-["IBM_Plex_Sans"] font-[500] leading-[24px] text-base'>
              Where
            </p>
          </div>
          <div>
            <p className='font-["IBM_Plex_Sans"] font-[400] leading-[24px] text-[15px] text-[#596579]'>
              Search destination
            </p>
          </div>
        </div>

        <div className="hidden lg:block relative pl-5">
          
          {/* Individual Components*/}
          <div className="flex gap-2 items-center before:absolute before:inset-0 before:top-[25%] before:w-[1px] before:h-[32px] before:bg-[#D0D7E2] before:content">
            {/* Icons */}
            <img src={Second} alt="" className="h-[14px] w-[11px] " />
            <p className='font-["IBM_Plex_Sans"] font-[500] leading-[24px] text-[14px]'>
              Activity
            </p>
          </div>
          <div>
            <p className='font-["IBM_Plex_Sans"] font-[400] text-[15px] leading-[24px] text-[#596579]'>
              Search activity
            </p>
          </div>
        </div>

        <div className="hidden lg:block relative pl-5">
          {" "}
  
         
        </div>
        <div className="hidden lg:block">
          <button
            type="button"
            className="h-[48px] w-[93px] bg-[#19A948] rounded-[6px] text-white"
          >
            Search
          </button>
        </div>
        <div className="lg:hidden flex justify-center w-full h-full items-center">
            <input type="text" className="w-full h-full rounded-lg focus:py-3 focus:px-2 px-1 outline-none border-none" placeholder="Search..."/>
          <button
            type="button"
            className="py-4 px-6 bg-[#19A948] rounded-full text-right text-white transition-all ease-in-out duration-5000"
            onClick={toggleBtn}
          >
            {<ImSearch />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
