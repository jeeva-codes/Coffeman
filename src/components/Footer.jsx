import React from 'react'

function Footer() {
  return (
    <div className='bg-[#C67C4E] flex justify-around p-3' >
        <div >
            <h1 className='text-[#E3E3E3] mb-3 text-2xl'>Contact Us</h1>
            <p className='text-sm font-semibold'>coffeeman@gmail.com</p>
            <p className='text-sm font-semibold'>Instagram↗</p>
            <p className='text-sm font-semibold'>Whatsapp↗</p>
        </div>
        <div>
            <h1 className='text-[#E3E3E3] mb-3'>Location 🗺</h1>
            <p className='w-50 text-sm font-semibold'>1/2,Lorem ipsum dolor sit amet consectetur adipisicing elit.  vitae sed.</p>
            <p className='text-sm font-semibold'>lorem , lorem -102</p>
        </div>
    </div>
  )
}

export default Footer