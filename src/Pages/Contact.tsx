import TravelBanner from "../Common/TravelBanner";
import ContactForm from "../components/Forms/ContactForm";

import '../assets/Styles/contactForm.css'


import { IoMdPin } from "react-icons/io";
import { FaPhoneVolume, FaEnvelope, FaLinkedinIn } from "react-icons/fa";
import { BsFillShareFill, BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

import map from '../assets/Picture/Contact/Map.png'

const Contact = () => {

  return (
    <div className="my-20">
      <div className="top-section">
        <div className="before-img w-full flex flex-col justify-center items-center">
          <h1 className="font-['Manrope'] font-[700] text-2xl text-gray-800 mb-2">
            Contact Us
          </h1>
          <p className="lg:w-[45%] 2xl:w-[25%] md:w-[60%] mx-4 text-center font-['IBM_Plex_Sans'] font-[400] text-gray-600 text-base mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            sagittis neque et sem consequat, tempor maximus justo posuere.
          </p>
        </div>
      </div>

 
      <div className="mid-section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-10 md:mx-20 lg:mx-28 xl:mx-32 2xl:mx-36 my-12">
        
        {/* First Section */}
        <div className="bg-[#E6FAF0] rounded-xl h-40">
          <div className="inner-div md:px-10 md:py-8 flex justify-center items-center flex-col h-full md:h-auto md:block">
            <h1 className="flex gap-2 items-center font-['Manrope'] text-lg text-gray-700 font-[600]">
              <IoMdPin />
              Address
            </h1>

            <div className="content font-['IBM_Plex_Sans'] font-[400] text-lg text-gray-600 mt-2">
              <p>
                Koteshwor,
                <br /> Kathmandu, Nepal
              </p>
            </div>
          </div>
        </div>

        {/* Second Section */}
        <div className="bg-[#E6FAF0] rounded-xl h-40">
          <div className="inner-div md:px-10 md:py-8 flex justify-center items-center flex-col h-full md:h-auto md:block">
            <h1 className="flex gap-2 items-center font-['Manrope'] text-lg text-gray-700 font-[600]">
              <FaPhoneVolume />
              Phone
            </h1>
            <div className="content font-['IBM_Plex_Sans'] font-[400] text-lg text-gray-600 mt-2">
              <p>
                +91-11-47041506
                <br /> +91-11-54488403
              </p>
            </div>
          </div>
        </div>

        {/* Third Section */}
        <div className="bg-[#E6FAF0] rounded-xl h-40">
          <div className="inner-div  md:px-10 md:py-8 flex justify-center items-center flex-col h-full md:h-auto md:block">
            <h1 className="flex gap-2 items-center font-['Manrope'] text-lg text-gray-700 font-[600]">
              <FaEnvelope />
              Email
            </h1>
            <div className="content font-['IBM_Plex_Sans'] font-[400] text-lg text-gray-600 mt-2">
              <p>info@spelltravel&tour.in</p>
            </div>
          </div>
        </div>

        {/* Fourth Section */}
        <div className="bg-[#E6FAF0] rounded-xl h-40">
          <div className="inner-div md:px-10 md:py-8 flex justify-center items-center flex-col h-full md:h-auto md:block">
            <h1 className="flex gap-2 items-center font-['Manrope'] text-lg text-gray-700 font-[600]">
              <BsFillShareFill />
              Share
            </h1>
            <div className="content font-['IBM_Plex_Sans'] font-[400] text-lg text-gray-600 mt-2">
              <div className="flex gap-4">
                <div className=" rounded-full border border-solid border-gray-700 p-2">
                <a href="https://facebook.com"><FaFacebookF className="cursor-pointer" /></a>
                </div>

                <div className=" rounded-full border border-solid border-gray-700 p-2">
                <a href="https://twitter.com"><BsTwitter className="cursor-pointer"  /></a>
                </div>
                
                <div className=" rounded-full border border-solid border-gray-700 p-2">

                <a href="https://linkedin.com">< FaLinkedinIn className="cursor-pointer" /></a>
                </div>

                <div className=" rounded-full border border-solid border-gray-700 p-2">

                <a href="https://instagram.com"><AiFillInstagram className="cursor-pointer" /></a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="middle-section mx-4 lg:mx-32 mb-24">
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="left lg:w-[48%] overflow-hidden mb-8 md:px-8 md:py-8 md:mb-16 lg:mb-0">
            <img src={map} alt="" className=" w-full"/>
          </div>

          <div className="right lg:w-[50%]">

            <h1 className="font-['Manrope'] font-[700] text-gray-800 text-2xl  mb-6 text-center">Message us for any queries</h1>

            <ContactForm />
            
          </div>
        </div>
      </div>

      <div className="bottom-section">
        <TravelBanner />
      </div>
    </div>
  );
};

export default Contact;
