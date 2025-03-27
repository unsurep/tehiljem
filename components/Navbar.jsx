'use client';
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { RiCustomerService2Fill } from "react-icons/ri";
import { SocialIcon } from 'react-social-icons'
import { motion } from 'motion/react';

const Navbar = () => {
    const [activeElement, setActiveElement]= useState('');

    const toggleElement=(color)=>{
        setActiveElement(color);
    };

   
  return (
    <>   
        {/* small nav */}
        <nav className='flex items-center justify-between bg-gray-400 w-full  font-montserrat px-[1rem]  fixed z-20'>

            {/* social icons */}
            <motion.div 

                initial={{
                x:-500,
                opacity:0,
                scale:0.5}}

                animate={{
                x:0,
                opacity:1,
                scale:1
                }}
    
                transition={{
                duration:1.5,
                }}

                className='md:flex hidden items-center gap-2 py-'>
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
                
                {/* <SocialIcon
                    url="https://linkedin.com"
                    target="_blank"
                    network="linkedin"
                    style={{ height: 23, width: 23,}}
                    className="colorscheme" 
                /> */}
            </motion.div>





            <motion.ul 
                initial={{
                    x:500,
                    opacity:0,
                    scale:0.5}}
    
                    animate={{
                    x:0,
                    opacity:1,
                    scale:1
                    }}
        
                    transition={{
                    duration:1.5,
                    }}

                className='lg:flex items-center gap-5 text-base text-gray-600 hidden'>
                <li className='hover:text-blue-900 cursor-pointer hover:font-bold'>Monday - Friday: 8:00am - 5:00pm</li>
                <li>|</li>
                <li className='flex items-center gap-2  cursor-pointer'><RiCustomerService2Fill className='animate-bounce' /> <span className='hover:font-bold text-blue-900 '>+234706-828-3250</span></li>
            </motion.ul>

           
        </nav>
        
        {/* Desktop view */}
        <nav className='hidden lg:flex items-center justify-between px-[1rem] md:px-[3rem] py-1 font-montserrat ring ring-blue-700/40 bg-trans fixed z-50 bg-white/45 w-full  backdrop-blur-xl mt-6'>

            <Link href={'/'} className='flex items-center justify-center gap-4'>
                <div>
                    <Image src='/image/tjhomelogo.png' width={50} height={50} alt='tehiljems_logo' className=''/>
                </div>
                <h1 className='text-xl font-semibold text-blue-900'>TehilJem Nig. Ltd</h1>
            </Link>

            <ul className='flex items-center gap-8'>
                {/* <Link href={'/'}>
                    <li onClick={() => toggleElement("home")} className={`cursor-pointer text-black/90 font-semibold hvr-underline-from-center  ${activeElement === "home" ? "text-blue-900 font-bold" : ""}`}>Home</li>
                </Link> */}

                <Link href={'/about'}>
                    <li onClick={() => toggleElement("about")} className={`cursor-pointer text-black/90 font-semibold hvr-underline-from-center  ${activeElement === "about" ? "text-blue-900 font-bold" : ""}`}>About Us</li>
                </Link>

                <Link href={'/properties'}>
                    <li onClick={() => toggleElement("properties")} className={`cursor-pointer text-black/90 font-semibold hvr-underline-from-center  ${activeElement === "properties" ? "text-blue-900 font-bold" : ""}`}>Properties</li>
                   
                </Link>

                <Link href={'/serv'}>
                    <li onClick={() => toggleElement("serv")} className={`cursor-pointer text-black/90 font-semibold hvr-underline-from-center  ${activeElement === "serv" ? "text-blue-900 font-bold" : ""}`}>Services</li>
                </Link>

                <Link href={'/contact'}>
                    <li onClick={() => toggleElement("contact")} className={`cursor-pointer text-black/90 font-semibold hvr-underline-from-center  ${activeElement === "contact" ? "text-blue-900 font-bold" : ""}`}>Contact Us</li>
                </Link>

                <Link href={'/blog'}>
                <li onClick={() => toggleElement("blog")} className={`cursor-pointer text-black/90 font-semibold hvr-underline-from-center  ${activeElement === "blog" ? "text-blue-900 font-bold" : ""}`}>Blog/News</li>
                </Link>

            </ul>

        </nav>
        


        {/* phone contact nav */}
        <motion.ul 
            initial={{
                x:500,
                opacity:0,
                scale:0.5}}

                animate={{
                x:0,
                opacity:1,
                scale:1
                }}
    
                transition={{
                duration:1.5,
                }}

        className='flex gap-3 font-bold text-[10px] justify-center text-xl text-black/90 lg:hidden z-10 bg-gray-400 w-full fixed'>
            <li className='cursor-pointer'>Monday - Friday: 8:00am - 5:00pm</li>
            <li>|</li>
            <li className='flex items-center gap-2  cursor-pointer'><RiCustomerService2Fill className='animate-bounce' /> +234706-828-3250</li>
        </motion.ul>

        {/* Phone View */}
        <nav className='lg:hidden flex items-center px-[1rem] md:px-[3rem] py-3 font-montserrat shadow-[0_8px_30px_rgb(0,0,0,0.12)] z-10 bg-white/60 bg-opacity-45 backdrop-blur-xl w-full fixed mt-3'>
            <Link href={'/'} className='flex items-center justify-center'>
            <div>
                <Image src='/image/tjhomelogo.png' width={40} height={40} alt='tehiljems_logo' className=''/>
            </div>
            <h1 className='text-sm font-semibold text-blue-900'>TehilJem Nig. Ltd</h1>
            </Link>
        
            <div className='flex flex-col ml-auto'>
            <div className="drawer  drawer-end">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-4" className="drawer-button bt btn-primary"><IoMdMenu className='text-2xl text-blue-700 hover:text-blue-900 transition-color duration-300' /></label>
                </div>
                <div className="drawer-side">

                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 text-base-content min-h-full w-44 px-4 space-y-5 pt-8 ">
                    {/* Sidebar content here */}
                    <Link href={'/'}>
                        <li className='text-blue-900 font-semibold'>Home</li>
                    </Link>

                    {/* <Link href={'/about'}>
                        <li >About Us</li>
                    </Link> */}

                    <Link href={'/properties'}>
                        <li>Properties</li>
                    </Link>

                    <Link href={'/serv'}>
                        <li>Services</li>
                    </Link>

                    <Link href={'/contact'}>
                        <li>Contact Us</li>
                    </Link>

                    <Link href={'/blog'}>
                        <li>Blog/News</li>
                    </Link>

                    </ul>
                </div>
            </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar

 
