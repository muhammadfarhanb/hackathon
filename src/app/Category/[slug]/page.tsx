import { Productid } from '@/utils/mock';
import ProductCard from '@/components/ProductCard';
import Image, {StaticImageData} from 'next/image';

const ProductCategory = (category : string) => {
       return Productid.filter((Products) => Products.category === category);
};


export default function page ({params} : {params : {slug : string}}){
    const result = ProductCategory(params.slug)
    
    return <div className='md:flex justify-evenly flex-wrap gap-10 mt-16'>
     {
      result.length>0 ? result.map((Products) => (
        <ProductCard 
        key={Products.id} 
        title= {Products.name} 
        price={Products.price} 
        img={Products.image}
        category={Products.category}
        id = {Products.id}
        />
      ))
      : <p>Not Product found</p>

     }            
    
    
    
    
    
    
    
</div>
}