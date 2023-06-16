import { Button } from "@/components/ui/button"


const Subscribe = () => {
  return (
    <div>
        <div className="container mb-10  ">
            <div className=" text-center">
                <h1 className="text-2xl font-bold lg:text-4xl">Subscribe Our Newsletter</h1>
                <p className="my-6 text-lg">Get the latest information and promo offers directly</p>
            </div>
            <div className=" lg:flex items-center justify-center text-center">
                <input type="email" placeholder="Input email address" className="border px-5 border-black lg:px-20 py-1   "/>
                <Button className="my-3 lg:mx-3 font-bold ">Get Started</Button>
            </div>
        </div>
    </div>
  )
}

export default Subscribe;