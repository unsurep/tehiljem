'use client';

import Image from 'next/image'
import React, { useEffect } from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from "motion/react"
import { IoHomeOutline } from "react-icons/io5";
import { IoFlowerOutline } from "react-icons/io5";
import { CgStyle } from "react-icons/cg";
import { MdMoreTime } from "react-icons/md";

import AOS from 'aos';
import 'aos/dist/aos.css'; 



const Home = () => {

  useEffect(() =>{
    AOS.init({
      disable: false,
      animatedClassName: 'aos-animate',
      useClassNames: false,
      duration: 400,
      easing: 'ease',
      once: false,
      anchorPlacement: 'top-bottom',
    });
  
  }, [])

  
  const [text] =useTypewriter({
    words: ['Paradise', 'Desires','Residence',],
    loop: 2, 
    onLoopDone: () => console.log(`loop completed after 2 runs.`)
  })



  return (
    <div>

      {/* Section 1 */}
      <section id='section1' className='h-[85vh] md:h-screen text-white bg-cover bg-center bg-no-repeat flex items-cente  px-[1rem] md:px-[3rem] font-poppins' style={{ backgroundImage: "url('/image/hbg.png')" }}>
        <div  className='flex flex-col gap-4 text-center md:justify-center items-center pt-10'>
          <h1 data-aos="zoom-in"
          data-aos-duration="1000" className='text-3xl md:text-5xl font-bold tracking-[5px] md:pt- '>Discover Your Dream Home <span className='text-red-500 tracking-wide font-extrabold'>{text} <Cursor cursorColor='red' /></span></h1>

          <p data-aos="zoom-in"
          data-aos-duration="1500"  className=' text-white text-xl leading-relaxed tracking-wide opacity-90  md:pt-8'>Tehiljem Homes envisions a world where luxury meets affordability,  making exceptional living spaces accessible to all. Our mission  is to provide elegantly designed, high-quality homes that enhance  the lives of our clients and their families, ensuring comfort, style, and  long-term value. </p>

          <div className='flex flex-col gap-2 items-center md:pt-8'>
            <motion.button 
            className="bg-orange-500 text-white font-semibold px-6 py-3 rounded-md shadow-md hover:bg-orange-600 hover:scale-105 transition-transform duration-300 focus:ring-4 focus:ring-orange-300 cursor-pointer"
            initial={{ x:500, scale:0.5, opacity:0 }}
            animate={{  x:0, scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
            
            >Make an Enquiry</motion.button>

            <i className='text-sm md:pt-3'>For swift enquiries, chat with our AI customer support bot now</i>
        </div>
        </div>
      </section>


      {/* Section 2 */}
      <section data-aos="fade-up"
        data-aos-duration="1000" id='section2' className='h-screen pt-16 lg:flex gap-8 px-[1rem] md:px-[3rem] font-poppins relative'>
        {/* div A */}
        <div className=''>
          <Image src='/image/chair.png' width={700} height={700} alt='image' className='rounded'/>
        </div>

        {/* display on big screen */}
        <motion.div 
        className='hidden lg:block absolute top-[38rem] left-[30rem] '
        initial={{ x:-500, scale:0.5, opacity:0 }}
        animate={{  x:0, scale: 1, opacity: 1 }}
        transition={{ duration: 1.5,  }}
        >
          <video controls width="15%" autoPlay loop muted type='video/mp4' src='/video/sold.mp4' className='rounded-3xl'></video>
        </motion.div>

       
        {/* div B */}
        <div className='flex flex-col gap-5'>
          <h3 className='text-xl hvr-bubble-float-bottom px-3 py-1 bg-orange-200/60 text-orange-400 rounded w-fit'>About Us</h3>
          <h1 className='text-4xl font-bold tracking-[5px]'>The Leading Real Estate <br /> Marketplace.</h1>
          <p className='text-base tracking-wide'>We started with a passionate team, focusing on residential <br /> developments in Abuja. As our vision grew, so did our reach, <br /> expanding into Edo State and diversifying into commercial <br /> projects. In 2015, we introduced TJ Homes, a brand dedicated <br /> to delivering excellence and affordability in real estate.

          Today, <br /> TEHILJEM Nig. Ltd stands as a trusted name in Nigeria’s real <br /> estate sector, renowned for innovative housing solutions and <br /> a customer-first approach. Our commitment remains <br /> unwavering—building homes, shaping communities, and <br /> redefining excellence in real estate development.</p>

          <div className='grid grid-cols-2 gap-6'>

            <p data-aos="zoom-in"
              data-aos-duration="2000" className='flex items-center gap-3 '><span className='bg-orange-400 tracking-wide p-3 rounded-full text-white font-bold text-2xl flip-vertical-left'><IoHomeOutline /></span>Smart Home Design</p>
            
            <p data-aos="zoom-in"
              data-aos-duration="2000" className='flex items-center gap-3'><span  className='bg-orange-400 tracking-wide p-3 rounded-full text-white font-bold text-2xl flip-vertical-left'><IoFlowerOutline /></span>Beautiful Enviroment</p>

            <p data-aos="zoom-in"
              data-aos-duration="3000" className='flex items-center gap-3'><span  className='bg-orange-400 tracking-wide p-3 rounded-full text-white font-bold text-2xl flip-vertical-left'><CgStyle /></span>Exceptional Lifestyle</p>

            <p data-aos="zoom-in"
              data-aos-duration="3000" className='flex items-center gap-3'><span  className='bg-orange-400 v p-3 rounded-full text-white font-bold text-2xl flip-vertical-left'><MdMoreTime /></span>Complete 24/7 Security</p>
          </div>

          <div>
            <p className='w-fit px-5 py-3 bg-orange-100 text-sm rounded'>" TEHILJEM Nig. Ltd is a proud member of the Real Estate Developers Association of Nigeria <b>(REDAN)</b> "</p>
          </div>

         <div className='flex items-center justify-center w-full mt-5'>
          <button className='bg-orange-500 text-white font-semibold px-6 py-3 rounded-md shadow-md hover:bg-orange-600 hover:scale-105 transition-transform duration-300 focus:ring-4 focus:ring-orange-300 cursor-pointer  '>Our Services</button>
         </div>
        </div>
      </section>










      {/* ChatBot */}
      <div>
        <script defer src="https://app.fastbots.ai/embed.js" data-bot-id="cm80z7tmc0gkxrik6bjufxcuu"></script>
      </div>
    </div>
  )
}

export default Home
