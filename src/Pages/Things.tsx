import Pagination from '../components/Pagination';

import Janakpur from '../assets/Picture/Family-Tour/Janakpur.png';
import Kathmandu from '../assets/Picture/Family-Tour/Kathmandu.png';
import Chitwan from '../assets/Picture/Family-Tour/Chitwan.png';
import Pokhara from '../assets/Picture/Family-Tour/Pokhara.png';
import Lumbini from '../assets/Picture/Family-Tour/Lumbini.png';
import Butwal from '../assets/Picture/Family-Tour/Butwal.png' 


import things from "../assets/Picture/ThingsToDo/Things.png";

import DefaultPackage from '../components/DefaultPackage';


const Things = () => {
  
  const data =[
    {
      id: 1,
      url: Janakpur,
      location: "Janakpur",
      duration: "2 Days 1 Night",
      filter: "FAMILY TOUR",
     price: 8000,
      review: 50,
      starCount: 5
  },
  {
      id: 2,
      url: Kathmandu,
      location: "Kathmandu tour",
      duration: "11 Days 10 Night",
      filter: "FAMILY TOUR",
     price: 30000,
      review: 50,
      starCount: 5
  },
  {
        id: 3,
        url: Chitwan,
        location: "Chitwan tour",
        duration: "5 Days 4 Nights",
        filter: "FAMILY TOUR",
        price: 20000,
        review: 50,
        starCount: 5
      },
      {
        id: 4,
        url: Pokhara,
        location: "Pokhara",
        duration: "2 Days 1 Night",
        filter: "FAMILY TOUR",
        price: 8000,
        review: 50,
        starCount: 3
      },
      {
        id: 5,
        url: Lumbini,
        location: "Lumbini tour",
        duration: "11 Days 10 Night",
        filter: "FAMILY TOUR",
        price: 30000,
        review: 50,
        starCount: 3
      },
      {
        id: 6,
        url: Butwal,
        location: "Butwal tour",
        duration: "5 Days 4 Night",
        filter: "FAMILY TOUR",
        price: 20000,
        review: 50,
        starCount: 4
      },
      {
        id: 7,
        url: Pokhara,
        location: "Pokhara",
        duration: "2 Days 1 Night",
        filter: "FAMILY TOUR",
        price: 8000,
        review: 50,
        starCount: 3
      },
      {
        id: 8,
        url: Chitwan,
        location: "Chitwan tour",
        duration: "5 Days 4 Nights",
        filter: "FAMILY TOUR",
        price: 20000,
        review: 50,
        starCount: 5
      },
      {
        id: 9,
        url: Lumbini,
        location: "Lumbini tour",
        duration: "11 Days 10 Night",
        filter: "FAMILY TOUR",
        price: 30000,
        review: 50,
        starCount: 3
      },
      {
        id: 10,
        url: Butwal,
        location: "Butwal tour",
        duration: "5 Days 4 Night",
        filter: "FAMILY TOUR",
        price: 20000,
        review: 50,
        starCount: 4
      },
      {
        id: 11,
        url: Janakpur,
        location: "Janakpur",
        duration: "2 Days 1 Night",
        filter: "FAMILY TOUR",
       price: 8000,
        review: 50,
        starCount: 5
    },
    {
      id: 12,
      url: Kathmandu,
      location: "Kathmandu tour",
      duration: "11 Days 10 Night",
      filter: "FAMILY TOUR",
     price: 30000,
      review: 50,
      starCount: 5
  },
  {
    id: 13,
    url: Lumbini,
    location: "Lumbini tour",
    duration: "11 Days 10 Night",
    filter: "FAMILY TOUR",
    price: 30000,
    review: 50,
    starCount: 3
  },
  {
    id: 14,
    url: Butwal,
    location: "Butwal tour",
    duration: "5 Days 4 Night",
    filter: "FAMILY TOUR",
    price: 20000,
    review: 50,
    starCount: 4
  },
  {
    id: 15,
    url: Pokhara,
    location: "Pokhara",
    duration: "2 Days 1 Night",
    filter: "FAMILY TOUR",
    price: 8000,
    review: 50,
    starCount: 3
  },
  {
    id: 16,
    url: Chitwan,
    location: "Chitwan tour",
    duration: "5 Days 4 Nights",
    filter: "FAMILY TOUR",
    price: 20000,
    review: 50,
    starCount: 5
  },
  {
    id: 17,
    url: Chitwan,
    location: "Chitwan tour",
    duration: "5 Days 4 Nights",
    filter: "FAMILY TOUR",
    price: 20000,
    review: 50,
    starCount: 5
  },
  {
    id: 18,
    url: Pokhara,
    location: "Pokhara",
    duration: "2 Days 1 Night",
    filter: "FAMILY TOUR",
    price: 8000,
    review: 50,
    starCount: 3
  },

  ]

 const style = {
  color: "white",
  fontStyle: "IBM Plex Sans",
  size: 14,
  fontWeight: 400
 }

 const Pages = [
  { name: 'Home', href: '/', current: false },
  { name: 'Things to do', href: '/Things', current: true },
]



  return (

    <div className="Things--Section">
      {/* Top Section */}
      <div
        className="top--section bg-gradient-to-r from-gray-900 to-transparent lg:bg-contain xl:bg-cover text-left bg-cover bg-no-repeat bg-center bg-[#000b] rounded-2xl mx-4 lg:mx-32 2xl:mx-36 py-8 md:py-16 "
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2)), url(${things})`,
        }}
      >
        <div className="container px-4 text-left">
        <div className="breadcrumbs">
        <nav className="flex" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-1">
        {Pages.map((page) => (
          <li key={page.name}>
            <div className="flex items-center">
              <a
                href={page.href}
                className="ml-4 text-sm xl:text-base font-['IBM_Plex_Sans'] font-[400] text-gray-50"
                aria-current={page.current ? 'page' : undefined}
              >
                {page.name}
              </a>
              <p className="ml-3 text-white"> /</p>
            </div>
          </li>
        ))}
      </ol>
    </nav>
        </div>
          <h1 className="font-['Manrope'] lg:mb-6 my-4  font-[800] lg:text-3xl text-3xl md:text-2xl text-[#ffffff]">
            Family Tour
          </h1>

          <div className="w-full">
            <p className="text-left font-['IBM_Plex_Sans'] font-[400] lg:text-base text-sm text-gray-100 mb-4 md:max-w-[35%]">
              Travel with your family, friend & loved ones and have life time
              experience.
            </p>
          </div>

          <button className="bg-[#19A948] py-3 px-4 rounded-lg font-['IBM_Plex_Sans'] font-[400] text-base text-white cursor-pointer">
            Get customized packages
          </button>
        </div>
      </div>

      {/* Mid--Section */}

      <div className="mid--section mx-4 lg:mx-36 my-24">
        <h1 className='font-["Manrope"] font-[700] 2xl:text-3xl text-2xl text-gray-800 mb-2'>
          Tours for Family
        </h1>
        <p className='font-["IBM_Plex_Sans"] font-[400] text-base text-gray-600 mb-4'>
          These are the packages that we have been providing to
        </p>

        {/* Multi-Row Carouosel */}

        <Pagination data={data}/>

        
      </div> 

      {/* bottom--section */}

      <DefaultPackage />
    </div>
  )
}

export default Things;