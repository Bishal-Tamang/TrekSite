import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useState } from "react";

import { BsCamera } from "react-icons/bs";

import "swiper/css";
import "swiper/css/pagination";
import "../../assets/Styles/nestedDestination.css";

const Pages = [
  { name: "Home", href: "/", current: false },
  { name: "Destination", href: "/destination", current: true },
];

const DestinationCarousel = ({ TopCarouselData }) => {
  return (
    <div>
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        autoHeight={true}
        loop={true}
      >
        {TopCarouselData.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              key={item.id}
              className="2xl:h-[500px] lg:h-[300px] md:h-[250px] h-[180px]  relative rounded-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent">
                <img
                  src={item.img}
                  alt=""
                  className="h-full w-full object-cover mix-blend-multiply"
                />

                <div className="content z-10 absolute bottom-[15%] text-white flex justify-between w-full">
                  <div>
                    <div className="left-content md:ml-20 hidden md:block md:mb-0">
                      <div className="breadcrumbs">
                        <nav className="flex" aria-label="Breadcrumb">
                          <ol
                            role="list"
                            className="flex items-center space-x-1"
                          >
                            {Pages.map((page) => (
                              <li key={page.name}>
                                <div className="flex items-center">
                                  <a
                                    href={page.href}
                                    className="lg:ml-4 text-sm xl:text-base font-['IBM_Plex_Sans'] font-[400] text-gray-50"
                                    aria-current={
                                      page.current ? "page" : undefined
                                    }
                                  >
                                    {page.name}
                                  </a>
                                  <p className="ml-2 lg:ml-3"> /</p>
                                </div>
                              </li>
                            ))}
                          </ol>
                        </nav>
                      </div>

                      <h1 className="font-['Manrope'] font-[800] text-sm md:text-base lg:text-5xl text-white mt-1 lg:mt-2">
                        {item.title}
                      </h1>
                    </div>
                  </div>

                  <div className="right-content flex gap-2 items-center absolute right-[30%] md:right-[5%] bottom-[25%]">
                    <BsCamera size={18} className="z-10 text-white" />
                    <p className="text-[#F4F7FB] font-['Manrope'] font-[600] leading-[25px] text-xs md:text-base">
                      {item.subtitle}, {item.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DestinationCarousel;
