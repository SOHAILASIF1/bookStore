import React from 'react'
import { useAuth } from '../context/AuthContext'
import toast from 'react-hot-toast'

function Logout() {
    const [authUser,setAuthUser]=useAuth()
    const handleLogout=()=>{
        try {
            setAuthUser({
                ...authUser,
                user:null
            })
            localStorage.removeItem("Users")
            toast.success("Logout Sucsessfully")
            window.location.reload()
        } catch (error) {
            toast.error("Error"+ error.message)

            
        }
    }
  return (
    <div >
        
        <button className='px-3 py-2 rounded-lg bg-red-500 text-white ml-2' onClick={handleLogout}>
            Logout
        </button>
    </div>
  )
}

export default Logout