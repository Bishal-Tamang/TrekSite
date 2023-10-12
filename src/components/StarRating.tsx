import { useState } from "react";
import { FaStar } from "react-icons/fa"
import { useForm } from 'react-hook-form'
import { register } from "swiper/element";



const StarRating = ({register, errors, reset, rating, setRating, hover, setHover}) => {

  return (
    <div className="stars ">
          <div className="flex gap-2">
          {[...Array(5)].map((star, index) => {
        const currentRating = index + 1;
        return (
          <label 
          key={index} 
          htmlFor={`starRating-${currentRating}`}
          >
          <input 
          className="cursor-pointer hidden"
          type="radio"
          id={`starRating-${currentRating}`}
          value={currentRating}
          onClick={ 
            () => {
            setRating(currentRating)
            console.log("Clicked");
            }
          }
          {...register('starRating', {
            required: {
              value: true,
              message: "Please insert your rating",
            },
          })}
          />
          {/* <p className="error">{errors.starRating?.message}</p> */}

          <FaStar 
          size={50} 
          className="cursor-pointer" 
          color={currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
          onMouseEnter={() => setHover(currentRating)}
          onMouseLeave={() => setHover(null)}
          />
         
        </label>
        );
       
        })}
          </div>
    </div>

  )
}

export default StarRating