/* eslint-disable react/jsx-key */
import Quantity from '@/components/Quantity';
import { Button } from '@/components/ui/button';
import { Productid } from '@/utils/mock';
import { AiOutlineShoppingCart } from 'react-icons/ai';

import Image, {StaticImageData} from 'next/image';

const ProductDetail = (id : number | string) => {
       return Productid.filter((Products) => Products.id == id);
};

let sizes = ['XS','S','M','L','XL']

export default function page ({params} : {params : {id : string}}){
    const result = ProductDetail(params.id)

    return (
        <div>
      <div className='md:flex mt-16 m-2 flex-wrap'>
           { result.map((Products) => (
          <>
            <div key={Products.id} className='flex gap-2 md:mx-10 md:gap-10'>
               <Image src={Products.image} alt={`${Products.name}`} className='w-14 h-14 md:w-28 md:h-28 bg-gray-200' />
               <Image src={Products.image} alt={`${Products.name}`} className='w-[200px] md:w-[500px] bg-gray-200' />
             </div>
             
             <div className=' my-20'>

                 <h1 className='text-2xl md:text-4xl font-semibold  '>{Products.name} </h1>
                 <h2 className='text-xl md:text-2xl text-gray-400 font-semibold'> Sweater</h2>
                {/* sizes */}
                 <h3 className='text-lg md:text-xl font-semibold pt-12'> SELECT SIZE </h3>
                
                
                <div className='flex gap-4 md:gap-8 pt-6'>
                   {
                    sizes.map((size) => { 
                        return(
                    <div className="bg-gray-100 w-7 h-7 rounded-full border  "> 
                      <span className='flex justify-center items-center font-semibold text-gray-600'> 
                        {size}
                      </span>
                    </div>                              
                        )})}  
                </div>
                {/* Quantity */}

                <div className='flex py-14'>
                    <h3 className='font-bold text-xl'> Quantity:</h3>

                    <div>
                      <Quantity/>
                    </div>

                </div>
                   {/* price and button */}

                 <div className='flex items-center gap-6 py-'>
                    <Button className='bg-black md:text-lg gap-2 rounded-none shadow-md'>
                        <AiOutlineShoppingCart className=''/>
                      Add to Cart
                    </Button>

                    <p className='text-lg md:text-3xl font-bold'> ${Products.price.toFixed(2)} </p>
                  </div>
                
                 
               </div>
               </>
  
        ))}            
      </div>
          {/* product deatail */}
            <div className='bg-gray-50 md:m-14'>
              <div className='m-14 py-14'>
                  <h1 className='text-xl md:text-4xl font-bold'>Product Information </h1>
                  <hr className='border-black mt-8 '/>

                  <div className='md:flex justify-between py-10'>
                    <h3 className='text-lg md:text-2xl font-semibold text-gray-600 py-3'>PRODUCT DETAILS</h3>
                    <p className='md:w-8/12 text-justify  md:text-lg'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </p>
                  </div>
                  <div className='md:flex gap-40 py-10'>
                    <h3 className='text-xl md:text-2xl font-semibold text-gray-600 py-3'>PRODUCT CARE</h3>
                    
                    <ul className='md:text-lg font-bold'>
                      <li >Hand wash using cold water.</li>
                      <li>Do not using bleach.</li>
                      <li>Hang it to dry.</li>
                      <li>Iron on low temperature.</li>
                    </ul>
                  </div>
                </div>
            </div>

      </div> 

    )}