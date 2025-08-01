import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
     <div className='min-h-screen bg-black py-10 px-4 sm:px-6 lg:px-20'>
        <div className="max-w-5xl mx-auto bg-zinc-950 rounded-2xl shadow-lg p-8 space-y-8">
          <h1 className='text-4xl font-bold text-center text-indigo-600 '>About DPoster</h1>

          <p className='text-gray-500 text-lg'>
            Welcome to <span className='font-semibold text-indigo-600 '>DPoster</span>,your one-stop distanation for the latest and gratest in electronics. From cutting-edge 
          </p>


          <div className="space-y-6">
            <h2 className='text-2xl font-semibold text-indigo-600 '>Our Mission</h2>
            <p className='text-gray-500 text-base'>At DPoster, our mission is to make innovative technology accessible to everyone. We are passinate about connecting people with the tools and the need to thrive
            </p>
          </div>


          <div className="space-y-6">
            <h2 className='text-2xl font-serif text-indigo-600 '>Why Choose DPoster?</h2>
            <ul className='list-disc pl-6 text-gray-500 space-y-2'>
              <li>Top-Quality electronic products from trusted barnds</li>
              <li>Lightnit-fat and secure shipping</li>
              <li>Reliable customer support, always ready to help</li>
              <li>Easy returns and hassle-free shopping experience</li>
            </ul>
          </div>


          <div className="space-y-6">
            <h2 className='text-2xl font-serif text-indigo-600 '>Our Vision </h2>
            <p className='text-gray-500 text-base'>
              We envision a future where technology everday life. At DPoster, we are committed to stay ahead of the curve, offering cutting-edge solutions that are both
            </p>
          </div>

          <div className="text-center mt-10">
            <h3 className='text-xl font-semibold text-indigo-600  mb-2'>Join the DPoster family</h3>
            <p className='text-gray-500 mb-4'> Whether you are a tech enthusias, a profational , or just looking for something cool and functional - DPoster has something for everyone.

            </p>
            <Link to={"/product"}>
            <button className='bg-gradient-to-r from-purple-500 to-indigo-400 text-white px-6 py-2 rounded-xl hover:bg-red-700 transition duration-300'>
              Strat Shopping
            </button>
            </Link>
          </div>
        </div>
    </div>
  )
}

export default About ;
