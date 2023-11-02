import first from '../assets/Picture/Features/currency.png';
import second from '../assets/Picture/Features/navigation.png';
import third from '../assets/Picture/Features/badge.png'

const Features = () => {

const data = [
    {
        id:1,
        icon: first,
        title: "Stay Flexible",
        content: "Flexible cancellation options on all venues"
    },
    {
        id:2,
        icon: second,
        title: "50+ Travel Destination",
        content: "Different destination for travel all available here."
    },
    {
        id:3,
        icon: third,
        title: "Book with confidence",
        content: "Easy booking and skip-the-line tickets on your phone"
    },
] 

  return (

    <div className=" grid sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 xl:mx-36 lg:mx-24 mx-4 mb-24">
      {data.map( item => (
        <div key={item.id} className="bg-[#E8FBF1] flex gap-5 items-start py-4 px-5 rounded-xl">
          <div className='icon'>
            <img src={item.icon} alt="" />
          </div>

          <div className='content'>
            <h1 className='font-["Manrope"] font-[600] text-base text-gray-600 mb-2'>{item.title}</h1>
            <p className='font-["IBM_Plex_Sans"] font-[400] text-base text-gray-600 '>{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Features