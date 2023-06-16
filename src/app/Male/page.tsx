import ProductCard from '@/components/ProductCard'
import promale1 from 'public/image/promale1.png'
import promotions2 from 'public/image/promotions2.webp'
import promotion3 from 'public/image/promotions3.webp'

const Male = () => {
  return (
    <div>
        <div className='container'>
            <div className=' lg:flex justify-between'>
                <ProductCard title='Raglan Sweatshirt' price={195} img={promale1} />
                <ProductCard title='Flex Sweatshirt' price={75} img={promotions2} />
                <ProductCard title='Flex Push Button Bomber' price={225} img={promotion3} />
            </div>

        </div>
    </div>
  )
}

export default Male