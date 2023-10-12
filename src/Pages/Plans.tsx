import PlanForm from "../components/Forms/PlanForm";
import Features from "../components/Features";

import ghostbg from '../assets/Picture/PlanTrip/ghostPlan.png'

const Plans = () => {
  return (
    <div >
      
      <div className="plans--section mx-4 lg:mx-36 mt-8 text-center">
      <div className='top--section pt-28' style={{backgroundImage: `url(${ghostbg})`, backgroundRepeat: "no-repeat", backgroundOrigin: 'center', backgroundSize:"contain"}}>
      <h1 className="font-['Manrope'] font-[700] text-gray-800 text-2xl mb-2">Let's Plann Your Trip</h1>
      <div className=" flex justify-center mb-24">
      <p className="font-['IBM_Plex_Sans'] font-[400] text-gray-700 text-base md:w-[70%] 2xl:w-[45%]">
        Every Trip or vacation becomes part of your life, sometimes people
        travel to remember the moment and sometimes to foget something.
        Whichever is your reason. Spell tour would love to hear about your
        desire from the trip to Nepal and suit your itinerary according to your
        wish. We might not be the genie ou saw in moveis but we'll make all
        wishes come true in every possible manner from the trip with us.
      </p>
      </div>
      </div>
      </div>

      <PlanForm />
      <Features />
    </div>
  );
};

export default Plans;
