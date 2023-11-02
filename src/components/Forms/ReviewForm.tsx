import { useForm } from 'react-hook-form'
import {DevTool} from '@hookform/devtools'
import {useState} from 'react'

import StarRating from '../StarRating'

import {HiUpload} from 'react-icons/hi'

import '../../assets/Styles/reviewform.css'


const ReviewForm = () => {

    type FormValues = {
        destination: string;
        activity: string;
        review: string;
        photo: FileList;
        starRating: number;
    };
    
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    const form = useForm<FormValues>();
    const {register, control, handleSubmit, formState, reset} = form;
    const {errors} = formState;
    
    const onSubmit = (data: FormValues) => {
        console.log("Form Submitted", data);
        form.reset();
        setRating(null);
        setHover(null);
    };
    
    const rowNo = window.innerWidth > 1280 ? 11 : 0

    const styles = {
        display: 'block',
        width: "100%",
        padding: "13px 16px",
        fontSize: "0.9rem",
        lineHeight: 1.42,
        color: "black",
        borderImage: "none",
        border: "1px solid #A7B2C3",
        borderRadius: "6px",
        marginBottom: ".5rem",
      
      }

    //   const [rating, setRating] = useState(0);

  return (
    <div className='lg:w-[45%]'>
        <form className="form--container" onSubmit={handleSubmit(onSubmit)} noValidate>
           <div className="form-control">
           <label htmlFor="destination">
                Destination*
            </label>
            <select 
            style={styles}
            id="destination"
            {...register('destination', {
                required: {
                    value: true,
                    message: "Please select your destination",
                },
            })}>
                <option value="">Select</option>
                <option value="kathmandu">Kathmandu</option>
                <option value="pokhara">Pokhara</option>
                <option value="chitwan">Chitwan</option>
            </select>
            <p className='error'>{errors.destination?.message}</p>
           </div>

          <div className="form-control">
          <label htmlFor="activity">
            Which Activity Did You Do?*
           </label>
           <select 
            style={styles}
           id="activity"
           {...register('activity', {
            required: {
                value: true,
                message: "Please select your Activity",
            },
           })}>
            <option value="">Select</option>
            <option value="hiking">Hiking</option>
            <option value="trekking">Trekking</option>
            <option value="picnic">Picinc</option>
            <option value="camping">Camping</option>
           </select>
           <p className='error'>{errors.activity?.message}</p>
          </div>

          <div className="form-control">
            <label htmlFor="rating">
                Rate Your Experience*
            </label>

           <div>
           <StarRating 
           register={register}
           errors={errors}
           rating={rating}
           setRating={setRating}
           hover={hover}
           setHover={setHover}
           reset={reset}
           />
           <p className='error'>{errors.starRating?.message}</p>
           </div>

          </div>

            <div className="form-control">
                <label htmlFor="review">Leave a Review</label>
                <textarea 
                style={styles}
                id="review" 
                rows={rowNo} 
                placeholder="Tell people about your experience. Describe the place or activity recommended for traveller?"
                {...register('review', {
                    required: {
                        value: true,
                        message: "Please leave your review",
                    },
                })}/>
                <p className='error'>{errors.review?.message}</p>
            </div>

            <div className="form-control">
            <label>Upload Your Travel Photo</label>
            <label 
            htmlFor="travelPhoto" 
            className='font-["IBM_Plex_Sans"] text-base font-[400] flex flex-col justify-center items-center border border-dashed border-[#A7B2C3] rounded-md cursor-pointer h-[9rem]'
            {...register('photo')}
            >
                Upload here 
                <HiUpload className="text-[#19A948]"/>
            </label>

            <input 
            type="file"
            id="travelPhoto"
            accept='image/*'
            className='hidden'
             />
            
            </div>

           <div className='lg:text-right mt-4 lg:mt-0'>
           <button 

           type="submit" 
           className="bg-[#19A948] w-full lg:w-auto py-3 px-4 rounded-md font-['IBM_Plex_Sans'] font-[400] text-white text-base cursor-pointer hover:bg-[#128B2B]">
            Submit

            </button>

           </div>
        <DevTool control={control} />
        </form>
    </div>
  )

 
}

export default ReviewForm