import React from 'react'
import { Button } from "@/components/ui/button"
import { AiOutlineShoppingCart } from 'react-icons/ai';
import header from '/public/image/header.webp'
import Image from 'next/image';
import featured1 from '/public/image/featured1.webp'
import featured2 from '/public/image/featured2.webp'
import featured3 from '/public/image/featured3.webp'
import featured4 from '/public/image/featured4.webp'

const Hero = () => {
  return (
    <section className='md:m-5'>
        <div className='container md:flex  '>
            {/* left side */}
            <div>
                <div className='my-16 '>
                    <Button className='bg-blue-200 text-blue-700 font-bold '>Sale 70%</Button>
                    {/* main heading */}
                    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl py-10">
                    An Industrial Take on Streetwear
                    </h1>
                    {/* main paragraph */}
                    <p className="leading-7 [&:not(:first-child)]:mt-5 w-9/12 md:text-lg">
                    Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
                    </p>
                    {/* add to cart button */}
                    <Button className='mt-10 md:mt-20'><AiOutlineShoppingCart className='text-xl m-2'/> Start Shopping </Button>
                </div>
                {/* bottom logo img */}
                <div className='grid grid-cols-2 gap-4 md:flex '>
                  <Image src={featured1} alt='featured1' className='md:px-5 w-auto'/>
                  <Image src={featured2} alt='featured2' className='md:px-5 w-auto'/>
                  <Image src={featured3} alt='featured3' className='md:px-5 w-auto'/>
                  <Image src={featured4} alt='featured4' className='md:px-5 w-auto'/>
                </div>
            </div>
            {/* right side */}
            <div className='bg-pink-100 my-16 md:m-10 rounded-full '>
                <Image src={header} alt='main image' className=' -mt-10 md:w-[1100px] '  />
            </div>
        </div>
    </section>
  )
}

export default Hero