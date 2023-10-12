import {useState} from 'react'

import {AiOutlineArrowRight} from 'react-icons/ai'

import ArrowCarousel from './carousels/ArrowCarousel'

import Pokhara from '../assets/Picture/ThingsSection/Pokhara.png'
import Kathmandu from '../assets/Picture/ThingsSection/Kathmandu.png'
import Chitwan from '../assets/Picture/ThingsSection/Chitwan.png'

const ThingsSection = () => {

  
  const Btndata = [
    {
      id: "1",
      label: "Family tour"
    },
    {
      id: "2",
      label: "Cultural tour"
    },
    {
      id: "3",
      label: "Outdoor activities"
    },
    {
      id: "4",
      label: "Adventure & Nature"
    },
    {
      id: "5",
      label: "City tour"
    },
    {
      id: "6",
      label: "Luxury tour"
    }
  ]
  

const data = [
  {
    "id": 1,
    "url": Pokhara,
    "location": "Pokhara",
    "duration" : "2 Days 1 Night",
    "packageCategory": "FAMILY TOUR",
    "price": 8000,
    "review": 50
  },
  {
    "id": 2,
    "url": Kathmandu,
    "location": "Kathmandu tour",
    "duration" : "11 Days 10 Night",
    "packageCategory": "FAMILY TOUR",
    "price": 30000,
    "review": 50
  },
  {
    "id": 3,
    "url": Chitwan,
    "location": "Chitwan tour",
    "duration" : "5 Days 4 Night",
    "packageCategory": "FAMILY TOUR",
    "price": 20000,
    "review": 50
  },
  {
    "id": 4,
    "url": Kathmandu,
    "location": "Kathmandu tour",
    "duration" : "11 Days 10 Night",
    "packageCategory": "FAMILY TOUR",
    "price": 30000,
    "review": 50
  },
  {
    "id": 5,
    "url": Pokhara,
    "location": "Pokhara",
    "duration" : "2 Days 1 Night",
    "packageCategory": "FAMILY TOUR",
    "price": 8000,
    "review": 50
  },
  {
    "id": 6,
    "url": Chitwan,
    "location": "Chitwan tour",
    "duration" : "5 Days 4 Night",
    "packageCategory": "FAMILY TOUR",
    "price": 20000,
    "review": 50
  },
]

  return (
    // <div className=' mx-[150px]'>
    <div className='my-24 xl:mx-36 lg:mx-24 flex flex-col mx-2'>

      <h1 className='font-["Manrope"] font-[700] text-3xl text-[#192638] mb-1 ml-4'>
        Things to Do
      </h1>

      <div className=' mx-2 flex lg:flex-row flex-col gap-6 lg:gap-0 justify-between items-center mb-8 mt-4'>
              {/* Left Buttons */}
        <div className='flex gap-2 flex-wrap'>
         

          {Btndata.map(item => (
            <button type='button' key={item.id} className='border-[#A7B2C3] rounded-lg hover:bg-[#19A948] border-[2px] px-1 py-2 md:px-3 md:py-4 leading-[20px] font-[800] text-xs md:text-base font-["IBM_Plex_Sans"] hover:border-none hover:text-white hover:outline-none min-w-[6.25rem]'>{item.label}</button>
          ))}

        </div>

              {/* Right Buttons */}
              <div>
                <button type='button' className='hidden border-[#12A347] border-2 py-2 px-[14px] font-["IBM_Plex_Sans"] font-[400] text-["16px"] text-[#12A347] lg:flex gap-2 items-center hover:text-white hover:bg-[#12A347]'>
                  View all <AiOutlineArrowRight size={20} />
                </button>
              </div>
      </div>

      <div>
        <ArrowCarousel data={data}/>

        <div className='flex w-full items-center justify-center mt-6'>
                <button type='button' className='flex gap-2 border-[#12A347] border-2 py-2 px-[14px] font-["IBM_Plex_Sans"] font-[400] text-["16px"] text-[#12A347] lg:hidden hover:text-white hover:bg-[#12A347]'>
                  View all <AiOutlineArrowRight size={20} />
                </button>
              </div>
      </div>
    </div>
  )
}

export default ThingsSection