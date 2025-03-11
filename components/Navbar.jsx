'use client';
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
    const [activeElement, setActiveElement]= useState('');

    const toggleElement=(color)=>{
        setActiveElement(color);
    };

   
  return (
    <>   
        {/* Desktop view */}
        <nav className='hidden lg:flex items-center justify-between px-[1rem] md:px-[3rem] py-2 font-montserrat shadow-[0_8px_30px_rgb(0,0,0,0.12)] fixed z-50 bg-white/60 w-full bg-opacity-45 backdrop-blur-xl'>

            <Link href={'/'} className='flex items-center justify-center gap-4'>
                <div>
                    <Image src='/image/tjhomelogo.png' width={60} height={60} alt='tehiljems_logo' className=''/>
                </div>
                <h1 className='text-xl font-semibold text-blue-900'>TehilJem Nig. Ltd</h1>
            </Link>

            <ul className='flex items-center gap-6'>
                <Link href={'/'}>
                    <li onClick={() => toggleElement("home")} className={`cursor-pointer text-black/90 font-semibold hvr-underline-from-center ${activeElement === "home" ? "text-blue-900 font-bold" : ""}`}>Home</li>
                </Link>

                <Link href={'/about'}>
                    <li onClick={() => toggleElement("about")} className={`cursor-pointer text-black/90 font-semibold hvr-underline-from-center ${activeElement === "about" ? "text-blue-900 font-bold" : ""}`}>About Us</li>
                </Link>

                <Link href={'/properties'}>
                    <li onClick={() => toggleElement("properties")} className={`cursor-pointer text-black/90 font-semibold hvr-underline-from-center ${activeElement === "properties" ? "text-blue-900 font-bold" : ""}`}>Properties</li>
                </Link>

                <Link href={'/serv'}>
                    <li onClick={() => toggleElement("serv")} className={`cursor-pointer text-black/90 font-semibold hvr-underline-from-center ${activeElement === "serv" ? "text-blue-900 font-bold" : ""}`}>Services</li>
                </Link>

                <Link href={'/contact'}>
                    <li onClick={() => toggleElement("contact")} className={`cursor-pointer text-black/90 font-semibold hvr-underline-from-center ${activeElement === "contact" ? "text-blue-900 font-bold" : ""}`}>Contact Us</li>
                </Link>

                <Link href={'/blog'}>
                <li onClick={() => toggleElement("blog")} className={`cursor-pointer text-black/90 font-semibold hvr-underline-from-center ${activeElement === "blog" ? "text-blue-900 font-bold" : ""}`}>Blog/News</li>
                </Link>

            </ul>

            {/* <div>
                <FaRegUserCircle className='text-2xl text-blue-900' />
            </div> */}

        </nav>






        {/* Phone View */}
        <nav className='lg:hidden flex items-center px-[1rem] md:px-[3rem] py-3 font-montserrat shadow-[0_8px_30px_rgb(0,0,0,0.12)] z-10'>
            <Link href={'/'} className='flex items-center justify-center'>
            <div>
                <Image src='/image/tjhomelogo.png' width={40} height={40} alt='tehiljems_logo' className=''/>
            </div>
            <h1 className='text-sm font-semibold text-blue-900'>TehilJems Nig. Ltd</h1>
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

                    <Link href={'/about'}>
                        <li >About Us</li>
                    </Link>

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

 {/* <IoMdMenu className='text-3xl text-blue-900' /> */}
