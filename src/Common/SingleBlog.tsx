import { BsArrowUpRight } from "react-icons/bs";

const ReadBtn = {
    display: 'flex',
    color: '#19A948',
    fontFamily: 'IBM Plex Sans',
    fontSize: '1rem',
    fontWeight: '500',
    gap: '0.5rem'
  }
  
  import Travel from '../assets/Picture/Blogs/travel.png'

 const SingleBlog = () => {
  return (
    <div className="single--component">
        <img src={Travel} className='w-full' alt="" />
        <h1 className='my-4 font-["Manrope"] font-[700] text-lg text-[#192638] '>Travel law passed this year.</h1>
        <p className='font-["IBM_Plex_Sans"] font-[400] text-[#596579] mb-4 text-base 2xl:w-[85%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis neque et sem consequat, tempor maximus justo posuere.</p>
        <a href="#"style={ReadBtn}>Read post <BsArrowUpRight/></a>
      </div>
  )
}

export default SingleBlog;