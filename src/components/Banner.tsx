import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

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
  1440: { items: 4 },
};

const carouselData = [
  {
    id: 1,
    title: "Kathmandu",
    img: Kathmandu,
    description:
      "Kathmandu, also spelled Kathmandu or kantipur, capital of Nepal. It lies in a hilly region near the confluence of the Bagmati at an elevation of 4,344 feet.",
  },
  {
    id: 2,
    title: "Pokhara",
    img: Pokhara,
    description:
      "Pokhara, also spelled Kathmandu or kantipur, capital of Nepal. It lies in a hilly region near the confluence of the Bagmati at an elevation of 4,344 feet.",
  },
  {
    id: 3,
    title: "Bandipur",
    img: Bandipur,
    description:
      "Bandipur, also spelled Kathmandu or kantipur, capital of Nepal. It lies in a hilly region near the confluence of the Bagmati at an elevation of 4,344 feet.",
  },
  {
    id: 4,
    title: "Chitwan",
    img: Chitwan,
    description:
      "Chitwan, also spelled Kathmandu or kantipur, capital of Nepal. It lies in a hilly region near the confluence of the Bagmati at an elevation of 4,344 feet.",
  },
  {
    id: 5,
    title: "Manang",
    img: Manang,
    description:
      "Manang, also spelled Kathmandu or kantipur, capital of Nepal. It lies in a hilly region near the confluence of the Bagmati at an elevation of 4,344 feet.",
  },
];


const OuterSlider = React.forwardRef((props, ref) => {

  const navigate = useNavigate();

  const handleClick = (link:string, state:any) => {
    window.scrollTo(0,0);
    navigate(link, state);
  }
  
  return (
    <div className="w-full">
      <AliceCarousel
        autoHeight
        infinite
        mouseTracking
        disableDotsControls
        disableButtonsControls
        ref={ref}
      >
        {carouselData.map((slide, index) => (
          <div
            key={index}
            className="w-full relative flex items-center bg-cover bg-center pl-4 md:pl-12 lg:pt-48 lg:pb-40 xl:pl-36 h-[50vh] lg:h-[70vh]"
            style={{ backgroundImage: `url(${slide.img})` }}
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

                <p className="font-['IBM_Plex_Sans'] text-white text-base max-w-[90%] md:max-w-[30%]">
                  {slide.description}
                </p>

                <button 
                  className="bg-[#19A948] text-white rounded-lg py-3 px-4 font-['IBM_Plex_Sans'] mt-8 cursor-pointer transition duration-300 ease-in-out transform hover:bg-[#137B33] hover:text-black"
                  onClick={() => handleClick(`destination/view/${slide.id}`, {state: slide})}
                >
                  View details
                </button>
              </div>
            </div>
          </div>
        ))}
      </AliceCarousel>
    </div>
  );
});

const InnerSlider = React.forwardRef((props, ref) => {
  return (
    <AliceCarousel
      mouseTracking
      responsive={responsive}
      disableDotsControls
      disableButtonsControls
      ref={ref}
      infinite
      animationType="fadeout"
      animationDuration={800}
    >
      {carouselData.map((slide, index) => (
        <div
          key={index}
          className="w-[210px] h-[290px] rounded-lg shadow-lg font-[Manrope] text-lg font-bold text-white relative hidden md:block"
          style={{
            backgroundImage: `url(${slide.img})`,
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
              borderRadius: '8px',
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
  );
});

export default function Banner() {
  const outerSliderRef = useRef(null);
  const innerSliderRef = useRef(null);

  const handlePrevClick = () => {
    if (outerSliderRef.current && innerSliderRef.current) {
      outerSliderRef.current.slidePrev();
      innerSliderRef.current.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (outerSliderRef.current && innerSliderRef.current) {
      outerSliderRef.current.slideNext();
      innerSliderRef.current.slideNext();
    }
  };

  return (
    <div className="w-full mt-16 relative">
      <OuterSlider ref={outerSliderRef} />
      <div className="w-[60vw] lg:w-[65vw] xl:w-[60vw] absolute bottom-[25%] right-0">
        <InnerSlider ref={innerSliderRef} />
        <div className="button-container z-50 absolute flex gap-4 -bottom-[330%] right-[10%] md:right-[30%] md:-bottom-[30%]">
          <button
            onClick={handlePrevClick}
            className="cursor-pointer border border-white text-white rounded-full p-4 flex items-center justify-center hover:text-black hover:bg-white transition duration-500 hover:shadow-md hover:shadow-slate-400"
          >
            <FiChevronLeft className="h-4" />
          </button>

          <button
            onClick={handleNextClick}
            className="cursor-pointer border border-white text-white rounded-full p-4 flex items-center justify-center hover:text-black hover:bg-white transition duration-500 hover:shadow-md hover:shadow-slate-400"
          >
            <FiChevronRight className="h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
