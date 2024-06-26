import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios"
import toast from "react-hot-toast";

function Signup() {
  const location=useLocation()
  const navigate=useNavigate()
  const from=location.state?.from?.pathname||'/'
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit =async (data) => {
    const userInfo={
      fullname:data.fullname,
      email:data.email,
      password:data.password,
      number:data.number
    }
    await axios.post('http://localhost:3000/user/signup',userInfo)
    .then((res)=>{
      console.log(res.data);

      if (res.data) {
        toast.success('Successfully Signup!');
        navigate(from,{replace:true})
      }
      localStorage.setItem("Users",JSON.stringify(res.data.user))

    }).catch((err)=>{
      console.log(err);
      toast.error("Error:",err.message)
    }

    )
  }
  return (
    <>
      <div className="flex h-screen items-center justify-center text-">
        <div
          id="my_modal_3"
          className="border-[2px] shadow-lg rounded-lg p-7 m-2"
        >
          <div className="">
            <form onSubmit={handleSubmit(onSubmit)} method="div">
              {/* if there is a button in form, it will close the modal */}
              <Link to='/'
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={() => document.getElementById("my_modal_3").close()}
              >
                ✕
              </Link>
            
            <h3 className="font-bold text-lg text-center mb-2">Signup!</h3>
            <div>
              <span className="text-xl mt-26">Full Name</span>
              <br />
              <input
                type="text"
                placeholder="Name"
                className="mt-2 p-2 border rounded-lg w-60"
                {...register("fullname", { required: true })}
              />
              <br />
              {errors.fullname && (
                <span className=" text-red-500">This field is required</span>
              )}
            </div>
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
              {errors.email && (
                <span className=" text-red-500">This field is required</span>
              )}
            </div>
            <div>
              <span className="text-xl mt-26">Number</span>
              <br />
              <input
                type="number"
                placeholder="Number"
                className="mt-2 p-2 border rounded-lg w-60"
                {...register("number", { required: true })}
              />
              <br />
              {errors.number && (
                <span className=" text-red-500">This field is required</span>
              )}
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
              {errors.password && (
                <span className=" text-red-500">This field is required</span>
              )}
            </div>
            <div className=" flex mt-4 justify-around">
              <button type="submit" className="p-2 bg-pink-500 text-white  ">Signup</button>
            </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
