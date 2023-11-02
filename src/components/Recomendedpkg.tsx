const Recomendedpkg = () => {
  return (
    <div>
        <div className="bottom--section w-full bg-[#EDFAF0] py-16 mt-20 md:mt-48 mb-8 text-center">
        <h1 className="font-[Manrope] font-[700] text-xl md:text-2xl  text-gray-800 mb-2">
          Not sure which package to pick for ?
        </h1>
        <p className='font-["IBM_Plex_Sans"] font-[400] text-sm md:text-base text-gray-600 mb-8'>
          Talk to our trip experts now to get the best deal
        </p>

        <div className="inputs flex flex-col md:flex-row justify-center gap-4 md:gap-2 mx-4 md:mx-0">
          <input
            type="text"
            placeholder="Your Name"
            className='md:w-[20%] py-2 px-4 font-["IBM_Plex_Sans"] font-[400] placeholder-[#8797A8] text-base text-black border border-gray-400 rounded-md'
          />
          <input
            type="email"
            placeholder="Your Email"
            className='md:w-[20%] py-2 px-4 font-["IBM_Plex_Sans"] font-[400] placeholder-[#8797A8] text-base text-black border border-gray-400 rounded-md'
          />
          <input
            type="number"
            placeholder="Mobile No."
            className='md:w-[20%] py-2 px-4 font-["IBM_Plex_Sans"] font-[400] placeholder-[#8797A8] text-base text-black border border-gray-400 rounded-md'
          />
          <button
            type="submit"
            className='bg-[#19A948] rounded-md py-3 px-4 font-["IBM_Plex_Sans"] font-[400] text-base text-white cursor-pointer'
          >
            Get callback
          </button>
        </div>
      </div>
    </div>
  )
}

export default Recomendedpkg