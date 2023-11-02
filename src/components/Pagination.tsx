import  { useState, useEffect } from 'react';

import {RiStarSFill} from 'react-icons/ri'
import {GrNext} from 'react-icons/gr'
import {GrPrevious} from 'react-icons/gr'

const ITEMS_PER_PAGE = 6;

interface Item {
    id: number;
    url: string;
    location: string;
    duration: string;
    filter: string;
    price: number;
    review: number;
    starCount: number;

}

interface PaginationProps {
    data: Item[];
}


const Pagination = ({ data }: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  useEffect(()=>{
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, [currentPage] )


  // Calculate start and end index of the current page
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  // Get the data for the current page
  const currentPageData = data.slice(startIndex, endIndex);

  return (
    <div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 '>
      {currentPageData.map((item) => (
         <div
         key={item.id}
         className="md:max-w-1/3 mx-[2px] flex flex-col rounded-2xl shadow-xl ring-offset-5 ring-offset-y-5 ring-offset-30 ring-rgba(0, 0, 0, 0.1) cursor-pointer  overflow:hidden"
       >

         {/* button icon */}



         <div className="top relative p-2">
           <img src={item.url} alt="" className="w-full" />
           <p className='font-["IBM_Plex_Sans"] font-[500] text-[0.5rem] md:text-base text-[#F3FFFD] bg-[#323C52] px-2 py-2  rounded-[5px] absolute md:left-[5%] left-[10%] bottom-[-3%]'>
             {item.filter}
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
     
    </div>
   <div className="buttons mt-6 text-right">
   <button
        type="button"
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
        className='rounded-full border cursor-pointer border-[#19A948] p-4 mx-2 hover:shadow-lg hover:shadow-green-300 transition duration-500'
      >
        <GrPrevious size={20}/>
      </button>
      <button
        type="button"
        onClick={handleNextPage}
        disabled={endIndex >= data.length}
        className='rounded-full border cursor-pointer border-[#19A948] p-4 hover:shadow-lg hover:shadow-green-300 transition duration-500'
      >
        <GrNext size={20}/>
      </button>
   </div>
    </div>
  );
}

export default Pagination;