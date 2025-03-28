'use client'


import React from 'react'
import { FiPlus } from "react-icons/fi";
import { RiWhatsappFill } from "react-icons/ri";

const Services = () => {
  return (
    <div>
      
      <main className="py-28  bg-cover bg-center bg-no-repeat h-[80vh] px-[1rem] md:px-[3rem]" style={{ backgroundImage: "url('/image/047.jpg')"}}>
        <div className='font-poppins text-white flex flex-col pt-32'>
          <h3 className='text-5xl uppercase font-bold propertiesbg z-10 tracking-[5px]'>Our Services</h3>
          <ul className='flex gap-5 items-center'>
            <li className='text-2xl font-bold hvr-underline-from-left z-10 cursor-pointer'>Home</li>
            <li className='text-xl'><FiPlus /></li>
            <li className='text-2xl font-bold'>Services</li>
          </ul>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-black/0"></div>
      </main>

      <div className='px-[1rem] md:px-[3rem] pb-16 flex flex-col '>
              <h1 className='text-2xl lg:text-4xl font-bold tracking-[5px] text-center lg:pb-8  pt-8'>Services Provided by TehilJem Nigeria Limited</h1>
      
              <ul className='grid grid-cols-1 md:grid-cols-3 px-[2rem]  lg:flex gap-5 text-center items-center w-full justify-between py-8 md:shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
                <li className='hvr-shutter-in-vertical border-[2px] border-blue-600 px-3 py-1 cursor-pointer font-bold w-fit flex mx-auto'>Buy a Home</li>
                <li className='hvr-shutter-in-vertical border-[2px] border-blue-600 px-3 py-1 cursor-pointer font-bold w-fit flex mx-auto'>Buy a Land</li>
                <li className='hvr-shutter-in-vertical border-[2px] border-blue-600 px-3 py-1 cursor-pointer font-bold w-fit flex mx-auto'>Buy & Build </li>
              
              </ul>
      
              <div className='grid grid-cols-1 lg:flex pt-8 '>
                {/* div A */}
                <div>
                  <h1 className='text-2xl font-bold'>Transforming Bare Land into Thriving, Secure, <br /> and Comfortable Communities.</h1>
      
                  <p className='py-8 tracking-wide'>Our vision at TEHILJEM Nig. Ltd is to be the most trusted <br /> and respected real estate development company in Nigeria, <br /> renowned for our exceptional housing solutions, unparalleled <br /> customer service, and unwavering commitment to quality and <br /> integrity. We envision a future where every individual and family <br /> have access to affordable luxury housing, and where our <br /> developments become vibrant communities that enhance the <br /> quality of life for our clients and the nation at large.</p>
      
                  <div className='flex items-center justify-center'>
                    <button onClick={() => window.open("https://wa.me/2347068283250", "_blank")} className='px-8 flex items-center gap-2 py-3 ring ring-blue-700 rounded-md lg:rounded-full bg-white hover:bg-blue-700 text-blue-700 hover:text-white font-bold'>CONTACT SALES <RiWhatsappFill className='text-green-400'/></button>
                  </div>
                </div>
      
      
                {/* div B image or video*/}
                <div className=' flex justify-center mt-16 lg:ml-auto'>
                  <video src='https://res.cloudinary.com/ddj0ticsg/video/upload/v1743176002/www.tehiljem.com_k0scgh.mp4' typeof='mp4' width={500} height={500} alt='video' autoPlay muted controls className='rounded-lg'/>
                </div>
              </div>
      
      
            </div>






    </div>
  )
}

export default Services
