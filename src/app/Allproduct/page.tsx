import React from 'react'
import { Productid } from '@/utils/mock'
import ProductCard from '@/components/ProductCard'

const AllProduct = () => {
  return (
    <div>
        <div className='md:flex justify-evenly flex-wrap gap-10 mt-16'>
                 
                 {
                  Productid.map((Products) => (
                    <ProductCard 
                    key={Products.id} 
                    title= {Products.name} 
                    price={Products.price} 
                    img={Products.image}
                    category={Products.category}
                    id = {Products.id}
                    />
                  ))
                 }
                 
                 
                 
            </div>
    </div>
  )
}

export default AllProduct;