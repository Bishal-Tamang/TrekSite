import AliceCarousel from "react-alice-carousel";
import Place1 from "../assets/Picture/Package/place1.png";
import Place2 from "../assets/Picture/Package/place2.png";
import Place3 from "../assets/Picture/Package/place3.png";

import { RiStarSFill } from "react-icons/ri";

import ArrowCarousel from "./carousels/ArrowCarousel";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const Package = () => {

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
    1440: { items: 4 },
  };

  const data = [
    {
      id: 1,
      url: Place1,
      location: "Kalinchowk",
      duration: "2 Days 1 Night",
      packageCategory: "ADVENTURE & NATURE",
      price: 8000,
      review: 50,
      starCount: 5,
    },
    {
      id: 2,
      url: Place2,
      location: "Pokhara Tour",
      duration: "2 Days 1 Night",
      packageCategory: "FAMILY TOUR",
      price: 10000,
      review: 50,
      starCount: 5,
    },
    {
      id: 3,
      url: Place3,
      location: "Everest Base Trek",
      duration: "11 Days",
      packageCategory: "ADVENTURE & NATURE",
      price: 20000,
      review: 50,
      starCount: 5,
    },
    {
      id: 4,
      url: Place2,
      location: "Kalinchowk",
      duration: "2 Days 1 Night",
      packageCategory: "ADVENTURE & NATURE",
      price: 12000,
      review: 50,
      starCount: 3,
    },
    {
      id: 5,
      url: Place3,
      location: "Pokhara",
      duration: "2 Days 1 Night",
      packageCategory: "FAMILY TOUR",
      price: 14000,
      review: 50,
      starCount: 3,
    },
    {
      id: 6,
      url: Place1,
      location: "Everest Base Trek",
      duration: "11 Days",
      packageCategory: "ADVENTURE & NATURE",
      price: 20000,
      review: 50,
      starCount: 4,
    },
  ];

  const NextBtn = () => {
    return (
      <div className="absolute z-50 cursor-pointer bg-white drop-shadow-lg border border-white text-green-400 rounded-full p-4 flex items-center justify-center hover:text-black hover:bg-white duration-500 hover:shadow-md hover:shadow-slate-400 top-[45%] -right-[3%] 2xl:-right-[2%]">
        <FiChevronRight className="h-6 w-6" />
      </div>
    );
  };

  const PrevBtn = () => {
    return (
      <div className="absolute z-50 cursor-pointer bg-white drop-shadow-lg border border-white text-green-400 rounded-full p-4 flex items-center justify-center hover:text-black hover:bg-white duration-500 hover:shadow-md hover:shadow-slate-400 top-[45%] -left-[4%] 2xl:-left-[2%]">
        <FiChevronLeft className="h-6 w-6" />
      </div>
    );
  };



  return (
    <div className="xl:mx-36 lg:mx-24 flex flex-col mx-2">
      <h1 className='font-["Manrope"] font-[700] text-3xl text-[#192638] mb-1 ml-4'>
        Packages in Demand
      </h1>

      <p className='font-["IBM_Plex_Sans"] font-[400] text-base md:text-xl text-[#596579] mb-8 ml-4'>
        These are the packages that has won heart of many trekkers.
      </p>

      <div className="custom-carousel">
        <ArrowCarousel data={data} />
        
      </div>
    </div>
  );
};

export default Package;
