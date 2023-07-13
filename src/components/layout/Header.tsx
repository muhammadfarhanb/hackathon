"use client"

import React,{useState} from 'react';
import Image from 'next/image';
import logo from '/public/image/logo.webp';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineShoppingCart } from 'react-icons/ai';
import { AiOutlineSearch } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';



const Header = () => {

        const [nav, setnav] = useState(false);

        const navhandler = () => {
            setnav(!nav)
        };
  return (
    <div className='bg-white '>
        <div className=' flex justify-between flex-wrap  p-6 '>
            {/* logo div */}
            <Link href={"/"}>
            <div className=''>
                <Image src={logo} alt='logo' />
            </div>
            </Link>
            {/* navigation bar */}
            
            <div className='hidden md:flex gap-10 font-semibold '>
                
               <Link href={"Category/female"}>Female</Link>
               <Link href={"Category/male"}>Male</Link>
               <Link href={"Category/kids"}>Kids</Link>
               <Link href={"/Product"}>AllProducts</Link>
            
            {/* Search bar */}
            <div className='flex items-center border rounded-md hover:border-black h-6 '>
                <AiOutlineSearch className='text-black text-xl font-semibold ' />
                <input  type="text" placeholder='What you looking for' className='text-sm  w-72' />
            </div>
            


            </div>
            {/* shopping cart */}

            <div className='text-black bg-gray-200 rounded-full w-8 h-8 flex justify-center items-center'>
                <AiOutlineShoppingCart className='text-xl font-bold' />
            </div>
            {/* humburger icon */}

            <div className=' md:hidden text-black text-xl' onClick={navhandler}>
                <GiHamburgerMenu/>
            </div>
                
            
            
            
        </div>
        {/* mobile responsive nav bar */}
        <div className={`${nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70": "" }`}>
            <div className={`${nav ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white p-10 ease-in duration-500" 
            :"fixed left-[-100%]  " } `}>
            <div className='w-full flex items-center justify-between'>
                <Link href={"/"}>
                    <div className='text-black'>
                        <Image src={logo} alt='logo' />
                    </div>
                </Link>
                <div onClick={navhandler} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>

                    <AiOutlineClose/>
                </div>
            </div>
                <hr className='mt-10 border border-black shadow-lg shadow-gray-300'/>
            <div className=' py-5 font-semibold '>
                <div className=' gap-4 flex flex-col'>
                <Link href={"Category/female"}>Female</Link>
                <Link href={"Category/male"}>Male</Link>
                <Link href={"Category/kids"}>Kids</Link>
                <Link href={"/Product"}>AllProducts</Link>
                </div>
             </div>
            
            </div>
        </div>
    </div>
  )
}

export default Header;