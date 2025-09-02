import React from 'react'
import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { CiHeart } from "react-icons/ci"
import { useContext } from 'react'
import { Productcontext } from '../Context'
import { FaHeart } from "react-icons/fa"
import { IoIosArrowBack } from "react-icons/io";
function Showproduct() {
const navigate=useNavigate()
    const {state,dispatch}=useContext(Productcontext)
    const locationproduct=useLocation()
    const proshow=locationproduct.state||{}
    const [pricecal,setPricecal]=useState(1)
    const procartstatus=state.includes(proshow)
    
  return (
    <div>
        <div className='flex justify-between mt-4 mb-5  '>
          <IoIosArrowBack className='text-3xl  ml-5' onClick={()=>navigate(-1)} />
              <h2 className=' text-2xl'>Delail</h2>
              {procartstatus?<FaHeart className='text-3xl text-red-600 mr-5'/>:
             <CiHeart className='text-3xl mr-5' onClick={()=>dispatch({type:"ADD_CART",payload:proshow})}/>}
        </div>
    <div>
    <div className='bg-cover bg-center h-50 w-3/4 m-auto' style={{ backgroundImage: `url(${proshow.image_url})`}}> 
    </div>
    <div className='mt-8 p-3 '>
        <div className='flex justify-between md:justify-around lg:justify-around'>
             <h2 className='text-3xl font-medium'>{proshow.title}</h2>
            <p className='text-1xl text-amber-600 font-bold mt-1'>{proshow.keyword}</p>
        </div>
        <p className='text-lg font-medium mt-2 md:pl-20 lg:pl-25 '>⭐{proshow.ratings}</p>
        <h3 className='text-2xl font-medium mt-2 md:pl-20 lg:pl-25'>Description</h3>
        <p className='text-2xl mt-5 md:pl-25 ,pr-20 lg:pl-28 ,pr-25'>{proshow.description}</p>
    </div>
    </div>
  <h1 className='text-3xl p-3 mt-3 md:pl-25 lg:pl-28'>Size</h1>
  <div className='flex justify-center mt-5'>
     <button onClick={()=>setPricecal(1)} className='text-2xl p-2 w-25  border-1 focus:border-amber-700 focus:border-2'>S</button><br />
     <button onClick={()=>setPricecal(1.5)} className='text-2xl p-2 w-25 mr-5 ml-5 border-1 focus:border-amber-700 focus:border-2'>M</button><br />
     <button onClick={()=>setPricecal(2)} className='text-2xl p-2 w-25 border-1 focus:border-amber-700 focus:border-2'>L</button>
  </div>
<div className='flex justify-around mt-7'>
     <p className='mt-4 text-2xl text-[#C67C4E]'>₹ {proshow.price*pricecal}</p>
     <button className='text-[#E3E3E3] bg-[#C67C4E] rounded-2xl text-2xl p-3 w-50'><Link to='/order' state={{proshow,pricecal}}>Buy Now</Link></button>
</div>
 
    </div>
  )
}

export default Showproduct