import React from 'react'
import {Link} from 'react-router-dom'
import Login from '../Login/Login'
import { useForm } from "react-hook-form";

const Signup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <div>
      <div className='flex h-screen items-center justify-center '>
       
       <div  className="w-[600px]">
     <     div className="modal-box  dark:bg-slate-800 dark:text-white">
           <form onSubmit={handleSubmit(onSubmit)} method="dailog">
           {/* if there is a button in form, it will close the modal */}
           <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
          
           <h3 className="font-bold text-2xl">SignUp</h3>
           {/* name */}
           <div className='flex flex-col mt-4'>
               <span className='justify-items-start text-left p-1'>Name</span>
               <input type="name"
               placeholder='Enter your Name'
               className='px-3 border rounded-md outline-none text-green-500'
               {...register("name", { required: true })} />
               {errors.name && <span className='text-sm text-red-500 justify-items-start text-left px-2'>This field is required</span>}
           </div>
           {/* email */}
           <div className='flex flex-col mt-4'>
               <span className='justify-items-start text-left p-1'>Email</span>
               <input type="email"
               placeholder='Enter your Email'
               className='px-3 border rounded-md outline-none text-green-500' 
               {...register("email", { required: true })}/>
               {errors.email && <span className='text-sm text-red-500 justify-items-start text-left px-2'>This field is required</span>}
           </div>
           {/* Age */}
           <div className='flex flex-col mt-4'>
               <span className='justify-items-start text-left p-1'>Age</span>
               <input type="age"
               placeholder='Enter your Age'
               className='px-3 border rounded-md outline-none text-green-500' 
               {...register("number", { required: true })}/>
               {errors.email && <span className='text-sm text-red-500 justify-items-start text-left px-2'>This field is required</span>}
           </div>
           {/* Country */}
           <div className='flex flex-col mt-4'>
               <span className='justify-items-start text-left p-1'>Country</span>
               <input type="text"
               placeholder='Enter your Age'
               className='px-3 border rounded-md outline-none text-green-500' 
               {...register("text", { required: true })}/>
               {errors.email && <span className='text-sm text-red-500 justify-items-start text-left px-2'>This field is required</span>}
           </div>
           {/* password */}
           {/* <div className='flex flex-col mt-4'>
               <span className='justify-items-start text-left p-1'>Password</span>
               <input type="password"
               placeholder='Enter your Password'
               className='px-4 border rounded-md outline-none text-green-500'
               {...register("password", { required: true })} />
               {errors.password && <span className='text-sm text-red-500 justify-items-start text-left px-2'>This field is required</span>}
           </div> */}
           {/* login button */}
            <div className=" mt-4 mx-5">
           <button className='bg-black text-white py-1 px-4 rounded-md hover:bg-green-400 duration-300 cursor-pointer '>Register</button>
           <p className="text-xl">
                  Have account?{" "}
                  <button
                    className="underline text-blue-500 cursor-pointer"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Login
                  </button>{" "}
                  <Login />
                </p>
              
            </div>
            </form>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Signup