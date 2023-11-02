import TravelBanner from '../Common/TravelBanner'

import SingleBlock from '../Common/SingleBlog'

const Blogs = () => {
  return (
    <div className="Blogs my-8">
        <div className="top-section">
        <div className="before-img w-full flex flex-col justify-center items-center">
          <h1 className="font-['Manrope'] font-[700] text-2xl text-gray-800 mb-2">Resources & Insights</h1>
          <p className="lg:w-[45%] 2xl:w-[25%] md:w-[60%] mx-4 text-center font-['IBM_Plex_Sans'] font-[400] text-gray-600 text-base mb-8">
            The latest industry news, interviews, travel news, and resources.
          </p>
        </div>
        </div>

        <div className="imgs mx-4 lg:mx-36 mt-12 mb-24">

          <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-4">
          <SingleBlock />
          <SingleBlock />
          <SingleBlock />
          <SingleBlock />
          </div>
         
        </div>

        <div className="lower-section">

        <TravelBanner />
        
        </div>


    </div>
  )
}

export default Blogs