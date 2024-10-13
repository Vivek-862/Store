import React from 'react'
import {Link} from 'react-router-dom';
const Login = () => {
  return (
    <div>
       
    <dialog id="my_modal_3" className="modal">
  <     div className="modal-box dark:bg-slate-800 dark:text-white">
        <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
        </form>
        <h3 className="font-bold text-2xl">Login</h3>
        {/* email */}
        <div className='flex flex-col mt-4'>
            <span className='justify-items-start text-left p-1'>Email</span>
            <input type="email"
            placeholder='Enter your Email'
            className='px-3 border rounded-md outline-none text-green-500' />
        </div>
        {/* password */}
        <div className='flex flex-col mt-4'>
            <span className='justify-items-start text-left p-1'>Password</span>
            <input type="password"
            placeholder='Enter your Password'
            className='px-4 border rounded-md outline-none text-green-500' />
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
         </div>
     </dialog>
    </div>
  )
}

export default Login