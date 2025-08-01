import React from 'react'
import banner from '../assets/banner1.jpg'

function MidBanner() {
  return (
 <>
 <div className='bg-black md:py-24'>
      <div className='relative max-w-7xl mx-auto md:rounded-2xl pt-28 bg-cover bg-center h-[550px] md:h-[600px] ' style={{backgroundImage: `url(${banner})`, backgroundPosition:'center', backgroundAttachment: 'fixed'}}>
        <div className='absolute inset-0 bg-black/60 md:rounded-2xl bg-opacity-50 flex items-center justify-center'>
            <div className='text-center text-white px-4'>
                <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold mb-4'>Trendy Styles for Men, Women & Jewelry Loverss</h1>
                <p className='text-lg md:text-xl mb-6'>Discover the latest stylish apparel for men and women, plus stunning jewelry pieces. </p>
                <button className='bg-indigo-800 border-2 ring-cyan-300 hover:bg-indigo-400 text-black font-semibold py-2 px-4 md:py-3 md:px-6 rounded-lg transition duration-300'>Shop Now</button>
            </div>
        </div>
      </div>
    </div>
 </>
  )
}

export default MidBanner
