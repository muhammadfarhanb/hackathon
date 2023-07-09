import ProductCard from '@/components/ProductCard'
import pro1 from 'public/image/pro1.png'
import pro2 from 'public/image/pro2.png'
import pro3 from 'public/image/pro3.png'
import { Productid } from '@/utils/mock'


const Productlist = () => {

      const Productcheck = Productid.slice(0,3)
  return (
    <div className='mt-28'>
        <div className='container'>
            {/* heading section */}
            <div className=' text-blue-700 lg:font-semibold flex justify-center'>
                PRODUCTS
            </div>
            <div className='flex justify-center text-base lg:text-4xl font-bold lg:my-3'>Check What We Have</div>
            {/*Product pic section */}
            <div className='md:flex justify-evenly mt-16'>
                 
                 {
                  Productcheck.map((Products) => (
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
    </div>
  )
}

export default Productlist