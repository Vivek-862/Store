import React from 'react'
import {Link} from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';
const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit =async (data) =>{
    const userInfo={
      
      email:data.email,
      password:data.password,
     }
     await axios.post("http://localhost:4001/user/login",userInfo)
     .then((res)=>{
      console.log(res.data);
      if(res.data){
        toast.success('LoggedIn successfully');
      }
      localStorage.setItem("Users",JSON.stringify(res.data));
      
     }).catch((error)=>{
       console.log(error)
       toast.error("Login Error :"+error.response.data.message);
     })
  
  }
  return (
    <div>
       
    <dialog id="my_modal_3" className="modal">
  <     div className="modal-box dark:bg-slate-800 dark:text-white">
        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
        <h3 className="font-bold text-2xl">Login</h3>
        {/* email */}
        <div className='flex flex-col mt-4'>
            <span className='justify-items-start text-left p-1'>Email</span>
            <input type="email"
            placeholder='Enter your Email'
            className='px-3 border rounded-md outline-none text-green-500'
            {...register("email", { required: true })}
            />
            {errors.email && <span className='text-sm text-red-500 justify-items-start text-left px-2'>This field is required</span>}
        </div>
        {/* password */}
        <div className='flex flex-col mt-4'>
            <span className='justify-items-start text-left p-1'>Password</span>
            <input type="password"
            placeholder='Enter your Password'
            className='px-4 border rounded-md outline-none text-green-500'
            {...register("password", { required: true })}
            />
  
            {errors.password && <span className='text-sm text-red-500 justify-items-start text-left px-2'>This field is required</span>}
        </div>
        {/* login button */}
         <div className="flex justify-between mt-4 mx-5">
            <button className='bg-black text-white py-1 px-4 rounded-md hover:bg-green-400 duration-300 cursor-pointer '>Login</button>
            <p className=''>Not Registered?{" "} 
                <Link to="/signup" className='font-bold rounded hover:cursor-pointer hover:text-green-500'>
                    Signup
                </Link>{" "}
            </p>
         </div>
        </form>
       
         </div>
     </dialog>
    </div>
  )
}

export default Login