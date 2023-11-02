import { useState } from 'react'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

import active from '../assets/Picture/Destination/Nested/PackageDetails/active.png'

const Itinerary = () => {

    const days = [
        {
            id:1,
            day:1,
            title: "Arrival in kathmandu (Book your flight to kathmandu arriving on this day)",
            walkingHours: 3.5,
            difficulty: "Easy",
            elevation: "2840m/9318ft in Lukla and 2610m/8563ft in Pkhakding.",
            terrain: "Flat and downhill, well developed paths, stone steps.",
            views: "Amazing Himalayan views on approach to Lukla."
        },
        {
            id:2,
            day:2,
            title: "Arrival in kathmandu(Book your flight to katmandu arrivaing on this day)",
            walkingHours: 3.5,
            difficulty: "Easy",
            elevation: "2840m/9318ft in Lukla and 2610m/8563ft in Pkhakding.",
            terrain: "Flat and downhill, well developed paths, stone steps.",
            views: "Amazing Himalayan views on approach to Lukla."
        },
        {
            id:3,
            day:3,
            title: "Arrival in kathmandu(Book your flight to katmandu arrivaing on this day)",
            walkingHours: 3.5,
            difficulty: "Easy",
            elevation: "2840m/9318ft in Lukla and 2610m/8563ft in Pkhakding.",
            terrain: "Flat and downhill, well developed paths, stone steps.",
            views: "Amazing Himalayan views on approach to Lukla."
        },
        {
            id:4,
            day:4,
            title: "Arrival in kathmandu(Book your flight to katmandu arrivaing on this day",
            walkingHours: 3.5,
            difficulty: "Easy",
            elevation: "2840m/9318ft in Lukla and 2610m/8563ft in Pkhakding.",
            terrain: "Flat and downhill, well developed paths, stone steps.",
            views: "Amazing Himalayan views on approach to Lukla."
        },
        {
            id:5,
            day:5,
            title: "Arrival in kathmandu (Book your flight to kathmandu arriving on this day)",
            walkingHours: 3.5,
            difficulty: "Easy",
            elevation: "2840m/9318ft in Lukla and 2610m/8563ft in Pkhakding.",
            terrain: "Flat and downhill, well developed paths, stone steps.",
            views: "Amazing Himalayan views on approach to Lukla."
        },
        {
            id:6,
            day:6,
            title: "Arrival in kathmandu (Book your flight to kathmandu arriving on this day)",
            walkingHours: 3.5,
            difficulty: "Easy",
            elevation: "2840m/9318ft in Lukla and 2610m/8563ft in Pkhakding.",
            terrain: "Flat and downhill, well developed paths, stone steps.",
            views: "Amazing Himalayan views on approach to Lukla."
        },
        {
            id:7,
            day:7,
            title: "Arrival in kathmandu (Book your flight to kathmandu arriving on this day)",
            walkingHours: 3.5,
            difficulty: "Easy",
            elevation: "2840m/9318ft in Lukla and 2610m/8563ft in Pkhakding.",
            terrain: "Flat and downhill, well developed paths, stone steps.",
            views: "Amazing Himalayan views on approach to Lukla."
        },
        {
            id:8,
            day:8,
            title: "Arrival in kathmandu (Book your flight to kathmandu arriving on this day)",
            walkingHours: 3.5,
            difficulty: "Easy",
            elevation: "2840m/9318ft in Lukla and 2610m/8563ft in Pkhakding.",
            terrain: "Flat and downhill, well developed paths, stone steps.",
            views: "Amazing Himalayan views on approach to Lukla."
        },
        {
            id:9,
            day:9,
            title: "Arrival in kathmandu (Book your flight to kathmandu arriving on this day)",
            walkingHours: 3.5,
            difficulty: "Easy",
            elevation: "2840m/9318ft in Lukla and 2610m/8563ft in Pkhakding.",
            terrain: "Flat and downhill, well developed paths, stone steps.",
            views: "Amazing Himalayan views on approach to Lukla."
        },
        {
            id:10,
            day:10,
            title: "Arrival in kathmandu (Book your flight to kathmandu arriving on this day)",
            walkingHours: 3.5,
            difficulty: "Easy",
            elevation: "2840m/9318ft in Lukla and 2610m/8563ft in Pkhakding.",
            terrain: "Flat and downhill, well developed paths, stone steps.",
            views: "Amazing Himalayan views on approach to Lukla."
        },
        {
            id:11,
            day:11,
            title: "Arrival in kathmandu (Book your flight to kathmandu arriving on this day)",
            walkingHours: 3.5,
            difficulty: "Easy",
            elevation: "2840m/9318ft in Lukla and 2610m/8563ft in Pkhakding.",
            terrain: "Flat and downhill, well developed paths, stone steps.",
            views: "Amazing Himalayan views on approach to Lukla."
        }
    ]

    const [showIcon, setShowIcon] = useState(false);

    const [activeItem, setActiveItem] = useState(null);

    function handleClick(itemId) {
        setActiveItem(prev => (prev === itemId ? null : itemId));
        // console.log(showIcon);
    }

  return  (
    <div>
        <div className="flex items-center gap-2 mb-3 w-full">
            <h1 className="font-['Manrope'] font-[700] text-gray-700 text-lg">Itinerary</h1>
            <hr className="w-full border-gray-300"/>
        </div>

        <div className="w-full">
            {days.map(item => (
                 <div key={item.id} className="border-b border-opacity-50 border-[#D0D7E2]">
                 <Disclosure>
                   {({ open }) => (
                     <>
                       <Disclosure.Button className="flex justify-between w-full py-3 xl:py-6 text-left font-['IBM_Plex_Sans'] font-[500] text-xs md:text-base xl:text-lg text-gray-700" onClick={() => handleClick(item.id)}>
                         <div className='flex gap-4 items-center justify-center'>
                            <div className='flex md:gap-2 items-center w-[30%] md:w-auto'>
                                <div className='md:border-2 rounded-full border-[#18A948] md:p-1'>
                                {activeItem === item.id && (
                                <img src={active} alt="" className='hidden md:block'/>
                                )
                                }
                                </div>
                                
                                
                                <h1 className='font-["IBM_Plex_Sans"] font-[600] w-full text-xs md:text-base text-[#374253]'><span className='text-[#19A948]'>Day {item.day}</span>:</h1>
                            </div>

                            <div>
                                <p className='font-["Quicksand"] font-[500] text-sm md:text-base text-[#374253] '>{item.title}</p>
                            </div>
                         </div>
                         <ChevronUpIcon
                           className={`${
                             open ? 'rotate-180 transform' : ''
                           } hidden md:block h-5 w-5 text-[#12A347]`}
                         />
                       </Disclosure.Button>
                       <Disclosure.Panel className="md:px-4 font-['Quicksand'] font-[500] text-sm text-gray-700">
                         <ul className='px-20 flex gap-2 md:gap-4 flex-col list-disc mb-4 md:mb-6 '>
                            <li>Hours of walking: {item.walkingHours}</li>
                            <li>Difficulty: {item.difficulty}</li>
                            <li>Elevation reached: {item.elevation}</li>
                            <li>Terrain: {item.terrain}</li>
                            <li>View on offer: {item.views}</li>  
                         </ul>
                       </Disclosure.Panel>
                     </>
                   )}
                 </Disclosure>
               </div>
            ))}
        
      
        </div>
    </div>
  )
}

export default Itinerary