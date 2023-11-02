import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'


interface DestinationProps {
    title: string;
}


const FAQ = ({title}: DestinationProps) => {

    
const Qas = [
    {
        id: 1,
        question: `What are the top attraction of ${title} ?`,
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vehicula sed sem ac scelerisque. Proin blandit est arcu, nec feugiat.",
    },
    {
        id: 2,
        question: `What is famous in ${title} ?`,
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vehicula sed sem ac scelerisque. Proin blandit est arcu, nec feugiat.",
    },
    {
        id: 3,
        question: `Who should visit ${title} ?`,
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vehicula sed sem ac scelerisque. Proin blandit est arcu, nec feugiat.",
    },
    {
        id: 4,
        question: `What is not so good at ${title} ?`,
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vehicula sed sem ac scelerisque. Proin blandit est arcu, nec feugiat.",
    },
  
    {
        id: 5,
        question: `What are the places near ${title} ?`,
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vehicula sed sem ac scelerisque. Proin blandit est arcu, nec feugiat.",
    },
]

    

  return (
    <div>
        <h1 className='font-["Manrope"] font-[700] text-gray-800 2xl:text-3xl text-2xl mb-8'>Frequently Asked Question about {title}</h1>

        <div className="w-full">
            {Qas.map(item => (
                 <div key={item.id} className="">
                 <Disclosure>
                   {({ open }) => (
                     <>
                       <Disclosure.Button className="flex w-full justify-between border-t border-[#D0D7E2] py-3 xl:py-6 text-left font-['IBM_Plex_Sans'] font-[500] text-base xl:text-lg text-gray-700">
                         <span>{item.question}</span>
                         <ChevronUpIcon
                           className={`${
                             open ? 'rotate-180 transform' : ''
                           } h-5 w-5 text-[#12A347]`}
                         />
                       </Disclosure.Button>
                       <Disclosure.Panel className="px-4 py-2 font-['IBM_Plex_Sans'] font-[400] text-base text-gray-700">
                         {item.answer}
                       </Disclosure.Panel>
                     </>
                   )}
                 </Disclosure>
               </div>
            ))}
        
      
        </div>
    </div>
  )
}

export default FAQ;