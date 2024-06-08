import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'
import { Navigate, Route, Routes} from 'react-router-dom'
import  { Toaster } from 'react-hot-toast';

import Home from './component/home/Home'

import Cources from './component/cources/Cources'
import Signup from './component/Signup'
import  { useAuth } from './context/AuthContext'

export function App() {
  const [authUser, setAuthUser] = useAuth()

  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white '>
    
    
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cources' element={authUser ? <Cources/> : <Navigate to='/signup'/>}/>
          <Route path='/signup' element={<Signup/>}/>

        </Routes>
        
        
        <Toaster />
    </div>
    </>
  )
}
