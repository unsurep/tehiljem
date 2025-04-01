'use client'

import React from 'react'
import { FiPlus } from "react-icons/fi";
import { RiWhatsappFill } from "react-icons/ri";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";

const Contact = () => {
  return (
     <div className='font-montserrat'>
          
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


          {/* address info */}
          <div className='px-[1rem] md:px-[3rem] pb-16 flex flex-col py-20 '>
            <h1 className='lg:text-4xl text-2xl text-center tracking-[5px]'>Our Contact Information</h1>  
            {/* 3 div problem */}

            <div className='lg:flex items-center gap-8 justify-between gird grid-cols-1 py-10'>
              {/* 1 */}
            <div className='flex items-center gap-5 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] px-8 py-3'>
              <h1><FaMapMarkerAlt /></h1>
              <div>
                <p className='text-xl font-bold'>Office Address</p>
                <p>Suit 315B DMB PLAZA, <br />WUSE ZONE 1</p>
              </div>
            </div>

            {/* 2 */}
            <div className='flex items-center gap-5 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] px-8 py-3 my-8'>
              <h1><FaPhoneAlt /></h1>
              <div>
                <p className='text-xl font-bold'>Contact Number</p>
                <div className='flex flex-col'>
                  <p>Mobile: +234 706-828-3250</p>
                  <p>email:  info@tehiljem.com <br /> obasanmileo81@gmail.com</p>
                </div>
              </div> 
            </div>

            {/* 3 */}
            <div className='flex items-center gap-5 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] px-8 py-3'>
              <h1><MdOutlineAccessTimeFilled /></h1>
              <div>
                <p className='text-xl font-bold'>Hours of Operation</p>
                <div className='flex flex-col'>
                  <p>Monday - Friday 8:00am - 5:00pm</p>
                  <p>Saturday & Sunday - Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className='flex flex-col items-center justify-between'>
            <h1 className='text-2x md:text-4xl font-bold py-8'>Get In Touch</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 w-full gap-10 '>

              {/* Name */}
              <label className='w-full'>
                <input 
                  type='text'
                  placeholder='Your Name*'
                  required
                  className='w-full outline-none bg-gray-200 px-6 py-3'
                  
                  />
              </label>

              {/* Email */}
              <label className='w-full'>
                <input 
                  type='email'
                  placeholder='Email Address*'
                  required
                  className='w-full outline-none bg-gray-200 px-6 py-3'
                  />
              </label>


               {/* Address */}
               <label className='w-full'>
                <input 
                  type='text'
                  placeholder='Address*'
                  className='w-full outline-none bg-gray-200 px-6 py-3'
                  />
                </label>


              {/* Email */}
              <label className='w-full'>
                <input 
                  type='number'
                  placeholder='Phone Number*'
                  required
                  className='w-full outline-none bg-gray-200 px-6 py-3'
                  />
              </label>


              {/* Message */}
              <label className='w-full'>
                <textarea 
                  type='text'
                  placeholder='Write Your Message*'
                  required
                  className='w-full outline-none bg-gray-200 px-6 py-3'
                  />
              </label>
            </div>

            <div className='flex items-center justify-center hvr-bounce-to-right my-6 py-4 w-full bg-amber-500'>
              <button className='flex items-center gap-2  font-bold cursor-pointer mx-auto'>SEND MESSAGE <LiaLongArrowAltRightSolid /></button>
            </div>
          </div>

          {/* Google map  */}
      
          <div id='contactgps'>
            <iframe
              className="w-full h-screen border-0"
              src={`https://maps.google.com/maps?q=Suit+315B+DMB+PLAZA%2C+WUSE+ZONE+1&output=embed`}
              allowFullScreen
              loading="lazy"
              ></iframe>
          </div>


          


      
    
    
    
    
    </div>
    
        </div>
  )
}

export default Contact
