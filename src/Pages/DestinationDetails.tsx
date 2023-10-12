import {useNavigate, useLocation } from "react-router-dom";

import '../assets/Styles/destinationCarousel.css'

import PlanTrip from '../components/PlanTrip'
import FAQ from '../Common/FAQ'
import ArrowCarousel from "../components/carousels/ArrowCarousel";
import Testimonials from "../components/Testimonials";
import DestinationCarousel from '../components/carousels/DestinationCarousel'
import DestinationThingsCarousel from "../components/carousels/DestinationThingsCarousel";
import DestinationAttractionCarousel from "../components/carousels/DestinationAttractionCarousel";
import FilterPage from "./FilterPage";

import {AiOutlineArrowRight} from 'react-icons/ai'

import adventure from "../assets/Picture/Destination/Nested/Adventure.png";

import outdoor from "../assets/Picture/Destination/Nested/Outdoor.png";
import cultural from "../assets/Picture/Destination/Nested/Cultural.png";
import walking from "../assets/Picture/Destination/Nested//Walking.png";
import icon from '../assets/Picture/Destination/Nested/icon.png'
import Pokhara from '../assets/Picture/ThingsSection/Pokhara.png'
import Kathmandu from '../assets/Picture/ThingsSection/Kathmandu.png'
import Chitwan from '../assets/Picture/ThingsSection/Chitwan.png'
import Kritipur from '../assets/Picture/Destination/Nested/Kritipur.png'
import Boudhanath from '../assets/Picture/Destination/Nested/Boudhanath.png'
import Patan from '../assets/Picture/Destination/Nested/Patan.png'
import Bhaktapur from '../assets/Picture/Destination/Nested/Bhaktapur.png'

import first from '../assets/Picture/Destination/Nested/first.jpg'
import second from '../assets/Picture/Destination/Nested/second.jpg'
import third from '../assets/Picture/Destination/Nested/third.jpg'
import fourth from '../assets/Picture/Destination/Nested/fourth.jfif'
import fifth from '../assets/Picture/Destination/Nested/fifth.jfif'

import BreadCrumbs from "../components/BreadCrumbs";




const DestinationDetails = () => {
  const {state} = useLocation();

  const navigate = useNavigate();

  const Statedata = [
    {
      id: state?.id,
      url: state?.url,
      title: state?.title,
      img: state?.img,
      description: state?.description,
    },
  ];

  const SmolSliderData = [
    {
      id: 1,
      title: "Adventure & Nature",
      img: adventure,
    },
    {
      id: 2,
      title: "Outdoor activities",
      img: outdoor,
    },
    {
      id: 3,
      title: "Cultural tour",
      img: cultural,
    },
    {
      id: 4,
      title: "Walking tour",
      img: walking,
    },
    {
      id: 5,
      title: "Cultural tour",
      img: cultural,
    },
    {
      id: 6,
      title: "Adventure & Nature",
      img: adventure,
    },
    {
      id: 7,
      title: "Outdoor activities",
      img: outdoor,
    },
  ];

  const BigSliderData = [
    {
      id: 1,
      title:"Bhaktapur Durbar Square",
      img: first,
      labels: ["UNESCO World Heritage"],
      link: ""
    },
    {
      id: 2,
      title:"Syambhunath Stupa",
      img: second,
      labels: ["UNESCO World Heritage", "Cultural Site"],
      link: ""
    },
    {
      id: 3,
      title:"Kathmandu Durbar Square",
      img: third,
      labels: ["UNESCO World Heritage"],
      link: ""
    },
    {
      id: 4,
      title:"Thamel Bazar",
      img: fourth,
      labels: ["Bazar"],
      link: ""
    },
    {
      id: 5,
      title:"Patan",
      img: fifth,
      labels: ["UNESCO World Heritage"],
      link: ""
    },

  ]

  const ArrowCarouseldata = [
    {
      "id": 1,
      "url": Pokhara,
      "location": "Pokhara",
      "duration" : "2 Days 1 Night",
      "packageCategory": "FAMILY TOUR",
      "price": 8000,
      "review": 50
    },
    {
      "id": 2,
      "url": Kathmandu,
      "location": "Kathmandu tour",
      "duration" : "11 Days 10 Night",
      "packageCategory": "FAMILY TOUR",
      "price": 30000,
      "review": 50
    },
    {
      "id": 3,
      "url": Chitwan,
      "location": "Chitwan tour",
      "duration" : "5 Days 4 Night",
      "packageCategory": "FAMILY TOUR",
      "price": 20000,
      "review": 50
    },
    {
      "id": 4,
      "url": Kathmandu,
      "location": "Kathmandu tour",
      "duration" : "11 Days 10 Night",
      "packageCategory": "FAMILY TOUR",
      "price": 30000,
      "review": 50
    },
    {
      "id": 5,
      "url": Pokhara,
      "location": "Pokhara",
      "duration" : "2 Days 1 Night",
      "packageCategory": "FAMILY TOUR",
      "price": 8000,
      "review": 50
    },
    {
      "id": 6,
      "url": Chitwan,
      "location": "Chitwan tour",
      "duration" : "5 Days 4 Night",
      "packageCategory": "FAMILY TOUR",
      "price": 20000,
      "review": 50
    },
  ]

  const TopCarouselData = [
    {
      id: 1,
      title: `${state?.title}`,
      subtitle: "Kritipur",
      img: Kritipur,
    },
    {
      id: 2,
      title: `${state?.title}`,
      subtitle: "Boudhanath",
      img: Boudhanath,
    },
    {
      id: 3,
      title: `${state?.title}`,
      subtitle: "Patan Durbar Square",
      img: Patan,
    },
    {
      id: 4,
      title: `${state?.title}`,
      subtitle: "Bhaktapur Durbar Square",
      img: Bhaktapur,
    },
  ]

  const handleClick = (link) => {
    window.scrollTo(0,0);

    navigate(link);
  }

  const location = useLocation();

  console.log(location, "located");

  return (
    <div className="DestinationDetails mb-24 ">
      <div className="xl:mx-24 mx-4 md:mx-8 lg:mx-16">
      <DestinationCarousel TopCarouselData={TopCarouselData} />
      </div>
      <div className=" xl:mx-24 mx-4 md:mx-8 lg:mx-16 my-8 md:text-center">
        <p className='lg:w-[55%] md:w-[70%] pr-4 md:pr-0 md:mx-auto font-["Manrope"] font-[400] text-lg text-gray-700 mb-4'>
          {state?.description}
        </p>
      </div>

      <div className="things--slider mt-24 xl:mx-24 mx-4 md:mx-8 lg:mx-16 mb-28">
        <h1 className='font-["Manrope"] font-[700] font-gray-800 text-2xl mb-8'>
          Things to Do in {state?.title}
        </h1>
        <DestinationThingsCarousel SmolSliderData={SmolSliderData}/>
      </div>

      <div className="Things---to---do---section---copied mb-28 xl:mx-24 mx-4 md:mx-8 lg:mx-16">
        <h1 className='font-["Manrope"] font-[700] text-3xl text-[#192638] mb-1'>
          Family Tour
        </h1>

       
       <div className="w-full mt-2 mb-8">
       <div className="flex justify-between items-center">
            <p className="font-['IBM_Plex_Sans'] font-[400] text-base text-gray-600">Book these experiences for a close-up look at {state?.title}</p>
          <button
            type="button"
            className='hidden border-[#12A347] border-2 py-2 px-[14px] font-["IBM_Plex_Sans"] font-[400] text-["16px"] text-[#12A347] lg:flex gap-2 items-center hover:text-white hover:bg-[#12A347]'
            onClick={() => handleClick("filterPage")}
          >
            View all <AiOutlineArrowRight size={20} />
          </button>
        </div>

       </div>
``

        <div>
          <ArrowCarousel data={ArrowCarouseldata} />

          <div className="flex w-full items-center justify-center mt-6">
            <button
              type="button"
              className='flex gap-2 border-[#12A347] border-2 py-2 px-[14px] font-["IBM_Plex_Sans"] font-[400] text-["16px"] text-[#12A347] lg:hidden hover:text-white hover:bg-[#12A347]'
              onClick={() => handleClick("filterPage")}
            >
              View all <AiOutlineArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>


        <div className="text-center mb-28 xl:mx-24 mx-4 md:mx-8 lg:mx-16">
            <h1 className="font-['Manrope'] font-[700] text-2xl text-gray-800 mb-8">Top Attraction in {state?.title}</h1>
            <DestinationAttractionCarousel BigSliderData={BigSliderData}/>
        </div>

        <PlanTrip />

        <div className="Things---to---do---section---copied mb-28 mt-28 xl:mx-24 mx-4 md:mx-8 lg:mx-16">
        <h1 className='font-["Manrope"] font-[700] text-3xl text-[#192638] mb-1'>
          Cultural Tour
        </h1>

       
       <div className="w-full mt-2 mb-8">
       <div className="flex justify-between items-center">
            <p className="font-['IBM_Plex_Sans'] font-[400] text-base text-gray-600">Book these experiences for a close-up look at {state?.title}</p>
          <button
            type="button"
            className='hidden border-[#12A347] border-2 py-2 px-[14px] font-["IBM_Plex_Sans"] font-[400] text-["16px"] text-[#12A347] lg:flex gap-2 items-center hover:text-white hover:bg-[#12A347]'
          >
            View all <AiOutlineArrowRight size={20} />
          </button>
        </div>

       </div>


        <div>
          <ArrowCarousel data={ArrowCarouseldata} />

          <div className="flex w-full items-center justify-center mt-6">
            <button
              type="button"
              className='flex gap-2 border-[#12A347] border-2 py-2 px-[14px] font-["IBM_Plex_Sans"] font-[400] text-["16px"] text-[#12A347] lg:hidden hover:text-white hover:bg-[#12A347]'
            >
              View all <AiOutlineArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>

    <div className="mt-26 ">
        <Testimonials />
    </div>

    <div className=" xl:mx-24 mx-4 md:mx-8 lg:mx-16">
        <button 
        className="mx-auto flex items-center gap-3 border text-[#12A347] font-['IBM_Plex_Sans'] border-[#12A347] rounded-lg py-2 px-3"
        onClick={() => navigate('/write-review')}
        >
            Write Review
            <img src={icon} alt="" />
        </button>
    </div>

    <div className="FAQ--section mt-24 xl:mx-24 mx-4 md:mx-8 lg:mx-16">
        {/* <h1 className="font-['Manrope'] font-[700] text-2xl text-gray-800 ">Frequently Asked Question about {state.title}</h1> */}

        <FAQ title={state?.title}/>
    </div>

    </div>
  );
};

export default DestinationDetails;
