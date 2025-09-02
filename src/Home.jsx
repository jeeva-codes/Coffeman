import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Allproduct from './components/Allproduct'
import Footer from './components/Footer'

function Home() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Allproduct/>
      <Footer/>
    </div>
  )
}

export default Home