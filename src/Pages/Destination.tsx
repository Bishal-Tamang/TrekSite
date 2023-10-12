import Kathmandu from "../assets/Picture/Destination/Kathmandu.png";
import Pokhara from "../assets/Picture/Destination/Pokhara.png";
import Manang from "../assets/Picture/Destination/Manang.png";
import Chitwan from "../assets/Picture/Destination/Chitwan.png";
import Janakpur from "../assets/Picture/Destination/Janakpur.png";
import Solukhumbu from "../assets/Picture/Destination/Solukhumbu.png";
import Illam from "../assets/Picture/Destination/Illam.png";
import Mustang from "../assets/Picture/Destination/Mustang.png";

import { useNavigate } from "react-router-dom";

const Destination = () => {
  const navigate = useNavigate();

  const data = [
    {
      id: 1,
      url: Solukhumbu,
      title: "Solukhumbu",
      description:
        "Kathmandu, also spelled Kathmandu or Kantipur, capital of Nepal. ... It lies in a hilly region near the confluence of the Baghmati and Vishnumati rivers, at an elevation of 4,344 feet (1,324 metres) above sea level.",
    },
    {
      id: 2,
      url: Illam,
      title: "Illam",
      description:
        "Kathmandu, also spelled Kathmandu or Kantipur, capital of Nepal. ... It lies in a hilly region near the confluence of the Baghmati and Vishnumati rivers, at an elevation of 4,344 feet (1,324 metres) above sea level.",
    },
    {
      id: 3,
      url: Mustang,
      title: "Mustang",
      description:
        "Kathmandu, also spelled Kathmandu or Kantipur, capital of Nepal. ... It lies in a hilly region near the confluence of the Baghmati and Vishnumati rivers, at an elevation of 4,344 feet (1,324 metres) above sea level.",
    },
  ];

  const TopData = [
    {
      id: 1,
      url: [Kathmandu, Pokhara, Manang, Chitwan, Mustang],
      img: Kathmandu,
      title: "Kathmandu",
      description:
        "Kathmandu, also spelled Kathmandu or Kantipur, capital of Nepal. ... It lies in a hilly region near the confluence of the Baghmati and Vishnumati rivers, at an elevation of 4,344 feet (1,324 metres) above sea level.",
    },
    {
      id: 2,
      url: [Kathmandu, Pokhara, Manang, Chitwan, Mustang],
      img: Pokhara,
      title: "Pokhara",
      description:
        "Kathmandu, also spelled Kathmandu or Kantipur, capital of Nepal. ... It lies in a hilly region near the confluence of the Baghmati and Vishnumati rivers, at an elevation of 4,344 feet (1,324 metres) above sea level.",
    },
    {
      id: 3,
      url: [Kathmandu, Pokhara, Manang, Chitwan, Mustang],
      img: Manang,
      title: "Manang",
      description:
        "Kathmandu, also spelled Kathmandu or Kantipur, capital of Nepal. ... It lies in a hilly region near the confluence of the Baghmati and Vishnumati rivers, at an elevation of 4,344 feet (1,324 metres) above sea level.",
    },
    {
      id: 4,
      url: [Kathmandu, Pokhara, Manang, Chitwan, Mustang],
      img: Chitwan,
      title: "Chitwan",
      description:
        "Kathmandu, also spelled Kathmandu or Kantipur, capital of Nepal. ... It lies in a hilly region near the confluence of the Baghmati and Vishnumati rivers, at an elevation of 4,344 feet (1,324 metres) above sea level.",
    },
    {
      id: 5,
      url: [Kathmandu, Pokhara, Manang, Chitwan, Mustang],
      img: Janakpur,
      title: "Janakpur",
      description:
        "Kathmandu, also spelled Kathmandu or Kantipur, capital of Nepal. ... It lies in a hilly region near the confluence of the Baghmati and Vishnumati rivers, at an elevation of 4,344 feet (1,324 metres) above sea level.",
    },
  ];

  const handleClick = (link, state) => {
    window.scrollTo(0,0);
    navigate(link, state);
  }

  return (
    // Top section
    <div className="destination--section lg:mx-36 mx-4 mt-20 mb-8 text-center">
      <h1 className='font-["Manrope"] font-[700] mb-2 text-3xl text-gray-800'>
        Find 10+ Destination for your Next Holiday
      </h1>
      <div className="lg:w-full w-auto mx-4 lg:mx-0  flex justify-center mb-16">
        <p className='font-["IBM_Plex_Sans"] font-[400] text-base font-gray-600  lg:max-w-[42%]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          sagittis neque et sem consequat, tempor maximus justo posuere.
        </p>
      </div>

      {/* Mid Grid Section */}

      <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
        {TopData.map((item, index) => (
          <div
            key={item.id}
            className={index < 2 ? "md:col-span-3" : "md:col-span-2"}
            // onClick={() => navigate(`view/${item.id}`, { state: item })}
            onClick={()=> handleClick(`view/${item.id}`, { state: item })}
          >
            <div
              className="relative h-64 2xl:h-80 bg-cover bg-center rounded-2xl cursor-pointer"
              style={{
                backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)), url(${item.img})`,
              }}
            >
              <div className="absolute inset-0 flex items-end justify-start px-2 md:py-4 md:px-4">
                <h2 className="font-['Manrope'] font-[700] text-3xl text-white p-2 md:p-0 ">
                  {item.title}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mid Section */}

      <div className="bg-[#EDFAF0] flex flex-col justify-center items-center py-16 px-10 my-12 rounded-xl">
        <h1 className="font-['Manrope'] font-[700] text-xl md:text-3xl text-gray-800 mb-8">
          Enjoy Summer deals upto{" "}
          <span className="text-3xl md:text-5xl">30%</span> Discount
        </h1>
        <button
          type="button"
          className="bg-[#19A948] rounded-md py-3 px-4 font-['IBM_Plex_Sans'] font-[400] text-white cursor-pointer hover:bg-[#128B2B]"
        >
          Get information
        </button>
      </div>

      {/* After discount grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {data.map((item) => (
          <div
            key={item.id}
            className="relative h-64 2xl:h-80 bg-cover bg-center rounded-2xl cursor-pointer"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)), url(${item.url})`,
            }}
            onClick={()=> handleClick(`view/${item.id}`, { state: item })}
          >
            <div className="absolute inset-0 flex items-end justify-start px-2 md:py-4 md:px-4">
              <h2 className="font-['Manrope'] font-[700] text-3xl text-white p-2 md:p-0">
                {item.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destination;
