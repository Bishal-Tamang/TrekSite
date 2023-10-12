import '../../assets/Styles/carousel.css'

import {BsCamera} from 'react-icons/bs'

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// interface DataProps {
//     id: number;
//     url: string[];
//     location: string;
// }

// interface SliderProps {
//     data: DataProps[];
// }

const Slider = ({data}: any) => {
// const Slider: React.FC<SliderProps> = ({data}) => {

return (
<div>
        <Carousel showThumbs={false} showStatus={false} className='bottom-[10%]'>
                                        
            {data.map( (item: any) =>(
                <div  key={item.id} className="h-[500px] relative rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent">
                    
                    <img src={item.url} alt="" className="h-full w-full object-cover mix-blend-multiply" />
                  
                    <div className='absolute z-10 bottom-[15%] left-0 right-0 p-4 flex items-center justify-center gap-2'>
                        <BsCamera size={18} className='z-10 text-white'/>
                        <p className="text-[#F4F7FB] font-['Manrope'] font-[600] leading-[25px]">{item.location}</p>
                    </div>
                </div>
                </div>
            )
                
            )}
             
    </Carousel>
</div>
)
}

export default Slider