import React from 'react'
import Navbar from '../Navbar'
import Banner from '../Banner'
import FreeBook from '../FreeBook'
import Footer from '../Footer'

function Home() {
  return (
    <div className='dark:bg-slate-900 dark:text-white '>
        <Navbar/>
        <Banner/>
        <FreeBook/>
        <Footer/>
    </div>
  )
}

export default Home