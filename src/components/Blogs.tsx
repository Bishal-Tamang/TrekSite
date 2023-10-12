import Travel from '../assets/Picture/Blogs/travel.png'
import Forest from '../assets/Picture/Blogs/forest.png'
import Lake from '../assets/Picture/Blogs/lake.png'

import { useNavigate } from 'react-router-dom'

import {BsArrowRight, BsArrowUpRight} from 'react-icons/bs'

const data = [
  {
    id:1,
    url: Forest,
    title: "Visit Nepal 2022",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis neque"
  },
  {
    id:2,
    url: Lake,
    title: "Visit Nepal 2022",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis neque"
  }
]

const ReadBtn = {
  display: 'flex',
  color: '#19A948',
  fontFamily: 'IBM Plex Sans',
  fontSize: '1rem',
  fontWeight: '500',
  gap: '0.5rem'
}


const Nested_blog = () =>{
  return(
    <>
      {data.map(item=>(
      <div key={item.id} className='flex mb-8 w-full h-full rounded-xl'>
      <div className='rounded-2xl w-full'>
        <img src={item.url} className='rounded-xl w-full h-full object-cover' alt=""/>
      </div>

      <div className="right--side ml-4">
        <h1 className='font-["Manrope"] font-[700] text-lg text-[#192638] my-2 2xl:my-2 '>
          {item.title}
        </h1>

        <p className='text-[#596579] font-["IBM_Plex_Sans"] text-base font-[400] mb-4 2xl:mb-4 2xl:w-[80%]'>
          {item.content}
        </p>

        <a href="" style={ReadBtn}>Read post <BsArrowUpRight/></a>
      </div>
    </div>
    ))}
    </>
  )

  
}


const Blogs = () => {

  const navigate = useNavigate();

  const handleClick = (link: string) => {
    window.scrollTo(0, 0);

    navigate(link);
  }


  return (
    <div className='mx-5 lg:mx-36 xl:mx-40 mt-[105px] mb-10'>
      <h1 className='font-["Manrope"] font-[700] text-2xl text-[#192638] mb-8'>Our Latest News, Blogs & More..</h1>
      <div className='flex gap-8'>

        <div className="left-part">
          <img src={Travel} className='w-full object-cover' alt="" />
          <h1 className='my-4 font-["Manrope"] font-[700] text-lg text-[#192638] '>Travel law passed this year.</h1>
          <p className='font-["IBM_Plex_Sans"] font-[400] text-[#596579] mb-4 text-base 2xl:w-[85%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis neque et sem consequat, tempor maximus justo posuere.</p>
          <a href="#"style={ReadBtn}>Read post <BsArrowUpRight/></a>
        </div>

        <div className="right-part hidden  md:flex flex-col items-center justify-start">
          <Nested_blog />
        </div>
      </div>

      <div className='w-full flex text-center items-center justify-center'>
      <a href="" className='w-full flex justify-center gap-2 items-center font-["IBM_Plex_Sans"] font-[500] text-base text-[#12A347] mt-14'
        onClick={()=> handleClick('/blogs')}
      >Read all blogs <BsArrowRight/></a>
      </div>
    </div>
  )
}

export default Blogs