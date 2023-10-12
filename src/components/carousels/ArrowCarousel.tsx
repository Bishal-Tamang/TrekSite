import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { RiStarSFill } from "react-icons/ri";

interface Item {
  id: number;
  url: string;
  location: string;
  duration: string;
  packageCategory: string; 
  review: number;
  price: number;
  // starCount: number;
}

interface ArrowCarouselProps {
  data: Item[];
}

const ArrowCarousel: React.FC<ArrowCarouselProps> = ({ data }) => {

  function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          background: "white",
          padding: "2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "black",
          borderRadius: "100%",
          fontSize: "20px",
        }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
  };

  const MidSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
   
  }

  const SmolSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
   
  }

  const newSettings = window.innerWidth > 1024 ? (settings) :  window.innerWidth > 767 ? (MidSettings) :   (SmolSettings);

  return (

    <Slider {...newSettings}>
      {data.map(item => (
        <div
          key={item.id}
          className="md:max-w-1/3 mx-[2px] flex flex-col rounded-2xl shadow-xl ring-offset-5 ring-offset-y-5 ring-offset-30 ring-rgba(0, 0, 0, 0.1) cursor-pointer md:min-h-[27rem] overflow:hidden"
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
    </Slider>
  );
};

export default ArrowCarousel;
