import ResponsiveFilter from "./ResponsiveFilter";

import first from "../assets/Picture/Destination/Nested/FilterPage/first.png";
import second from "../assets/Picture/Destination/Nested/FilterPage/second.png";
import third from "../assets/Picture/Destination/Nested/FilterPage/third.png";
import fourth from "../assets/Picture/Destination/Nested/FilterPage/fourth.png";
import fifth from "../assets/Picture/Destination/Nested/FilterPage/fifth.png";

import { BsFillStarFill } from "react-icons/bs";
import { RxCounterClockwiseClock } from "react-icons/rx";
import { MdRestartAlt } from "react-icons/md";

import {useNavigate} from 'react-router-dom';



const FilterComponent = () => {

  
  const navigate = useNavigate();
  
  const data = [
    {
      id: 1,
      img: first,
      title: "Kathmandu tour",
      duration: "11 Days 10 Nights",
      starCount: 5,
      review: 50,
      description:
        "This is Nepal's only tower bungee, high ground bungee and swing, offering various options of bungee jumping Located just 20 minutes away...",
      price: 20000,
    },
    {
      id: 2,
      img: second,
      title: "Kathmandu tour",
      duration: "11 Days 10 Nights",
      starCount: 5,
      review: 50,
      description:
        "This is Nepal's only tower bungee, high ground bungee and swing, offering various options of bungee jumping Located just 20 minutes away...",
      price: 20000,
    },
    {
      id: 3,
      img: third,
      title: "Kathmandu tour",
      duration: "11 Days 10 Nights",
      starCount: 5,
      review: 50,
      description:
        "This is Nepal's only tower bungee, high ground bungee and swing, offering various options of bungee jumping Located just 20 minutes away...",
      price: 20000,
    },
    {
      id: 4,
      img: fourth,
      title: "Kathmandu tour",
      duration: "11 Days 10 Nights",
      starCount: 5,
      review: 50,
      description:
        "This is Nepal's only tower bungee, high ground bungee and swing, offering various options of bungee jumping Located just 20 minutes away...",
      price: 20000,
    },
    {
      id: 5,
      img: fifth,
      title: "Kathmandu tour",
      duration: "11 Days 10 Nights",
      starCount: 5,
      review: 50,
      description:
        "This is Nepal's only tower bungee, high ground bungee and swing, offering various options of bungee jumping Located just 20 minutes away...",
      price: 20000,
    },
  ];

  const handleClick = (link) => {
    window.scrollTo(0,0);
    navigate(link)
  }

  return (
    <div className="flex justify-between flex-col lg:flex-row gap-12">
      <div className="left--section py-4 w-[30%]">
        <ResponsiveFilter />
      </div>

      <div className="right--section flex flex-col justify-between w-full gap-6 mt-6 lg:mt-0">
       {data.map(item => (
         <div 
         key={item.id}
         className="flex md:justify-between gap-6 2xl:gap-2 md:h-60 drop-shadow-lg flex-col md:flex-row rounded-xl outline-none">
         <div
           className="nested-left-section h-60 md:h-full md:w-[60%] 2xl:w-[20%] rounded-md"
           style={{ background: `url(${item.img})`, backgroundSize: "cover" }}
         >
         </div>
 
         <div className="nested-right-section my-3 flex flex-col md:flex-row md:items-center md:justify-around">
 
           <div className="nested-right-left-section md:w-[65%]">
             <h1 className="font-['Manrope'] ml-3 md:ml-auto w-full font-[700] text-gray-800 text-lg 2xl:text-xl">{item.title}- {item.duration}</h1>
 
             <div className="review--star-container flex gap-3 md:items-center md:justify-normal mt-3 2xl:mb-6 md:mb-4 mx-4 lg:mx-auto">
               <div className="starsss flex gap-2">
                 <BsFillStarFill color={"#DACA3A"} className=""/>
                 <BsFillStarFill color={"#DACA3A"}/>
                 <BsFillStarFill color={"#DACA3A"}/>
                 <BsFillStarFill color={"#DACA3A"}/>
                 <BsFillStarFill color={"#DACA3A"}/>
               </div>
 
               <p className="font-['IBM_Plex_Sans'] font-[400] text-sm text-gray-600 ">({item.review} Reviews)</p>
             </div>
 
             <p className="font-['IBM_Plex_Sans'] font-[500] text-sm 2xl:text-base text-gray-600 hidden md:block ">
               {item.description}
             </p>
 
             <div className="nested-right-section-footer mt-4 flex flex-col lg:flex-row  lg:justify-between lg:items-center 2xl:justify-normal 2xl:gap-8 2xl:mr-12 mx-4 lg:mx-auto">
               <div className="flex gap-2 items-center md:gap-2 mb-2 lg:mb-0">
                 <RxCounterClockwiseClock />
                 <p>{item.duration}</p>
               </div>
 
               <div className="flex items-center gap-2">
                 <MdRestartAlt />
                 <p>Free cancellation</p>
               </div>
             </div>
           </div>
 
           <div className="nested-right-right-section mx-4 md:mx-auto h-full md:flex flex-col md:justify-center items-center lg:border-l border-gray-300 md:pl-8">
             <div className="flex md:block items-center gap-4 my-4">
             <h1 className="font-['Manrope'] font-[700] text-gray-800 text-lg 2xl:mb-3 md:mb-2">Rs. {item.price.toLocaleString()}</h1>
             <p className="font-['IBM_Plex_Sans'] font-[400] text-gray-600 text-base 2xl:mb-6 md:mb-3">Per person</p>
             </div>
             <div className="flex md:block items-center justify-center mb-4 lg:mb-0">
             <button
              onClick={() => handleClick('packageDetails')}
              className="py-3 px-4 bg-[#19A948] rounded-md font-['IBM_Plex_Sans'] font-[400] text-base text-white cursor-pointer hover:bg-[#128B2B]"
              >
                View details
            </button>
           </div>
             </div>
         </div>
         </div>
       ))}
      </div>
    </div>
  );
};

export default FilterComponent;
