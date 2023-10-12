import ReviewBanner from "../assets/Picture/Review/ReviewBanner.png";

import TravelBanner from "../Common/TravelBanner";

import { Carousel } from "react-responsive-carousel";

import { RiStarSFill } from "react-icons/ri";

import trademark from "../assets/Picture/Testimonials/quotationmark.png";

import userImport from "../assets/Picture/Testimonials/UserImport.png";

import {useNavigate} from 'react-router-dom'

const Carouseldata = [
  {
    id: 1,
    url: userImport,
  },
  {
    id: 2,
    url: userImport,
  },
  {
    id: 3,
    url: userImport,
  },
  {
    id: 4,
    url: userImport,
  },
];

const data = [
  {
    id: 1,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis neque et sem consequat, tempor maximus justo posuere. ",
    name: "Shuvam Koirala",
    location: "Everest Camp",
    starCount: 4,
    url: userImport,
  },
  {
    id: 2,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis neque et sem consequat, tempor maximus justo posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis neque et sem consequat, tempor maximus justo posuere.",
    name: "Ranjit Shrestha",
    location: "Kathmandu Tour",
    starCount: 4,
    url: userImport,
  },
  {
    id: 3,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis neque et sem consequat, tempor maximus justo posuere. ",
    name: "Bishal Tamang",
    location: "Everest Camp",
    starCount: 4,
    url: "",
  },
  {
    id: 4,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis neque et sem consequat, tempor maximus justo posuere. ",
    name: "Shuvam Koirala",
    location: "Everest Camp",
    starCount: 4,
    url: "",
  },
  {
    id: 5,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis neque et sem consequat, tempor maximus justo posuere. ",
    name: "Ranjit Shrestha",
    location: "Everest Camp",
    starCount: 4,
    url: "",
  },
  {
    id: 6,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis neque et sem consequat, tempor maximus justo posuere. ",
    name: "Bishal Tamang",
    location: "Everest Camp",
    starCount: 4,
    url: userImport,
  },
  {
    id: 7,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis neque et sem consequat, tempor maximus justo posuere. ",
    name: "Shuvam Koirala",
    location: "Everest Camp",
    starCount: 4,
    url: "",
  },
];

const isMobile = window.innerWidth < 768;

const Review = () => {

  const navigate = useNavigate();

  return (
    <div className="review--section">
      <div
        className="lg:mx-20 mx-2 2xl:mx-24 my-8 pl-6 md:pl-12 2xl:py-44 py-16 md:py-40 rounded-2xl"
        style={{
          background: isMobile ? "#323C52" : `url(${ReviewBanner})`,
          backgroundRepeat: "no-repeat",
          backgroundPositionX: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="contents">
          <h1 className='font-["Manrope"] 2xl:mb-4 mb-2 font-[800] text-5xl text-white'>
            Reviews
          </h1>
          <p className='2xl:max-w-[20%] 2xl:mb-8 mb-6 md:max-w-[30%] max-w-[80%] font-["IBM_Plex_Sans"] font-[400] text-base text-white'>
            These are the reviews given by the travellers based upon their
            experience
          </p>
          <button
            type="button"
            className='py-3 px-4 bg-[#19A948] rounded-md font-["IBM_Plex_Sans"] font-[400] text-white text-base hover:bg-[#36C869]'
            onClick={() => navigate('/write-review')}
          >
            Write review
          </button>
        </div>
      </div>

      <div className="testimonials lg:mx-20 2xl:mx-24">
        <div className="title--content text-center">
          <h1 className="font-['Manrope'] font-[700] text-gray-800 text-2xl mb-2">
            Testimonials
          </h1>
          <div className="text-center ">
            <p className=" md:max-w-[40%] 2xl:max-w-[20%] mx-auto font-['IBM_Plex_Sans'] font-[400] text-base text-gray-600 ">
              See what the travellers are saying for us and the experience they
              enjoyed.
            </p>
          </div>
        </div>




        {/* <Tempcomp /> */}




        <div className="grid--testimonial grid lg:grid-cols-2 grid-cols-1 gap-6 lg:mx-30 mx-2 md:mx-8 my-8 2xl:my-12">
          {data.map((item) => (
            <div key={item.id} className="parent--container bg-[#E6FAF0] rounded-md">
              {item.url === "" ? (
                "" //Conditional rendering for the top section
              ) : (
                <Carousel showThumbs={false} showStatus={false} className="">
                  {Carouseldata.map((item) => (
                    <div
                      key={item.id}
                      className="relative rounded-2xl overflow-hidden"
                    >
                      <img
                        src={item.url}
                        alt=""
                        className="h-full w-full object-cover "
                      />
                    </div>
                  ))}
                </Carousel>
              )}

              <div className="bottom--section">
                <div className="carousel-slide px-4 pt-8 pb-6 rounded-xl cursor-pointer relative overflow-hidden  ">
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
                        {Array.from({ length: item.starCount }).map(
                          (_, index) => (
                            <RiStarSFill
                              key={index}
                              style={{ color: "#DACA3A" }}
                            />
                          )
                        )}
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
              </div>
            </div>
          ))}
        </div>
        <div className=" text-center">
          <button
            type="button"
            className="py-3 px-4 border rounded-lg border-[#19A948] font-['IBM_Plex_Sans'] font-[400] text-base text-[#19A948] hover:text-white hover:bg-[#19A948]"
          >
            Load More
          </button>
        </div>
      </div>

      <div className="mb-8 mt-24">
        <TravelBanner />
      </div>
    </div>
  );
};

export default Review;
