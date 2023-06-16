import React from 'react';
import Image from 'next/image';
import logo from '/public/image/logo.webp';
import Link from 'next/link';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { AiOutlineSearch } from 'react-icons/ai';


const Header = () => {
  return (
    <div className='bg-white '>
        <div className='container flex justify-around flex-wrap  p-6 '>
            {/* logo div */}
            <div className=''>
                <Image src={logo} alt='logo' />
            </div>
            {/* navigation bar */}
            <nav className=''>
                <div className='text-black'>
                    <Link href={"/Female"} className='m-3'>Female</Link>
                    <Link href={"/Male"} className='m-3'>Male</Link>
                    <Link href={"/Kids"} className='m-3'>Kids</Link>
                    <Link href={"/Allproduct"} className='m-3'>All Products</Link>
                </div>
            </nav>
            {/* search bar */}

            <div className='flex border-2 rounded-lg hover:border-black '>
                <AiOutlineSearch className='text-black text-xl' />
                <input  type="text" placeholder='What you looking for' className='text-sm text-black w-72' />
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