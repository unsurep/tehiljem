'use client'

import React from 'react'
import { FiPlus } from "react-icons/fi";
import { motion } from 'motion/react';
import Image from 'next/image';
import { HiArrowLongRight } from "react-icons/hi2";

const About = () => {
  return (
    <div className='font-montserrat'>
      <main className="py-28  bg-cover bg-center bg-no-repeat h-[90vh] px-[1rem] md:px-[3rem]" style={{ backgroundImage: "url('/image/tjh1.jpg')"}}>
        <div className='font-poppins text-white flex flex-col pt-32'>
          <h3 className='text-5xl uppercase font-bold propertiesbg z-10 tracking-[5px]'>About Us</h3>
          <ul className='flex gap-5 items-center'>
            <li className='text-2xl font-bold hvr-underline-from-left z-10 cursor-pointer'>Home</li>
            <li className='text-xl'><FiPlus /></li>
            <li className='text-2xl font-bold'>About</li>
          </ul>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-black/0"></div>

        
    
      </main>
      {/* About Tehiljem */}
      <div className='px-[1rem] md:px-[3rem] '>
        <h1 className='text-4xl font-bold tracking-[5px] text-center py-5'>About TehilJem Nigeria Limited</h1>

         {/* About Tehiljem */}
        <div className='flex flex-col gap-2'>
          <p className='tracking-wide'>TEHILJEM Nigeria Limited is a premier real estate development company committed to delivering high quality, affordable and luxurious housing solutions across Nigeria. As the proud owners of the TJ Homes brand, we specialize in developing both residential and commercial properties that meet the diverse needs of homeowners and investors. With a strong presence in Abuja and Edo State, TEHILJEM Nigeria Limited blends innovation, sustainability, and customer centric services to create communities that inspire and elevate living standards.</p>

          <p className='tracking-wide'> Our core values :- Luxury, Empathy, Affordability, Dependability, and Discipline, guide our mission to make homeownership a reality for individuals and families while offering valuable investment opportunities. As a registered member of the Real Estate Developers Association of Nigeria (REDAN) and fully compliant with regulatory standards, we maintain industry excellence in every project we undertake. From high-end residential estates to commercial hubs, we integrate cutting-edge designs, sustainable building practices, and strategic partnerships to deliver unmatched real estate solutions. Whether you're looking to own a dream home or invest in real estate or explore property development opportunities, TEHILJEM Nigeria Limited is your trusted partner in building a better future. Visit our ongoing and upcoming projects in Kubwa, Katampe, and Ekpoma to experience firsthand the excellence that defines TEHILJEM Nigeria Limited.</p>

          <p className='font-bold tracking-wide'>Your dream home starts with us!</p>
        </div>

        {/* Our Mission Vision & Experience */}
        <div className='grid grid-cols-1 lg:flex items-center py-12 justify-center gap-8 '>
          {/* Our Mission */}
          <motion.div 
            whileHover={{ scale:1.1}}
            whileTap={{scale:0.9}}

            className='flex flex-col items-center justify-center bg-gray-50 px-6 py-12 shadow drop-shadow-lg hvr-underline-from-left'>
              
           
           
            <div className='flex flex-col gap-3 font-poppins'>
              <h3 className=' text-center font-extrabold text-base md:text-2xl'>OUR MISSION STATEMENT</h3>
              <p className='tracking-wide text-sm'>Our mission at TEHILJEM Nig. Ltd is to revolutionize the real estate industry in Nigeria by providing exceptional housing solutions that combine excellence with affordable luxury. We are committed to delivering personalized services, building long-term relationships, and continuously improving our processes to exceed customer expectations. Through our dedication to quality, integrity, and customer satisfaction, we aim to be the leading real estate development company in Nigeria, making a positive impact on the lives of our clients and the communities we serve.</p>
             
            </div>
          </motion.div>


          {/* Our Vision  */}
          <motion.div 
            whileHover={{ scale:1.1}}
            whileTap={{scale:0.9}}

            className='flex flex-col items-center justify-center bg-gray-50 px-6 py-12 shadow drop-shadow-lg hvr-underline-from-left'>
              
           
           
            <div className='flex flex-col gap-3 font-poppins'>
              <h3 className=' text-center font-extrabold text-base md:text-2xl'>OUR VISION STATEMENT</h3>
              <p className='tracking-wide text-sm'>Our vision at TEHILJEM Nig. Ltd is to be the most trusted and respected real estate development company in Nigeria, renowned for our exceptional housing solutions, unparalleled customer service, and unwavering commitment to quality and integrity. We envision a future where every individual and family have access to affordable luxury housing, and where our developments become vibrant communities that enhance the quality of life for our clients and the nation at large.</p>
             
            </div>
          </motion.div>


          {/* 3 Our Goals  */}
          <motion.div 
            whileHover={{ scale:1.1}}
            whileTap={{scale:0.9}}

            className='flex flex-col items-center justify-center bg-gray-50 px-6 py-12 shadow drop-shadow-lg hvr-underline-from-left'>
              
           
           
            <div className='flex flex-col gap-3 font-poppins'>
              <h3 className=' text-center font-extrabold text-base md:text-2xl'>OUR GOAL</h3>
              <p className='tracking-wide text-sm'>At TEHILJEM Nig. Ltd, our goal is to be the leading real estate development company in Nigeria, delivering exceptional housing solutions that exceed customer expectations while promoting sustainable growth, innovation, and community development. We aim to:

              - Provide high-quality, affordable housing options for Nigerians
              - Foster long-term relationships with our customers, partners, and stakeholders
              - Drive innovation in real estate development through cutting-edge design and technology
              - Contribute positively to the economic and social development of Nigeria
              - Achieve sustainable growth and profitability while maintaining the highest standards of integrity and professionalism
              .</p>
             
            </div>
          </motion.div>
        </div>

        {/* Get intouch with us */}
        <div className='mt-12 grid grid-cols-1 md:flex items-center md:gap-4 justify-between p-10 w-full lg:py-12 lg:px-20 bg-blue-700 text-white'>
          <h1 className='text-4xl font-extrabold py-3 tracking-wide'>GET IN TOUCH WITH US</h1>
          <div className='grid grid-cols-1 md:flex gap-4'>
            <button className='text-sm classN ring-amber-400 ring rounded-lg lg:rounded-full px-8 py-3 hover:text-black hover:bg-white cursor- font-bold'>I WANT TO BUILD A HOUSE</button>
            <button className='text-sm ring-amber-400 ring rounded-lg lg:rounded-full px-8 py-3 hover:text-black hover:bg-white cursor-pointer font-bold'>I WANT TO BUY LAND</button>
          </div>
        </div>

        {/* Section 8 Team Members */}
        <div id='section8' 
                data-aos="fade-up"
                data-aos-duration="1000"
        
                className='bg-gray-50 font-poppins px-[1rem] pt-16 md:px-[3rem]'>
                <div className='flex flex-col gap-6'>
                  <h3 className='text-center text-2xl md:text-2xl font-bold tracking-[5px]'>MEET</h3>
                  <h1 className='text-center text-2xl md:text-4xl font-bold tracking-[5px]'>TehilJem Management Team</h1>
                </div>
        
        
                {/* Members of Tehiljem */}
                <div className='grid grid-cols-1 md:flex gap-12 justify-between py-16'>
                  {/* MD */}
                  <div className='flex flex-col items-center justify-center shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]'>
                    <div 
                     data-aos="flip-down"
                     data-aos-duration="1000"
                     className='bg-purple-200'>
                      <Image src='/image/unknown.svg' width={200} height={200} alt='image' className='rounded'/>
                    </div>
        
                    <div>
                      <h3>Leo RD.</h3>
                      <h2>MD/CEO</h2>
                    </div>
                    
                  </div>
                  
                  {/* Manager */}
                  <div className='flex flex-col items-center justify-center shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]'>
                    <div 
                       data-aos="flip-down"
                      data-aos-duration="1000"
                      className='bg-gray-200'>
                      <Image src='/image/unknown.svg' width={200} height={200} alt='image' className='rounded'/>
                    </div>
        
                    <div>
                      <h3>Korofo Q.</h3>
                      <h2>CFO</h2>
                    </div>
                    
                  </div>
        
                  {/* Marketer 1 */}
                  <div className='flex flex-col items-center justify-center shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]'>
                    <div 
                       data-aos="flip-down"
                      data-aos-duration="1000"
                      className='bg-orange-200'>
                      <Image src='/image/unknown.svg' width={200} height={200} alt='image' className='rounded'/>
                    </div>
        
                    <div>
                      <h3>Toro RD.</h3>
                      <h2>Marketer</h2>
                    </div>
                    
                  </div>
        
                  {/* Agent */}
                  <div className='flex flex-col items-center justify-center shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]'>
                    <div 
                       data-aos="flip-down"
                       data-aos-duration="1000" 
                       className='bg-cyan-200'>
                      <Image src='/image/unknown.svg' width={200} height={200} alt='image' className='rounded'/>
                    </div>
        
                    <div>
                      <h3>Zoro RD.</h3>
                      <h2>Agent</h2>
                    </div>
                    
                  </div>
        
                </div>
        
        
        
        </div>
        







      </div>
      
    </div>
  )
}

export default About
