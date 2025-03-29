'use client';

import Image from 'next/image'
import React, { useEffect } from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { IoHomeOutline } from "react-icons/io5";
import { IoFlowerOutline } from "react-icons/io5";
import { CgStyle } from "react-icons/cg";
import { MdMoreTime } from "react-icons/md";
import { PiArrowBendRightUpFill } from "react-icons/pi";
import { PiArrowBendRightDownFill } from "react-icons/pi";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import axios from 'axios';
import { HiArrowLongRight } from "react-icons/hi2";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { BiSolidQuoteAltRight } from "react-icons/bi";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiRobot3Line } from "react-icons/ri";
import { BiSolidPhoneCall } from "react-icons/bi";
import { ImLocation } from "react-icons/im";
import TextTransition, { presets } from 'react-text-transition';
import { motion } from 'motion/react';
import { FaMapPin } from "react-icons/fa";
import { LuFence } from "react-icons/lu";
import { IoIosPeople } from "react-icons/io";
import { GiCctvCamera } from "react-icons/gi";
import { PiRoadHorizonFill } from "react-icons/pi";
import { IoCheckmark } from "react-icons/io5";


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
import { EffectFlip, Pagination, Navigation, Autoplay,  } from 'swiper/modules';


import YouTube from 'react-youtube';
import { FaDoorClosed } from 'react-icons/fa';




const TEXTS = ["Paradise", "Desires", "Residence"];

const Home = () => {
  // another typoeffect 
  const [index, setIndex] = React.useState(0);
  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000, // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  
  





  // swiper auto
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  // youtube player
  const opts = {
    playerVars: {
      autoplay: 1,  // Autoplay enabled
      modestbranding: 1, // Hides YouTube logo
      rel: 0, // Prevents showing related videos
      vq: "hd1080", // Forces HD playback
    },
  }


  // AOS animation
  useEffect(() =>{
    AOS.init({
      disable: false,
      animatedClassName: 'aos-animate',
      useClassNames: false,
      duration: 400,
      easing: 'ease',
      once: true,
      // anchorPlacement: 'top-bottom',
    });
  
  }, [])

  // use typewriter
  // const [text] =useTypewriter({
  //   words: ['Paradise','Desires','Residence',],
  //   loop: 2, 
  //   onLoopDone: () => console.log(`loop completed after 2 runs.`)
  // })


  // Toggle youtube videos
  const [show1, setShow1] = useState(true);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  const toggle1=()=>{
    setShow1(true)
    setShow2(false)
    setShow3(false)
  }

  const toggle2 =()=>{
    setShow2(true)
    setShow1(false)
    setShow3(false)
  }

  const toggle3 =()=>{
    setShow3(true)
    setShow2(false)
    setShow1(false)
  }

  // show sketch on toggle
  const [scepterCity, setScepterCity] =useState(true);
  const [jemzys, setJemzys] =useState(false);
  const [haven, setHaven] =useState(false);
  const [villa, setVilla] =useState(false);
  const [trio, setTrio]=useState(false); 
  const [tjhomes, setTjhomes]  =useState(false);

  const toggleScepterCity=()=>{
    setScepterCity(true);
    setJemzys(false);
    setHaven(false);
    setVilla(false);
    setTrio(false);
    setTjhomes(false);
  };

  const toggleJemzys=()=>{
    setScepterCity(false);
    setJemzys(true);
    setHaven(false);
    setVilla(false);
    setTrio(false);
    setTjhomes(false);
  };

  const toggleHaven=()=>{
    setScepterCity(false);
    setJemzys(false);
    setHaven(true);
    setVilla(false);
    setTrio(false);
    setTjhomes(false);
  };


  const toggleVilla=()=>{
    setScepterCity(false);
    setJemzys(false);
    setHaven(false);
    setVilla(true);
    setTrio(false);
    setTjhomes(false);
  };

  const toggleRio=()=>{
    setScepterCity(false);
    setJemzys(false);
    setHaven(false);
    setVilla(false);
    setTrio(true);
    setTjhomes(false);
  };

  const toggleTjhomes=()=>{
    setScepterCity(false);
    setJemzys(false);
    setHaven(false);
    setVilla(false);
    setTrio(false);
    setTjhomes(true);

  }


  




  

  // API real estate news fecth
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchLiveData() {
      try {
        const response = await axios.get('/api/live');
        setData(response.data);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to load live data.");
      }
    }
    fetchLiveData();
  }, []);
 


  return (
    <div className='font-montserrat'>

      {/* Section 1  */}
      <section id='section1' className='h-[85vh] md:h-screen text-white bg-cover bg-center bg-no-repeat flex items-center  px-[1rem] md:px-[3rem] font-poppins relative'>
        <video 
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay 
          loop 
          muted 
          playsInline>
          <source src="https://res.cloudinary.com/ddj0ticsg/video/upload/v1742577444/tehiljem_q1jgml.mp4" type="video/mp4" />
        </video>

        {/* Overlay to make text readable */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>
        
        <div  className='flex flex-col gap-4 text-center md:justify-center items-center pt-28'>
          <h1 data-aos="zoom-in"
          data-aos-duration="1000" className='text-2xl md:text-5xl font-extrabold tracking-[5px] flex gap-3 md:pt- '>Discover Your Dream Home <TextTransition springConfig={presets.wobbly} className='text-red-500 tracking-wide font-extrabold'>{TEXTS[index % TEXTS.length]} <Cursor cursorColor='red' /></TextTransition></h1>

          <p data-aos="zoom-in"
          data-aos-duration="1500"  className=' text-white md:text-xl leading-relaxed font-bold tracking-wide opacity-90  md:pt-8'>TehilJem owners of the brand TJ Homes, envisions a world where luxury meets affordability,  making exceptional living spaces accessible to all. Our mission  is to provide elegantly designed, high-quality homes that enhance  the lives of our clients and their families, ensuring comfort, style, and  long-term value. </p>

          <div className='flex flex-col gap-2 items-center pt-5 md:pt-8 z-10'>
          
            {/* modals */}
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <motion.button 
              initial={{opacity:0, y:-50}}
              animate={{opacity:1, y:0}}
              transition={{duration:0.5}}
              whileHover={{ scale:1.1}}
              whileTap={{scale:0.9}}

              className="hover:bg-blue-600/50 bg-gray-300 text-black font-semibold hover:text-white px-4 rounded-md cursor-pointer py-3" onClick={()=>document.getElementById('my_modal_1').showModal()}>Make an Enquiry
            </motion.button>

            
            <dialog id="my_modal_1" className="modal z-50 text-black">
              <div className="modal-box">
               <h3 className="font-bold text-lg">Hello! Select your mode of Enquiry</h3>
                <ul className="space-y-6 py-12 flex flex-col font-poppins font-semibold text-base">
                  
                  <li className='flex gap-4  font-semibold '><RiRobot3Line className='text-blue-500 text-2xl animate-bounce'/> Have a chat with our AI-Bot below</li>

                  <li onClick={() => window.open("https://wa.me/2347068283250", "_blank")} className='flex gap-4 hover:text-blue-700 font-semibold cursor-pointer'><IoLogoWhatsapp className='text-green-500 text-2xl animate-bounce' />Chat with TehilJem's representative </li>

                  <li className='flex gap-4'><BiSolidPhoneCall className='text-green-500 text-2xl' /><span className=''>+2347068283250</span></li>
                  
                  <li className='flex  gap-4'><ImLocation className='text-red-500 text-2xl'/>Suit 315B DMB Plaza, Noakchott Street, Wuse Zone 1</li>
                </ul>
                {/* <h1>hello</h1> */}
              <div className="modal-action">
              <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
              </form>
              </div>
              </div>
            </dialog>

            <i className='text-base md:pt-3 font-semibold'>For swift enquiries, chat with our AI customer support bot now</i>
        </div>
        </div>
      </section>


      {/* Section 2 house & key*/}
      <section data-aos="fade-up"
        data-aos-duration="1000" id='section2' className='bg-gray-300  pt-16 lg:flex gap-8 px-[1rem] md:px-[3rem] font-poppins relative'>
        {/* div A */}
        <motion.div 
          whileHover={{scale:0.9}}
          whileTap={{scale:0.9}}
          className=''>
          <Image src='/image/chair.png' width={700} height={700} alt='image' className='rounded'/>
        </motion.div>

        {/* display on big screen */}
        <motion.div 
        className='hidden lg:block absolute top-[31rem] left-[1rem] '
        initial={{ x:-100,   opacity:0 }}
        animate={{  x:0,  opacity: 1 }}
        transition={{ duration: 3 }}
        >
         
          <Image src='/image/key.png' width={200} height={200} alt='image' className='bg-transparent'/>
        </motion.div>

        {/* for small screen */}
        <motion.div 
        className='lg:hidden block absolute top-[22rem] left-2'
        whileHover={{scale: 1.1}}
        whileTap={{scsle:0.9}}
        >
        
          <Image src='/image/key.png' width={150} height={150} alt='image' className='bg-transparent'/>
        </motion.div>

       
        {/* div B */}
        <div className='flex flex-col gap-5'>
          <h3 className='text-xl hvr-bubble-float-bottom px-3 py-1 bg-orange-200/60 text-orange-400 rounded w-fit tracking-[5px]'>About Us</h3>
          <h1 className='text-4xl font-bold tracking-[5px]'>The Leading Real Estate <br /> Marketplace.</h1>
          <p className='text-base tracking-wide'>We started with a passionate team, focusing on residential <br /> developments in Abuja. As our vision grew, so did our reach, <br /> expanding into Edo State and diversifying into commercial <br /> projects. In 2015, we introduced TJ Homes, a brand dedicated <br /> to delivering excellence and affordability in real estate.

          Today, <br /> TEHILJEM Nig. Ltd stands as a trusted name in Nigeria’s real <br /> estate sector, renowned for innovative housing solutions and <br /> a customer-first approach. Our commitment remains <br /> unwavering—building homes, shaping communities, and <br /> redefining excellence in real estate development.</p>

          <div className='grid grid-cols-2 gap-6'>

            <p data-aos="fade-left"
              data-aos-duration="1000" className='flex items-center gap-3 '><span className='bg-orange-400 tracking-wide p-3 rounded-full text-white font-bold text-2xl flip-vertical-left'><IoHomeOutline /></span>Smart Home Design</p>
            
            <p data-aos="fade-right"
              data-aos-duration="2000" className='flex items-center gap-3'><span  className='bg-orange-400 tracking-wide p-3 rounded-full text-white font-bold text-2xl flip-vertical-left'><IoFlowerOutline /></span>Beautiful Enviroment</p>

            <p data-aos="fade-left"
              data-aos-duration="1000" className='flex items-center gap-3'><span  className='bg-orange-400 tracking-wide p-3 rounded-full text-white font-bold text-2xl flip-vertical-left'><CgStyle /></span>Exceptional Lifestyle</p>

            <p data-aos="fade-right"
              data-aos-duration="2000" className='flex items-center gap-3'><span  className='bg-orange-400 v p-3 rounded-full text-white font-bold text-2xl flip-vertical-left'><MdMoreTime /></span>Complete 24/7 Security</p>
          </div>

          <div>
            <p className='w-fit px-5 py-3 bg-orange-100 hover:bg-orange-50/40 text-sm rounded'>" TEHILJEM Nig. Ltd is a proud member of the Real Estate Developers Association of Nigeria <b>(REDAN)</b> "</p>
          </div>

         <div className='flex items-center justify-center w-full my-5'>
         <motion.button 
              initial={{opacity:0, y:-50}}
              animate={{opacity:1, y:0}}
              transition={{duration:0.5}}
              whileHover={{ scale:1.1}}
              whileTap={{scale:0.9}}

              className="hover:bg-gray-600/50 bg-blue-300 text-black hover:text-white px-4 font-semibold rounded-md cursor-pointer py-3" >Our Services
            </motion.button>
         </div>
        </div>
      </section>

      {/* section 3 swiper */}
      <div 
        data-aos="fade-up"
        data-aos-duration="1000"
      
        id='section3' className='grid grid-cols-1 md:flex gap-5 bg-gray-200 px-[1rem] md:px-[3rem] font-poppins mt-10'>
        <div 
           data-aos="fade-right"
           data-aos-duration="3000"

          className=' py-5 md:py-16'>
          <h1 className='md:text-2xl md:text-center font-semibold'>
            Tehiljem is a premier real estate <br /> platform in Nigeria, offering  an <br /> extensive range of property <br /> listings for sale, rent, and short-let.
          </h1>

          <p className='py-6 text-base md:text-center'>
          Land ownership is not just about buying property. It is about <br /> investing in your future, creating generational wealth, and <br /> securing financial stability. For years, smart investors have <br />understood the power of real estate, using land as a wealth <br /> -building tool that appreciates over time. With Tehiljem Nig Ltd, <br /> you are not just purchasing a land, you are making a strategic <br /> investment in prime locations with high growth potential.
          </p>

          <div className='flex items-center justify-center w-full my-3 md:my-5'>
          <motion.button 
              initial={{opacity:0, y:-50}}
              animate={{opacity:1, y:0}}
              transition={{duration:0.5}}
              whileHover={{ scale:1.1}}
              whileTap={{scale:0.9}}

              className="hover:bg-gray-600/50 bg-blue-300 text-black hover:text-white px-4 rounded-md font-semibold cursor-pointer py-3" >Explore Our Offer
            </motion.button>
          </div>

        </div>

        {/* SWIPER JS */}
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
                <img src="/image/eccvilla2.jpg" alt='image of eccvilla1' className='rounded-lg ring ring-orange-300/40' width={100} height={100} />
              </SwiperSlide>

              <SwiperSlide>
                <img src="/image/rio.jpg" alt='image of primesite' className='rounded-lg ring ring-orange-300/40' width={100} height={100} />
              </SwiperSlide>

              <SwiperSlide>
                <img src="/image/scepter.jpg" alt='image of primesite' className='rounded-lg ring ring-orange-300/40' width={100} height={100}/>
              </SwiperSlide>

              <SwiperSlide>
                <img src="/image/primesite.jpg" alt='image of primesite' className='rounded-lg ring ring-orange-300/40' width={100} height={100} />
              </SwiperSlide>

              <SwiperSlide>
                <img src="/image/kp1.jpg" alt='image of primesite' className='rounded-lg ring ring-orange-300/40' width={100} height={100} />
              </SwiperSlide>

              <SwiperSlide>
                <img src="/image/kp2.jpg" alt='image of primesite' className='rounded-lg ring ring-orange-300/40' width={100} height={100} />
              </SwiperSlide>


            </Swiper>  
          </div>

        </div>
      </div>

      {/* section 4 Our services provided*/}
      <div 
        data-aos="fade-up"
        data-aos-duration="1000"

        id='section4' className='bg-gray-100 my-10 px-[1rem] md:px-[3rem] font-poppins pb-10'>
        <div 
          data-aos="fade-up"
          data-aos-duration="2000"

          className='flex flex-col items-center justify-center py-16'>
          <h3 className='text-base tracking-[5px] text-center'>HOUSES | LAND | CONSTRUCTION</h3>
          <h1 className='tracking-wide font-bold text-xl md:text-4xl pt-3 text-center'>The Future of Housing in Nigeria is Here.</h1>
        </div>

        <div className='block md:grid md:grid-cols-3 gap-6'>
          <div 
            data-aos="zoom-in"
            data-aos-duration="1000"
          
          className='hvr-float-shadow'>
            <Image src='/image/land3.png' width={500} height={500} alt='image of property' className='rounded-lg  transition duration-300 hover:brightness-75 ring ring-orange-300/40' />
            <h3 className='flex items-center gap-3 py-3 justify-center font-semibold text-blue-900/40 hover:text-blue-900'>Explore Our Homes <span className='animate-bounce text-xl '><PiArrowBendRightUpFill /></span></h3>
          </div>

          <div 
            data-aos="zoom-in"
            data-aos-duration="2000"

          className='hvr-float-shadow py-8 md:py-0'>
            <Image src='/image/land.png' width={500} height={500} alt='image of property' className='rounded-lg  transition duration-300 hover:brightness-75 ring ring-orange-300/40' />
            <h3 className='flex items-center gap-3 py-3 justify-center  font-semibold text-blue-900/40 hover:text-blue-900'>Our Landed Properties <span className='animate-bounce text-xl '><PiArrowBendRightUpFill /></span></h3>
          </div>


          <div
            data-aos="zoom-in"
            data-aos-duration="3000" 

            className='hvr-float-shadow'>
            <Image src='/image/land2.png' width={500} height={500} alt='image of property' className='rounded-lg  transition duration-300 hover:brightness-75 ring ring-orange-300/40' />
            <h3 className='flex items-center gap-3 py-3 justify-center  font-semibold text-blue-900/40 hover:text-blue-900'>Learn About Our Construction <span className='animate-bounce text-xl '><PiArrowBendRightUpFill /></span></h3>
          </div>
        </div>
      </div>

      {/* section 5 our featured properties */}
      <div 
        data-aos="fade-up"
        data-aos-duration="1000"

       id='section5' className='bg-gray-50 my-10 px-[1rem] md:px-[3rem] font-poppins pb-10'>
        <div 
          data-aos="fade-up"
          data-aos-duration="2000"
        
        className='flex flex-col items-center justify-center py-5 md:py-16'>
          <h1 className='flex text-base md:text-3xl font-bold tracking-[5px] items-center gap-3'>Our Featured Properties <span className='animate-bounce text-xl '><PiArrowBendRightDownFill /></span></h1>
          
        </div>
        
        {/* upside */}
        <div className='lg:flex  gap-8'>
          {/* 1 */}
          <div className='flex flex-col items-center'>
            <Image src='/image/scepter2.jpg' width={500} height={500} alt='image of property' 
             data-aos="zoom-in"
             data-aos-duration="1000" 
             className='rounded-lg cursor-pointer transition duration-300 hover:brightness-75 ring ring-orange-300/40' />

            <div className='flex flex-col items-center py-5'>
              <h1 className='text-xl md:text-3xl text-blue-900 font-bold'>Scepter City</h1>
              <p className='text-base'>Location: IDU, Abuja</p>
            </div>


            <div className='flex items-center justify-center'>
              <ul className='text-sm md:text-base'>
                <li>250sqm - N3.5M</li>
                <li>400sqm - 5.5M</li>
                <li>500sqm - N6M</li>
              </ul>
            </div>


            <div className='flex items-center justify-center py-4'>
              {/* You can open the modal using document.getElementById('ID').showModal() method */}
              <motion.button 
                whileHover={{scale:1.1}}
                whileTap={{scale:0.9}}
                className="bt hover:bg-gray-600/50 bg-blue-300 text-black hover:text-white px-4 rounded-md font-semibold cursor-pointer py-3" onClick={()=>document.getElementById('my_modal_3').showModal()}>view more</motion.button>
              <dialog id="my_modal_3" className="modal">
              <div className="modal-box ">
                <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <h3 className="font-bold text-lg text-center py-5">Scepter City</h3>
                <h3><b>Location:</b> </h3>
                <span className='flex items-center gap-1 '><FaMapPin />IDU, Abuja</span>

                <ul className='py-2'>
                  <li>250sqm - N3.5M</li>
                  <li>400sqm - 5.5M</li>
                  <li>500sqm - N6M</li>
                </ul>

                <h1 className='font-bold'>Features</h1>
                <ul>
                  <li className='flex items-center gap-1'><LuFence /> Perimeter Fencing</li>
                  <li className='flex items-center gap-1'><IoIosPeople />Security</li>
                  <li className='flex items-center gap-1'><GiCctvCamera />CCTV</li>
                  <li className='flex items-center gap-1'><PiRoadHorizonFill />Asphalf Road</li>
                </ul>

                <h1 className='font-bold pt-2'>Landmarks</h1>
                <ul>
                  <li className='flex items-center gap-1'><IoCheckmark />Opposite Nigeris Army Estate, IDU</li>
                  <li className='flex items-center gap-1'><IoCheckmark />Train Station</li>
                </ul>

                
                
              </div>
              </dialog>
            </div>
          </div>

          {/* 2 */}
          <div className='py-16 lg:py-0 flex flex-col items-center'>
            <Image src='/image/jemzy.png' width={500} height={500} alt='image of property' 
              data-aos="zoom-in"
              data-aos-duration="2000" 
              className='rounded-lg cursor-pointer transition duration-300 hover:brightness-75 ring ring-orange-300/40' />

            <div className='flex flex-col items-center py-5'>
              <h1 className='text-xl md:text-3xl text-blue-900 font-bold'>Jemzys Court</h1>
              <p className='text-base'>Location: Guzape, Abuja</p>
            </div>


            <div className='flex items-center justify-center'>
              <ul className='text-sm md:text-base'>
                <li>200sqm - N2.5M</li>
                <li>300sqm - N3.750M</li>
                <li>500sqm - N5.250M</li>
              </ul>
            </div>


            <div className='flex items-center justify-center py-4'>
              {/* You can open the modal using document.getElementById('ID').showModal() method */}
              <motion.button 
                whileHover={{scale:1.1}}
                whileTap={{scale:0.9}}
                className="bt hover:bg-gray-600/50 bg-blue-300 text-black hover:text-white px-4 rounded-md font-semibold cursor-pointer py-3" onClick={()=>document.getElementById('my_modal_2').showModal()}>view more</motion.button>
              <dialog id="my_modal_2" className="modal">
              <div className="modal-box ">
                <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <h3 className="font-bold text-lg text-center py-5">Jemzys Court</h3>
                <h3><b>Location:</b> </h3>
                <span className='flex items-center gap-1 '><FaMapPin />Guzape, Abuja</span>

                <ul className='py-2'>
                  {/* <li>250sqm - N1.925M</li>
                  <li>400sqm - N3.080M</li>
                  <li>500sqm - N3.850M</li> */}
                </ul>

                <h1 className='font-bold'>Features</h1>
                <ul>
                  {/* <li className='flex items-center gap-1'><LuFence /> Perimeter Fencing</li>
                  <li className='flex items-center gap-1'><IoIosPeople />Security</li>
                  <li className='flex items-center gap-1'><GiCctvCamera />CCTV</li>
                  <li className='flex items-center gap-1'><PiRoadHorizonFill />Asphalf Road</li> */}
                </ul>

                <h1 className='font-bold pt-2'>Landmarks</h1>
                <ul>
                  {/* <li className='flex items-center gap-1'><IoCheckmark />Opposite Nigeris Army Estate, IDU</li>
                  <li className='flex items-center gap-1'><IoCheckmark />Train Station</li> */}
                </ul>

                
                
              </div>
              </dialog>
            </div>
          </div>

          {/* 3 */}
          <div className='flex flex-col items-center'>
            <Image src='/image/haven.png' width={500} height={500} alt='image of property' 
              data-aos="zoom-in"
              data-aos-duration="3000" 
              className='rounded-lg cursor-pointer transition duration-300 hover:brightness-75 ring ring-orange-300/40' />

            <div className='flex flex-col items-center py-5'>
              <h1 className='text-xl md:text-3xl text-blue-900 font-bold'>The Haven</h1>
              <p className='text-base'>Location: Katampe Extension, Abuja</p>
            </div>


            <div className='flex items-center justify-center'>
              <ul className='text-sm md:text-base'>
                <li>250sqm - N1.925M</li>
                <li>400sqm - N3.080M</li>
                <li>500sqm - N3.850M</li>
              </ul>
            </div>


            <div className='flex items-center justify-center py-4'>
              {/* You can open the modal using document.getElementById('ID').showModal() method */}
              <motion.button 
                whileHover={{scale:1.1}}
                whileTap={{scale:0.9}}
                className="bt hover:bg-gray-600/50 bg-blue-300 text-black hover:text-white px-4 rounded-md font-semibold cursor-pointer py-3" onClick={()=>document.getElementById('my_modal_4').showModal()}>view more</motion.button>
              <dialog id="my_modal_4" className="modal">
              <div className="modal-box ">
                <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <h3 className="font-bold text-lg text-center py-5">The Haven</h3>
                <h3><b>Location:</b> </h3>
                <span className='flex items-center gap-1 '><FaMapPin />Katampe Extension, Abuja</span>

                <ul className='py-2'>
                  {/* <li>250sqm - N1.925M</li>
                  <li>400sqm - N3.080M</li>
                  <li>500sqm - N3.850M</li> */}
                </ul>

                <h1 className='font-bold'>Features</h1>
                <ul>
                  {/* <li className='flex items-center gap-1'><LuFence /> Perimeter Fencing</li>
                  <li className='flex items-center gap-1'><IoIosPeople />Security</li>
                  <li className='flex items-center gap-1'><GiCctvCamera />CCTV</li>
                  <li className='flex items-center gap-1'><PiRoadHorizonFill />Asphalf Road</li> */}
                </ul>

                <h1 className='font-bold pt-2'>Landmarks</h1>
                <ul>
                  {/* <li className='flex items-center gap-1'><IoCheckmark />Opposite Nigeris Army Estate, IDU</li>
                  <li className='flex items-center gap-1'><IoCheckmark />Train Station</li> */}
                </ul>

                
                
              </div>
              </dialog>
            </div>
          </div>
        </div>
      </div>

      {/* section 6 downside of featured properties */}
      <div id='section6' className='lg:flex gap-8 px-[1rem] md:px-[3rem]'>
        {/* 4 */}
        <div className='flex flex-col items-center'>
            <Image src='/image/img3.png' width={500} height={500} alt='image of property' 
              data-aos="zoom-in"
              data-aos-duration="1000" 
              className='rounded-lg cursor-pointer transition duration-300 hover:brightness-75 ring ring-orange-300/40' />

            <div className='flex flex-col items-center py-5'>
              <h1 className='text-xl md:text-3xl text-blue-900 font-bold'>Villa Ecclesia</h1>
              <p className='text-base'>Location: Kuje Phase III, Abuja</p>
            </div>


            <div className='flex items-center justify-center'>
              <ul className='text-sm md:text-base'>
                <li>250sqm - N3M</li>
                <li>350sqm - N4M</li>
                <li>450sqm - N6M</li>
              </ul>
            </div>


            <div className='flex items-center justify-center py-4'>
              {/* You can open the modal using document.getElementById('ID').showModal() method */}
              <motion.button 
                whileHover={{scale:1.1}}
                whileTap={{scale:0.9}}
                className="bt hover:bg-gray-600/50 bg-blue-300 text-black hover:text-white px-4 rounded-md font-semibold cursor-pointer py-3" onClick={()=>document.getElementById('my_modal_5').showModal()}>view more</motion.button>
              <dialog id="my_modal_5" className="modal">
              <div className="modal-box ">
                <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <h3 className="font-bold text-lg text-center py-5">Villa Ecclesia Phase 1 & 2</h3>
                <h3><b>Location:</b> </h3>
                <span className='flex items-center gap-1 '><FaMapPin />Kuje Phase III, Abuja</span>

                <ul className='py-2'>
                  {/* <li>250sqm - N1.925M</li>
                  <li>400sqm - N3.080M</li>
                  <li>500sqm - N3.850M</li> */}
                </ul>

                <h1 className='font-bold'>Features</h1>
                <ul>
                  {/* <li className='flex items-center gap-1'><LuFence /> Perimeter Fencing</li>
                  <li className='flex items-center gap-1'><IoIosPeople />Security</li>
                  <li className='flex items-center gap-1'><GiCctvCamera />CCTV</li>
                  <li className='flex items-center gap-1'><PiRoadHorizonFill />Asphalf Road</li> */}
                </ul>

                <h1 className='font-bold pt-2'>Landmarks</h1>
                <ul>
                  {/* <li className='flex items-center gap-1'><IoCheckmark />Opposite Nigeris Army Estate, IDU</li>
                  <li className='flex items-center gap-1'><IoCheckmark />Train Station</li> */}
                </ul>

                
                
              </div>
              </dialog>
            </div>
        </div>


        {/* 5 */}
        <div className='py-16 lg:py-0 flex flex-col items-center'>
            <Image src='/image/rio2.png' width={500} height={500} alt='image of property' 
             data-aos="zoom-in"
             data-aos-duration="2000" 
             className='rounded-lg cursor-pointer transition duration-300 hover:brightness-75 ring ring-orange-300/40' />

            <div className='flex flex-col items-center py-5'>
              <h1 className='text-xl md:text-3xl text-blue-900 font-bold'>Rio Dominion Estate</h1>
              <p className='text-base'>Location: Lugbe, Abuja</p>
            </div>


            <div className='flex items-center justify-center'>
              <p className='text-sm md:text-base items-center justify-center'>
                Own a 3 Bedroom <br />
                Semi-detached carcass <br />
                duplex with initial payment <br />
                of N5,000,000.00
              </p>
            </div>


            <div className='flex items-center justify-center py-4'>
              {/* You can open the modal using document.getElementById('ID').showModal() method */}
              <motion.button 
                whileHover={{scale:1.1}}
                whileTap={{scale:0.9}}
                className="bt hover:bg-gray-600/50 bg-blue-300 text-black hover:text-white px-4 rounded-md font-semibold cursor-pointer py-3" onClick={()=>document.getElementById('my_modal_6').showModal()}>view more</motion.button>
              <dialog id="my_modal_6" className="modal">
              <div className="modal-box ">
                <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <h3 className="font-bold text-lg text-center py-5">Rio Dominion Estate</h3>
                <h3><b>Location:</b> </h3>
                <span className='flex items-center gap-1 '><FaMapPin />Lugbe, Abuja</span>

                <ul className='py-2'>
                  {/* <li>250sqm - N1.925M</li>
                  <li>400sqm - N3.080M</li>
                  <li>500sqm - N3.850M</li> */}
                </ul>

                <h1 className='font-bold'>Features</h1>
                <ul>
                  {/* <li className='flex items-center gap-1'><LuFence /> Perimeter Fencing</li>
                  <li className='flex items-center gap-1'><IoIosPeople />Security</li>
                  <li className='flex items-center gap-1'><GiCctvCamera />CCTV</li>
                  <li className='flex items-center gap-1'><PiRoadHorizonFill />Asphalf Road</li> */}
                </ul>

                <h1 className='font-bold pt-2'>Landmarks</h1>
                <ul>
                  {/* <li className='flex items-center gap-1'><IoCheckmark />Opposite Nigeris Army Estate, IDU</li>
                  <li className='flex items-center gap-1'><IoCheckmark />Train Station</li> */}
                </ul>

                
                
              </div>
              </dialog>
            </div>
        </div>


        {/* 6 */}
        <div className='pb-10 flex flex-col items-center'>
            <Image src='/image/tj.png' width={500} height={500} alt='image of property' 
            data-aos="zoom-in"
            data-aos-duration="3000"  
            className='rounded-lg cursor-pointer transition duration-300 hover:brightness-75 ring ring-orange-300/40' />

            <div className='flex flex-col items-center py-5'>
              <h1 className='text-xl md:text-3xl text-blue-900 font-bold'>TJ Homes</h1>
              <p className='text-base'>Location: </p>
            </div>


            <div className='flex items-center justify-center'>
              <ul className='text-sm md:text-base'>
                <li>250sqm - N36M</li>
                <li>400sqm - N50M</li>
                <li>700sqm - N90M</li>
              </ul>
            </div>


            <div className='flex items-center justify-center py-4'>
              {/* You can open the modal using document.getElementById('ID').showModal() method */}
              <motion.button 
                whileHover={{scale:1.1}}
                whileTap={{scale:0.9}}
                className="bt hover:bg-gray-600/50 bg-blue-300 text-black hover:text-white px-4 rounded-md font-semibold cursor-pointer py-3" onClick={()=>document.getElementById('my_modal_7').showModal()}>view more</motion.button>
              <dialog id="my_modal_7" className="modal">
              <div className="modal-box ">
                <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <h3 className="font-bold text-lg text-center py-5">TJ Homes</h3>
                <h3><b>Location:</b> </h3>
                <span className='flex items-center gap-1 '><FaMapPin /></span>

                <ul className='py-2'>
                  {/* <li>250sqm - N1.925M</li>
                  <li>400sqm - N3.080M</li>
                  <li>500sqm - N3.850M</li> */}
                </ul>

                <h1 className='font-bold'>Features</h1>
                <ul>
                  {/* <li className='flex items-center gap-1'><LuFence /> Perimeter Fencing</li>
                  <li className='flex items-center gap-1'><IoIosPeople />Security</li>
                  <li className='flex items-center gap-1'><GiCctvCamera />CCTV</li>
                  <li className='flex items-center gap-1'><PiRoadHorizonFill />Asphalf Road</li> */}
                </ul>

                <h1 className='font-bold pt-2'>Landmarks</h1>
                <ul>
                  {/* <li className='flex items-center gap-1'><IoCheckmark />Opposite Nigeris Army Estate, IDU</li>
                  <li className='flex items-center gap-1'><IoCheckmark />Train Station</li> */}
                </ul>

                
                
              </div>
              </dialog>
            </div>
        </div>
      </div>

      {/* Section 7 why choose us / youtube videos*/}
      <div id='section7' 
        data-aos="fade-up"
        data-aos-duration="1000"

       className='bg-gray-50  px-[1rem] md:px-[3rem] pb-12 font-poppins'>
        <h1 className='text-center text-base md:text-3xl font-bold tracking-[5px] py-5 md:py-16'>WHY CHOOSE US ?</h1>

        <div className='lg:flex '>
          <div className='flex flex-col gap-8'>
            <h2 className='text-2xl font-bold underline'>Why Choose TehilJem Nig. Ltd?</h2>

            <p 
            data-aos="fade-right"
            data-aos-duration="1000"
            
            className='tracking-wide'>For over a decade, Tehiljem Nig Ltd has been a pillar of <br /> excellence in the real estate industry, built on a <br /> foundation of integrity, innovation, and expertise. With <br /> a highly experienced team, we provide top-tier real <br /> estate solutions, ensuring quality, reliability, and value <br /> in every project. Whether residential, commercial, or <br /> investment properties, we are committed to delivering <br /> tailored services that meet and exceed our <br /> clients' expectations.</p>


            <div className=''>
              <p onClick={toggle1} className={`font-bold text-2xl px-4 py-3 ${
                show1 ? "bg-orange-400" : "bg-orange-300/50"
                } hover:bg-orange-400 border border-black cursor-pointer text-white rounded`}>Jemzys Court, Guzape, Abuja
              </p>

              <p onClick={toggle2} className={`font-bold text-2xl px-4 py-3 ${
                show1 ? "bg-orange-400" : "bg-orange-300/50"
                } hover:bg-orange-400 border border-black cursor-pointer text-white rounded`}>Rio Dominion Estate, Abuja
              </p>

              <p onClick={toggle3} className={`font-bold text-2xl px-4 py-3 ${
                show1 ? "bg-orange-400" : "bg-orange-300/50"
                } hover:bg-orange-400 border border-black cursor-pointer text-white rounded`}>TJ Homes Idu, Abuja
              </p>
            </div>
          </div>

          <div className='ml-auto shadow overflow-hidden'>
            {
              show1  && <YouTube videoId='oWgpYmVxaUY' opts={opts}  className='rounded-lg shadow-lg '/>
            }

            {
              show2 && <YouTube videoId='qPlzKnDX30M' opts={opts} className='rounded-lg shadow-lg '/>
            }

            {
              show3 && <YouTube videoId='XCsmyQBcOCg' opts={opts} className='rounded-lg shadow-lg '/>
            }

          </div>
        </div>

      </div>

      {/* Section 8 Team Members */}
      <div id='section8' 
        data-aos="fade-up"
        data-aos-duration="1000"

        className='bg-gray-50 font-poppins px-[1rem] pt-16 md:px-[3rem]'>
        <div className='flex flex-col gap-6'>
          <h3 className='text-center text-base md:text-2xl font-bold tracking-[5px]'>TEAM MEMBERS</h3>
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

      {/* Section 9 API Blog / News n real estate & other related news */}
      <div id='section9'
        data-aos="fade-up"
        data-aos-duration="1000"

        className=' font-poppins pt-16'>
        <h1 className=" font-bold mb-6 font-poppins tracking-[5px] justify-self-center flex items-center gap-2 text-base md:text-2xl px-[1rem] md:px-[3rem]">Lastest News Feed - <span><Image src='/image/news.svg' width={40} height={40} alt="new logo" className=""/></span></h1>

        {/* mapping */}
        <div className='  p-4 md:p-6">'>
          <main className="min-h-screen font-poppins grid grid-cols-1 lg:flex gap-6">
       
          {error && <p className="text-red-500">{error}</p>}

          {data ? 
            (data.articles && data.articles.length > 0 ? 
              (data.articles.map((article, index) => (
            <div key={index} className="p-4 bg-white shadow-lg rounded-lg hover:bg-black/10 transition duration-300">
              {article.urlToImage && (
                <img
                  src={article.urlToImage}
                  alt={article.title}
                  className="w-full h-48 sm:h-64 object-cover rounded mb-4"
                />
              )}
              <h2 className="text-base  font-semibold">{article.title}</h2>

              {/* Date Added Below */}
              {article.publishedAt && (<p className="text-xs md:text-sm text-gray-500 mb-2">Published on: {new Date(article.publishedAt).toLocaleDateString()}</p>)}

              <p className="mt-4 text-sm md:text-base text-gray-700">{article.description}</p>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1 px-4 py-2 rounded bg-cyan-600/30 hover:bg-cyan-400/90 text-gray-700 hover:text-black transition-opacity duration-300 text-sm md:text-base"
              >
                Read more 
              </a>
            </div>))) : (<p className="text-center text-gray-600">No live articles found.</p>)) : 

            <div className="w-full flex items-center justify-center">
              <Image src='/image/spinner.gif' width={100} height={100} alt='loader' className='bg-white-20'/>
            </div>
          }
          </main>
        </div>

    

      </div>

      {/* section 10 Our services | Main focus */}
      <div id='section10' 
        data-aos="fade-up"
        data-aos-duration="1000"
      
        className='font-poppins px-[1rem] md:px-[3rem] py-8'>
        <div 
          data-aos="fade-up"
          data-aos-duration="2000"

          className='text-center py-8 flex flex-col gap-5'>
          <h3 className='text-xl flex mx-auto hvr-bubble-float-bottom px-3 py-1 bg-orange-200/60 text-orange-400 rounded w-fit tracking-[5px]'>Our Services</h3>
          <h1 className='text-base md:text-4xl font-bold tracking-[5px] font-poppins'>Our Main Focus</h1>
        </div>

       {/* the three provided services */}
        <div className='grid grid-cols-1 md:flex items-center justify-center gap-8 lg:gap-20'>
          {/* 1 buy a home */}
          <motion.div 
            whileHover={{ scale:1.1}}
            whileTap={{scale:0.9}}

            className='flex flex-col items-center justify-center bg-gray-50 px-6 py-12 shadow drop-shadow-lg hvr-underline-from-left'>
            <div className='border-dashed border-4 border-orange-200/60 px-4 py-7 rounded-full w-fit flex mx-auto'>
              <Image src='/image/house1.png' width={100} height={100} alt='buy a house image' className='animate-pulse'/>
            </div>
           
            <div className='flex flex-col gap-3 pt-8 font-poppins'>
              <h3 className=' text-center font-extrabold text-base md:text-2xl'>Buy a home</h3>
              <p className='text-sm'>over 1 million+ homes for sale available on the website, <br /> we can match you with a house you will want to call home.</p>
              <button className='flex items-center justify-center font-poppins pt-5 text-gray-400 hover:text-orange-600 cursor-pointer'>Find A Home <HiArrowLongRight /></button>
            </div>
          </motion.div>


          {/* 2 Buy a Land  */}
          <motion.div 
             whileHover={{ scale:1.1}}
             whileTap={{scale:0.9}}

            className='flex flex-col items-center justify-center bg-gray-50 px-6 py-12 shadow drop-shadow-lg hvr-underline-from-left'>
            <div className='border-dashed border-4 border-orange-200/60 px-4 py-7 rounded-full w-fit flex mx-auto'>
              <Image src='/image/house2.png' width={100} height={100} alt='buy a house image' className='animate-pulse'/>
            </div>

            <div className='flex flex-col gap-3 pt-8 font-poppins'>
              <h3 className='font-extrabold text-center text-base md:text-2xl'>Buy a Land</h3>
              <p className='text-sm'>over 1 million+ homes for sale available on the website, <br /> we can match you with a house you will want to call home.</p>
              <button className='flex items-center justify-center font-poppins pt-5 text-gray-400 hover:text-orange-600 cursor-pointer'>Find A Home <HiArrowLongRight /></button>
            </div>
          </motion.div>


          {/* 3 Buy a Land & Build  */}
          <motion.div 
             whileHover={{ scale:1.1}}
             whileTap={{scale:0.9}}
            className='flex flex-col items-center justify-center bg-gray-50 px-6 py-12 shadow drop-shadow-lg hvr-underline-from-left'>
            <div className='border-dashed border-4 border-orange-200/60 px-4 py-7 rounded-full w-fit flex mx-auto'>
              <Image src='/image/house3.png' width={100} height={100} alt='buy a house image' className='animate-pulse'/>
            </div>

            <div className='flex flex-col gap-3 pt-8 font-poppins'>
              <h3 className='font-extrabold text-center text-base md:text-2xl'>Buy a Land & Build</h3>
              <p className='text-sm'>over 1 million+ homes for sale available on the website, <br /> we can match you with a house you will want to call home.</p>
              <button className='flex items-center justify-center font-poppins pt-5 text-gray-400 hover:text-orange-600 cursor-pointer'>Find A Home <span><HiArrowLongRight /></span></button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* section 11 Apartment plan & sketch */}
      <div id='section11'
        data-aos="fade-up"
        data-aos-duration="1000"

        className='font-poppins px-[1rem] md:px-[3rem] py-8'>
        <div 
          data-aos="fade-up"
          data-aos-duration="2000"
          className='text-center py-8 flex flex-col gap-5'>
          <h3 className='text-xl flex mx-auto hvr-bubble-float-bottom px-3 py-1 bg-orange-200/60 text-orange-400 rounded w-fit tracking-[5px]'>Apartment Sketch</h3>
          <h1 className='text-base md:text-4xl font-bold tracking-[5px] font-poppins'>Apartments Plan</h1>
        </div>

        {/* toggle sketch */}
        <ul className='grid grid-cols-2 gap-5 md:grid-cols-3 lg:flex text-base px-6 py-3 rounded-md text-orange-400 items-center font-poppins mx-auto justify-center md:gap-12 w-fit bg-orange-200/60'>
          <li onClick={toggleScepterCity} className='cursor-pointer hvr-underline-from-center text-center w-fit'>Scepter City</li>

          <li onClick={toggleJemzys} className='cursor-pointer hvr-underline-from-center text-center w-fit'>Jemzys Court</li>

          <li onClick={toggleHaven} className='cursor-pointer hvr-underline-from-center text-center w-fit'>The Haven</li>

          <li onClick={toggleVilla} className='cursor-pointer hvr-underline-from-center text-center w-fit'>Villa Ecclesia</li>

          <li onClick={toggleRio} className='cursor-pointer hvr-underline-from-center text-center w-fit'>Rio Dominion Estate</li>

          <li onClick={toggleTjhomes} className='cursor-pointer hvr-underline-from-center text-center w-fit'>Tj homes</li>

        </ul>


      
        {/* specter city with sketch */}
        {scepterCity && 
          <div 
           data-aos="zoom-in-down"
           data-aos-duration="1000"
           
           className='grid grid-cols-1 lg:flex gap-16 items-center justify-center pt-[3rem]'>

          {/* skpecter city */}
          <div className='bg-orange-200/60 px-[1rem] py-12 font-poppins palncolor'>
            <h1  className='uppercase font-poppins text-2xl font-extrabold'>Scepter City</h1>
            <p className='py-5'>Enimad minim veniam quis nostrud <br /> exercitation ullamco laboris. Lorem <br /> ipsum dolor sit amet cons aetetur <br /> adipisicing elit sedo eiusmod tempor. <br /> Incididunt labore et dolore magna <br /> aliqua. sed ayd minim veniam.</p>

            <ul>
              <li>Total Area:----------</li>
              <li>Bedroom:----------</li>
              <li>Bathroom:----------</li>
              <li>Belcony/Pets:----------</li>
              <li>Lounge:----------</li>
            </ul>
          </div>

          {/* image  */}
          <div> 
           <Image src='/image/pl1.jpg' width={500} height={500} alt='plan sketch'/>
          </div>
          </div>
        }


        {/* jemzys with sketch */}
        {jemzys && 
          <div 
            data-aos="zoom-in-down"
            data-aos-duration="1000"
            className='grid grid-cols-1 lg:flex gap-16 items-center justify-center pt-[3rem]'>

          {/* jemzys court */}
          <div className='bg-orange-200/60 px-[1rem] py-12 font-poppins palncolor'>
            <h1  className='uppercase font-poppins text-2xl font-extrabold'>Jemzys Court</h1>
            <p className='py-5'>Enimad minim veniam quis nostrud <br /> exercitation ullamco laboris. Lorem <br /> ipsum dolor sit amet cons aetetur <br /> adipisicing elit sedo eiusmod tempor. <br /> Incididunt labore et dolore magna <br /> aliqua. sed ayd minim veniam.</p>

            <ul>
              <li>Total Area:----------</li>
              <li>Bedroom:----------</li>
              <li>Bathroom:----------</li>
              <li>Belcony/Pets:----------</li>
              <li>Lounge:----------</li>
            </ul>
          </div>

          {/* image  */}
          <div> 
           <Image src='/image/pl2.jpg' width={500} height={500} alt='plan sketch'/>
          </div>
          </div>
        }

         {/* The haven with sketch */}
         {haven && 
          <div 
            data-aos="zoom-in-down"
            data-aos-duration="1000"
            className='grid grid-cols-1 lg:flex gap-16 items-center justify-center pt-[3rem]'>

          {/* The Haven */}
          <div className='bg-orange-200/60 px-[1rem] py-12 font-poppins palncolor'>
            <h1  className='uppercase font-poppins text-2xl font-extrabold'>The Haven</h1>
            <p className='py-5'>Enimad minim veniam quis nostrud <br /> exercitation ullamco laboris. Lorem <br /> ipsum dolor sit amet cons aetetur <br /> adipisicing elit sedo eiusmod tempor. <br /> Incididunt labore et dolore magna <br /> aliqua. sed ayd minim veniam.</p>

            <ul>
              <li>Total Area:----------</li>
              <li>Bedroom:----------</li>
              <li>Bathroom:----------</li>
              <li>Belcony/Pets:----------</li>
              <li>Lounge:----------</li>
            </ul>
          </div>

          {/* image  */}
          <div> 
           <Image src='/image/pl3.jpg' width={500} height={500} alt='plan sketch'/>
          </div>
          </div>
        }


        {/* Villa Ecc with sketch */}
        {villa && 
          <div 
            data-aos="zoom-in-down"
           data-aos-duration="1000"
            className='grid grid-cols-1 lg:flex gap-16 items-center justify-center pt-[3rem]'>

          {/* Villa Ecc */}
          <div className='bg-orange-200/60 px-[1rem] py-12 font-poppins palncolor'>
            <h1  className='uppercase font-poppins text-2xl font-extrabold'>Villa Ecciesia</h1>
            <p className='py-5'>Enimad minim veniam quis nostrud <br /> exercitation ullamco laboris. Lorem <br /> ipsum dolor sit amet cons aetetur <br /> adipisicing elit sedo eiusmod tempor. <br /> Incididunt labore et dolore magna <br /> aliqua. sed ayd minim veniam.</p>

            <ul>
              <li>Total Area:----------</li>
              <li>Bedroom:----------</li>
              <li>Bathroom:----------</li>
              <li>Belcony/Pets:----------</li>
              <li>Lounge:----------</li>
            </ul>
          </div>

          {/* image  */}
          <div> 
           <Image src='/image/pl4.jpg' width={500} height={500} alt='plan sketch'/>
          </div>
          </div>
        }


        {/* Rio with sketch */}
        {trio && 
          <div 
            data-aos="zoom-in-down"
            data-aos-duration="1000"
            className='grid grid-cols-1 lg:flex gap-16 items-center justify-center pt-[3rem]'>

          {/* Rio Ecc */}
          <div className='bg-orange-200/60 px-[1rem] py-12 font-poppins palncolor'>
            <h1  className='uppercase font-poppins text-2xl font-extrabold'>Rio Dominion Estate</h1>
            <p className='py-5'>Enimad minim veniam quis nostrud <br /> exercitation ullamco laboris. Lorem <br /> ipsum dolor sit amet cons aetetur <br /> adipisicing elit sedo eiusmod tempor. <br /> Incididunt labore et dolore magna <br /> aliqua. sed ayd minim veniam.</p>

            <ul>
              <li>Total Area:----------</li>
              <li>Bedroom:----------</li>
              <li>Bathroom:----------</li>
              <li>Belcony/Pets:----------</li>
              <li>Lounge:----------</li>
            </ul>
          </div>

          {/* image  */}
          <div> 
           <Image src='/image/pl5.jpg' width={500} height={500} alt='plan sketch'/>
          </div>
          </div>
        }



        {/* TJ Homeswith sketch */}
        {tjhomes && 
          <div 
            data-aos="zoom-in-down"
            data-aos-duration="1000"
            className='grid grid-cols-1 lg:flex gap-16 items-center justify-center pt-[3rem]'>

          {/* TJ Homes */}
          <div className='bg-orange-200/60 px-[1rem] py-12 font-poppins palncolor'>
            <h1  className='uppercase font-poppins text-2xl font-extrabold'>TJ Homes</h1>
            <p className='py-5'>Enimad minim veniam quis nostrud <br /> exercitation ullamco laboris. Lorem <br /> ipsum dolor sit amet cons aetetur <br /> adipisicing elit sedo eiusmod tempor. <br /> Incididunt labore et dolore magna <br /> aliqua. sed ayd minim veniam.</p>

            <ul>
              <li>Total Area:----------</li>
              <li>Bedroom:----------</li>
              <li>Bathroom:----------</li>
              <li>Belcony/Pets:----------</li>
              <li>Lounge:----------</li>
            </ul>
          </div>

          {/* image  */}
          <div> 
           <Image src='/image/pl6.jpg' width={500} height={500} alt='plan sketch'/>
          </div>
          </div>
        }

      </div>


      {/* Section 12 Testimoney */}
      <div id='section12' className='font-poppins px-[1rem] md:px-[3rem] py-8'>
        <div 
          data-aos="fade-up"
          data-aos-duration="2000"
          className='text-center py-8 flex flex-col gap-5'>
          <h3 className='text-xl flex mx-auto hvr-bubble-float-bottom px-3 py-1 bg-orange-200/60 text-orange-400 rounded w-fit tracking-[5px]'>Testimonials</h3>
          <h1 className='text-base md:text-4xl font-bold tracking-[5px] font-poppins'>What our clients says..</h1>
        </div>

        <div className='grid grid-cols-1 lg:flex items-center justify-center '>
          <div 
            data-aos="fade-right">
            <Image src='/image/websketch.webp' width={900} height={900} alt='image'/>
          </div>


          <div className='w-fit py-8 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] bg-orange-200/60 palncolor  md:px-[3rem] flex flex-col mx-auto pt-5'>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="mySwiper">

            {/* 1 */}
            <SwiperSlide className='px-4'>
              <p ><BiSolidQuoteAltLeft />Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores quasi eaque rem voluptatibus reprehenderit dolorum vero veniam cumque.<BiSolidQuoteAltRight /></p>

              <div className='flex items-center gap-5 w-full pt-16'>
                <div><Image src='/image/me.jpg' width={50} height={50} alt='image' className='rounded-full'/></div>
                <ul>
                  <li><b>Name:</b> Louis Umukoro</li>
                  <li><b>Location:</b> Port Harcourt</li>
                </ul>
              </div>
            </SwiperSlide>

             {/* 2 */}
             <SwiperSlide className='px-4'>
              <p><BiSolidQuoteAltLeft />Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores quasi eaque rem voluptatibus reprehenderit dolorum vero veniam cumque.<BiSolidQuoteAltRight /></p>

              <div className='flex items-center gap-5 w-full pt-16'>
                <div><Image src='/image/me.jpg' width={50} height={50} alt='image' className='rounded-full'/></div>
                <ul>
                  <li><b>Name:</b> Louis Umukoro</li>
                  <li><b>Location:</b> Port Harcourt</li>
                </ul>
              </div>
            </SwiperSlide>




             {/* 3 */}
             <SwiperSlide className='px-4'>
              <p><BiSolidQuoteAltLeft />Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores quasi eaque rem voluptatibus reprehenderit dolorum vero veniam cumque.<BiSolidQuoteAltRight /></p>

              <div className='flex items-center gap-5 w-full pt-16'>
                <div><Image src='/image/me.jpg' width={50} height={50} alt='image' className='rounded-full'/></div>
                <ul>
                  <li><b>Name:</b> Louis Umukoro</li>
                  <li><b>Location:</b> Port Harcourt</li>
                </ul>
              </div>
            </SwiperSlide>



             {/* 4 */}
             <SwiperSlide className='px-4'>
              <p><BiSolidQuoteAltLeft />Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores quasi eaque rem voluptatibus reprehenderit dolorum vero veniam cumque.<BiSolidQuoteAltRight /></p>

              <div className='flex items-center gap-5 w-full pt-16'>
                <div><Image src='/image/me.jpg' width={50} height={50} alt='image' className='rounded-full'/></div>
                <ul>
                  <li><b>Name:</b> Louis Umukoro</li>
                  <li><b>Location:</b> Port Harcourt</li>
                </ul>
              </div>
            </SwiperSlide>


             {/* 5 */}
             <SwiperSlide className='px-4'>
              <p><BiSolidQuoteAltLeft /> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores quasi eaque rem voluptatibus reprehenderit dolorum veniam cumque.<BiSolidQuoteAltRight /></p>

              <div className='flex items-center gap-5 w-full pt-16'>
                <div><Image src='/image/me.jpg' width={50} height={50} alt='image' className='rounded-full'/></div>
                <ul>
                  <li><b>Name:</b> Louis Umukoro</li>
                  <li><b>Location:</b> Port Harcourt</li>
                </ul>
              </div>
            </SwiperSlide>

            {/* <SwiperSlide>Slide 6</SwiperSlide> */}
           
            <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
            </div>
            </Swiper>
          </div>



        </div>
        


      </div>

      {/* Section 13 Some of our big clients */}
      <div id='section13'  className='py-8 px-[1rem] lg:px-0'>

        <div className='text-center py-8 flex flex-col gap-5'>
          <h3 className='text-xl flex mx-auto hvr-bubble-float-bottom px-3 py-1 bg-orange-200/60 text-orange-400 rounded w-fit tracking-[5px]'>Our Trusted Clients</h3>
        </div>

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
         
         className='grid grid-cols-2 md:grid-cols-4 lg:flex lg:justify-between items-center justify-center'>
          <Image src='/image/2.jpg' width={100} height={100} alt='company logo'/>
          <Image src='/image/3.jpg' width={100} height={100} alt='company logo'/>
          <Image src='/image/4.jpg' width={100} height={100} alt='company logo'/>
          <Image src='/image/5.jpg' width={100} height={100} alt='company logo'/>
          <Image src='/image/2.jpg' width={100} height={100} alt='company logo'/>
          <Image src='/image/3.jpg' width={100} height={100} alt='company logo'/>
          <Image src='/image/4.jpg' width={100} height={100} alt='company logo'/>
          <Image src='/image/5.jpg' width={100} height={100} alt='company logo'/>
        </motion.div>


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

{/* <elevenlabs-convai agent-id="whfruZeeMzvIgUehZ7py"></elevenlabs-convai><script src="https://elevenlabs.io/convai-widget/index.js" async type="text/javascript"></script> */}






    </div>
  )
}

export default Home
