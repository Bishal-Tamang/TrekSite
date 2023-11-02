import React from 'react'

import Logo1 from '../assets/Picture/Association/logo 1.png'
import Logo2 from '../assets/Picture/Association/logo 2.png'
import Logo3 from '../assets/Picture/Association/logo 3.png'
import Logo4 from '../assets/Picture/Association/logo 4.png'
import Logo5 from '../assets/Picture/Association/logo 5.png'
import Logo6 from '../assets/Picture/Association/logo 6.png'

const Organization = () => {

  const data = [
    {
      id: 1,
      url: Logo1
    },
    {
      id: 2,
      url: Logo2
    },
    {
      id: 3,
      url: Logo3
    },
    {
      id: 4,
      url: Logo4
    },
    {
      id: 5,
      url: Logo5
    },
    {
      id: 6,
      url: Logo6
    }
  ]
  return (
    <div className='organization--container z-20  mt-10 mb-20 flex flex-col justify-center items-center'>
      <h1 className='font-["Manrope"] font-[600] text-base text-black mb-8'>Our Association</h1>

      <div className='organization--logos flex justify-between gap-5 md:gap-10 lg:gap-16'>
        {data.map(item=>(
          <img key={item.id} src={item.url} className="w-8 h-8 md:w-16 md:h-16"  alt="" />
        ))}
      </div>
    </div>
  )
}

export default Organization