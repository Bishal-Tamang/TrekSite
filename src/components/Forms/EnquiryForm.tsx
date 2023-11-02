import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

import '../../assets/Styles/enquiryform.css'

const EnquiryForm = () => {

    type FormValues = {
        name: string;
        email: string;
        phone: number;
        tour: string;
        noPerson: string;
        tourDate: Date;
        enquiry: string;
    };

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

      const form = useForm<FormValues>();
      const {register, control, handleSubmit, formState} = form;
      const {errors} = formState;
    
    const onSubmit = (data: FormValues) => {
        console.log("Form Submitted", data);
    };

  return (
    <div className="mt-4">
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="first-col flex flex-col md:flex-row justify-between md:gap-5">
                <div className="form-control md:w-[50%]">
                    <label htmlFor="name">
                        Name*
                    </label>
                    <input 
                    type="text" 
                    id="name" 
                    placeholder="Full name" 
                    style={styles}
                    {...register('name', {
                        required: {
                            value: true,
                            message: "Please provide your full name",
                        },
                    })}
                    />
                    <p className="error">{errors.name?.message}</p>
                </div>

                <div className="form-control md:w-[50%]">
                    <label htmlFor="email">
                        Email*
                    </label>
                    <input 
                    type="email" 
                    id="email" 
                    placeholder="Your mail" 
                    style={styles}
                    {...register('email', {
                        required: {
                            value: true,
                            message: "Please enter your email",
                        },
                        pattern: {
                            value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                            message: "*Invalid Email",
                        },
                    })}
                    />
                    <p className="error">{errors.email?.message}</p>
                </div>
            </div>

            <div className="second-col flex md:flex-row flex-col justify-between md:gap-5">
                <div className="form-control md:w-[50%]">
                <label htmlFor="mobile">
                    Mobile No.*
                </label>

                <input 
                type="tel" 
                id="mobile" 
                placeholder="9812989042" 
                style={styles}
                {...register("phone", {
                    required: {
                      value: true,
                      message: "Mobile number is required",
                    },
                    pattern: {
                      value: /^\d{10}$/,
                      message: "*The phone number must be 10 digits"
                  }
                  })}
                />
                <p className="error">{errors.phone?.message}</p>

                </div>

                <div className="form-control md:w-[50%]">
                    <label htmlFor="tour">
                        Tour Name*
                    </label>

                    <input 
                    type="text" 
                    id="tour"  
                    placeholder="Kathmandu tour - 11 days 10 nights" 
                    style={styles}
                    {...register('tour', {
                        required: {
                            value: true,
                            message: "Please provide your tour name",
                        },
                    })}
                    />
                    <p className="error">{errors.tour?.message}</p>
                </div>
            </div>

            <div className="third-col flex flex-col md:flex-row justify-between md:gap-5">
                <div className="form-control md:w-[50%]">
                    <label htmlFor="NumberPerson">
                        No. of Person*
                    </label>
                    <input 
                    type="text" 
                    id="NumberPerson" 
                    placeholder="2 adult 1 child" 
                    style={styles}
                    {...register('noPerson', {
                        required: {
                            value: true,
                            message: "Please enter the number of persons",
                        },
                    })}
                    />
                    <p className="error">{errors.noPerson?.message}</p>
                </div>

                <div className="form-control md:w-[50%]">
                    <label htmlFor="date">
                        Preferred Tour Date*
                    </label>
                    <input 
                    type="date" 
                    placeholder="Select" 
                    id="date" 
                    style={styles}
                    {...register('tourDate', {
                        required: {
                            value: true,
                            message: "Please enter your tour date",
                        },
                    })}
                    />
                    <p className="error">{errors.tourDate?.message}</p>
                </div>
            </div>

            <div className="form-control">
                <label htmlFor="enquiry">
                    Your Enquiry*
                </label>

                <textarea 
                id="enquiry"
                placeholder="I want to know the ........"
                style={styles}
                {...register('enquiry', {
                    required: {
                        value: true,
                        message: "Please enter your enquiry"
                    }
                })}
                />
                <p className="error">{errors.enquiry?.message}</p>
            </div>

            <div className="buttons flex justify-end gap-4">
        <button type="reset" className="bg-[#E6FAF0] rounded-md py-3 px-4 font-['IBM_Plex_Sans'] font-[400] text-[#616161] text-base cursor-pointer hover:bg-[#D4F1E3]">Cancel</button>

        <button type="submit" className="bg-[#19A948] py-3 px-4 rounded-md font-['IBM_Plex_Sans'] font-[400] text-white text-base cursor-pointer hover:bg-[#128B2B] ">Submit</button>
        </div>


        </form>
        <DevTool control={control} />
    </div>
  )
}

export default EnquiryForm