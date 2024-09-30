import React, { useState } from 'react'

const Login = () => {

  const [state, setState]=useState('Sign up')

  const [name, setName]=useState();
  const [email, setEmail]=useState()
  const [password, setPassword]=useState()

  const onsubmitHandler=(e)=>{
    e.preventDefault();
  }


  return (
    <>
    <form action=""  className='min-h-[80vh] flex items-center'>
      <div className='flex flex-col m-auto p-8 text-zinc-900 min-w-[340px] gap-3 sm:w-96 border shadow-lg rounded-lg items-start text-sm '>
        <p className='text-2xl font-semibold'>{state === 'Sign Up' ? 'Create account' : 'Login'}</p>
        <p>Please {state === 'Sign Up' ? 'sign up' : 'log in'} to book a appointment</p>
       {state=== 'Sign Up' && <div className='w-full'>
        <p>Full Name:</p>
        <input className='border border-zinc-300 rounded w-full p-2 mt-1 ' type="text" onChange={()=>setName(e.target.name)} value={name} required />
      </div> }  
        
      <div className='w-full'>
        <p>Email:</p>
        <input className='border border-zinc-300 rounded w-full p-2 mt-1 ' type="email" onChange={()=>setEmail(e.target.email)} value={email}required />
      </div>
      <div className='w-full'>
        <p>Password:</p>
        <input className='border border-zinc-300 rounded w-full p-2 mt-1 ' type="password" onChange={()=>setPassword(e.target.password)} value={password} required />
      </div>
      <button className='bg-primary w-full  text-base rounded-md py-2 text-white '>{state === 'Sign up' ? 'Create account' : 'Login'}</button>
      {
        state === "Sign Up" ?
         <p>Already have an account? <span onClick={()=>setState('Login')} className='text-primary underline cursor-pointer'>Login here</span> </p>
         : <p>Create an new account? <span onClick={()=>setState('Sign Up')} className='text-primary underline cursor-pointer'>click here</span></p>
      }
      </div>
    </form>
    
    </>
  )
}

export default Login