import Image, { StaticImageData } from 'next/image'
import { Button } from './ui/button';
import Link from 'next/link';

function ProductCard (props : {
  title : string , 
  price : number, 
  img : StaticImageData,
  category : string,
  id : number,
})  
{
            

  return (
    <div>  
        <div className=' '>
          <Link href={`AllProduct/${props.id}`}>
            <Image src={props.img} alt='Product' className='w-[300px] h-[350px] bg-gray-200'  />
            <h3 className='font-bold text-lg mt-3 '>{props.title}</h3>
            <p  className='font-bold text-lg '>${props.price} </p>
            <p  className='font-bold text-lg '>Category:<span className='font-normal'>{props.category}</span>  </p>
            <Button>Add to Cart</Button>
            </Link>
        </div>
    </div>
  )
}

export default ProductCard;