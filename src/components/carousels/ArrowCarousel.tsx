import AliceCarousel from "react-alice-carousel"
import { RiStarSFill } from "react-icons/ri"

import { FiChevronRight, FiChevronLeft } from "react-icons/fi"

const ArrowCarousel = ({data}) => {

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
    1440: { items: 4 },
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
      <div className="hidden lg:flex absolute z-50 cursor-pointer bg-white drop-shadow-lg border border-white text-green-400 rounded-full p-4 items-center justify-center hover:text-black hover:bg-white duration-500 hover:shadow-md hover:shadow-slate-400 top-[35%] 2xl:top-[40%] -left-[4%] 2xl:-left-[2%]">
        <FiChevronLeft className="h-6 w-6" />
      </div>
    );
  };


  return (
    <div className="w-full">
      <AliceCarousel
          disableDotsControls
          responsive={responsive}
          renderNextButton={NextBtn}
          renderPrevButton={PrevBtn}
          infinite
          mouseTracking
          keyboardNavigation
        >
        {data.map(item => (
        <div
          key={item.id}
          className="md:max-w-1/3 lg:max-w-1/3 mx-1 flex flex-col rounded-2xl shadow-md ring-rgba(0, 0, 0, 0.1) cursor-pointer md:min-h-[28rem] overflow:hidden mb-2"
        >
          {/* button icon */}
          <div className="top relative p-2">
            <img src={item.url} alt="" className="w-full" />
            <p className='font-["IBM_Plex_Sans"] font-[500] text-[0.5rem] md:text-base text-[#F3FFFD] bg-[#323C52] px-2 py-2  rounded-[5px] absolute md:left-[5%] left-[10%] bottom-[-3%]'>
              {item.packageCategory}
            </p>
          </div>

          <div className="bottom p-4">
            <h1 className='font-["Manrope"] font-[700] mb-4 md:text-2xl text-sm text-[#192638] text-left'>
              {item.location} - {item.duration}
            </h1>

            {/* Rating */}
            <div className="review flex gap-2 items-center">
              <div className="flex w-42 lg:w-42 lg:w-42 items-center">
                <RiStarSFill className="text-[#DACA3A]"/>
                <RiStarSFill className="text-[#DACA3A]"/>
                <RiStarSFill className="text-[#DACA3A]"/>
                <RiStarSFill className="text-[#DACA3A]"/>
                <RiStarSFill className="text-[#DACA3A]"/>
              </div>
              <p className='font-["IBM_Plex_Sans"] font-[400] text-xs md:text-xl text-gray-600'>
                ({item.review} Review)
              </p>
            </div>

            <p className='mt-4 font-["IBM_Plex_Sans"] text-[#596579] font-[400] md:text-xl text-xs text-left'>
              <span className='font-["Manrope"] font-[800] md:text-2xl text-sm'>
                Rs. {item.price.toLocaleString()}
              </span>
              / Person
            </p>
          </div>
        </div>
      ))}
        </AliceCarousel>
    </div>
  )
}

export default ArrowCarousel