import { RiStarSFill } from "react-icons/ri";

import trademark from "../assets/Picture/Testimonials/quotationmark.png";


    interface DataProps {
        id: number;
        comment: string;
        name: string;
        location: string;
        starCount: number;
    }

    interface SliderProps {
        data: DataProps[];
    }

    const CommentBlock: React.FC<SliderProps> = ({data}) => {
        return data.map((item) => (
          <div
            key={item.id}
            className="carousel-slide mx-4 px-4 md:px-4 pt-8 pb-6 rounded-xl -z-20 bg-white cursor-pointer relative overflow-hidden"
          >
            <p className='frontal md:m-w-[89%] mb-6 font-["IBM_Plex_Sans"] font-[400] italic md:text-base text-xs text-[#374253] z-10'>
              {item.comment}
            </p>
    
            <img
              src={trademark}
              alt=""
              className="trademark absolute top-[7%] left-[5%] -z-10"
            />
    
            <div className="bottom--content md:flex flex-col items-start justify-between m-2 md:m-0">
              <div className="stars">
                <div className="flex">
                  {Array.from({ length: item.starCount }).map((_, index) => (
                    <RiStarSFill key={index} style={{ color: "#DACA3A" }} />
                  ))}
                </div>
              </div>
              <div className="flex justify-between items-end w-full overflow:hidden">
                <h1 className='font-["Manrope"] font-[700] text-[#374253] md:text-sm lg:text-base text-xs pt-2'>
                  {item.name}
                </h1>
                <div className="location">
                  <p className='font-["IBM_Plex_Sans] font-[500] md:text-sm lg:text-base text-xs italic text-[#374253]'>
                    {item.location}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ));
      };

export default CommentBlock