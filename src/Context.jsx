import React, { useEffect } from 'react'
import Home from './Home'
import { createContext } from 'react'
import Cart from './components/Cart'
import Showproduct from './components/Showproduct'
import { Route, Routes } from 'react-router-dom'
import { useReducer } from 'react'
import Order from './components/Order'
import Customeradd from './components/Customeradd'
import { useState } from 'react'
import Signin from './components/Signin'
import Signup from './components/Signup'
import Orderdone from './components/Orderdone'



export const Productcontext=createContext();
function Context() {
    function reduce(state,action){
switch (action.type) {
    case 'ADD_CART':if(state.some((pro)=>pro.id===action.payload.id)){
            return state
        }else return [...state,action.payload]
    case 'REMOVE_CART':return state.filter((pro)=> pro.id!==action.payload.id)
    default:return state
        break;
}
    }
const [login,setLogin]=useState(false)
useEffect(()=>{
 sessionStorage.setItem('/loginstatus',login)
},[login])


const [state,dispatch]=useReducer(reduce,[])
 const [customerdata, setCustomerdata] = useState(() => {
  return JSON.parse(localStorage.getItem('customeraddressdata')) || {};
});

  return (
        <Productcontext.Provider value={{state,dispatch,customerdata,setCustomerdata,login,setLogin}}>
            <Routes>
             <Route path='/' element={<Home/>}/>
             <Route path='/mycart' element={<Cart/>}/>               
             <Route path='/productview' element={<Showproduct/>}/>
             <Route path='/order' element={<Order/>}/>
             <Route path='/customeraddres' element={<Customeradd/>}/>
             <Route path='/signin' element={<Signin/>}/>
             <Route path='/signup' element={<Signup/>}/>
             <Route path='/orderdone' element={<Orderdone/>}/>
            </Routes>
            
        </Productcontext.Provider>

  )
}

export default Context