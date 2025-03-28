'use client'

import React from 'react'
import { FiPlus } from "react-icons/fi";
import { RiWhatsappFill } from "react-icons/ri";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
     <div>
          
          <main className="py-28  bg-cover bg-center bg-no-repeat h-[80vh] px-[1rem] md:px-[3rem] relative">
          <video 
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay 
          loop 
          muted 
          playsInline>
          <source src="https://res.cloudinary.com/ddj0ticsg/video/upload/v1743176002/www.tehiljem.com_k0scgh.mp4" />
        </video> 

            <div className='font-poppins  flex flex-col pt-32'>
              <h3 className='text-5xl uppercase font-bold propertiesbg z-10 tracking-[5px]'>Contact Us</h3>
              <ul className='flex gap-5 items-center'>
                <li className='text-2xl font-bold hvr-underline-from-left z-10 cursor-pointer text-black'>Home</li>
                <li className='text-xl'><FiPlus /></li>
                <li className='text-2xl font-bold text-black'>Contact</li>
              </ul>
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-black/0"></div>
          </main>


          {/* contact form */}
          <div className='px-[1rem] md:px-[3rem] pb-16 flex flex-col '>
            <h1 className='lg:text-4xl text-2xl text-center'>Our Contact Information</h1>  
            {/* 3 div problem */}

            <div className='flex items-center justify-between'>
              {/* 1 */}
            <div className='flex items-center gap-5'>
              <h1><FaMapMarkerAlt /></h1>
              <div>
                <p>Office Address</p>
                <p>Suit 315B DMB PLAZA, WUSE ZONE 1</p>
              </div>
            </div>

            {/* 2 */}
            <div className='flex items-center gap-5'>
              <h1><FaPhoneAlt /></h1>
              <div>
                <p>Contact Number</p>
                <div className='flex flex-col'>
                  <p>mobile</p>
                  <p>email</p>
                </div>
              </div>
            </div>

            {/* 3 */}
            <div className='flex items-center gap-5'>
              <h1><FaPhoneAlt /></h1>
              <div>
                <p>Hours of Operation</p>
                <div className='flex flex-col'>
                  <p>mobile</p>
                  <p>email</p>
                </div>
              </div>
            </div>
          
                  
          
          
          </div>
    
    
    
    
    </div>
    
        </div>
  )
}

export default Contact
