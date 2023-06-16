import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import profemale1 from 'public/image/profemale1.webp'

const Unique = () => {
  return (
    <div className='my-44'>
        <div className='container '>
            <div className='md:flex justify-end'>
                <h1 className='text-xl md:text-6xl md:w-1/2 font-extrabold'>
                  Unique and Authentic Vintage Designer Jewellery
                </h1>
            </div>
            {/* second section */}
          <div className='bg-gray-50 -mt-14 '>
            <div className=' py-20 lg:flex justify-between lg:'>
              {/* left side */}
                {/* <div className='text-6xl opacity-10 overflow-x-hidden '>
                  Diffrent From Others
                </div> */}
                <div className=''>
                <div className='px-8'>
                  <h1 className='lg:w-52 text-xl font-bold  lg:text-2xl'>Using Good Quality Materials</h1>
                  <p className='py-4 lg:w-1/2'>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                </div>
                <div className='px-8 '>
                  <h1 className='lg:w-52 text-xl font-bold  lg:text-2xl' >100% Handmade Products</h1>
                  <p className='py-4 lg:w-1/2'>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                </div>
                </div>
                <div className=''>
                <div className='px-8 '>
                  <h1 className='lg:w-52 text-xl font-bold  lg:text-2xl'>Modern Fashion Design</h1>
                  <p className='py-4 lg:w-1/2'>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                </div>
                <div className='px-8 '>
                  <h1 className='lg:w-52 text-xl font-bold  lg:text-2xl'>Discount for Bulk Orders</h1>
                  <p className='py-4 lg:w-1/2'>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                </div>
                </div>
              
              {/* right side */}
              
              <div className='lg:flex  '>
                <Image src={profemale1} alt='female product'  className='   ' />
              
              
                <p className='lg:w-1/3 py-7  lg:mx-12 text-justify '>This piece is ethically crafted in our small family-owned workshop in Peru with 
                  unmatched attention to detail and care. The Natural color is the actual natural color 
                  of the fiber, undyed and 100% traceable.<br/>
                <Button className='my-5 lg:my-8'>See All Products</Button>
              </p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Unique;