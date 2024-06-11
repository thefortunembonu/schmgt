'use client'

import {useState} from 'react'
import Link from 'next/link'

function LoginForm() {

  // const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const data = { username, password}



  const handleLoggedIn =() => setIsLoggedIn((prev)=>!prev)

  const LoginFn = async () => {
    const URL = 'http://127.0.0.1:8000/api/token'

    try {
      const response = await fetch(URL,
        {
          method: 'POST',
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(data)
        })
        if (response.ok) return response.json()
      
    } catch (error) {
      console.log(error)
    }
 
      
      
  }


  return (
    <div className='flex justify-center bg-white py-12 '>
    {!isLoggedIn ? (
        <form onSubmit={(e)=>{
          e.preventDefault();
          handleLoggedIn();
          LoginFn();
        }} 
        className= 'shadow-md py-3 px-4 rounded-lg'>
        <div className=' justify-center '>
   
    
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.0" stroke="gray" className="w-32 h-32 mx-auto ">
        <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>


        </div>
        
      
            <label className='text-slate-700 '> Email Address</label>
            <p>
            <input 
            className=' text-slate-700 w-80 h-12 p-3 my-3 bg-slate-100'
            type='text'  value={username} onChange={(e)=>setUsername(e.target.value)}  placeholder='example@knoxxuniversity.edu'/>
           </p>
            <label className='text-slate-700'> Password</label>
            <p>
            <input 
            className='text-slate-700 w-80 h-12 p-3  my-3 bg-slate-100' type='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='password'/>
            </p>
            <button className='primary_btn'>Login</button>

            <Link href='#' className='text-blue-500 text-sm mx-4'>Forgot password?</Link>

            <hr></hr>
            <p className='p-4'>Do not have an account? please  <Link href='/signup' className='text-blue-500'>sign up.</Link></p>

           
        </form>
        ):(
          <div>
            <p> Logged In</p>
          
            <button className='primary_btn'  onClick={handleLoggedIn}> Logout</button>
          </div>
        )}
    </div>
  )
}

export default LoginForm