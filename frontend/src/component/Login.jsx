import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    await axios.post('http://localhost:3000/user/login',userInfo)
    .then((res)=>{
      console.log(res.data);

      if (res.data) {
        toast.success('Successfully Login!');
        document.getElementById("my_modal_3").close()
        window.location.reload()
      }
      localStorage.setItem("Users",JSON.stringify(res.data.user))

    }).catch((error)=>{
      if (error.response) {
        console.log(error);
        toast.error("Error:"+ error.response.data.message)
      }
    })

    
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            <button 
              type="button" 
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" 
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </button>
          
            <h3 className="font-bold text-lg">Login!</h3>
            <div>
              <span className="text-xl mt-26">Email</span>
              <br />
              <input 
                type="email" 
                placeholder="Email" 
                className="mt-2 p-2 border rounded-lg w-60" 
                {...register("email", { required: true })} 
              />
              <br />
              {errors.email && <span className="text-red-500">This field is required</span>}
            </div>
            <div>
              <span className="text-xl mt-26">Password</span>
              <br />
              <input 
                type="password" 
                placeholder="Password" 
                className="mt-2 p-2 border rounded-lg w-60" 
                {...register("password", { required: true })} 
              />
              <br />
              {errors.password && <span className="text-sm text-red-500">This field is required</span>}
            </div>
            <div className="flex mt-4 justify-around">
              <button type="submit" className="p-2 bg-pink-500 text-white">Login</button>
              <p>
                Not Registered? 
                <Link to='/signup'>
                  <span className="text-blue-500 underline cursor-pointer"> Sign Up</span>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
      <button 
        type="button" 
        className="btn" 
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        Open Login Modal
      </button>
    </div>
  );
}

export default Login;
