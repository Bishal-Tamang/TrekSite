import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import Kathmandu from "../assets/Picture/Banner/Kathmandu.png";
import Bandipur from "../assets/Picture/AliceCarousel/Bandipur.jpg";
import Pokhara from "../assets/Picture/AliceCarousel/Pokhara.jpg";
import Chitwan from "../assets/Picture/AliceCarousel/Chitwan.jpg";
import Manang from "../assets/Picture/AliceCarousel/Manang.jpg";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
  1280: { items: 4 },
};

const carouselData = [
  {
    id: 1,
    title: "Kathmandu",
    image: Kathmandu,
    content:
      "Kathmandu, also spelled Kathmandu or kantipur, capital of Nepal. It lies in a hilly region near the confluence of the Bagmati at an elevation of 4,344 feet.",
  },
  {
    id: 2,
    title: "Pokhara",
    image: Pokhara,
    content:
      "Pokhara, also spelled Kathmandu or kantipur, capital of Nepal. It lies in a hilly region near the confluence of the Bagmati at an elevation of 4,344 feet.",
  },
  {
    id: 3,
    title: "Bandipur",
    image: Bandipur,
    content:
      "Bandipur, also spelled Kathmandu or kantipur, capital of Nepal. It lies in a hilly region near the confluence of the Bagmati at an elevation of 4,344 feet.",
  },
  {
    id: 4,
    title: "Chitwan",
    image: Chitwan,
    content:
      "Chitwan, also spelled Kathmandu or kantipur, capital of Nepal. It lies in a hilly region near the confluence of the Bagmati at an elevation of 4,344 feet.",
  },
  {
    id: 5,
    title: "Manang",
    image: Manang,
    content:
      "Manang, also spelled Kathmandu or kantipur, capital of Nepal. It lies in a hilly region near the confluence of the Bagmati at an elevation of 4,344 feet.",
  },
];

const Banner = () => {
  const [ParentCarousel, setToggleCarousel] = useState<number | null>(null);
  const renderSlideInfo = (e) => {
    console.log(e, "errr");
    return <div></div>;
  };

  const PrevBtn = (position: number) => {
    return (
      <div
        className={`absolute z-50 cursor-pointer border border-white text-white rounded-full p-4 flex items-center justify-center ${
          position === 1
            ? "bottom-[20%] right-[35%]"
            : "-bottom-[10%] right-[58%] opacity-100"
        } hover:text-black hover:bg-white duration-500 hover:shadow-md hover:shadow-slate-400`}
      >
        <FiChevronLeft className="h-4" />
      </div>
    );
  };

  const NextBtn = () => {
    return (
      <div className="absolute z-50 cursor-pointer border border-white text-white rounded-full p-4 flex items-center justify-center bottom-[20%] right-[28%] 2xl:right-[31%] hover:text-black hover:bg-white duration-500 hover:shadow-md hover:shadow-slate-400">
        <FiChevronRight className="h-4" />
      </div>
    );
  };

  const InnerPrevBtn = () => {
    return (
      <div className="absolute z-50 cursor-pointer border border-white text-white rounded-full p-4 flex items-center justify-center -bottom-[8%] right-[58%]  hover:text-black hover:bg-white duration-500 hover:shadow-md hover:shadow-slate-400 opacity-0">
        <FiChevronLeft className="h-4" />
      </div>
    );
  };

  const InnerNextBtn = () => {
    return (
      <div className="absolute z-50 cursor-pointer border border-white text-white rounded-full p-4 flex items-center justify-center -bottom-[8%] right-[51%]  hover:text-black hover:bg-white duration-500 hover:shadow-md hover:shadow-slate-400 opacity-0">
        <FiChevronRight className="h-4" />
      </div>
    );
  };

  return (
    <div className="w-full mt-16 relative">
      <AliceCarousel
        infinite
        mouseTracking
        disableDotsControls
        renderNextButton={NextBtn}
        renderPrevButton={() => PrevBtn(1)}
        renderSlideInfo={renderSlideInfo}
        // items={items}
      >
        {carouselData.map((slide, index) => (
          <div
            key={index}
            className="w-full relative flex items-center bg-cover bg-center pt-48 pb-40 pl-36 h-[70vh]"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            {/* Overlay with a semi-transparent background */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              }}
            ></div>
            <div className="max-w-7xl w-full z-50">
              <div className="top-info-600 w-full">
                <h1 className="relative pl-8 lg:pl-12 font-['IBM_Plex_Sans'] font-medium text-sm lg:text-base text-white">
                  <span className="absolute left-0 lg:w-9 w-6 h-[2px] bg-white top-1/2 transform -translate-y-1/2"></span>
                  TOP DESTINATION
                </h1>
              </div>

              <div className="main-content mt-1">
                <h1 className="relative font-[Manrope] text-white font-extrabold text-4xl mb-4">
                  {slide.title}
                </h1>

                <p className="font-['IBM_Plex_Sans'] text-white text-base max-w-[30%]">
                  {slide.content}
                </p>

                <button className="bg-[#19A948] text-white rounded-lg py-3 px-4 font-['IBM_Plex_Sans'] mt-8 cursor-pointer">
                  View details
                </button>
              </div>
            </div>
          </div>
        ))}
      </AliceCarousel>

      <div className="w-[60vw] absolute bottom-[25%] right-0">
        <AliceCarousel
          mouseTracking
          responsive={responsive}
          disableDotsControls
          // onSlideChanged={handleSlideChanged}
          renderNextButton={InnerNextBtn}
          renderPrevButton={InnerPrevBtn}
          renderSlideInfo={renderSlideInfo}
          onSlideChange={(e) => {
            console.log(e, "eeee"),
              console.log(
                carouselData[
                  e.item === 0 ? carouselData.length - 1 : e.item - 1
                ],
                "itemm"
              );
          }}
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
              className="w-[210px] h-[290px] rounded-lg shadow-2xl shadow-black font-[Manrope] text-lg font-bold text-white relative "
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
  );
};

export default Banner;
