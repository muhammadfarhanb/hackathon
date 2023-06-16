import React from 'react'
import Image from 'next/image'
import promotions1 from 'public/image/promotions1.webp'
import promotions2 from 'public/image/promotions2.webp'
import promotions3 from 'public/image/promotions3.webp'
import { Button } from '@/components/ui/button'



const Promotions = () => {
  return (
    <div className=' lg:mx-5 '>
        <div className='container lg:my-10'>
            <div className=' text-blue-700 lg:font-semibold flex justify-center'>
                PROMOTIONS
            </div>
            <div className='flex justify-center text-base lg:text-4xl font-bold lg:my-3'>Our Promotions Events</div>
            {/* pics div */}
            <div className='lg:flex  '>
                {/* 1st row */}
                <div className='lg:w-[650px]  '>
                    {/* 1st box */}
                    <div className='bg-gray-300 lg:flex lg:items-center my-2 md:m-3 '>
                        <div className=' text-center py-4 lg:pl-10 ' >
                            <h1 className=' text-xl  lg:text-4xl font-bold '>GET UP TO 60%</h1>
                            <p className='text-sm lg:text-2xl lg:py-3 '>For the summer season</p>
                        </div>
                        <div>
                        <Image src={promotions1} alt='promotions'/>
                        </div>
                    </div>
                    {/* 2nd box */}
                    <div className='bg-black my-2 lg:m-3 '>
                        <div className='flex items-center flex-col text-white p-3 lg:p-5 ' >
                            <h1 className='text-3xl lg:text-6xl font-bold my-5'>GET 30% Off</h1>
                            <p className=' p-2 text-sm lg:text-xl'>USE PROMO CODE</p>
                            <Button className='bg-gray-600 lg:text-xl '>D I N E W E E K E N D S A L E</Button>
                        </div>
                    </div>
                </div>
                {/* 2nd row,pic and box */}
                <div className='bg-pink-100 my-2  lg:m-3 flex-wrap' >
                    <div className='p-3 lg:px-8 md:py-5'>
                        <p>Flex Sweatshirt</p>
                        <p className='lg:font-bold'><del>$100.00</del>  $75.00</p>
                    </div>
                    <div >
                        <Image src={promotions2} alt='promotions'  />
                    </div>
                </div>
                {/* 3rd row, pic and box */}
                <div className='bg-gray-300 my-2 lg:m-3 ' >
                    <div className='p-3 lg:px-8 lg:py-5 '>
                        <p>Flex Push Button Bomber</p>
                        <p className='lg:font-bold lg:text-lg'><del>$225.00</del>  $190.00</p>
                    </div>
                    <div>
                        <Image src={promotions3} alt='promotions' />
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}
export default Promotions