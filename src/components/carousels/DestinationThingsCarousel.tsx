import AliceCarousel from "react-alice-carousel";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const DestinationThingsCarousel = ({data}) => {

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    768: { items: 3 },
    1024: { items: 4 },
    1440: {items: 5},
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
    <div className="w-full">
        <AliceCarousel
          responsive={responsive}
          disableDotsControls
          renderNextButton={NextBtn}
          renderPrevButton={PrevBtn}
          mouseTracking
          keyboardNavigation
          infinite
        >
          {data.map(item => (
            <div 
              key={item.id}
              className="relative rounded-lg w-auto bg-center bg-contain 2xl:bg-cover bg-no-repeat min-h-[220px] mx-2"  
              style={{backgroundImage: `url(${item.img})`}}
            >
              <h1 className="absolute bottom-[5%] left-[15%] md:left-[5%] md:bottom-[10%] lg:bottom-[5%]  text-white font-[Manrope] text-lg tracking-[2%] font-semibold">{item.title}</h1>
            </div>
          ))}
        </AliceCarousel>
    </div>
  )
}

export default DestinationThingsCarousel

