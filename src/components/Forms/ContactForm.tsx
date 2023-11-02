import { useForm } from 'react-hook-form'
import {DevTool} from '@hookform/devtools'
import '../../assets/Styles/contactForm.css'

const ContactForm = () => {

  const styles = {
    display: 'block',
    width: "100%",
    padding: "13px 16px",
    fontSize: "0.9rem",
    lineHeight: 1.42,
    color: "#C2C3C5",
    borderImage: "none",
    border: "1px solid #A7B2C3",
    borderRadius: "6px",
    marginBottom: ".5rem"

  }

    type FormValues = {
        name: string;
        number: number;
        email: string;
        message: string;

    };

    const form = useForm<FormValues>();
    const {register, control, handleSubmit, formState} = form;
    const {errors} = formState;

    const onSubmit = (data: FormValues) => {
        console.log("Form Submitted", data);
    };

    const rowNo = window.innerWidth > 1280 ? 11 : 0

  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>

            <div className="form-controller flex flex-col">
            <label htmlFor="name">
                Full Name*
                </label>
              <input
                type="text"
                id="name"
                {...register("name", {
                    required: {
                        value: true,
                        message: "*Full name is required"
                    },
                })}
                placeholder="Full name"
                style={styles}
              />
              <p className='error'>{errors.name?.message}</p>

              <div className="flex flex-col lg:flex-row justify-between gap-2">

                <div className="phone-number w-full">
                <label htmlFor="number">
                    Phone number*
                </label>
                <input 
                type="number" 
                id="number" 
                {...register("number",{
                    required: {
                        value: true,
                        message: "*Phone number is required"
                    },
                    pattern: {
                        value: /^\d{10}$/,
                        message: "*The phone number must be 10 digits"
                    }
                })} 
                placeholder="9814017327"
                style={styles}
                />
                <p className='error'>{errors.number?.message}</p>
                </div>

               <div className="email w-full">
               <label htmlFor="email">
                    Email*
                </label>
                <input 
                type="email" 
                id="email" 
                {...register("email",{
                    required: {
                        value: true,
                        message: "*Email is required"
                    },
                    pattern: {
                        value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                        message: "*Invalid Email",
                    },
                })} 
                placeholder="abc@example.com"
                style={styles}
                />
                <p className='error'>{errors.email?.message}</p>
              </div>
               </div>

              <label htmlFor="message">
                Message
                </label>
              <textarea 
              rows={rowNo}
              id="message" 
              {...register("message")}
              placeholder="I would like to...."
              className='block w-full py-3 px-4 text-[#C2C3C5] border border-solid border-[#A7B2C3] rounded-md mb-[1.5rem]'
              />

              <button className="bg-[#19A948] py-3 px-4 rounded-md font-['IBM_Plex_Sans'] font-[400] text-base text-white cursor-pointer hover:bg-[#36C869] transition duration-500">Submit</button>
            </div>
              
            </form>
            <DevTool control={control} />
    </div>
  )
}

export default ContactForm