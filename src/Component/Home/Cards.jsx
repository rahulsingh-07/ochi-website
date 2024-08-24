import React from 'react'

export default function Cards() {
  return (
    <div className='w-full md:h-screen grid lg:grid-cols-2 gap-5 px-10 py-24'>
      <div className='relative bg-[#004D43] w-full h-[55vh] rounded-2xl
      flex justify-center items-center  text-[#CDEA68]'>
        <h1 className='text-6xl font-semibold text-[#CDEA68]'>ochi</h1>
        <button className='absolute left-10 bottom-10 border-2 rounded-full px-2 py-1/2 border-[#CDEA68]'>2019-2022 </button>
      </div>
      <div className='w-full grid sm:grid-cols-2 gap-5'>
        <div className='relative bg-[#212121] h-[55vh] rounded-2xl flex justify-center items-center
        '>
            <h1 className='text-6xl font-semibold text-white'>Clutch</h1>
            <button className='absolute left-10 bottom-10 border-2 rounded-full px-2 py-1/2 border-gray-400  text-white'>RATING 5.0 ON CLUTCH</button>
        </div>
        <div className= 'relative bg-[#212121] h-[55vh] rounded-2xl'>
            Logo
            <button className='absolute left-10 bottom-10 border-2 rounded-full px-2 py-1/2  border-gray-400   text-white'>BUSINESS BOOTCAMP ALUMNI </button>
        </div>
      </div>
    </div>
  )
}
