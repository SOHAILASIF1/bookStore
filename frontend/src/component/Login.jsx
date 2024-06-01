import React from "react";

import { useForm } from "react-hook-form"
import { Link } from "react-router-dom";

function Login() {
  const {
    register,
    handleSubmit,
    
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" 
            onClick={()=>document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>
          
          <h3 className="font-bold text-lg">Login!</h3>
         <div>
            <span className="text-xl mt-26">Email</span>
            <br/>
            <input  type="email" placeholder="Email" className="mt-2 p-2 border rounded-lg w-60" {...register("email", { required: true })} />
            <br />
            {errors.email && <span className=" text-red-500">This field is required</span>}
         </div>
         <div>
            <span className="text-xl mt-26">Password</span>
            <br/>
            <input {...register("password", { required: true })} type="password" placeholder="Password" className="mt-2 p-2 border rounded-lg w-60" />
            <br />
            {errors.password && <span className="text-sm text-red-500">This field is required</span>}
         </div >
         <div className=" flex mt-4 justify-around">
          <button type="submit" className="p-2 bg-pink-500 text-white  ">Login</button>
          <p>Not Registered <Link to='/signup'><span className="text-blue-500 underline cursor-pointer">Sign Up</span></Link></p>

         </div>
         </form>

          
        </div>
      </dialog>
    </div>
  );
}

export default Login;
