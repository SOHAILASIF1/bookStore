import React from 'react'
import { useState , useEffect} from "react";
// import list from '../../public/list.json'
import Card from './Card'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Course() {
  const [book,setBook]=useState([])
  useEffect(()=>{
    const getBook=async()=>{
      try {
        const res=await axios.get("http://localhost:3000/book")
        console.log(res.data);
        setBook(res.data)
        
      } catch (error) {
        console.log(error);
        
      }
    }
    getBook()
  },[])
  return (
    <div className=' dark:bg-slate-900 dark:text-white  max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className=' dark:bg-slate-900 dark:text-white max-h-screen items-center justify-center mt-28 text-center '>
            <h1 className='text-2xl font-semibold md:text-4xl '>We are Deligted Have You <span className='text2xl font-semibold text-pink-500 md:text-4xl'>Here:)</span></h1>

            <p className='mt-12'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, cumque facilis repudiandae perferendis error voluptates atque. Repellat incidunt laborum nesciunt voluptatem fugiat repellendus laboriosam officiis porro sequi fugit perferendis deserunt quo odit alias esse, fuga ipsum praesentium dolores dolorum nemo quibusdam? Repellat dicta voluptatem excepturi?</p>

            <Link to='/'>
            <button className='bg-pink-500 text-white py-2 px-3 rounded-lg mt-8'>Back</button>
            
            </Link>
            
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
            {book.map((item)=>(
              <Card key={item.id} item={item}/>
            ))}
        </div>
        
    </div>
  )
}

export default Course