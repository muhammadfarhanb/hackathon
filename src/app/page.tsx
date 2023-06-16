import Hero from "@/views/Hero"
import Promotions from "@/views/Promotions"
import Productlist from "@/views/Productlist"
import Unique from "@/views/Unique"
import Subscribe from "@/views/Subscribe"



export default function Home() {
  return (
   <div>
      <Hero/>
      <Promotions/>
      <Productlist/>
      <Unique/>
      <Subscribe />
   </div>
  )
}
