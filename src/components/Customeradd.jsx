import React, { useState } from 'react';
import { useContext } from 'react';
import {useNavigate } from 'react-router-dom';
import { Productcontext } from '../Context';

function Customeradd() {
const {customerdata,setCustomerdata}=useContext(Productcontext)
  const navigate=useNavigate()
  const [customerData, setCustomerData] = useState({
    name: '',
    mobile: '',
    address: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomerData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    setCustomerdata(customerData)
   localStorage.setItem('customeraddressdata', JSON.stringify(customerData))
   navigate(-1)
   
  };
  return (
    <div className='p-5'>
      <form onSubmit={handleSubmit}>
        <h2 className='text-2xl text-center'>Customer Order Form</h2>
<div className='flex justify-around mt-5'>
            <label>Full Name</label>
        <input
          type="text"
          name="name"
          value={customerData.name}
          onChange={handleChange}
          required
          className='outline-1 '
        />
</div>
    <div className='flex justify-around mt-5'> 
         <label>Phone Number</label>
        <input
          type="tel"
          name="mobile"
          value={customerData.mobile}
          onChange={handleChange}
          required
           className='outline-1 '
        />
    </div>
       
  <div className='flex justify-around mt-5'>
       <label>Delivery Address</label>
        <textarea
          name="address"
          value={customerData.address}
          onChange={handleChange}
          required
           className='outline-1 '
        />

  </div>
  <div className='text-center'>
        <button className='text-lg font-bold mt-10 text-amber-50 rounded-2xl p-3 bg-amber-600' type="submit">Save Address</button>
    </div>  
      </form>
    </div>
  );
}

export default Customeradd;