'use client';

import Image from 'next/image'
import React, { useEffect } from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from "motion/react"

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
      <section id='section1' className='h-[85vh] md:h-screen text-white bg-cover bg-center bg-no-repeat flex items-cente  px-[1rem] md:px-[3rem]' style={{ backgroundImage: "url('/image/hbg.png')" }}>
        <div  className='flex flex-col gap-4 text-center md:justify-center items-center pt-10'>
          <h1 data-aos="zoom-in"
          data-aos-duration="1000" className='text-3xl md:text-5xl font-bold tracking-[5px] md:pt-'>Discover Your Dream Home <span className='text-red-500 tracking-wide font-extrabold'>{text} <Cursor cursorColor='red' /></span></h1>

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
      <section id='section2' className='h-screen pt-16 flex gap-8 px-[1rem] md:px-[3rem] '>
        {/* div A */}
        <div>
          <Image src='/image/chair.png' width={700} height={700} alt='image' className='rounded'/>
        </div>



        {/* div B */}
        <div className='flex flex-col gap-5'>
          <h3 className='text-xl'>About Us</h3>
          <h1 className='text-4xl font-bold'>The Leading Real Estate <br /> Marketplace.</h1>
          <p className='text-base'>Over 39,000 people work for us in more than 70 countries all over the This breadth of global coverage, combined with specialist services</p>

          <div className='grid grid-cols-2'>
            <p>Smart Home Design</p>
            <p>Beautiful Scene Around</p>
            <p>Exceptional Lifestyle</p>
            <p>Complete 24/7 Security</p>
          </div>

          <div>
            <p>"Enimad minim veniam quis nostrud exercitation
            llamco laboris. Lorem ipsum dolor sit amet"</p>
          </div>

          <button>Our Services</button>
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
