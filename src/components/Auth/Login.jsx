import React, { useState } from 'react'

const Login = () => {
  
    const[email,setEmail] = useState('');
    const[password, setPassword] = useState('')


    const submitHandler = (e) => {
        e.preventDefault();
        setEmail("");
        setPassword("");
    }
  
    return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 border-emerald-600 p-20'>
             <form  onSubmit={(e)=>{
                submitHandler(e)
             }} 
             className='flex flex-col items-center justify-center'> 
                <input 
                value={email}
                onChange={(e)=>{
                     setEmail(e.target.value)
                }}
                required className='outline-none bg-transparent border-2 border-emerald-600 text-xl  p-2 rounded-full placeholder:text-gray-400' type='email' placeholder='enter your email' />
                <input 
                 value={password}
                 onChange={(e)=>{
                      setPassword(e.target.value)
                 }}
                required className='outline-none bg-transparent border-2 mt-3 border-emerald-600 text-xl p-2 rounded-full placeholder:text-gray-400' type='password' placeholder='enter your password' />
               <button className='text-white border-none outline-none mt-5 border-emerald-600 text-xl  rounded-full placeholder:text-white' >Log in</button>
             </form>
        </div>
    </div>
  )
}

export default Login
