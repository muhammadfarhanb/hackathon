
import ProductCard from '@/components/ProductCard'
import pro1 from 'public/image/pro1.png'
import pro2 from 'public/image/pro2.png'
import pro3 from 'public/image/pro3.png'
import header from 'public/image/header.webp'
import profemal1 from 'public/image/profemale1.webp'
import profemal2 from 'public/image/profemale2.png'
import profemal3 from 'public/image/profemale3.png'
import profemal4 from 'public/image/profemale4.png'
import profemal5 from 'public/image/profemale5.png'
import promale1 from 'public/image/promale1.png'
import promotions2 from 'public/image/promotions2.webp'
import promotion3 from 'public/image/promotions3.webp'



const Allproduct = () => {
  return (
    <div>
        <div className='container py-10'>
            {/* first row */}
            <div className='lg:flex justify-between '>
                <ProductCard title='Brushed Raglan Sweatshirt' price={195} img={pro1}/>
                 <ProductCard title='Flex Sweatshirt' price={175} img={pro2}/>
                 <ProductCard title='Flex Sweatpants' price={175} img={pro3}/>
                 <ProductCard  title='Cameryn Sash Tie Dress' price={545} img={header} />
            </div>
            {/* second row */}
            <div className=' lg:flex justify-between my-14 '>
                <ProductCard title='Imperial Alpaca Hoodie' price={525} img={profemal1} />
                <ProductCard title='Pink Fleece Sweatpants' price={195} img={profemal2} />
                <ProductCard title='Lite Sweatpants' price={150} img={profemal3} />
                <ProductCard title='Muscle Tank' price={75} img={profemal4} />

            </div>
            {/* third row */}
            <div className='flex justify-between'>
                <ProductCard title='Brushed Bomber' price={225} img={profemal5} />
                <ProductCard title='Raglan Sweatshirt' price={195} img={promale1} />
                <ProductCard title='Flex Sweatshirt' price={75} img={promotions2} />
                <ProductCard title='Flex Push Button Bomber' price={225} img={promotion3} />
                
            </div>
        </div>
    </div>
  )
}

export default Allproduct