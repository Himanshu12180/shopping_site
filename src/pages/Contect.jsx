import React from 'react'

function Contect() {
  return (
 <div className='min-h-screen bg-black bg-gradient-to-r from[#0f0c29] via-[#302b63] flex items-center justify-center px-4 py-10'>
        <div className="backdrop-blur-md bg-white/10 border border-white/20  rounded-2xl p-10 w-full max-w-sxl">
        <h2 className='text-4xl font-bold text-white text-center mb-10'>GEt in Touch with <span className='text-indigo-600'>DPoster </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           
           
            {/* info section */}
            <div className="text-white space-y-6">
                <div>
                    <h3 className='text-2xl font-semibold'>Contact Info</h3>
                    <p className='text-gray-300'>Have a question or need support? we are here to help you with your electronics journey.</p>
                </div>
                <div>
                    <p><strong>📍 Address:</strong> 123 Tech Lane, Kolkata,India</p>
                      <p><strong>📧 Email:</strong>support@zaptro.com</p>
                        <p><strong>📞 Phone:</strong>+91 98765 43210</p>
                </div>
            </div>




            {/* From Section */}
            <form action="" className='space-y-6'>
                <div>
                    <label htmlFor="" className='block text-white mb-1'>Your Name</label>
                    <input type="text" placeholder='Johan doe' className='w-full px-4 py-2 bg-white-20 border border-white/30 text-white rounded-xl placeholder-black focus:outline-none' />
                </div>
                <div>
                   <label htmlFor="" className='block text-white mb-1'>Email Address</label>
                    <input type="Email" placeholder='Example@123.com' className='w-full px-4 py-2 bg-white-20 border border-white/30 text-white rounded-xl placeholder-black focus:outline-none' />
                </div>
                <div>
                   <label htmlFor="" className='block text-white mb-1'>Your Massage</label>
                   <textarea rows={4} placeholder='Type your Massage.... ' className='w-full px-4 py-2 bg-white-20 border border-white/30 text-white rounded-xl placeholder-black focus:outline-none'></textarea>
                </div>

                <button type='submit' className='w-full bg-gradient-to-r from-purple-500 to-indigo-400 text-white font-semibold py-2 rounded-xl hover:opacity-90 transition-all duration-300 '>
                    Sand Message
                </button>
            </form>
        </div>
        </div>
    </div>
  )
}

export default Contect ;
