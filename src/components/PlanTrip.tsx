import { useNavigate } from "react-router-dom";

import mountain from "../assets/Picture/PlanTrip/mountain.png";


const App = () => {

  const handleClick = (link:string) => {
    scrollTo(0,0);
    navigate(link);
  }

  const navigate = useNavigate();

  return (
    <div className="lg:mx-36 mx-4 md:px-14 px-8 md:bg-cover bg-center bg-no-repeat rounded-lg" style={{ backgroundImage: `url(${mountain})` }}>
      <div className="content text-left md:pt-24 pt-16 pb-16 md:pb-20">
        <h1 className="mb-3 md:mb-4 font-['Manrope'] font-[700] text-[1.75rem] text-white">Get out there!!!</h1>
        <p className="mb-8 font-['IBM_Plex_Sans'] font-[400] text-sm md:text-base text-white md:max-w-[35%]">
          Book your custom packages all according to your wish
        </p>
        <button 
        className="bg-[#19A948] text-white px-4 py-2 rounded font-['IBM_Plex_Sans' font-[400] text-sm md:text-base"
        onClick={() => handleClick('/plans')}
        >
          Plan your trip now
        </button>
      </div>
    </div>
  )
};

export default App;
