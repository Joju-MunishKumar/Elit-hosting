import React from 'react'
import { assets, serviceData, } from '../../assets/assets'


const ServiceData = () => {
  return (
    <div className='py-20 bg-gray-50 '>
        <div className="container mx-auto  px-6">
         
         <div className='text-center'>
            <h2 className='text-3xl md:text-4xl font-semibold '>Why EliteHost</h2>
         </div>

         {/* CARDS MAKING STARTS FROM HERE  */}

         <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16 ">

{serviceData.map((data,idx)=>{

return(


    <div className='border border-primary rounded-3xl px-14 py-12 flex flex-col gap-6 shadow-lg'>

        {/* IMG CONTAINER  */}
        <div className="img  bg-amber-100 h-20 w-20 rounded-full flex items-center justify-center p-4">
             <img  src={data.image} alt="Cpanel"  />
        </div>
        <h2 className='text-black/80 text-[1.2rem] font-extrabold'>{data.title}</h2>
        <p className='max-w-sm'>{data.content}</p>
     </div>
)


})}


     
         </div>



        </div>

      
    </div>
  )
}

export default ServiceData
