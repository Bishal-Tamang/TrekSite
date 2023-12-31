import  Carousel  from "react-multi-carousel"
import 'react-multi-carousel/lib/styles.css'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};



const NewCarousel = () => {
  return (
  <div>
    <Carousel 
    responsive={responsive}
    swipeable={true}
    draggable={true}
    showDots={false}
    ssr={true}
    infinite={true}
    autoPlay={true}
    autoPlaySpeed={2000}
    removeArrowOnDeviceType={['desktop', 'tablet', 'mobile']}


    >
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
      <div>Item 4</div>
    </Carousel>
  </div>
  )
}

export default NewCarousel