import React from 'react'
import Productdata from '../coffeeman.json'
import { useState } from 'react';
import Card from './Card';

function Allproduct() {
    const [showproduct,setShowproduct]=useState(Productdata.coffee)
    
  return (
    <div>
            <div className='mt-20 md:mt-30 lg:mt-60 flex justify-center '>
<div className="inline-flex rounded-md shadow-xs" role="group">
  <button type="button" onClick={()=>setShowproduct(Productdata.coffee)} className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent  rounded-2xl hover:bg-amber-600 hover:text-white focus:z-10  focus:bg-amber-600 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700">
    Coffee
  </button>
  <button type="button"  onClick={()=>setShowproduct(Productdata.tea)} className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent  hover:bg-amber-600 rounded-2xl hover:text-white focus:z-10  focus:bg-amber-600 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700">
    Tea
  </button>
  <button type="button"  onClick={()=>setShowproduct(Productdata.cool_drinks)} className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent rounded-2xl hover:bg-amber-600 hover:text-white focus:z-10  focus:bg-amber-600 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 ">
    Cool Drinks
  </button>
</div>

    </div>

    <div  className='grid grid-cols-2 gap-2 lg:grid-cols-4 md:grid-cols-3'>
        {showproduct.map((pro)=>{
            return <Card key={pro.id} pro={pro}/>
        })}
    </div>
    </div>


  )
}

export default Allproduct