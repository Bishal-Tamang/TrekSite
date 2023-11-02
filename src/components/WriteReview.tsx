import Reviewimg from "../assets/Picture/Review/ReviewSVG.png"

import ReviewForm from "./Forms/ReviewForm";

const WriteReview = () => {
  return (
    <div className="2xl:mx-36 lg:mx-28 mx-4 my-16">
      <div className="top--section text-center mb-12">
        <h1 className="font-['Manrope'] font-[700] text-gray-800 2xl:text-3xl text-2xl">Write Review</h1>
        <div className="mt-2">
        <p className="2xl:w-[25%] lg:w-[35%] md:w-[45%] mx-auto text-gray-600 font-['IBM_Plex_Sans'] text-base ">
          You can contribute and help us by sharing your experience with other
          traveller.
        </p>
        </div>
        
      </div>
      

      <div className="bottom--section flex flex-col-reverse lg:flex-row lg:justify-between md:mx-8 lg:mx-0">
      <ReviewForm />
      <div className="lg:w-[30%] w-full mb-12 lg:mb-0">
      <img src={Reviewimg} className="mx-auto" alt="" />
      </div>
      </div>
    </div>
  );
};

export default WriteReview;
