import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import {BsArrowRight} from 'react-icons/bs'

// import { ButtonGroupProps } from "react-multi-carousel";


interface ImgProps {
    BigSliderData: Array<{id: number, img: string, title: string, link: string, labels: string[]}>;
}

const DestinationAttractionCarousel: React.FC<ImgProps> = ({BigSliderData}) => {

    const responsive = {
      largeDesktop: {
        breakpoint: {max: 3000, min:1530 },
        items: 5,
        slidesToSlide: 1
    },
        desktop: {
          breakpoint: { max: 1530, min: 1024 },
          items: 4,
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

      const PrevBtn = ({className, onClick}) => {
        return (
            <div>
            </div>
        )
    }

    const NxtBtn = ({ onClick}) => {
        return (
            <div> 
            </div>
        )
    }

      // const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
        const ButtonGroup = ({ next, previous, goToSlide, ...rest}) => {


        const { carouselState: { currentSlide } } = rest;

       

        return (
          <div className="carousel-button-group absolute">
            <PrevBtn className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()} />
            <NxtBtn onClick={() => next()} />
          </div>
        );
      };

  return (

    <Carousel 
    responsive={responsive} 
    arrows={true}
    infinite={true}
    removeArrowOnDeviceType={['mobile', 'tablet']} 
    itemClass="item-class"
    containerClass= "container-class"
    sliderClass="slider-class"
    // customButtonGroup={ButtonGroup}
    >
        {BigSliderData?.map(item => (
              <div key={item.id} className='slider-class main-container mx-auto min-w-72 2xl:w-80 rounded-lg text-left'>
              <div className="top--section rounded-xl w-full h-80 2xl:h-96">
              <img src={item.img} alt="" className='rounded-xl h-full w-full object-cover'/>
              </div>
      
              <div className="bottom--section mt-2">
                  <h1 className='font-["Manrope"] font-[600] text-lg text-black mb-2'>{item.title}</h1>
                  <div className='labels'>
                    {item?.labels?.map((label, index) =>(
                        <p id='index' key={index} className='bg-[#E6FAF0] my-2 mr-4 rounded-sm py-1 px-2 inline-block font-["IBM_Plex_Sans"] text-gray-600 font-[400] text-sm'>{label}</p>
                    ))}
                  </div>
                  <a href={item.link} className='flex gap-2 items-center text-[#12A347]'>
                      View on google map arrow 
                      <BsArrowRight />    
                  </a>
              </div>
          </div>
        ))}
    
    </Carousel>
  )
}

export default DestinationAttractionCarousel