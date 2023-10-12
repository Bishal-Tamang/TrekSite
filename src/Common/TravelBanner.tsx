import travel from "../assets/Picture/Blogs/blogbg.png";

import {useNavigate} from 'react-router-dom';

const TravelBanner = () => {

  const navigate = useNavigate();

  const handleClick = (link: string) => {
    window.scrollTo(0, 0);
    navigate(link);
  }

  return (
    <div>
      <div
        className="lg:bg-cover 2xl:bg-cover bg-no-repeat bg-cover bg-center bg-[#000b] relative rounded-2xl mx-4 lg:mx-32 2xl:mx-36 py-8 md:py-16 "
        style={{ backgroundImage: `url(${travel})` }}
      >
       
       <div className="container  mx-auto px-4 text-center">
          <h1 className="font-['Manrope'] mb-2 font-[700] text-xl md:text-2xl text-white">
            Contribute to us by writing reviews
          </h1>
          <div className="w-full">
            <p className="font-['IBM_Plex_Sans'] font-[400] mx-auto text-base text-white mb-4 lg:max-w-[55%]">
              You can contribute and help us by sharing your experience with
              other travelers.
            </p>
          </div>
          <button 
          className="bg-[#19A948] py-3 px-4 rounded-lg font-['IBM_Plex_Sans'] font-400 text-base text-white cursor-pointer hover:bg-[#128B2B]"
          onClick={() => handleClick('/write-review')}
          >
            Write review
          </button>
        </div>
       </div>
      </div>
    
  );
};

export default TravelBanner;
