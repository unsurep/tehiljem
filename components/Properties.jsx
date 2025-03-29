'use client'

import React from 'react'
import { FiPlus } from "react-icons/fi";
import Link from 'next/link';
import Image from 'next/image';
import { RiWhatsappFill } from "react-icons/ri";

const Properties = () => {
  return (
    <div>
      <main className="py-28  bg-cover bg-center bg-no-repeat font-montserrat h-[90vh] px-[1rem] md:px-[3rem]" style={{ backgroundImage: "url('/image/tjh.png')"}}>
        <div className='font-poppins text-white flex flex-col pt-32'>
          <h3 className='text-5xl uppercase font-bold propertiesbg z-10 tracking-[5px]'>Properties</h3>
          <ul className='flex gap-5 items-center'>
            
            <Link href={'/'}>
              <li className='text-2xl font-bold hvr-underline-from-left z-10 cursor-pointer'>Home</li>
            </Link>

            <li className='text-xl'><FiPlus /></li>
            <li className='text-2xl font-bold'>Properties</li>
          </ul>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-black/0"></div>
      </main>

      <div className='px-[1rem] md:px-[3rem] pb-16 flex flex-col '>
        <h1 className='text-2xl lg:text-4xl font-bold tracking-[5px] text-center lg:pb-8  pt-8'>Properties of TehilJem Nigeria Limited</h1>

        <ul className='grid grid-cols-1 md:grid-cols-3 px-[2rem]  lg:flex gap-5 text-center items-center w-full justify-between py-8 md:shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
          <li className='hvr-shutter-in-vertical px-3 border-[2px] border-blue-600 py-1 cursor-pointer font-bold w-fit flex mx-auto'>Scepter City</li>
          <li className='hvr-shutter-in-vertical px-3 border-[2px] border-blue-600 py-1 cursor-pointer font-bold w-fit flex mx-auto'>Jemzys Court</li>
          <li className='hvr-shutter-in-vertical px-3 border-[2px] border-blue-600 py-1 cursor-pointer font-bold w-fit flex mx-auto'>The Haven</li>
          <li className='hvr-shutter-in-vertical px-3 border-[2px] border-blue-600 py-1 cursor-pointer font-bold w-fit flex mx-auto'>Villa Ecclesia</li>
          <li className='hvr-shutter-in-vertical px-3 border-[2px] border-blue-600 py-1 cursor-pointer font-bold w-fit flex mx-auto'>Rio Dominion Estate</li>
          <li className='hvr-shutter-in-vertical px-3 border-[2px] border-blue-600 py-1 cursor-pointer font-bold w-fit flex mx-auto'>TJ Homes</li>
        </ul>

        <div className='grid grid-cols-1 lg:flex pt-8 '>
          {/* div A */}
          <div>
            <h1 className='text-2xl font-bold'>Transforming Bare Land into Thriving, Secure, <br /> and Comfortable Communities.</h1>

            <p className='py-8 tracking-wide'>Our mission at TEHILJEM Nig. Ltd is to revolutionize the real estate <br /> industry in Nigeria by providing exceptional housing solutions that <br /> combine excellence with affordable luxury. We are committed to <br /> delivering personalized services, building long-term relationships, <br /> and continuously improving our processes to exceed customer <br /> expectations. Through our dedication to quality, integrity, and <br /> customer satisfaction, we aim to be the leading real estate <br /> development company in Nigeria, making a positive impact on the <br /> lives of our clients and the communities we serve.</p>

            <div className='flex items-center justify-center'>
              <button onClick={() => window.open("https://wa.me/2347068283250", "_blank")} className='px-8 flex items-center gap-2 py-3 ring ring-blue-700 rounded-md lg:rounded-full bg-white hover:bg-blue-700 text-blue-700 hover:text-white font-bold'>CONTACT SALES <RiWhatsappFill className='text-green-400'/></button>
            </div>
          </div>


          {/* div B image or video*/}
          <div className=' flex justify-center mt-16 lg:ml-auto'>
            <video src='https://res.cloudinary.com/ddj0ticsg/video/upload/v1743123293/tjv_wvprie.mp4' typeof='mp4' width={500} height={500} alt='video' autoPlay muted controls className='rounded-lg'/>
          </div>
        </div>


      </div>



    </div>
  )
}

export default Properties;
