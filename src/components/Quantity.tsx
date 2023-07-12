"use client"

import React, {useState} from 'react'
import { Button } from './ui/button'

const Quantity = () => {

  const [num, setNum ] = useState(1)

  return (
    <div className='flex justify-center items-center px-8 gap-3'>
        {/* Minus */}
        <button className='border h-7 w-7 rounded-full bg-gray-200 text-4xl flex justify-center items-center'
        
        onClick={() => {

          setNum(num <= 1? 1 : num -1);
        }}
        >
            -
        </button>

        {/* Number */}
        <div className='text-lg '>
            {num}
        </div>
        {/* Plus */}
        <button className='border-black border-2 h-7 w-7 rounded-full  text-2xl flex justify-center items-center'
        
        onClick={() => {

          setNum(num +1)
        }}
        >
            +
        </button>
       
    </div>
  )
}

export default Quantity;