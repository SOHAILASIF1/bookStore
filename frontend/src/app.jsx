import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Home from './component/home/Home'

import Cources from './component/cources/Cources'
import Signup from './component/Signup'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white '>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cources' element={<Cources/>}/>
          <Route path='/signup' element={<Signup/>}/>

        </Routes>
        </BrowserRouter>
    </div>
    </>
  )
}
