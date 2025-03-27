import React from 'react'
import { FiPlus } from "react-icons/fi";

const About = () => {
  return (
    <div>
      <main className="py-28  bg-cover bg-center bg-no-repeat h-[90vh] px-[1rem] md:px-[3rem]" style={{ backgroundImage: "url('/image/tjh1.jpg')"}}>
        <div className='font-poppins text-white flex flex-col pt-32'>
          <h3 className='text-5xl uppercase font-bold propertiesbg z-10 tracking-[5px]'>About Us</h3>
          <ul className='flex gap-5 items-center'>
            <li className='text-2xl font-bold hvr-underline-from-left z-10 cursor-pointer'>Home</li>
            <li className='text-xl'><FiPlus /></li>
            <li className='text-2xl font-bold'>About</li>
          </ul>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-black/0"></div>

        
    
      </main>
      {/* About Tehiljem */}
      <div className='px-[1rem] md:px-[3rem] py-5'>
        <h1 className='text-4xl font-bold tracking-[5px] text-center'>About TehilJem Nigeria Limited</h1>
        <p></p>
        







      </div>
      
    </div>
  )
}

export default About
