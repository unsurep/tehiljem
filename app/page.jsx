'use client';

import Image from 'next/image'
import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Home = () => {


  const [text] =useTypewriter({
    words: ['Paradise', 'Desires','Residence',],
    loop: 2, 
    onLoopDone: () => console.log(`loop completed after 2 runs.`)
  })



  return (
    <>
      <section className='h-[70vh] text-white bg-cover bg-center bg-no-repeat flex items-center  px-[1rem] md:px-[3rem]' style={{ backgroundImage: "url('/image/hbg.png')" }}>
        <div className='flex flex-col gap-6 text-center'>
          <h1 className='text-2xl md:text-5xl font-bold tracking-[5px]'>Discover Your Dream Home <span className='text-red-600'>{text} <Cursor cursorColor='red' /></span></h1>
          <p className=' text-sm md:text-base text-center'>Tehiljem Homes envisions a world where luxury meets affordability,  making exceptional living spaces accessible to all. Our mission  is to provide elegantly designed, high-quality homes that enhance  the lives of our clients and their families, ensuring comfort, style, and  long-term value. </p>

          <div className='flex flex-col gap-2 items-center'>
            <button className="btn btn-soft btn-warning w-fit">Make an Enquiry</button>
            <i className='text-sm pt-2'>For swift enquiries, chat with our AI customer support bot now</i>
        </div>
        </div>

        

        

      </section>
      
    </>
  )
}

export default Home
