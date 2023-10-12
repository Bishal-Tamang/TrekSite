import { useState } from 'react'

import { useNavigate } from 'react-router-dom'

import Logo from '../assets/Picture/Navbar/Logo.png'

import {RxHamburgerMenu} from 'react-icons/rx'


import User from '../assets/Picture/Navbar/user.png'

const Navbar = ({activeState, handleClick}) => {

  const navigate = useNavigate();


  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
   
  };

  const data = [
    {
      id:1,
      title: "Plan your trip",
      url: "/plans"
    },
    {
      id:2,
      title: "Things to do",
      url: "/Things"
    },
    {
      id:3,
      title: "Destination",
      url: "/destination"
    },
    {
      id:4,
      title: "Reviews",
      url: "/review"
    },
    {
      id:5,
      title: "Contact",
      url: "/contact"
    }
  ]

  return (
    <div className='xl:mx-36 2xl:mx-40 relative flex justify-between items-center my-5 lg:mx-24 mx-4 md:mx-8'>
      <div className='flex items-center'>
         <img src={Logo} 
        style={{width: '7.25rem', height: '42px'}} 
        alt="navigator" 
        className='cursor-pointer' 
        onClick={() => handleClick('/', null)
        }
        />

        </div>

        <div className='flex items-center'>
            <div >
                <ul className={` absolute transition-all duration-500 ease-in ${isMenuOpen ? ' flex flex-col items-center rounded-2xl md:rounded-none  bg-white w-full left-0 top-[100%] pl-4 pt-4 pb-10 z-10' : 'hidden'} 
                md:flex-row md:bg-transparent md:static md:py-0 md:pl-0 md:flex xl:justify-between 
                xl:gap-[40px] xl:mr-[45px] font-[26px] md:mr-[10px] md:justify-end md:gap-[20px] font-["IBM_Plex_Sans"] cursor-pointer`}>

                    {data.map((item, index) =>(
                     <div key={item.id}>

                        <li 
                      key={item.id} 
                      className='my-2 md:my-0 cursor-pointer font-["IBM_Plex_Sans"] font-[400] text-gray-700' 
                      onClick={()=> handleClick(`${item.url}`, index)}
                      style={activeState === index ? { 
                        color: '#19A948' , 
                        borderBottom: '2px solid #19A948',
                        transition: 'border-bottom .8s linear' 
                        }
                       : null}
                      >{item.title}
                      
                      </li>

                      </div>
                    ))}
                </ul>
            </div> 

            <div className='flex border-2 items-center justify-between rounded-lg border-[#CCF5E1] h-[32px] w-[61px]  p-[2px] cursor-pointer'>
                {window.innerWidth < 768 ? 
                (<RxHamburgerMenu size={20} onClick ={handleMenuClick}/>) : 
                (<RxHamburgerMenu size={20} />)}
                <img src={User} alt="user" className='bg-[#CCF5E1] rounded-[20px] rounded-b-[20px] p-1 h-[28px] ml-2'/>
            </div>   
        </div>  
    </div>
  )
}

export default Navbar