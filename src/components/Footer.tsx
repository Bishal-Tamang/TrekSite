import Organization from "./Organization";
import Logo from "../assets/Picture/Navbar/Logo.png";
import { useNavigate } from "react-router-dom";

import {
  FaFacebookF,
  FaYoutube,
  FaInstagramSquare,
  FaTwitter,
} from "react-icons/fa";

import "../assets/Styles/footer.css";

import mountain from "../assets/Picture/Footer/footer-background.png";
const Footer = ({activeState, handleClick}) => {
  const navigate = useNavigate();

  const styles = {
    backgroundImage: `url(${mountain})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundOrigin: "border",
    backgroundPosition: "center",
  };


  const InnerContent = () => {
    return (
      <div className="md:flex justify-between text-center md:text-start">
        {/* Find us on */}
        <div>
          <h1 className="font-['Manrope'] font-[600] text-lg text-[#192638]">
            Find us on
          </h1>

          <div className="inner-content font-['IBM_Plex_Sans'] text-gray-700 font-regular text-base">
            <ul className="my-4">
              <li className="pb-4 cursor-pointer">
                <div className="flex items-center justify-center md:justify-normal gap-2 text-gray-700 text-base">
                  <a href="https://facebook.com" className="flex items-center gap-2"><FaFacebookF /> Facebook</a>
                </div>
              </li>

              <li className="pb-4 cursor-pointer">
                <div className="flex items-center justify-center md:justify-normal gap-2 text-gray-700 text-base">
                  <a href="https://instagram.com" className="flex items-center gap-2"><FaInstagramSquare /> Instagram</a>
                </div>
              </li>

              <li className="pb-4 cursor-pointer">
                <div className="flex items-center justify-center md:justify-normal gap-2 text-gray-700 text-base">
                  <a href="https://twitter.com" className="flex items-center gap-2"><FaTwitter /> Twitter</a>
                </div>
              </li>

              <li className="pb-4 cursor-pointer">
                <div className="flex items-center justify-center md:justify-normal gap-2 text-gray-700 text-base">
                  <a href="https://youtube.com" className="flex items-center gap-2"><FaYoutube /> YouTube</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

                                    {/* Quick Links */}

        <div>
          <h1 className="font-['Manrope'] font-[600] text-lg text-[#192638]">
            Quick Links
          </h1>

          <div className="inner-content font-['IBM_Plex_Sans'] text-gray-700 font-regular text-base">
            <ul className="my-4">
              <li className="pb-4 cursor-pointer"
                  onClick={() => handleClick('/Things', 1)}
              >
               Things to do
              </li>

              <li className="pb-4 cursor-pointer" onClick={() => handleClick('/destination', 2)}>
                Destination
              </li>

              <li className="pb-4 cursor-pointer" onClick={() => handleClick('/write-review', null)}>
                Write review
              </li>

              <li className="pb-4 cursor-pointer" onClick={()=> handleClick('/blogs')}>
                Blogs
              </li>
            </ul>
          </div>
        </div>

                                       {/* About */}

        <div>
          <h1 className="font-['Manrope'] font-[600] text-lg text-[#192638]">
            About
          </h1>

          <div className="inner-content font-['IBM_Plex_Sans'] text-gray-700 font-regular text-base">
            <ul className="my-4">
              <li className="pb-4 cursor-pointer" onClick={() => handleClick('/about')}>
               About us
              </li>

              <li className="pb-4 cursor-pointer" onClick={() => handleClick('/contact', 4)}>
                Contact us
              </li>

              <li className="pb-4 cursor-pointer">
                Sitemap
              </li>

              <li className="pb-4 cursor-pointer">
               Term & condition
              </li>
            </ul>
          </div>
        </div>


      </div>
    );
  };

  return (
    <div className="lg:testing parent-container pt-2" style={styles}>
      {/* <div className={`parent-container pt-2 ${window.innerWidth >= 1024 ? 'testing' : ''}`} style={styles}>  contidional rendering of the class testing not working*/}
      {/* Organization content */}
      <Organization />

      {/* Footer Content */}
      <div className="footer-container mx-5 lg:mx-36 xl:mx-40 flex justify-between md:flex-row flex-col">
        <div className="footer-left md:block flex flex-col justify-center items-center">
          <img 
          src={Logo} 
          alt="" 
          className="text-5xl cursor-pointer" 
          onClick={() => handleClick('/', null)}  
          />
          <p className="lg:w-[60%] 2xl:w-[45%] font-['IBM_Plex_Sans'] font-[400] text-base text-[#596579] my-6 mx-4 md:mx-0">
            Spell travels is established in 1998 by an Act of Parliament in the
            form of partnership between the Government of Nepal and private
            sector tourism industry to develop and market Nepal as an attractive
            tourist destination.
          </p>
          <p className="font-['IBM_Plex_Sans'] font-[400] text-base text-[#374253] mb-24">
            &copy; Spell travels. All Rights Reserved.
          </p>
        </div>

        <div className="footer-right 2xl:w-[60%] md:min-w-[50%]">
          <InnerContent />
        </div>
      </div>


    </div>
  );
};

export default Footer;

// onClick={()=>navigate('/about-usyy')}
