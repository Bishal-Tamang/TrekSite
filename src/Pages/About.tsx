import Blog from "../components/Blogs";

import aboutImg from '../assets/Picture/About/AboutBanner.png'

import Paw from '../assets/Picture/About/Paw.png'

const About = () => {
  return (
    <div className="">
      <div className="top--section md:my-16 lg:mx-36 md:mx-12">
        <div className="before-img w-full flex flex-col justify-center items-center">
          <h1 className="font-['Manrope'] font-[700] text-2xl text-gray-800 mb-2">About Spell Tour</h1>
          <p className="lg:w-[45%] 2xl:w-[25%] md:w-[60%] mx-4 text-center font-['IBM_Plex_Sans'] font-[400] text-gray-600 text-base mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            sagittis neque et sem consequat, tempor maximus justo posuere.
          </p>
        </div>

        <div className="relative">
            <img src={aboutImg} alt="" className="mx-auto mb-12" />
                {/* Small Div within image */}
            <div className="bg-white rounded-lg opacity-80 py-4 px-2 md:inline-block absolute 2xl:top-[15%] 2xl:left-[20%] lg:top-[10%] lg:left-[5%] md:top-[5%] md:left-[2%] hidden">
              <div className="flex flex-col items-center">
              <img src={Paw} alt="" />
              <h1 className="text-gray-800 font-['Manrope'] lg:text-lg text-sm font-[800]">100 +</h1>

              <h1 className="font-['IBM_Plex_Sans'] text-gray-800 font-[400] lg:text-2xl text-center">Happy<br /> Travellers</h1>
              </div>
            </div>
        </div>

        <div className="after-image w-full flex flex-col justify-center items-center">
            <h1 className=" font-['Manrope'] font-[700] text-lg text-[#192638] mb-2">Changing how the world travel</h1>
            <p className="lg:max-w-[80%] 2xl:max-w-[60%] md:max-w-[80%] mx-4 lg:text-center mb-24">We’re on a journey to transform ordinary trips into extraordinary ones. We are your guide, bringing you personal experiences. Wherever your travels take you, we’ll show you the unique and unmissable things to do in your destination. With GetYourGuide on your side (and in your pocket), creating memorable moments has never been easier. Today, millions have used GetYourGuide to turn their travel dreams into reality. And we’re just getting started. We're changing the way people connect to the places they visit so anyone can create their dream vacation. It’s your journey, your way.</p>

        </div>
      </div>


      <div className="bg-[#E6FAF0] py-16">
        <Blog />
      </div>
    </div>
  );
};

export default About;
