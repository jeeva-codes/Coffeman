import React from 'react'
import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FaRegMoneyBillAlt } from "react-icons/fa"
import { FaMoneyCheck } from "react-icons/fa"
import { SiGooglepay } from "react-icons/si"
import { useContext } from 'react'
import { Productcontext } from '../Context'
import { IoIosArrowBack } from "react-icons/io";
function Order() {
  const navigate=useNavigate()
  const {customerdata,setCustomerdata,login,setLogin}=useContext(Productcontext)
    const orderlocation=useLocation()
        const ordershow=orderlocation.state.proshow||{}
        const ordercal=orderlocation.state.pricecal
        const [ordercount,setOrdercount]=useState(1)

        //
    const [paymentType, setPaymentType] = useState('')
    const [eleorder,setEleorder]=useState('')
     const handleSubmit = (e) => {
const value = e.target.value
    setPaymentType(value)
    switch (paymentType) {
        case '1':setEleorder(<FaMoneyCheck/>)
            break;
        case '2': setEleorder(<SiGooglepay/>)
             break;
         case '3': setEleorder(<FaRegMoneyBillAlt/>)
             break; 
        default:setEleorder(<FaRegMoneyBillAlt/>)
            break;
    }
  }
function handleorder(){
        if(login){
          navigate('/orderdone')
        }else{
          navigate('/signin')
        }
}

  return (
    <div>
        <div className='p-4'>
          <div className='flex justify-between'>
             <IoIosArrowBack className='text-3xl mt-4 ml-5' onClick={()=>navigate(-1)} />
             <h1 className='text-3xl font-bold mt-4 mr-35 lg:mr-120 '>Order</h1>
          </div>
           
            <h1 className='mt-6 text-2xl font-bold md:pl-18 lg:pl-25'>Deilvery Address</h1>
            <p className='text-lg font-bold mt-2  md:pl-20 lg:pl-25'>{customerdata?customerdata.name:'No Account'}</p>
            <p className='mt-2  md:pl-20 lg:pl-25'>{customerdata?customerdata.address:'NONE'}</p>
            <div className=' md:pl-20 lg:pl-25'>
                <button className='mt-4 border-2 text-2xl font-medium p-3 rounded-4xl w-60'><Link to='/customeraddres'>Edit Address</Link></button>
            </div>
        </div>
        <div>
            <div className='flex p-5  md:pl-20 lg:pl-25'>
          <div className='bg-cover bg-center h-15 w-20 rounded-2xl' style={{ backgroundImage: `url(${ordershow.image_url})`}}></div>
        <div className='grid grid-cols-2 gap-20 '>
            <div className='ml-5'>
            <h2 className='text-2xl font-bold'>{ordershow.title}</h2>
            <p>{ordershow.keyword}</p>
            </div>
            <div className='flex '>
            <button className='text-lg' onClick={()=>setOrdercount((pre)=>pre-1)}>-</button>
            <p className='text-center m-auto text-2xl'>{ordercount}</p>
            <button className='text-lg' onClick={()=>setOrdercount((pre)=>pre+1)}>+</button>
        </div>
        </div>
       </div>
       <div className='p-5  md:pl-20 '>
        <h1 className='text-2xl font-semibold mb-5'>Payment Summary</h1>
        <div className='flex justify-between  md:pr-20 '>
        <p className='text-lg font-medium'>Price</p>
        <p className='text-lg font-medium'>₹ {(ordershow.price*ordercal)*ordercount}</p>
        </div>
       <div className='flex justify-between mt-2 md:pr-20 '>
        <p className='text-lg font-medium'>Delivery Fee</p>
        <p className='text-lg font-medium'>₹ 40</p>
        </div>
        <div className='flex justify-between mt-2 md:pr-20 '>
        <p className='text-lg font-medium'>Total</p>
        <p className='text-lg font-medium'>₹ {(ordershow.price*ordercal)*ordercount+40}</p>
        </div>
       </div>
        <div className='flex p-5 justify-around'>
     <h1 className='text-4xl text-[#C67C4E]'>{eleorder}</h1>
      <select
        id="paymentType"
        value={paymentType}
        onChange={handleSubmit}
        className='p-3 outline-none'
      >
        <option value="">--select--</option>
        <option value="1">Cash/Wallet</option>
        <option value="2">Credit Card</option>
        <option value="3">UPI</option>
      </select>
        </div>
        <div className='flex justify-center'>
        <button className='text-[#E3E3E3] bg-[#C67C4E] rounded-2xl text-2xl p-3 w-4/5 ' onClick={()=>handleorder()}>Place Order</button>
        </div>
        </div>
    </div>
  )
}

export default Order