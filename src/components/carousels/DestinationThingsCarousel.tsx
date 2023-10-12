import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import '../../assets/Styles/destinationThingsCarousel.css'


interface ImgProps {
    SmolSliderData: Array<{id: number; img: string; title: string}>;
}

interface ButtonGroupProps {
  next?: () => void;
  previous?: () => void;
  goToSlide?: (slideIndex: number) => void;
  // Rename carouselState to 'state' to match the expected prop name
  carouselState?: {
    currentSlide?: number;
  };
}

const DestinationThingsCarousel: React.FC<ImgProps> = ( {SmolSliderData}) => {

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

    const NxtBtn = ({onClick}) => {
        return (
            <div> 
            </div>
        )
    }

      const ButtonGroup: React.FC<ButtonGroupProps>  = ({ next, previous, goToSlide, ...rest }) => {


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
          customButtonGroup={<ButtonGroup />}
          >
            {SmolSliderData.map(item => (
                <div
                key={item.id}
                className="item-class container-class relative h-64 2xl:h-80 bg-cover bg-center rounded-2xl cursor-pointer"
                style={{
                  backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)), url(${item.img})`,
                }}
              >
                <div className="absolute inset-0 flex items-end justify-start px-2 md:py-4 md:px-4">
                  <h2 className="font-['Manrope'] font-[700] text-base xl:text-2xl text-white p-2 md:p-0 ">
                    {item.title}
                  </h2>
                </div>
              </div>
            ))}
          </Carousel>
    )
    }

export default DestinationThingsCarousel