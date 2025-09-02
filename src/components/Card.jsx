import React from 'react'
import { useContext } from 'react';
import { BsCartPlus } from "react-icons/bs"
import { Link } from 'react-router-dom';
import { BsCartCheckFill } from "react-icons/bs"
import { Productcontext } from '../Context';
function Card({pro}) {
  const {state,dispatch}=useContext(Productcontext)
  const cartstatus=state.includes(pro)  
  return (
    <div>
        <div className='p-4'>
            <Link to='/productview' state={pro}>
            <div  className='bg-cover bg-center h-40 rounded-2xl pt-2' style={{ backgroundImage: `url(${pro.image_url})`}}>
             <p className='text-end text-[#E3E3E3] mr-4'>⭐{pro.ratings}</p>  
        </div> </Link>  
        </div>

        <div className='p-2 flex justify-between'>
         <div>
        <h3 >{pro.title}</h3>
        <p>₹{pro.price}</p>
         </div>
         <div>
          {cartstatus?<BsCartCheckFill className=' text-4xl lg:text-4xl text-[#28ca56]'/>:<BsCartPlus className=' text-4xl lg:text-4xl text-[#C67C4E]' onClick={()=>dispatch({type:"ADD_CART",payload:pro})} />}
         </div>
        </div>
        
       
    </div>
  )
}

export default Card