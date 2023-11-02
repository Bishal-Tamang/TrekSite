import AliceCarousel from "react-alice-carousel";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { BsArrowRight } from "react-icons/bs";

interface ImgProps {
  BigSliderData: Array<{
    id: number;
    img: string;
    title: string;
    link: string;
    labels: string[];
  }>;
}

const DestinationAttractionCarousel: React.FC<ImgProps> = ({
  BigSliderData,
}) => {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    768: { items: 3 },
    1024: { items: 4 },
    1440: { items: 5 },
  };

  const NextBtn = () => {
    return (
      <div className="hidden lg:flex absolute z-50 cursor-pointer bg-white drop-shadow-lg border border-white text-green-400 rounded-full p-4 items-center justify-center hover:text-black hover:bg-white duration-500 hover:shadow-md hover:shadow-slate-400 top-[35%] 2xl:top-[40%] -right-[2%] 2xl:-right-[2%]">
        <FiChevronRight className="h-6 w-6" />
      </div>
    );
  };

  const PrevBtn = () => {
    return (
      <div className="hidden lg:flex absolute z-50 cursor-pointer bg-white drop-shadow-lg border border-white text-green-400 rounded-full p-4 items-center justify-center hover:text-black hover:bg-white duration-500 hover:shadow-md hover:shadow-slate-400 top-[35%] 2xl:top-[40%] -left-[2%] 2xl:-left-[2%]">
        <FiChevronLeft className="h-6 w-6" />
      </div>
    );
  };

  return (
    <div>
      <AliceCarousel
        responsive={responsive}
        disableDotsControls
        mouseTracking
        keyboardNavigation
        infinite
        renderNextButton={NextBtn}
        renderPrevButton={PrevBtn}
      >
        {BigSliderData?.map((item) => (
          <div
            key={item.id}
            className="slider-class main-container min-w-72 2xl:w-80 rounded-lg text-left mx-2"
          >
            <div className="top--section rounded-xl w-full h-80 2xl:h-96">
              <img
                src={item.img}
                alt=""
                className="rounded-xl h-full w-full object-cover"
              />
            </div>

            <div className="bottom--section mt-2">
              <h1 className='font-["Manrope"] font-[600] text-lg text-black mb-2'>
                {item.title}
              </h1>
              <div className="labels">
                {item?.labels?.map((label, index) => (
                  <p
                    id="index"
                    key={index}
                    className='bg-[#E6FAF0] my-2 mr-4 rounded-sm py-1 px-2 inline-block font-["IBM_Plex_Sans"] text-gray-600 font-[400] text-sm'
                  >
                    {label}
                  </p>
                ))}
              </div>
              <a
                href={item.link}
                className="flex gap-2 items-center text-[#12A347]"
              >
                View on google map arrow
                <BsArrowRight />
              </a>
            </div>
          </div>
        ))}
      </AliceCarousel>
    </div>
  );
};

export default DestinationAttractionCarousel;
