import React from 'react'

const FeatureData=[
    {

    }
]

export default function Feature() {
  return (
    <div className='  overflow-hidden rounded-t-3xl relative z-10 bg-[#F1F1F1] '>
      {/* Headline */}
      <div className='pt-28 pb-10 px-6 border-b-2 border-zinc-500'>
      <h1 className='text-6xl tracking-tighter'>Featured projects</h1>
      </div>
        {/* cards */}
      <div className='grid sm:grid-cols-2 grid-cols-1 gap-5 lg:px-16  py-16 '  >
      <div className='relative  '>
        
           <p className='text-xl pb-4 '><li>FYDE</li></p>
           <div className='card  group w-full sm:h-[35vw] h-[75vw] rounded-2xl overflow-hidden '>
           <img className=' group-hover:scale-95 rounded-2xl  duration-150  w-full h-full bg-cover ' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png" alt="" />
           </div>
           <div className='pt-5 pb-14 text-lg tracking-tighter' >
            <button className='px-4 m-2 border-black border-2 rounded-full '>AUDIT</button>
            <button className='px-4 m-2 border-black border-2 rounded-full '>COPYWRITING</button>
            <button className='px-4 m-2 border-black border-2 rounded-full '>SALES DECK</button>
            <button className='px-4 m-2 border-black border-2 rounded-full '>SLIDES DESIGN</button>
           </div>
        </div>
        <div className=' relative '>
       
        <p className='text-xl pb-4 '><li>VISE</li></p>
            <div className='card group w-full sm:h-[35vw] h-[75vw] rounded-2xl overflow-hidden'>
            <img className='group-hover:scale-95 rounded-2xl duration-150  w-full h-full bg-cover  ' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg" alt="" />
            </div>
            <div className='pt-5 pb-14 text-lg tracking-tighter' >
            <button className='px-4 m-2 border-gray-700 border-2 rounded-full '>AGENCY</button>
            <button className='px-4 m-2 border-gray-700 border-2 rounded-full '>COMPANY PRESENTATION</button>
            
           </div>

        </div>
        <div className=' relative '>
       
        <p className='text-xl pb-4  '><li>TRAWA</li></p>
           <div className='card group w-full sm:h-[35vw] h-[75vw] rounded-2xl overflow-hidden'>
           <img className='group-hover:scale-95 duration-150 rounded-2xl w-full h-full bg-cover ' src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg" alt="" />
           </div>
           <div className='pt-5 pb-14 text-lg tracking-tighter' >
            <button className='px-4 m-2 border-black border-2 rounded-full '>BRAND IDENTITY</button>
            <button className='px-4 m-2 border-black border-2 rounded-full '>INVERTOR DECK</button>
            <button className='px-4 m-2 border-black border-2 rounded-full '>DESIGN RESEARCH</button>
           
           </div>
        </div>
        <div className=' relative'>
       
        <p className=' text-xl pb-4 '><li>PREMIUM BLEND</li></p>
            <div className='card group w-full sm:h-[35vw] h-[75vw] rounded-2xl overflow-hidden'>
            <img className='group-hover:scale-95 rounded-2xl duration-150  w-full h-full bg-cover  ' src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png" alt="" />
            </div>
            <div className='pt-5 pb-14' >
            <button className='px-4 m-2 border-black border-2 rounded-full '>BRANDED TEMPLATE</button>
           
           </div>
        </div>
      </div>
      <div className='flex justify-center text-lg tracking-tighter'>
      <button className='p-4  text-white  border-2 rounded-full bg-gradient-to-b from-gray-800 to-black '>VIEW ALL CASE STUDIES</button>
      </div>
    </div>
  )
}
