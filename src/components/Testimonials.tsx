import Carousel from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";

import emoji from "../assets/Picture/Testimonials/sunglass.png";

import { RiStarSFill } from "react-icons/ri";

import trademark from "../assets/Picture/Testimonials/quotationmark.png";

const Testimonials = () => {

  const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

  const data = [
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
      name: "Adarsh Khaling Rai",
      location: "Kathmandu tour",
      starCount: 4,
    },
    {
      id: 5,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis neque et sem consequat, tempor maximus justo posuere. ",
      name: "Ramin Shrestha",
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


  const renderSlides = () => {
    return data.map((item) => (
      <div
        key={item.id}
        className="carousel-slide mx-4 px-4 md:px-4 pt-8 pb-6 rounded-xl -z-20 bg-white cursor-pointer relative overflow-hidden"
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


 return (
  <div className="my-24 py-[4.6rem] bg-[#E8FBF1]">
          <div className="flex justify-center w-full">
            <h1 className='flex items-center justify-center mb-12 gap-2 mx-auto min-w-full text-center font-["Manrope"] font-[700] text-[0.8rem] md:text-[1.5rem] md:leading-[3rem] text-[#192638]'>
              <img src={emoji} alt="" style={{ fontSize: "40px" }} />
              What People Say About Our Service
            </h1>
          </div>

        <Carousel className="mx-3"
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
          {renderSlides()}
       </Carousel> 
      
  </div>
 )
};

export default Testimonials;
