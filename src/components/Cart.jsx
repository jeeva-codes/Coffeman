import React from 'react'
import { useContext } from 'react'
import { Productcontext } from '../Context'
import { Link, useNavigate } from 'react-router-dom';
import { BsCartDashFill } from "react-icons/bs"
import { FaEye } from "react-icons/fa6"
import { IoIosArrowBack } from "react-icons/io";
function Cart() {
const {state,dispatch}=useContext(Productcontext)
    const navigate=useNavigate()
  return (
    <div>
    <div className='flex'>
         <IoIosArrowBack className='text-3xl mt-4 ml-5' onClick={()=>navigate(-1)}/>
       <h1 className='text-2xl ml-30 mt-4 lg:ml-10'>Cart</h1>
    </div>
       <div className='mt-10'>
        {state.length?
        state.map((cartpro)=>{
            return (
                <div key={cartpro.id} className='flex p-5 m-auto  md:pl-20'>
                    <div className='bg-cover bg-center h-30 w-1/2 ' style={{ backgroundImage: `url(${cartpro.image_url})`}}></div>
                    <div className='p-3 md:pl-20'>
                        <h1 className='text-2xl font-medium'>{cartpro.title}</h1>
                        <p className='text-lg '>₹ {cartpro.price}</p>
                        <div className='flex justify-around'>
                            <Link to='/productview' state={cartpro}><FaEye className='text-[#C67C4E] text-2xl'/></Link>
                       <BsCartDashFill className='text-[#C67C4E] text-2xl '  onClick={()=>dispatch({type:'REMOVE_CART',payload:cartpro})}/>
                        </div>
                    </div>
                </div>
            )
        }) : <img className='m-auto' src="https://i.pinimg.com/736x/2e/ac/fa/2eacfa305d7715bdcd86bb4956209038.jpg" alt=""/>  }
       </div>
        
    </div>
  )
}

export default Cart