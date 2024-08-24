import React from 'react'

export default function Footer() {
  return (
    <div className='bg-[#F1F1F1] h-screen rounded-3xl'>
      <div className='py-14 md:flex gap-8 px-8'>
        <div>
<h1 className='text-[8vw]  font-mono font-extrabold lg:tracking-[-8px] tracking-tighter  leading-none '>EYE-OPENING</h1>
        </div>

        <div>
<h1 className='text-[8vw] font-mono font-extrabold lg:tracking-[-8px] tracking-tighter leading-none '>PRESENTATIONS</h1>
<div className='text-xl'>
    <div className='pb-6'> M:
        <ul>
            <li><span className='border-b-2 border-gray-500' >Home</span></li>
            <li><span className='border-b-2 border-gray-500'>Services</span></li>
            <li><span className='border-b-2 border-gray-500'>Our work</span></li>
            <li><span className='border-b-2 border-gray-500'>About us</span></li>
            <li><span className='border-b-2 border-gray-500'>Insights</span></li>
            <li><span className='border-b-2 border-gray-500'>Contact us</span></li>
        </ul>
    </div>
    S:
<ul>
    <li><span className='border-b-2 border-gray-500' >Instagram</span></li>
    <li><span className='border-b-2 border-gray-500' >Behance</span></li>
    <li><span className='border-b-2 border-gray-500' >Facebook</span></li>
    <li><span className='border-b-2 border-gray-500' >Linkdin</span></li>
</ul>
    <div>
    </div>
</div>
        </div>
      </div>

      <div className='grid sm:grid-cols-2  px-8'>
<div>
  <h1 className='text-2xl'>Ochi</h1>
</div>
<div className='flex justify-between text-gray-400'>
  <h1>ochi design 2024. Legal Terms</h1>
  <h1>Website by Obys</h1>
</div>
      </div>
    </div>
  )
}
