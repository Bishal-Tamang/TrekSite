import { BsFillStarFill } from "react-icons/bs";
import { RiStarSFill } from "react-icons/ri";

import "../assets/Styles/packageDetail.css";

import img1 from "../assets/Picture/Destination/Nested/PackageDetails/grid-1.png";
import img2 from "../assets/Picture/Destination/Nested/PackageDetails/grid-2.png";
import img3 from "../assets/Picture/Destination/Nested/PackageDetails/grid-3.png";

import clockwise from "../assets/Picture/Destination/Nested/PackageDetails/ph-clockwise.png";
import phone from "../assets/Picture/Destination/Nested/PackageDetails/phone.png";
import refresh from "../assets/Picture/Destination/Nested/PackageDetails/restart.png";
import icon from "../assets/Picture/Destination/Nested/icon.png";

import Pokhara from "../assets/Picture/ThingsSection/Pokhara.png";
import Kathmandu from "../assets/Picture/ThingsSection/Kathmandu.png";
import Chitwan from "../assets/Picture/ThingsSection/Chitwan.png";

import ArrowCarousel from "../components/carousels/ArrowCarousel";

import Itinerary from "../components/Itinerary";

import EnquiryTab from "../components/EnquiryTab";

import Carousel from "react-multi-carousel";

import trademark from "../assets/Picture/Testimonials/quotationmark.png";

import { useNavigate } from "react-router-dom";

import { useState } from "react";

import { useInView } from "react-intersection-observer";

import {HiOutlinePencilSquare} from 'react-icons/hi2'

const Images = [
  {
    id: 1,
    image: img1,
  },
  {
    id: 2,
    image: img2,
  },
  {
    id: 3,
    image: img3,
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const data = [
  {
    id: 1,
    url: Pokhara,
    location: "Pokhara",
    duration: "2 Days 1 Night",
    packageCategory: "FAMILY TOUR",
    price: 8000,
    review: 50,
    starCount: 5,
  },
  {
    id: 2,
    url: Kathmandu,
    location: "Kathmandu tour",
    duration: "11 Days 10 Night",
    packageCategory: "FAMILY TOUR",
    price: 30000,
    review: 50,
    starCount: 3,
  },
  {
    id: 3,
    url: Chitwan,
    location: "Chitwan tour",
    duration: "5 Days 4 Night",
    packageCategory: "FAMILY TOUR",
    price: 20000,
    review: 50,
    starCount: 3,
  },
  {
    id: 4,
    url: Kathmandu,
    location: "Kathmandu tour",
    duration: "11 Days 10 Night",
    packageCategory: "FAMILY TOUR",
    price: 30000,
    review: 50,
    starCount: 3,
  },
  {
    id: 5,
    url: Pokhara,
    location: "Pokhara",
    duration: "2 Days 1 Night",
    packageCategory: "FAMILY TOUR",
    price: 8000,
    review: 50,
    starCount: 3,
  },
  {
    id: 6,
    url: Chitwan,
    location: "Chitwan tour",
    duration: "5 Days 4 Night",
    packageCategory: "FAMILY TOUR",
    price: 20000,
    review: 50,
    starCount: 3,
  },
];

const stickyNav = [
  {
    id: 1,
    title: "Overview",
    url: "#overview",
  },
  {
    id: 2,
    title: "Details",
    url: "#details",
  },
  {
    id: 3,
    title: "Itinerary",
    url: "#itinerary",
  },
  {
    id: 4,
    title: "Reviews",
    url: "#reviews",
  },
];

const ReviewTopData = [
  {
    id: 1,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis neque et sem consequat, tempor maximus justo posuere. ",
    name: "Ranjit Shrestha",
    location: "Pokhara tour",
    starCount: 3,
  },
  {
    id: 2,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis neque et sem consequat, tempor maximus justo posuere. ",
    name: "Shuvam Koirala",
    location: "Kathmandu tour",
    starCount: 4,
  },
  {
    id: 3,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis neque et sem consequat, tempor maximus justo posuere. ",
    name: "Bishal Tamang",
    location: "Chitwan tour",
    starCount: 5,
  },
  {
    id: 4,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis neque et sem consequat, tempor maximus justo posuere. ",
    name: "Nabeen Adhikari",
    location: "Kathmandu tour",
    starCount: 4,
  },
  {
    id: 5,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis neque et sem consequat, tempor maximus justo posuere. ",
    name: "Ram Bahadur",
    location: "Pokhara tour",
    starCount: 1,
  },
  {
    id: 6,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis neque et sem consequat, tempor maximus justo posuere. ",
    name: "Anjana Niraula",
    location: "Chitwan tour",
    starCount: 5,
  },
  {
    id: 7,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis neque et sem consequat, tempor maximus justo posuere. ",
    name: "Rojina Shrestha",
    location: "Pokhara tour",
    starCount: 4,
  },
  {
    id: 8,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis neque et sem consequat, tempor maximus justo posuere. ",
    name: "Elaine Lysistrate",
    location: "Kathmandu tour",
    starCount: 4,
  },
  {
    id: 9,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis neque et sem consequat, tempor maximus justo posuere. ",
    name: "Sushila Kamala",
    location: "Chitwan tour",
    starCount: 4,
  },
];

const ReviewBotData = [
  {
    id: 1,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis neque et sem consequat, tempor maximus justo posuere. ",
    name: "Rupa Niraj",
    location: "Chitwan tour",
    starCount: 5,
  },
  {
    id: 2,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis neque et sem consequat, tempor maximus justo posuere. ",
    name: "Ravi Kiran",
    location: "Pokhara tour",
    starCount: 3,
  },
  {
    id: 3,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis neque et sem consequat, tempor maximus justo posuere. ",
    name: "Manish Rajani",
    location: "Kathmandu tour",
    starCount: 5,
  },
  {
    id: 4,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis neque et sem consequat, tempor maximus justo posuere. ",
    name: "Anil Usha",
    location: "Kathmandu tour",
    starCount: 4,
  },
  {
    id: 5,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis neque et sem consequat, tempor maximus justo posuere. ",
    name: "Rishi Prashant",
    location: "Chitwan tour",
    starCount: 4,
  },
  {
    id: 6,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis neque et sem consequat, tempor maximus justo posuere. ",
    name: "Amit Sunita",
    location: "Chitwan tour",
    starCount: 5,
  },
  {
    id: 7,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis neque et sem consequat, tempor maximus justo posuere. ",
    name: "Shankar Rupa",
    location: "Pokhara tour",
    starCount: 4,
  },
  {
    id: 8,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis neque et sem consequat, tempor maximus justo posuere. ",
    name: "Krishna Pradeep",
    location: "Chitwan tour",
    starCount: 4,
  },
  {
    id: 9,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis neque et sem consequat, tempor maximus justo posuere. ",
    name: "Surya Kalpana",
    location: "Kathmandu tour",
    starCount: 4,
  },
];

const PackageDetails = () => {
  const [fix, setFix] = useState(false);

  function setFixedBar() {
    if (window.scrollY >= 700) {
      setFix(true);
    } else {
      setFix(false);
    }
  }

  window.addEventListener("scroll", setFixedBar);

  const [activeState, setActiveState] = useState(null);

  const handleClick = (index) => {
    setActiveState(index);
  };

  const renderTopSlides = () => {
    return ReviewTopData.map((item) => (
      <div
        key={item.id}
        className="carousel-slide mx-4 px-4 md:px-4 pt-8 pb-6 rounded-xl -z-20 bg-[#E6FAF0] cursor-pointer relative overflow-hidden"
      >
        <p className='frontal md:m-w-[89%] mb-6 font-["IBM_Plex_Sans"] font-[400] italic md:text-base text-xs text-[#374253] z-10'>
          {item.comment}
        </p>

        <img
          src={trademark}
          alt=""
          className="trademark absolute top-[7%] left-[5%] -z-10"
        />

        <div className="bottom--content md:flex flex-col items-start justify-between m-2 md:m-0">
          <div className="stars">
            <div className="flex">
              {Array.from({ length: item.starCount }).map((_, index) => (
                <RiStarSFill key={index} style={{ color: "#DACA3A" }} />
              ))}
            </div>
          </div>
          <div className="flex justify-between items-end w-full overflow:hidden">
            <h1 className='font-["Manrope"] font-[700] text-[#374253] md:text-sm lg:text-base text-xs pt-2'>
              {item.name}
            </h1>
            <div className="location">
              <p className='font-["IBM_Plex_Sans] font-[500] md:text-sm lg:text-base text-xs italic text-[#374253]'>
                {item.location}
              </p>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  const renderBotSlides = () => {
    return ReviewBotData.map((item) => (
      <div
        key={item.id}
        className="carousel-slide mx-4 px-4 md:px-4 pt-8 pb-6 rounded-xl -z-20 bg-[#E6FAF0] cursor-pointer relative overflow-hidden"
      >
        <p className='frontal md:m-w-[89%] mb-6 font-["IBM_Plex_Sans"] font-[400] italic md:text-base text-xs text-[#374253] z-10'>
          {item.comment}
        </p>

        <img
          src={trademark}
          alt=""
          className="trademark absolute top-[7%] left-[5%] -z-10"
        />

        <div className="bottom--content md:flex flex-col items-start justify-between m-2 md:m-0">
          <div className="stars">
            <div className="flex">
              {Array.from({ length: item.starCount }).map((_, index) => (
                <RiStarSFill key={index} style={{ color: "#DACA3A" }} />
              ))}
            </div>
          </div>
          <div className="flex justify-between items-end w-full overflow:hidden">
            <h1 className='font-["Manrope"] font-[700] text-[#374253] md:text-sm lg:text-base text-xs pt-2'>
              {item.name}
            </h1>
            <div className="location">
              <p className='font-["IBM_Plex_Sans] font-[500] md:text-sm lg:text-base text-xs italic text-[#374253]'>
                {item.location}
              </p>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  const navigate = useNavigate();

  const { ref, inView } = useInView({
    threshold: 0,
  });

  const handleRouteClick = (link) => {
    window.scrollTo(0, 0);
    navigate(link);
  };

  const Pages = [
    {
      name: "Home",
      href: "/",
      current: false,
    },
    {
      name: "Destination",
      href: "/destination",
      current: false,
    },
    {
      name: "Kathmandu",
      href: "/destination/view/1",
      current: false,
    },
    {
      name: "Family tour",
      href: "/destination/view/1",
      current: false,
    },
    {
      name: "Kathmandu tour-11 days 10 nights",
      href: "",
      current: false,
    },
  ];

  return (
    <div ref={ref}>
      <div className="xl:mx-24 mx-4 md:mx-8 lg:mx-16 2xl:mx-32 my-8 ">
        <div className="breadcrumbs">
          <nav className="flex" aria-label="Breadcrumb">
            <ol role="list" className="flex items-center space-x-1">
              {Pages.map((page) => (
                <li key={page.name}>
                  <div className="flex items-center">
                    <a
                      href={page.href}
                      className="ml-4 text-sm xl:text-base hover:text-gray-700 font-['IBM_Plex_Sans'] font-[400] text-gray-600"
                      aria-current={page.current ? "page" : undefined}
                    >
                      {page.name}
                    </a>
                    <p className="ml-3"> /</p>
                  </div>
                </li>
              ))}
            </ol>
          </nav>
        </div>

        <div className="heading--section mt-6 2xl:mt-8 flex flex-col md:flex-row justify-between">
          <div className="left--section  mb-6 md:mb-0">
            <h1 className="font-['Manrope'] mb-2 font-[700] 2xl:text-3xl lg:text-2xl text-xl text-gray-800 ">
              Kathmandu Tour - 11 Days 10 Nights
            </h1>
            <div className="review--section flex gap-2 items-center">
              <div className="star--section flex gap-2">
                <BsFillStarFill color={"#DACA3A"} />
                <BsFillStarFill color={"#DACA3A"} />
                <BsFillStarFill color={"#DACA3A"} />
                <BsFillStarFill color={"#DACA3A"} />
                <BsFillStarFill color={"#DACA3A"} />
              </div>

              <div>
                <p className="font-['IBM_Plex_Sans'] font-[400] text-gray-600 text-base">
                  (50 Review)
                </p>
              </div>
            </div>
          </div>

          <div className="right--section flex flex-col md:flex-row md:items-center gap-6">
            <div>
              <p className="text-gray-600 font-['IBM_Plex_Sans'] lg:text-base text-sm font-[400]">
                <span className="font-['Manrope'] font-[700] text-gray-800 lg:text-lg text-base">
                  Rs. 20,000
                </span>
                / person
              </p>
            </div>
            <div>
              <EnquiryTab />
            </div>
          </div>
        </div>

        <div className="image--container relative flex flex-col md:flex-row gap-2 justify-center my-6 2xl:my-12 w-full h-full">
          <div>
            <img src={img1} alt="" className="object-contain" />
          </div>
          <div className="h-full ">
            <img
              src={img2}
              alt=""
              className="object-cover rounded-lg h-[250px] md:h-[50%]"
            />
            <img
              src={img3}
              alt=""
              className="object-cover rounded-lg h-[250px] md:h-[50%] pt-2"
            />
          </div>

          <button
            type="button"
            className="hidden lg:block absolute right-[5%] bottom-[5%] 2xl:right-[16%] 2xl:bottom-[2%] cursor-pointer bg-[#E6FAF0] opacity-70 hover:opacity-100 rounded-md py-3 px-4 font-['IBM_Plex_Sans'] font-[500] text-gray-700 text-base"
          >
            View all photos
          </button>
        </div>

        <div className="responsive--button w-full flex justify-center lg:hidden mb-4">
          <button
            type="button"
            className="mx-auto bg-[#19A948] rounded-md py-3 px-4 font-['IBM_Plex_Sans'] font-[500] text-white text-base"
          >
            View all photos
          </button>
        </div>

        <div
          className={
            fix
              ? "hidden w-auto overflow-x-hidden md:block lg:-mx-24 2xl:-mx-36 lg:px-24 px-8 2xl:px-36 outline-none border-none md:-mx-8 sticky top-0 py-6 mb-2 z-50 bg-white drop-shadow-md"
              : "hidden"
          }
        >
          <div className="responsive--sticky--nav">
            <div className="parent-container flex justify-between w-full">
              <div className="left--section flex gap-4 2xl:gap-8 justify-between items-center cursor-pointer">
                {stickyNav.map((item, index) => (
                  <a
                    href={item.url}
                    className="text-gray-700 font-['IBM_Plex_Sans'] font-[400] lg:text-base text-sm"
                    key={item.id}
                    onClick={() => handleClick(index)}
                    style={
                      activeState === index || inView[index]
                        ? {
                            color: "#19A948",
                            borderBottom: "2px solid #19A948",
                            transition: "border-bottom .8s linear",
                          }
                        : null
                    }
                  >
                    {item.title}
                  </a>
                ))}
              </div>

              <div className="right--section">
                <div className="price flex items-center justify-between gap-6">
                  <p className="text-gray-600 font-['IBM_Plex_Sans'] font-[400] lg:text-base text-sm">
                    <span className="font-['Manrope'] font-[700] lg:text-lg text-base text-gray-800">
                      Rs. 20,000
                    </span>{" "}
                    / person
                  </p>

                  <EnquiryTab />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="overview--section mb-6 mt-20 2xl:my-12" id="overview">
            <div className="flex gap-2 items-center  mb-4">
              <h1 className="font-['Manrope'] font-[700] text-gray-700 text-lg">
                Overview
              </h1>
              <hr className="border-gray-300 w-full" />
            </div>
            <p className="font-['IBM_Plex_Sans'] font-[400] text-gray-600 text-base">
              Everest Base Camp Trek gives you an opportunity to visit some of
              the high-altitude destinations that only a handful of world’s
              population ever gets to visit. Following the footsteps of Edmund
              Hillary and Tenzing Norgay, trek along the foothills of Himalayan
              mountains including the world’s highest, Mount Everest (8,848 m).
              Stand beneath their massive shadows and feel humbled. En route
              experience Sherpa hospitality and culture, Buddhist spiritualism
              (the trails are adorned with mani stones, chortens and colorful
              prayer flags) and amazing mountain scenery. NOTE: The Lukla
              flights to and from Kathmandu had been shifted to Manthali
              Airport, Ramechhap district in 2019 & 2020 due to heavy air
              traffic during peak trekking season (Mar, Apr, May, Oct, Nov).
              But, for now, the flights are directly between Kathmandu and
              Lukla. Extra cost would be applicable if airlines don't provide
              any shuttle services or if you want to take a private vehicle
              instead of the shared ride provided by the airlines
            </p>
          </div>

          <div className="activity--section mb-6 mt-20 2xl:my-12" id="details">
            <div className="flex items-center mb-4">
              <h1 className="font-['Manrope'] font-[700] md:w-[30%] lg:w-[20%] 2xl:w-[11%] w-full text-gray-700 text-lg">
                About this activity
              </h1>
              <hr className="border-gray-300 w-full" />
            </div>

            <div className="flex flex-col md:flex-row justify-between ">
              <div className="left--section flex justify-between md:block w-full mb-4 md:mb-0">
                <div className="left-top-section mb-4 md:mb-16 lg:mb-4">
                  <div className="flex items-center gap-2 mb-1">
                    <img src={clockwise} alt="" className="text-gray-700" />
                    <h1 className="text-gray-700 font-['IBM_Plex_Sans'] font-[500] text-base">
                      {" "}
                      Duration
                    </h1>
                  </div>
                  <p className="font-['IBM_Plex_Sans'] font-[400] text-base text-gray-600">
                    11 days 10 nights
                  </p>
                </div>

                <div className="left-bottom-section">
                  <div className="flex items-center gap-2 mb-1">
                    <img src={phone} alt="" className="text-gray-700" />
                    <h1 className="text-gray-700 font-['IBM_Plex_Sans'] font-[500] text-base">
                      {" "}
                      Help? Call us on
                    </h1>
                  </div>
                  <p className="font-['IBM_Plex_Sans'] font-[400] text-base text-gray-600">
                    000-0800-100-6999
                  </p>
                </div>
              </div>

              <div className="right--section w-full">
                <div className="flex gap-2 items-center mb-2">
                  <img src={refresh} alt="" className="text-gray-700" />
                  <h1 className="text-gray-700 font-['IBM_Plex_Sans'] font-[500] text-base">
                    {" "}
                    Free cancellation
                  </h1>
                </div>
                <p className="font-['IBM_Plex_Sans'] font-[400] text-base text-gray-600">
                  If you cancel at least 7 day(s) before the scheduled departure
                  time, you will receive a full refund.If you cancel between 3
                  and 6 day(s) before the scheduled departure time, you will
                  receive a 50% refund.If you cancel within 2 day(s) of the
                  scheduled departure, you will receive a 0% refund.
                </p>
              </div>
            </div>
          </div>

          <div className="included--section mb-6 mt-20 2xl:my-12">
            <div className="flex items-center mb-3">
              <h1 className="font-['Manrope'] font-[700] w-full md:w-[30%] lg:w-[15%] 2xl:w-[10%] text-gray-700 text-lg ">
                What's included
              </h1>
              <hr className="w-full border-gray-300" />
            </div>

            <div className="w-full">
              <ul className="list-disc my-3 px-3">
                <li className="mb-2 text-gray-600 font-['IBM_Plex_Sans'] font-[400] text-base">
                  A comprehensive first-aid kit and arragements for emergency
                  medical evacuation in worst scenario.
                </li>
                <li className="mb-2 text-gray-600 font-['IBM_Plex_Sans'] font-[400] text-base">
                  3-star twin-share accommodation in Kathmandu (2 nights);
                  breakfast included
                </li>
                <li className="mb-2 text-gray-600 font-['IBM_Plex_Sans'] font-[400] text-base">
                  Food, accommodation, salary, insurance, equipment and medicine
                  for all staff
                </li>
                <li className="mb-2 text-gray-600 font-['IBM_Plex_Sans'] font-[400] text-base">
                  First-aid trained, government licensed English-speaking
                  trekking guide
                </li>
                <li className="mb-2 text-gray-600 font-['IBM_Plex_Sans'] font-[400] text-base">
                  All our government taxes, tourist service charges, official
                  expenses
                </li>
                <li className="mb-2 text-gray-600 font-['IBM_Plex_Sans'] font-[400] text-base">
                  Porter service for 11 days (1 porter for 2 clients).
                </li>
                <li className="mb-2 text-gray-600 font-['IBM_Plex_Sans'] font-[400] text-base">
                  Guesthouse accommodation during the trek (mostly twin-share
                  and occasionally dormitory-style rooms)
                </li>
              </ul>
            </div>
          </div>

          <div className="itinerary--section mb-6 mt-20" id="itinerary">
            <div className="">
              <Itinerary />
            </div>
          </div>

          <div className="review--section mb-6 mt-20 " id="reviews">
            <div className="flex items-center gap-2 mb-3">
              <h1 className="font-['Manrope'] font-[700] text-gray-700 text-lg">
                Reviews
              </h1>
              <hr className="w-full border-gray-300" />
            </div>

            <div className="testimonial--section mb-6 mt-20 2xl:my-12 xl:-mx-24 -mx-4 md:-mx-8 lg:-mx-16 2xl:-mx-32">
              <Carousel
                className="mx-3 my-6"
                responsive={responsive}
                additionalTransfrom={0}
                customTransition="all 3s linear"
                arrows={false}
                autoPlay={true}
                autoPlaySpeed={3000}
                containerClass="container-padding-bottom"
                infinite={true}
                pauseOnHover={true}
                renderDotsOutside={false}
                rewind={false}
                showDots={false}
                slidesToSlide={1}
              >
                {renderTopSlides()}
              </Carousel>

              <Carousel
                className="mx-3 my-6"
                responsive={responsive}
                additionalTransfrom={0}
                customTransition="all 3s linear"
                arrows={false}
                autoPlay={true}
                autoPlaySpeed={3000}
                containerClass="container-padding-bottom"
                infinite={true}
                pauseOnHover={true}
                renderDotsOutside={false}
                rewind={false}
                showDots={false}
                slidesToSlide={1}
              >
                {renderBotSlides()}
              </Carousel>

              <button
                className="mx-auto flex items-center gap-3 border text-[#12A347] font-['IBM_Plex_Sans'] border-[#12A347] rounded-lg py-2 px-3 hover:bg-[#12A347] hover:text-white transition duration-500"
                onClick={() => handleRouteClick("/write-review")}
              >
                Write Review
                <HiOutlinePencilSquare />
              </button>
            </div>
          </div>

          <div className="similar--section">
            <div className="top--section mb-6">
              <h1 className="font-['Manrope'] font-[700] text-2xl 2xl:text-3xl text-gray-800 mb-2">
                Similar tours
              </h1>
              <p className="font-['IBM_Plex_Sans'] font-[400] text-base text-gray-600 ">
                These are the similar experience that traveller viewed while
                viewing this tour
              </p>
            </div>

            <ArrowCarousel data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetails;
