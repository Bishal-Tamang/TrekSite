import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import Kathmandu from "../assets/Picture/Banner/Kathmandu.png";
import Bandipur from "../assets/Picture/AliceCarousel/Bandipur.jpg";
import Pokhara from "../assets/Picture/AliceCarousel/Pokhara.jpg";
import Chitwan from "../assets/Picture/AliceCarousel/Chitwan.jpg";
import Manang from "../assets/Picture/AliceCarousel/Manang.jpg";
// import { Carousel } from 'react-responsive-carousel';

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const carouselData = [
  {
    id: 1,
    title: "Kathmandu",
    image: Kathmandu,
    content:
      "Kathmandu, also spelled Kathmandu or kantipur, capital of Nepal. It lies in a hillyregion near the confluence of the Bagmati at an elevation of 4,344 feet.",
  },
  {
    id: 2,
    title: "Pokhara",
    image: Pokhara,
    content:
      "Pokhara, also spelled Kathmandu or kantipur, capital of Nepal. It lies in a hillyregion near the confluence of the Bagmati at an elevation of 4,344 feet.",
  },
  {
    id: 3,
    title: "Bandipur",
    image: Bandipur,
    content:
      "Bandipur, also spelled Kathmandu or kantipur, capital of Nepal. It lies in a hillyregion near the confluence of the Bagmati at an elevation of 4,344 feet.",
  },
  {
    id: 4,
    title: "Chitwan",
    image: Chitwan,
    content:
      "Chitwan, also spelled Kathmandu or kantipur, capital of Nepal. It lies in a hillyregion near the confluence of the Bagmati at an elevation of 4,344 feet.",
  },
  {
    id: 5,
    title: "Manang",
    image: Manang,
    content:
      "Manang, also spelled Kathmandu or kantipur, capital of Nepal. It lies in a hillyregion near the confluence of the Bagmati at an elevation of 4,344 feet.",
  },
];

const items = [
  <div className="item" data-value="1">
    <img src={Kathmandu} alt="" />
  </div>,
  <div className="item" data-value="2">
    <img src={Pokhara} alt="" />
  </div>,
  <div className="item" data-value="3">
    <img src={Bandipur} alt="" />
  </div>,
  <div className="item" data-value="4">
    <img src={Chitwan} alt="" />
  </div>,
  <div className="item" data-value="5">
    <img src={Manang} alt="" />
  </div>,
  // carouselData.map(item => (
  //   <div
  //     key={item.id}
  //     className='item'
  //     data-value = {`${item.id}`}
  //   >
  //     <img src={item.image} alt="" />
  //   </div>
  // ))
];

const handleSlideChanged = (e) => {
  console.log(e, "eeeeee");
};

const PrevBtn = (id) => {
  return (
    <div className="absolute cursor-pointer border border-white text-white rounded-full p-4 flex items-center justify-center -bottom-[35%] right-[35%] hover:text-black hover:bg-white duration-500 hover:shadow-md hover:shadow-slate-400">
      <FiChevronLeft className="h-4" />
    </div>
  );
};

const NextBtn = () => {
  return (
    <div className="absolute cursor-pointer border border-white text-white rounded-full p-4 flex items-center justify-center -bottom-[35%] right-[30%] hover:text-black hover:bg-white duration-500 hover:shadow-md hover:shadow-slate-400">
      <FiChevronRight className="h-4" />
    </div>
  );
};

const Banner = () => {
  return (
    <div className="w-full mt-16 overflow-x-hidden">
      <div
        className="flex w-full justify-between items-center pl-36 pt-48 pb-40 relative overflow-x-hidden"
        style={{
          backgroundImage: `url(${Kathmandu})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        {/* Overlay with a semi-transparent background */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.3)",
          }}
        ></div>

        <div className="w-full bg-white z-50">
          <div className="flex items-center gap-2 w-full bg-red-600">
            <hr className="border-2 w-full" />
            <h1 className="font-[Manrope] text-white font-medium">
              TOP DESTINATION
            </h1>
          </div>
          <div>
            <h1 className="font-[Manrope] font-extrabold text-white mt-2">
              Kathmandu
            </h1>
            <p className="font-[Manrope] text-base mt-4">
              Kathmandu, also spelled Kathmandu or Kantipur, capital of Nepal.
              It lies in a hilly region near the confluence of the Baghmati at
              an elevation of 4,344 feet.
            </p>

            <button className="bg-[#19A948] rounded-lg px-4 py-3 text-base font-[Manrope] mt-8">
              View details
            </button>
          </div>
        </div>

        <div className="w-full
        ">
          <AliceCarousel
            // mouseTracking={!thumbAnimation}
            responsive={responsive}
            disableDotsControls
            // onSlideChanged={handleSlideChanged}
            renderNextButton={NextBtn}
            renderPrevButton={PrevBtn}
            infinite
            // activeIndex={mainIndex}
            animationType="fadeout"
            animationDuration={800}
            // onSlideChange={syncMainBeforeChange}
            // onSlideChanged={syncMainAfterChange}
            // touchTracking={!thumbAnimation}
          >
            {carouselData.map((slide, index) => (
              <div
                key={index}
                className="w-[210px] h-[290px] rounded-lg shadow-2xl shadow-black font-[Manrope] text-lg font-bold text-white relative -mx-12"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                {/* Overlay with a semi-transparent background */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.3)",
                  }}
                ></div>
                <h1 className="absolute bottom-0 mb-4 ml-4">{slide.title}</h1>
              </div>
            ))}
          </AliceCarousel>
        </div>
      </div>
    </div>
  );
};

export default Banner;
