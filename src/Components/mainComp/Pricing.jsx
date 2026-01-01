import React from 'react'
import { FaCheck, FaCheckCircle } from 'react-icons/fa'

function Pricing() {
  return (
    <div className='py-20 bg-gray-50'>
      <div className="container mx-auto px-6 ">
        <div className='text-center'>
            <h1 className='text-3xl md:text-4xl font-semibold text-dark mb-4'>Choose Hosting Plans</h1>
            <p className='text-dark/80 max-w-sm mx-auto'>Globally incubate next-generation e-services via state of the art technology.</p>
        </div>
    {/* CARDS MAKING  */}
    <div className='   grid grid-cols-1 md:grid-cols-3 gap-6 mt-15 '>

        {/* CARD 1  */}
    <div className='border-1 border-primary rounded-3xl px-14 py-12 flex flex-col gap-6'>
        <h1 className='font-semibold text-2xl md:text-3xl'>Started</h1>
    <p className='text-0.5xl md:text-lxl'>Perfect for small websites and blogs</p>
    <h3><span className='text-3xl font-bold'>$2.99</span>/month</h3>
    <button className='button px-14 py-3 bg-gray-200 w-full'>Get Started</button>
    <ul className='flex flex-col gap-3'>
        <li className='flex gap-7 items-center'> <FaCheckCircle className='text-primary/100'/> 1 Website</li>
        <li className='flex gap-7 items-center'> <FaCheckCircle className='text-primary/100'/> 10 GB SSD STORAGE</li>
        <li className='flex gap-7 items-center'> <FaCheckCircle className='text-primary/100'/> UNLIMITED BANDWIDTH</li>
        <li className='flex gap-7 items-center'> <FaCheckCircle className='text-primary/100'/> FREE SSL CERTIFICATE</li>
       
    </ul>
    </div>

        {/* CARD 2  */}
    <div className='border-1 border-primary rounded-3xl px-14 py-12 flex flex-col gap-6 relative'>
        <div className='absolute bg-primary px-10 py-2 top-0 right-0 rounded-tr-2xl rounded-bl-2xl'>
            <span className='text-1xl text-white'>Popular</span>
        </div>
        <h1 className='font-semibold text-2xl md:text-3xl'>Business</h1>
    <p className='text-0.5xl md:text-lxl'>Ideal for business growing</p>
    <h3><span className='text-3xl font-bold'>$5.99</span>/month</h3>
    <button className='button px-14 py-3 bg-primary text-white w-full'>Get Started</button>
    <ul className='flex flex-col gap-3'>
        <li className='flex gap-7 items-center'> <FaCheckCircle className='text-primary/100'/> Unlimited Website</li>
        <li className='flex gap-7 items-center'> <FaCheckCircle className='text-primary/100'/> 50 GB SSD STORAGE</li>
        <li className='flex gap-7 items-center'> <FaCheckCircle className='text-primary/100'/> UNLIMITED BANDWIDTH</li>
        <li className='flex gap-7 items-center'> <FaCheckCircle className='text-primary/100'/> FREE SSL CERTIFICATE</li>
       
    </ul>
    </div>

        {/* CARD 3  */}
    <div className='border-1 border-primary rounded-3xl px-14 py-12 flex flex-col gap-6'>
        <h1 className='font-semibold text-2xl md:text-3xl'>Enterprise</h1>
    <p className='text-0.5xl md:text-lxl'>For high-traffic websites</p>
    <h3><span className='text-3xl font-bold'>$12.99</span>/month</h3>
    <button className='button px-14 py-3 bg-gray-200 w-full '>Get Started</button>
    <ul className='flex flex-col gap-3'>
        <li className='flex gap-7 items-center'> <FaCheckCircle className='text-primary/100'/> Unlimited Website</li>
        <li className='flex gap-7 items-center'> <FaCheckCircle className='text-primary/100'/> 200 GB SSD STORAGE</li>
        <li className='flex gap-7 items-center'> <FaCheckCircle className='text-primary/100'/> UNLIMITED BANDWIDTH</li>
        <li className='flex gap-7 items-center'> <FaCheckCircle className='text-primary/100'/> FREE SSL CERTIFICATE</li>
       
    </ul>
    </div>
    
    </div>
      </div>
    </div>
  )
}

export default Pricing
