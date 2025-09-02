import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    
  return (
    <div className='flex justify-around  h-50 relative lg:h-40 '  style={{
    backgroundImage: `url('/images/25304108_coffee_rorozoa_3_04.jpg')`,
    backgroundSize: 'cover',     
    backgroundPosition: 'center',
  }}>
        <div className='mt-7'>
            <img src="/images/coffeeman.png" alt="" className='w-20 h-10 rounded-2xl' />
        </div>
        <div className='mt-10'>
            <ul className='flex gap-5 text-[#E3E3E3]'>
                <li><Link to='/signup'>Sign Up</Link></li>
                <li><Link to='/signin'>Sign in</Link></li>
                <li><Link to='/mycart'>Cart</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar