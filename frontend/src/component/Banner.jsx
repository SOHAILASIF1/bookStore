import React from 'react'

function Banner() {
  return (
    <div className='flex flex-col p-40 justify-between max-w-screen-2xl container mx-auto md:px-20 md:flex-row px-2 '>
        <div className='w-full md:w-1/2  '>
         <div className='space-y-6 md:space-y-10'>
         <h1 className=' text-4xl font-bold'>Hello Welcome here to Learn Something <span className='text-pink-900 text-4xl'>New Everyday!!!</span></h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe unde eos perferendis velit magni ipsum, nulla assumenda earum corporis quae, animi, possimus totam adipisci quaerat excepturi ducimus? Commodi, atque eos?</p>
          
         </div>
         <label className="input input-bordered mt-5 flex items-center gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
  <input type="text" className="grow" placeholder="Email" />
</label>
<button className=" mt-3 btn btn-outline btn-primary">Primary</button>
        </div>
        <div className='w-full md:w-1/2 ml-40'>
          <img className='w-80 h-92' src='https://img.freepik.com/free-vector/realistic-book-lover-composition-with-stack-colorful-books-with-eyeglasses-home-plants-tea-cup-vector-illustration_1284-77312.jpg?w=740&t=st=1716876857~exp=1716877457~hmac=e11e83b64bbc3b3fd7d38476070611a31c33b168095ec9dbb6f4661945b9e374' alt=''/>
        </div>
    </div>
  )
}

export default Banner