import { Productid } from '@/utils/mock';

import Image, {StaticImageData} from 'next/image';

const ProductDetail = (id : number | string) => {
       return Productid.filter((Products) => Products.id == id);
};


export default function page ({params} : {params : {id : string}}){
    const result = ProductDetail(params.id)
    
    return <div className='md:flex justify-evenly flex-wrap gap-10 mt-16'>
     {
      result.map((Products) => (
        <><div key={Products.id} className='flex justify-between'>
          <Image src={Products.image} alt={`${Products.name}`} />
        </div>
        
        <div>
            Product deatail
            <p> Name {Products.name} </p>
            <p> Price {Products.price} </p>
            <p> Category {Products.category} </p>
        </div></>

      ))
      }            
    </div>
}