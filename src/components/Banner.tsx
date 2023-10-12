import '../assets/Styles/banner.css'

import Kathmandu from '../assets/Picture/Banner/Kathmandu.png';

const Banner = () => {
  return (
    
    <div className="banner--section my-24 bg-cover bg-no-repeat bg-center overflow-hidden relative min-h-[675px]" style={{ backgroundImage: `url(${Kathmandu})`}}>
      <div className='absolute inset-0 lg:pt-52 pt-10 2xl:pl-36 md:pl-24 pl-10 lg:pb-40 pb-12 min-h-full bg-[#000b]' >
      <div className='content--section flex flex-col lg:flex-row justify-between lg:gap-24'>
            {/* Content */}
        <div className='content---Section'>
          <p className='font-["IBM_Plex_Sans"] font-[500] text-base text-white pb-2'>TOP DESTINATION</p>
          <h1 className='font-["Manrope"] font-[800] leading-[60px] text-[48px] text-white pb-4'>Kathmandu</h1>
          <p className='font-["IBM_Plex_Sans"] font-[500] text-white text-base pb-8 max-w-[30%]'>Kathmandu, also spelled Kathmandu or Kantipur, capital of Nepal. It lies in a hilly region near the confluence of the Bagmati at an elevatoin of 4,344 feet.</p>
          <button type='button' className='hidden lg:block px-4 py-2 mb-12 lg:mb-0 bg-[#19A948] rounded-md text-white font-["IBM_Plex_Sans"]'>View details</button>
        </div>

        {/* Carousel--Section */}

    
      </div>
      </div>
    </div>

    
  )
}

export default Banner