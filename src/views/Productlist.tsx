import ProductCard from '@/components/ProductCard'
import pro1 from 'public/image/pro1.png'
import pro2 from 'public/image/pro2.png'
import pro3 from 'public/image/pro3.png'



const Productlist = () => {
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
                 <ProductCard title='Brushed Raglan Sweatshirt' price={195} img={pro1}/>
                 <ProductCard title='Flex Sweatshirt' price={175} img={pro2}/>
                 <ProductCard title='Flex Sweatpants' price={175} img={pro3}/>
                 
            </div>
        </div>
    </div>
  )
}

export default Productlist