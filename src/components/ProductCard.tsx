import Image, { StaticImageData } from 'next/image'


function ProductCard (props : {title : string , price : number, img : StaticImageData })  {
            

  return (
    <div>  
        <div className=' '>
            <Image src={props.img} alt='Product' className='w-[250px] h-[280px] bg-gray-200'  />
            <h3 className='font-bold text-lg mt-3 '>{props.title}</h3>
            <p  className='font-bold text-lg '>${props.price} </p>
        </div>
    </div>
  )
}

export default ProductCard;