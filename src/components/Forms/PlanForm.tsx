import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

import BenefitModel from "../../Pages/Benefit-model";

import '../../assets/Styles/reviewform.css'

import { useState } from "react";

type FormValues = {
  name: string;
  email: string;
  mobile: number;
  GroupSize: string;
  TravelDate: Date;
  Destination: string;
  EstimatedBudget: number;
  FlexibleBudget: boolean;
  age: number;
  message: string;
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

const PlanForm = () => {
  const form = useForm<FormValues>();
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;



  const [open, setOpen] = useState<any>(false);

  const [user, setUser] = useState("");

  const onSubmit = (data: FormValues) => {
    console.log("Form Submitted", data);
    setOpen(data.name);

    setUser(data.name);

  };


  return (
    <div className="mx-4 lg:mx-36 mt-8 mb-24">
      <form onSubmit={handleSubmit(onSubmit)} noValidate className="">
        <div className="first--col flex flex-col md:flex-row justify-between w-full">
        <div className="form-control md:w-[32%] name--section">
          <label htmlFor="name" className="mb-2">Name*</label>
          <input
            type="text"
            id="name"
            style={styles}
            placeholder="Full name"
            {...register("name", {
              required: {
                value: true,
                message: "Full name is required",
              },
            })}
          />
            <p className="error">{errors.name?.message}</p>
        </div>

        <div className="form-control md:w-[32%] email--section">
          <label htmlFor="email" className="mb-2">Email*</label>
          <input
            type="email"
            style={styles}
            id="email"
            placeholder="Your mail"
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },
              pattern: {
                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                message: "*Invalid Email",
            },
            })}
          />
          <p className="error">{errors.email?.message}</p>
        </div>

        <div className="form-control md:w-[32%] phone--section">
          <label htmlFor="mobile" className="mb-2">Mobile No.*</label>
          <input
            type="tel"
            style={styles}
            id="number"
            placeholder="Your number"
            {...register("mobile", {
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
          <p className="error">{errors.mobile?.message}</p>

        </div>
        </div>

        {/* DropDown */}
        <div className="second--col flex flex-col md:flex-row justify-between ">
            <div className="form-control md:w-[32%] group--size">
            <label htmlFor="groupSize" className="mb-2">Group Size *</label>
          <select  
          id="groupSize"
          style={styles}
          {...register('GroupSize', {
            required: {
              value: true,
              message: "Please select the group size",
            },
          })}>
            <option value=''>Select</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>

          </select>
          <p className="error">{errors.GroupSize?.message}</p>

            </div>

            <div className="form-control md:w-[32%] travel--dates">
              <label htmlFor="Traveldate" className="mb-2">Travel Dates*</label>
              <input 
              id="TravelDate"
              style={styles}
                className="custom-date-input"
                // placeholder="select"
                type="date" 
                {...register('TravelDate', {
                  required: {
                    value: true,
                    message: "Please provide a date",
                  },
                })}
                />
            </div>

            <div className="form-control md:w-[32%] destination--section">
                <label htmlFor="Destination*" className="mb-2">Destination</label>
                <select  
                id="Destination"
                style={styles}
          {...register('Destination', {
            required: {
              value: true,
              message: "Please select your desired destination",
            },
          })}>
            <option value=''>Select</option>
            <option value="kathmandu">Kathmandu</option>
            <option value="pokhara">Pokhara</option>
            <option value="chitwan">Chitwan</option>

          </select>
          <p className="error">{errors.Destination?.message}</p>

            </div>

        </div>

        <div className="third-col flex flex-col md:flex-row justify-between ">
          <div className="form-control md:w-[32%] esbudget--section">
            <label htmlFor="EstimatedBudget" className="mb-2">Your Estimated Budget* (Rs.)</label>
            <input
            id="EstimatedBudget"
            placeholder="10000"
            style={styles}
             type="number" 
             {...register('EstimatedBudget', {
              required: {
                value: true,
                message: "Please enter your estimated budget",
              },
             })}
             />
          <p className="error">{errors.EstimatedBudget?.message}</p>


          </div>

          <div className="form-control md:w-[32%] fxbudget--section">
             <label htmlFor="FlexibleBudget" className="mb-2">Is your Budget Flexible</label>
             <select  
             id="FlexibleBudget"
             style={styles}
          {...register('FlexibleBudget', {
            required: {
              value: true,
              message: "Please state whether your budget is flexible or not",
            },
          })}>
            <option value=''>Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>

          </select>
          <p className="error">{errors.FlexibleBudget?.message}</p>

          </div>

          <div className="form-control md:w-[32%] age">
            <label htmlFor="age" className="mb-2">Primary Age of Adults*</label>
            <select  
            id="age"
            style={styles}
          {...register('age', {
            required: {
              value: true,
              message: "Please state the primary age of adults",
            },
          })}>
            <option value=''>Select</option>
            <option value="small">20-30</option>
            <option value="medium">30-40</option>
            <option value="large">40-50</option>

          </select>
          <p className="error">{errors.age?.message}</p>

          </div>
        </div>

        <div className="experience">
          <label htmlFor="message" className="mb-2">Describe the Experience You Want</label>
          <textarea 
          style={styles}
              rows={10}
              id="message" 
              {...register("message")}
              placeholder="I would like to...."
              className='block w-full py-3 px-4 text-[#C2C3C5] border border-solid border-[#A7B2C3] rounded-md mb-[1.5rem]'
              />
        </div>

        <div className="buttons flex justify-end gap-4">
        <button type="reset" className="bg-[#E6FAF0] rounded-md py-3 px-4 font-['IBM_Plex_Sans'] font-[400] text-[#616161] text-base cursor-pointer hover:bg-[#D4F1E3]">Cancel</button>

        <button type="submit" className="bg-[#19A948] py-3 px-4 rounded-md font-['IBM_Plex_Sans'] font-[400] text-white text-base cursor-pointer hover:bg-[#128B2B] ">Submit</button>
        </div>
      </form>
      <DevTool control={control} />


        <BenefitModel open={open} setOpen={setOpen} user={user}/>

    </div>
  );
};

export default PlanForm;
