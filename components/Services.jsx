import React from 'react'
import { FiPlus } from "react-icons/fi";

const Services = () => {
  return (
    <>
      <main className="py-28  bg-cover bg-center bg-no-repeat h-[80vh] px-[1rem] md:px-[3rem]" style={{ backgroundImage: "url('/image/tjh1.jpg')"}}>
        <div className='font-poppins text-white flex flex-col pt-32'>
          <h3 className='text-5xl uppercase font-bold propertiesbg z-10 tracking-[5px]'>Services</h3>
          <ul className='flex gap-5 items-center'>
            <li className='text-2xl font-bold hvr-underline-from-left z-10 cursor-pointer'>Home</li>
            <li className='text-xl'><FiPlus /></li>
            <li className='text-2xl font-bold'>Services</li>
          </ul>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-black/20"></div>
    
      </main>
    </>
  )
}

export default Services
