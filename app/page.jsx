'use client';

import Image from 'next/image'
import React, { useEffect } from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from "motion/react"
import { IoHomeOutline } from "react-icons/io5";
import { IoFlowerOutline } from "react-icons/io5";
import { CgStyle } from "react-icons/cg";
import { MdMoreTime } from "react-icons/md";
import { PiArrowBendRightUpFill } from "react-icons/pi";
import { PiArrowBendRightDownFill } from "react-icons/pi";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";

// AOS animations
import AOS from 'aos';
import 'aos/dist/aos.css'; 

// swiper import
import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { EffectFlip, Pagination, Navigation } from 'swiper/modules';










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

      {/* Section 1  */}
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


      {/* Section 2 house & key*/}
      <section data-aos="fade-up"
        data-aos-duration="1000" id='section2' className='bg-gray-300  pt-16 lg:flex gap-8 px-[1rem] md:px-[3rem] font-poppins relative'>
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

         <div className='flex items-center justify-center w-full my-5'>
          <button className='bg-orange-500 text-white font-semibold px-6 py-3 rounded-md shadow-md hover:bg-orange-600 hover:scale-105 transition-transform duration-300 focus:ring-4 focus:ring-orange-300 cursor-pointer  '>Our Services</button>
         </div>
        </div>
      </section>

      {/* section 3 swiper */}
      <div className='grid grid-cols-1 md:flex gap-5 bg-gray-200 px-[1rem] md:px-[3rem] font-poppins mt-10'>
        <div className=' py-5 md:py-16'>
          <h1 className='md:text-2xl md:text-center font-semibold'>
            Tehiljem is a premier real estate <br /> platform in Nigeria, offering  an <br /> extensive range of property <br /> listings for sale, rent, and short-let.
          </h1>

          <p className='py-6 text-base md:text-center'>
          Land ownership is not just about buying property. It is about <br /> investing in your future, creating generational wealth, and <br /> securing financial stability. For years, smart investors have <br />understood the power of real estate, using land as a wealth <br /> -building tool that appreciates over time. With Tehiljem Nig Ltd, <br /> you are not just purchasing a land, you are making a strategic <br /> investment in prime locations with high growth potential.
          </p>

          <div className='flex items-center justify-center w-full my-3 md:my-5'>
            <button className='bg-orange-500 text-white font-semibold px-6 py-3 rounded-md shadow-md hover:bg-orange-600 hover:scale-105 transition-transform duration-300 focus:ring-4 focus:ring-orange-300 cursor-pointer  '>EXPLORE THE OFFERS</button>
          </div>

        </div>

        
        <div className=' flex flex-col mx-auto md:py-16'>
          {/* swiper js */}
          <div>
            <Swiper
              effect={'flip'}
              grabCursor={true}
              pagination={true}
              navigation={true}
              modules={[EffectFlip, Pagination, Navigation]}
              className="mySwiper">
              <SwiperSlide>
                <img src="/image/eccvilla-kuje.jpg" alt='image of eccvilla-kuje' className='rounded-lg ring ring-orange-300/40' />
              </SwiperSlide>
              
              <SwiperSlide>
                <img src="/image/eccvilla2.jpg" alt='image of eccvilla1' className='rounded-lg ring ring-orange-300/40' />
              </SwiperSlide>

              <SwiperSlide>
                <img src="/image/rio.jpg" alt='image of primesite' className='rounded-lg ring ring-orange-300/40' />
              </SwiperSlide>

              <SwiperSlide>
                <img src="/image/scepter.jpg" alt='image of primesite' className='rounded-lg ring ring-orange-300/40' />
              </SwiperSlide>

              <SwiperSlide>
                <img src="/image/primesite.jpg" alt='image of primesite' className='rounded-lg ring ring-orange-300/40' />
              </SwiperSlide>

              {/* <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
              </SwiperSlide> */}
            </Swiper>  
          </div>

          {/* <div>video from youtube</div> */}
        </div>
      </div>

      {/* section 4 Our services provided*/}
      <div className='bg-gray-100 my-10 px-[1rem] md:px-[3rem] font-poppins pb-10'>
        <div className='flex flex-col items-center justify-center py-16'>
          <h3 className='text-base tracking-[5px] text-center'>HOUSES | LAND | CONSTRUCTION</h3>
          <h1 className='tracking-wide font-bold text-xl md:text-4xl pt-3 text-center'>The Future of Housing in Nigeria is Here.</h1>
        </div>

        <div className='block md:grid md:grid-cols-3 gap-6'>
          <div className='hvr-float-shadow'>
            <Image src='/image/img3.png' width={500} height={500} alt='image of property' className='rounded-lg cursor-pointer transition duration-300 hover:brightness-75 ring ring-orange-300/40' />
            <h3 className='flex items-center gap-3 py-3 justify-center cursor-pointer font-semibold text-blue-900/40 hover:text-blue-900'>Explore Our Homes <span className='animate-bounce text-xl '><PiArrowBendRightUpFill /></span></h3>
          </div>

          <div className='hvr-float-shadow py-8 md:py-0'>
            <Image src='/image/land.png' width={500} height={500} alt='image of property' className='rounded-lg cursor-pointer transition duration-300 hover:brightness-75 ring ring-orange-300/40' />
            <h3 className='flex items-center gap-3 py-3 justify-center cursor-pointer font-semibold text-blue-900/40 hover:text-blue-900'>Our Landed Properties <span className='animate-bounce text-xl '><PiArrowBendRightUpFill /></span></h3>
          </div>


          <div className='hvr-float-shadow'>
            <Image src='/image/land2.png' width={500} height={500} alt='image of property' className='rounded-lg cursor-pointer transition duration-300 hover:brightness-75 ring ring-orange-300/40' />
            <h3 className='flex items-center gap-3 py-3 justify-center cursor-pointer font-semibold text-blue-900/40 hover:text-blue-900'>Learn About Our Construction <span className='animate-bounce text-xl '><PiArrowBendRightUpFill /></span></h3>
          </div>
        </div>





      </div>

      {/* ssection 5 our featured properties */}
      <div className='bg-gray-50 my-10 px-[1rem] md:px-[3rem] font-poppins pb-10'>
        <div className='flex flex-col items-center justify-center py-5 md:py-16'>
          <h1 className='flex text-base md:text-3xl font-bold items-center gap-3'>Our Featured Properties <span className='animate-bounce text-xl '><PiArrowBendRightDownFill /></span></h1>
          
        </div>
        
        {/* upside */}
        <div className='lg:flex  gap-8'>
          {/* 1 */}
          <div>
            <Image src='/image/img3.png' width={500} height={500} alt='image of property' className='rounded-lg cursor-pointer transition duration-300 hover:brightness-75 ring ring-orange-300/40' />

            <div className='flex flex-col items-center py-5'>
              <h1 className='text-xl md:text-3xl text-blue-900 font-bold'>Scepter City</h1>
              <p className='text-base'>Location: IDU, Abuja</p>
            </div>


            <div className='flex'>
              <ul className='text-sm md:text-base'>
                <li>250sqm - N3.5M</li>
                <li>400sqm - 5.5M</li>
                <li>500sqm - N6M</li>
              </ul>



              <ul className='ml-auto text-sm md:text-base'>
                <li>Features</li>
                <li>Perimeter Fencing</li>
                <li>Security</li>
                <li>CCTV</li>
                <li>Asphalt Road</li>
              </ul>
            </div>


            <div className='flex items-center justify-center py-4'>
              <button className='text-sm'>View</button>
            </div>

            <p className='text-xs md:text-sm text-center'>Landmark: Opposite Nig. Army Estate IDU</p>
          </div>

          {/* 2 */}
          <div className='py-16 lg:py-0'>
            <Image src='/image/img3.png' width={500} height={500} alt='image of property' className='rounded-lg cursor-pointer transition duration-300 hover:brightness-75 ring ring-orange-300/40' />

            <div className='flex flex-col items-center py-5'>
              <h1 className='text-xl md:text-3xl text-blue-900 font-bold'>Villa Ecclesia</h1>
              <p className='text-base'>Location: Kuje Phase I, Abuja</p>
            </div>


            <div className='flex'>
              <ul className='text-sm md:text-base'>
                <li>200sqm - N2.5M</li>
                <li>250sqm - 3.125M</li>
                <li>300sqm - N3.750M</li>
                <li>350sqm - N4.375M</li>
                <li>450sqm - N5.625M</li>
                <li>500sqm - N5.250M</li>
              </ul>



              <ul className='ml-auto text-sm md:text-base'>
                <li>Features</li>
                <li>Perimeter Fencing</li>
                <li>Security</li>
                <li>CCTV</li>
                <li>Asphalt Road</li>
              </ul>
            </div>


            <div className='flex items-center justify-center py-4'>
              <button className='text-sm'>View</button>
            </div>

            <p className='text-xs md:text-sm text-center'>Site Location: Beside Govt. sec sch, AA3 Kuje</p>
          </div>

          {/* 3 */}
          <div>
            <Image src='/image/img3.png' width={500} height={500} alt='image of property' className='rounded-lg cursor-pointer transition duration-300 hover:brightness-75 ring ring-orange-300/40' />

            <div className='flex flex-col items-center py-5'>
              <h1 className='text-xl md:text-3xl text-blue-900 font-bold'>Villa Ecclesia</h1>
              <p className='text-base'>Location: Kuje Phase II, Abuja</p>
            </div>


            <div className='flex'>
              <ul className='text-sm md:text-base'>
                <li>250sqm - N1.925M</li>
                <li>400sqm - N3.080M</li>
                <li>500sqm - N3.850M</li>
              </ul>



              <ul className='ml-auto text-sm md:text-base'>
                <li>Features</li>
                <li>Perimeter Fencing</li>
                <li>Security</li>
                <li>CCTV</li>
                <li>Asphalt Road</li>
              </ul>
            </div>


            <div className='flex items-center justify-center py-4'>
              <button className='text-sm'>View</button>
            </div>

            <p className='text-xs md:text-sm text-center'>Site Location: Beside SS Simon and Jude Seminary Sch Kuje</p>
          </div>
        </div>
      </div>

      {/* downside */}
      <div className='lg:flex gap-8 px-[1rem] md:px-[3rem]'>
        {/* 4 */}
        <div>
            <Image src='/image/img3.png' width={500} height={500} alt='image of property' className='rounded-lg cursor-pointer transition duration-300 hover:brightness-75 ring ring-orange-300/40' />

            <div className='flex flex-col items-center py-5'>
              <h1 className='text-xl md:text-3xl text-blue-900 font-bold'>Villa Ecclesia</h1>
              <p className='text-base'>Location: Kuje Phase III, Abuja</p>
            </div>


            <div className='flex'>
              <ul className='text-sm md:text-base'>
                <li>250sqm - N3M</li>
                <li>350sqm - N4M</li>
                <li>450sqm - N6M</li>
              </ul>



              <ul className='ml-auto text-sm md:text-base'>
                <li>Features</li>
                <li>Perimeter Fencing</li>
                <li>Security</li>
                <li>CCTV</li>
                <li>Asphalt Road</li>
              </ul>
            </div>


            <div className='flex items-center justify-center py-4'>
              <button className='text-sm'>View</button>
            </div>

            <p className='text-xs md:text-sm text-center'>Location: Chikakoree Kubwa</p>
        </div>


        {/* 5 */}
        <div className='py-16 lg:py-0'>
            <Image src='/image/img3.png' width={500} height={500} alt='image of property' className='rounded-lg cursor-pointer transition duration-300 hover:brightness-75 ring ring-orange-300/40' />

            <div className='flex flex-col items-center py-5'>
              <h1 className='text-xl md:text-3xl text-blue-900 font-bold'>Rio Dominion Estate</h1>
              <p className='text-base'>Location: Lugbe, Abuja</p>
            </div>


            <div className='flex'>
              <p className='text-sm md:text-base'>
                Own a 3 Bedroom <br />
                Semi-detached carcass <br />
                duplex with initial payment <br />
                of N5,000,000.00
              </p>



              <ul className='ml-auto text-sm md:text-base'>
                <li>Features</li>
                <li>Perimeter Fencing</li>
                <li>Security</li>
                <li>CCTV</li>
                <li>Asphalt Road</li>
              </ul>
            </div>


            <div className='flex items-center justify-center py-4'>
              <button className='text-sm'>View</button>
            </div>

            <p className='text-xs md:text-sm text-center'>Location: Behind AMAC Marke FHA <br />
            Lugbe close to Living Faith Church</p>
        </div>


        {/* 6 */}
        <div className='pb-10'>
            <Image src='/image/img3.png' width={500} height={500} alt='image of property' className='rounded-lg cursor-pointer transition duration-300 hover:brightness-75 ring ring-orange-300/40' />

            <div className='flex flex-col items-center py-5'>
              <h1 className='text-xl md:text-3xl text-blue-900 font-bold'>The Havens</h1>
              <p className='text-base'>Location:?????????</p>
            </div>


            <div className='flex'>
              <ul className='text-sm md:text-base'>
                <li>250sqm - N36M</li>
                <li>350sqm - N44M</li>
                <li>400sqm - N50M</li>
                <li>450sqm - N60M</li>
                <li>500sqm - N70M</li>
                <li>700sqm - N90M</li>
              </ul>



              <ul className='ml-auto text-sm md:text-base'>
                <li>Perimeter Fencing</li>
                <li>Security</li>
                <li>CCTV</li>
                <li>Asphalt Road</li>

              </ul>
            </div>


            <div className='flex items-center justify-center'>
              <button className='text-sm'>View</button>
            </div>

            <p className='text-xs md:text-sm text-center'>Location: ?????????</p>
        </div>
      </div>





























      {/* 1st ChatBot */}
      {/* 50 messages already used up */}
      {/* <div>
        <script defer src="https://app.fastbots.ai/embed.js" data-bot-id="cm80z7tmc0gkxrik6bjufxcuu"></script>
      </div> */}


      {/* 2nd ChatBot */}
      <div>
      <script defer src="https://app.fastbots.ai/embed.js" data-bot-id="cm86ym9i40txwrik9ubvobt41"></script>
      </div>






    </div>
  )
}

export default Home
