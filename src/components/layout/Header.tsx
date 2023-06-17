import React from 'react';
import Image from 'next/image';
import logo from '/public/image/logo.webp';
import Link from 'next/link';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { AiOutlineSearch } from 'react-icons/ai';
import { NavigationMenuDemo } from './Navlink';
import { GiHamburgerMenu } from 'react-icons/gi';


const Header = () => {
  return (
    <div className='bg-white '>
        <div className='container flex justify-around flex-wrap  p-6 '>
            {/* logo div */}
            <div className=''>
                <Image src={logo} alt='logo' />
            </div>
            {/* navigation bar */}
            
            <div className="navbar-center hidden lg:flex lg:gap-16">
                <ul className="menu menu-horizontal px-1">
                    <GiHamburgerMenu  className='lg:hidden'/>
                     <NavigationMenuDemo />
                </ul>
                {/* Search bar */}
                <div className='flex items-center border rounded-md hover:border-black h-6 '>
                <AiOutlineSearch className='text-black text-xl ' />
                <input  type="text" placeholder='What you looking for' className='text-sm  w-72' />
                </div>
                
            </div>
            {/* shopping cart */}

            <div className='text-black bg-gray-200 rounded-full w-8 h-8 flex justify-center items-center'>
                <AiOutlineShoppingCart className='text-xl font-bold' />
            </div>
            
            
        </div>
    </div>
  )
}

export default Header;