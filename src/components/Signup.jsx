import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { IoIosArrowBack } from "react-icons/io";
function Signup() {
const navigate=useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
   axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault()

     fetch('https://backend-for-coffeeman.vercel.app/register', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name:name,
    email: email,
    password: password
  })
})
      .then((res) => {
        console.log('Registered:', res)
        // Optionally redirect or show success
        navigate('/signin')
      })
      .catch((err) => {
        console.error('Error:', err)
      })

  }

  return (
    <div style={{
    backgroundImage: `url('/images/various-coffee-mugs-black-grunge-textured.jpg')`,
    backgroundSize: 'cover',     
    backgroundPosition: 'center',
    height:'100vh',
    paddingTop:'50px'
  }}>
        <IoIosArrowBack className='text-3xl text-amber-50 ml-10 ' onClick={()=>navigate(-1)} />
       <div className='flex justify-center  pt-40' >
      <div>
        <h1 className='text-3xl font-extrabold mb-5 text-center text-[#C67C4E]'>Sign Up</h1>
        <form onSubmit={handleSubmit} className='text-[#E3E3E3]'>
          <div className='mb-4 flex justify-between'>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name='name'
              value={name}
              required
              autoComplete="off"
              id="name"
              placeholder='Enter your Name'
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='mb-4 flex justify-between'>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name='email'
              value={email}
              required
              autoComplete="off"
              id="email"
              placeholder='Enter your Email'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='mb-4 flex justify-between'>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name='password'
              value={password}
              required
              autoComplete="off"
              id="password"
              placeholder='Enter Password'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type='submit' className='bg-[#54e330] p-1 text-amber-50 ml-25'>Signup</button>
        </form>
        <p className='mt-4 text-[#E3E3E3]'>I already have an account</p>
        <Link to='/signin'>
          <button className='bg-[#30bce3] p-1 text-amber-50 mt-4 ml-25'>Sign in</button>
        </Link>
      </div>
    </div>
    </div>
   
  )
}

export default Signup