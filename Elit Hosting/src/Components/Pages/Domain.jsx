import React from 'react'
import { domainData } from '../../assets/assets'
import { FaArrowRightLong } from 'react-icons/fa6'
import Footer from './Footer'

const Domain = () => {
  return (
    <div className='pt-40 bg-white relative'>
      <div className="container mx-auto">
    <div className="text-center mb-15">
    <h1 className='text-4xl md:text-5xl text-dark font-bold mb-6'>Find Best unique Domain checker </h1>
    <p className='text-xl text-dark/80'>Web Hosting, Domain Name and Hosting Center Solutions</p>

    </div>
    <div className='bg-white rounded-xl max-w-3xl mx-auto p-8 mb-60'>

      <div className="flex flex-col md:flex-row">
        <input 
        type="text"
    className='flex-grow px-4 py-3 border border-primary rounded-1-md outline-none'
    placeholder='Search For Your Domain'
  />
  <select className='border border-primary px-6 outline-none ' name="" id="">
    <option value="">.com</option>
    <option value="">.Net</option>
    <option value="">.Co</option>
    <option value="">.Io</option>
  </select>
  <button className='bg-primary text-white px-6 py-3 rounded-r-md font-medium cursor-pointer'>Search </button>
      </div>

    </div>


{/* SECOND STARTS FROM HERE  */}
    <div className='container mx-auto py-10'>
      <div  className='text-center'>
      <h1 className= 'max-w-2xl mx-auto text-4xl md:text-5xl font-bold mb-30'>EliteHost Straight forward Domain Pricing</h1>

      </div>

<div className='grid grid-cols-1 md:grid-cols-4 gap-6 mb-20 px-10'>
{domainData.map((item)=>{
  return(
    <div className='p-10 border border-primary rounded-2xl'>
      <img className='mb-6' src={item.image} alt="" />
    <p className='text-dark/80 mb-6'>{item.content}</p>
    <h1 className='text-dark text-xl font-bol mb-6'>{item.price}</h1>
    <a className='items-center text-primary font-bold flex gap-2 hover:underline' href="">
      Get Offer 
      <FaArrowRightLong className='text-primary'/>
    </a>
    </div>

  )
})}
</div>

    </div>
      </div>
      
      
    
    </div>
  )
}

export default Domain
