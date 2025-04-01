'use client';

import React from 'react'
import Image from 'next/image'
import { SocialIcon } from 'react-social-icons'
import { MdLocationOn } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { RiRobot3Line } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";
import Link from 'next/link';

const Footer = () => {
  return (
    <div>
    <div className='px-[1rem] md:px-[3rem] py-16  dark:bg-black/90 text-white grid grid-cols-1 md:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:gap-10'>

      {/* tehiljem logo */}
      <div className='flex flex-col gap-8'>
        <div className='flex items-center gap-1'>
          <Link href={'/'}>
            <Image src='/image/tjhomelogo.png' width={50} height={50} alt='tehiljem logo' />
          </Link>

          <Link href={'/'} className='text-base md:text-xl font-semibold text-blue-900 font-poppins'>Tehiljem Nig Ltd</Link>
        </div>

        <p className='text-sm md:text-base font-poppins'>Tehiljem- Elevating real estate with trust, <br /> innovation, and excellence. Your dream <br /> home starts here!</p>

        <div className='space-y-1 font-poppins text-sm md:text-base'>
          <Link href='/contact#contactgps' className='items-center flex gap-3 font-poppins '><span><MdLocationOn className='text-red-500' /></span>Suit 315B DBM PLAZA, WUSE ZONE 1</Link>

          <div className='items-center flex gap-3 font-poppins'><span><BiSolidPhoneCall /></span>+234806-864-5460</div>
          <div className='items-center flex gap-3 font-poppins'><span><MdEmail /></span>info@tehiljem.com</div>
        </div>
        
        <div className='flex gap-3'>
          <SocialIcon
            url="https://www.facebook.com/profile.php?id=61567110009668&mibextid=ZbWKwL"
            target="_blank"
            network="facebook"
            style={{ height: 23, width:23,}}
            className="colorscheme " 
          />
         

          <SocialIcon
            url="https://www.youtube.com/@tehiljemgroup"
            target="_blank"
            network="youtube"
            style={{ height: 23, width: 23,}}
            className="colorscheme" 
          />

          <SocialIcon
            url="https://www.instagram.com/tehiljemgroup?igsh=MWd1Zjl2dWllbTR5bw%3D%3D&utm_source=qr"
            target="_blank"
            network="instagram"
            style={{ height: 23, width: 23,}}
            className="colorscheme" 
          />

          <SocialIcon
            url="https://www.tiktok.com/@tehiljemgroup?_t=ZM-8v1vApItbN9&_r=1"
            target="_blank"
            network="tiktok"
            style={{ height: 23, width: 23,}}
            className="colorscheme" 
          />

          <SocialIcon
            url="https://wa.me/2348068645460 "
            target="_blank"
            network="whatsapp"
            style={{ height: 23, width: 23,}}
            className="colorscheme" 
          />

        </div>

       
        
      </div>

    
      {/* Navigation */}
      <div className='font-poppins text-sm md:text-base pt-8'>
        <h1 className='text-base md:text-xl font-semibold hvr-underline-from-center'>Navigate</h1>
        <div className='pt-3 flex flex-col gap-3'>
          <Link href={'/'} className='hvr-wobble-horizontal cursor-pointer hover:text-blue-900 hove:font-bold'>Home</Link>

          <Link href={'/about'} className='hvr-wobble-horizontal cursor-pointer hover:text-blue-900 hover:font-bold'>About Us</Link>

          <Link href={'/properties'} className='hvr-wobble-horizontal cursor-pointer hover:text-blue-900 hover:font-bold'>Properties</Link>

          <Link href={'/serv'} className='hvr-wobble-horizontal cursor-pointer hover:text-blue-900 hover:font-bold'>Our Services</Link>

          <Link href={'/contact'} className='hvr-wobble-horizontal cursor-pointer hover:text-blue-900 hover:font-bold'>Contact Us</Link>

          <Link href={'/blog'} className='hvr-wobble-horizontal cursor-pointer hover:text-blue-900 hover:font-bold'>Blog/News</Link>

          <Link href={'/contact#contactgps'} className='hvr-wobble-horizontal cursor-pointer hover:text-blue-900 hover:font-bold'>Locations Map</Link>
        </div>
      </div>


      {/* Customer Care */}
      <div className='font-poppins text-base pt-8'>
        <h1 className='text-base md:text-xl font-semibold hvr-underline-from-center'>Customer Care</h1>
        <div className='flex flex-col gap-5 pt-3 text-sm md:text-base'>

          <div className=' flex  items-center gap-2 hover:text-blue-900 hover:font-bold'><RiRobot3Line className='text-blue-500 text-2xl'/> Chat with our AI-bot</div> 

          <div onClick={() => window.open("https://wa.me/2348068645460", "_blank")} className=' flex items-center gap-2  cursor-pointer hover:text-blue-900 hover:font-bold'><span className='text-green-500 text-2xl'><IoLogoWhatsapp /></span>Chat / Call Us +234806-864-5460 </div>

          {/* <div className='hvr-wobble-horizontal cursor-pointer hover:text-blue-900 hover:font-bold'>Contact Us</div> */}
          {/* <div className='hvr-wobble-horizontal cursor-pointer hover:text-blue-900 hover:font-bold'>Office Location</div>
          <div className='hvr-wobble-horizontal cursor-pointer hover:text-blue-900 hover:font-bold'>FAQ</div> */}
        </div>
      </div>

    </div>


    <h1 className='text-center text-xs md:text-sm font-poppins px-[2rem]'>© 2025 |  TehilJem Nigeria Limited  | All Rights Reserved. | Developer: <span className='font-bold text-blue-800'>Loukama Tech Solutions</span></h1>


    </div>
  )
}

export default Footer
