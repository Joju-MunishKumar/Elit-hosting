import React from 'react'
import { assets, serviceProvider } from '../../assets/assets'
import { BiArrowFromLeft, BiArrowFromRight } from 'react-icons/bi'
import { FaAngleRight } from 'react-icons/fa'
import { FaArrowRightLong } from 'react-icons/fa6'
import { programs } from '../../../../../School Pro/School-project/src/assets/HomepageData'

function Feature() {
  return (
    <div className=" py-20  bg-gray-50 ">
        <div className="container mx-auto px-6">
            <div className="text-center">

            <h1 className='text-3xl md:text-4xl font-semibold mb-4'>We Provide Hosting Solution</h1>
            <p className='text-0.5xl md:text-lxl'>elect your solution and we will help you narrow down our best high-speed options to fit your needs.</p>
            </div>

    {/* Cards making  */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 ">
      
    
            {/* Card 1 */}
    {programs.map((item,idx)=>{
        return(
            <div key={idx} className='border rounded  px-14 py-12 flex flex-col justify-between items-start gap-y-4'>
                <img className='h-15 object-contain' src={item.image} alt="" />
                <h2 className='text-2xl font-semibold '>{item.title}</h2>
                <p>{item.content}</p>
                <a className='flex items-center gap-3' href="#">View Detail<FaArrowRightLong/></a>
            </div>
        )
    })}

            
        </div>
        
           


        </div>
    </div>
  )
}

export default Feature
