import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Productcontext } from '../Context'
import { IoIosArrowBack } from "react-icons/io";
function Signin() {
  const navigate=useNavigate()
  const {setLogin}=useContext(Productcontext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handleSubmit = (e) => {
      e.preventDefault()
      fetch('https://backend-for-coffeeman.vercel.app/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email: email,
    password: password
  })
})
        
        .then(res=>res.json())
        .then((rel) => {
          console.log('Registered:', rel)
          // Optionally redirect or show success
          if(rel.message==="Login successful"){
            setLogin(true)
             sessionStorage.setItem('loginstatus',true)
              alert(" Login Successful !")
            navigate(-1)
          }
         
        })
        .catch((err) => {
          console.error('Error:', err)
        })
  
    }
  return (
    <div  style={{
    backgroundImage: `url('/images/various-coffee-mugs-black-grunge-textured.jpg')`,
    backgroundSize: 'cover',     
    backgroundPosition: 'center',
    height:'100vh',
    paddingTop:'50px'
  }}>
      <IoIosArrowBack className='text-3xl text-amber-50 ml-10 ' onClick={()=>navigate(-1)} />
       <div className='flex justify-center  pt-40' >
      <div >
         <h1 className='text-3xl font-extrabold mb-5 text-center text-[#C67C4E]'>Sign In</h1>
        <form onSubmit={handleSubmit} className='text-[#E3E3E3]'>
          <div className='mb-5 flex justify-between'>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name='email'
              value={email}
              required
               id="email"
              autoComplete="off"
              placeholder='Enter your Email'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='mb-5 flex justify-between'>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name='password'
              value={password}
              required
               id="password"
              autoComplete="off"
              placeholder='Enter Password'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type='submit' className='bg-[#30e3e0] p-1 text-amber-50 ml-25'>SignIn</button>
        </form>
          <p className='text-[#E3E3E3] mt-2 mb-2'>you agree for all terms and policies</p>
          <button className='bg-[#54e330] p-1 text-amber-50 ml-25'><Link to='/signup'>Sign up</Link></button>
      </div>
    </div>
    </div>
   
  )
}

export default Signin