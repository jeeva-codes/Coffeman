import React from 'react'
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';
function Orderdone() {
  return (
    <div>
      <div style={{
    backgroundImage: `url('/images/hand-holding-check-symbol.jpg')`,
    backgroundSize: 'cover',     
    backgroundPosition: 'center',
    height:'100vh',
    paddingTop:'50px'
  }} className='p-3 mt-10'>
    
      <h1 className='text-3xl text-[#C67C4E] font-bold text-center'>Order Confirmed</h1>
      <div className='flex mt-20 justify-center'>
        <FaHome className='text-2xl mr-2'/>
       <Link to='/' className='text-[#4ec660]'>Go to Home page</Link> 
    </div>
      
      </div>
    </div>
  )
}

export default Orderdone