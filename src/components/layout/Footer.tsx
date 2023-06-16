import React from 'react';
import Image from 'next/image';
import logo from '/public/image/logo.webp';
import { TiSocialTwitter } from 'react-icons/ti';
import { TiSocialFacebook } from 'react-icons/ti';
import { TiSocialLinkedin } from 'react-icons/ti';
import Link from 'next/link';


const Footer = () => {
  return (
    <div className=''>
        {/* main div */}
        <div className='container mx-16 my-44'>
            <div className='lg:flex justify-around'>  
            {/* first section */}
            <div >
                <Image src={logo} alt='Footer Logo' width={200} className='py-5  '/>
                <p className=' py-16   lg:text-xl'>
                    Small, artisan label that offers 
                    a thoughtfully curated collection 
                    of high quality everyday essentials made.
                </p>
                {/* social media*/}
                <div className=' flex  '>
                    <TiSocialTwitter className='mx-1 w-10 h-10 bg-gray-300 rounded-lg'/>
                    <TiSocialFacebook className='mx-1 w-10 h-10 bg-gray-300 rounded-lg'/>
                    <TiSocialLinkedin className='mx-1 w-10 h-10 bg-gray-300 rounded-lg'/>
                </div>
            </div>
            {/* second section */}
            <div className='flex flex-col lg:px-20 '>
                <h1 className='text-xl lg:text-2xl font-bold p-3'>Company</h1>
                <Link   className='p-2 font-semibold' href={"/"}>About</Link>
                <Link className='p-2 font-semibold' href={"/"}>Terms of Use</Link>
                <Link className='p-2 font-semibold' href={"/"}>Privacy Policy</Link>
                <Link className='p-2 font-semibold' href={"/"}>How it Work</Link>
                <Link className='p-2 font-semibold' href={"/"}>Contact Us</Link>

            </div>
            {/* third section */}
            <div className='flex flex-col lg:px-20 '>
            <h1 className='text-xl lg:text-2xl font-bold p-3'>Support</h1>
                <Link  className='p-2 font-semibold'   href={"/"}>Support Career</Link>
                <Link className='p-2 font-semibold'  href={"/"}>24h service</Link>
                <Link className='p-2 font-semibold' href={"/"}>Quick Chat</Link>
                
            </div>
            {/* fourth section */}
            <div className='flex flex-col lg:px-20'>
            <h1 className='text-xl lg:text-2xl font-bold p-3'>ContactUs</h1>
                <Link className='p-2 font-semibold'   href={"/"}>Whatsapp</Link>
                <Link className='p-2 font-semibold' href={"/"}>Support 24h</Link>
                
            </div>
            </div>
        </div>
        <div>
            <hr className='border-1 border-black'/>
            <div className='container lg:flex justify-around'>
                <h2 className='text-lg my-3 text-gray-400 lg:text-xl lg:w-1/6'>Copyright © 2022 Dine Market</h2>
                <h2 className='text-lg my-3 font-semibold lg:text-xl lg:w-1/6'>Design by. Weird Design Studio</h2>
                <h2 className='text-lg my-3 font-semibold lg:text-sm lg:w-1/6'>Code by. muhammadfarhanb on github</h2>
            </div>
        </div>
    </div>
  )
}

export default Footer;