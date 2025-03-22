import React from 'react'
import Image from 'next/image'
import { SocialIcon } from 'react-social-icons'
import { MdLocationOn } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { RiRobot3Line } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  return (
    <div>
    <div className='px-[1rem] md:px-[3rem] py-16  dark:bg-black/90 text-white grid grid-cols-1 md:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:gap-10'>

      {/* tehiljem logo */}
      <div className='flex flex-col gap-8'>
        <div className='flex items-center gap-1'>
          <div>
            <Image src='/image/tjhomelogo.png' width={50} height={50} alt='tehiljem logo' />
          </div>
          <div className='text-base md:text-xl font-semibold text-blue-900 font-poppins'>Tehiljem Nig Ltd</div>
        </div>

        <p className='text-sm md:text-base font-poppins'>Tehiljem- Elevating real estate with trust, <br /> innovation, and excellence. Your dream <br /> home starts here!</p>

        <ul className='space-y-1 font-poppins text-sm md:text-base'>
          <li className='items-center flex gap-3 font-poppins '><span><MdLocationOn className='text-red-500' /></span>Suit 315B DMB PLAZA, WUSE ZONE 1</li>
          <li className='items-center flex gap-3 font-poppins'><span><BiSolidPhoneCall /></span>+234706-828-3250</li>
          <li className='items-center flex gap-3 font-poppins'><span><MdEmail /></span>info@tehiljem.com | obasanmileo81@gmail.com</li>
        </ul>

        <div className='flex gap-3'>
          <SocialIcon
            url="https://facebook.com"
            target="_blank"
            network="facebook"
            style={{ height: 30, width: 30,}}
            className="colorscheme" 
          />
         

          <SocialIcon
            url="https://youtube.com"
            target="_blank"
            network="youtube"
            style={{ height: 30, width: 30,}}
            className="colorscheme" 
          />

          <SocialIcon
            url="https://x.com"
            target="_blank"
            network="x"
            style={{ height: 30, width: 30,}}
            className="colorscheme" 
          />

          <SocialIcon
            url="https://instagram.com"
            target="_blank"
            network="instagram"
            style={{ height: 30, width: 30,}}
            className="colorscheme" 
          />

          <SocialIcon
            url="https://tiktok.com"
            target="_blank"
            network="tiktok"
            style={{ height: 30, width: 30,}}
            className="colorscheme" 
          />

          <SocialIcon
            url="https://whatsapp.com"
            target="_blank"
            network="whatsapp"
            style={{ height: 30, width: 30,}}
            className="colorscheme" 
          />

          <SocialIcon
            url="https://linkedin.com"
            target="_blank"
            network="linkedin"
            style={{ height: 30, width: 30,}}
            className="colorscheme" 
          />

        </div>

       
        
      </div>

    
      {/* Navigation */}
      <div className='font-poppins text-sm md:text-base pt-8'>
        <h1 className='text-base md:text-xl font-semibold hvr-underline-from-center'>Navigate</h1>
        <ul className='pt-3 flex flex-col gap-3'>
          <li className='hvr-wobble-horizontal cursor-pointer hover:text-blue-900 hove:font-bold'>Home</li>
          <li className='hvr-wobble-horizontal cursor-pointer hover:text-blue-900 hover:font-bold'>About Us</li>
          <li className='hvr-wobble-horizontal cursor-pointer hover:text-blue-900 hover:font-bold'>Properties</li>
          <li className='hvr-wobble-horizontal cursor-pointer hover:text-blue-900 hover:font-bold'>Our Services</li>
          <li className='hvr-wobble-horizontal cursor-pointer hover:text-blue-900 hover:font-bold'>Contact Us</li>
          <li className='hvr-wobble-horizontal cursor-pointer hover:text-blue-900 hover:font-bold'>Blog/News</li>
          <li className='hvr-wobble-horizontal cursor-pointer hover:text-blue-900 hover:font-bold'>Locations Map</li>
        </ul>
      </div>


      {/* Customer Care */}
      <div className='font-poppins text-base pt-8'>
        <h1 className='text-base md:text-xl font-semibold hvr-underline-from-center'>Customer Care</h1>
        <ul className='flex flex-col gap-3 pt-3 text-sm md:text-base'>

          <li className=' hvr-wobble-horizontal  items-center gap-2 hvr-wobble-horizontal cursor-pointer hover:text-blue-900 hover:font-bold'>Chat with our AI-bot<RiRobot3Line className='text-blue-500'/></li> 

          <li className=' hvr-wobble-horizontal items-center gap-2 hvr-wobble-horizontal cursor-pointer hover:text-blue-900 hover:font-bold'>Chat with Us on <span className='text-green-500'><IoLogoWhatsapp /></span></li>

          <li className='hvr-wobble-horizontal cursor-pointer hover:text-blue-900 hover:font-bold'>Contact Us</li>
          <li className='hvr-wobble-horizontal cursor-pointer hover:text-blue-900 hover:font-bold'>Office Location</li>
          <li className='hvr-wobble-horizontal cursor-pointer hover:text-blue-900 hover:font-bold'>FAQ</li>
        </ul>
      </div>

    </div>


    <h1 className='text-center text-xs md:text-sm font-poppins px-[2rem]'>© 2025 |  TehilJem Nigeria Limited  | All Rights Reserved. | Developer: <span className='font-bold text-blue-800'>Loukama Tech Solutions</span></h1>


    </div>
  )
}

export default Footer
