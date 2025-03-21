import React from 'react'
import Image from 'next/image'
import { SocialIcon } from 'react-social-icons'

const Footer = () => {
  return (
    <div className='px-[1rem] md:px-[3rem] h-[80vh] dark:bg-black/90 text-white flex justify-between'>

      {/* tehiljem logo */}
      <div className='flex flex-col gap-8'>
        <div className='flex items-center gap-1'>
          <div>
            <Image src='/image/tjhomelogo.png' width={50} height={50} alt='tehiljem logo' />
          </div>
          <div className='text-xl font-semibold text-blue-900'>Tehiljem Nig Ltd</div>
        </div>

        <p>Lorem Ipsum is simply dummy text <br /> of the and typesetting industry. <br />Lorem Ipsum is dummy text of the printing.</p>

        <ul className='space-y-3'>
          <li>Brooklyn, New York, United States</li>
          <li>+0123-456789</li>
          <li>example@example.com</li>
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
      <div>
        <h1>Company</h1>
        <ul>
          {/* <li>Home</li> */}
          <li>About Us</li>
          <li>Properties</li>
          <li>Our Services</li>
          <li>Contact Us</li>
          <li>Blog/News</li>
          <li>Locations Map</li>
          <li>FAQ</li>
        </ul>
      </div>

       {/* Customer Care */}
       <div>
        <h1>Customer Care</h1>
        <ul>
          <li>Chat with our AI-bot <br /> support for enquires 24/7</li>
          <li>Contact Us</li>
          <li>Office Location</li>
          <li>FAQ</li>
        </ul>
      </div>

      {/* contact form */}
      <div>
        <h1>Contact Us</h1>

      </div>

      

    </div>
  )
}

export default Footer
