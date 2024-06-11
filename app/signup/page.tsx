'use client'
import { useState } from 'react'

function SignUp () {

const [firstname, setFirstname] = useState<string>("")
const [lastname, setLastname] = useState<string>("")
const [othername, setOthername] = useState<string>("")
const [dob, setDOB] = useState<string>("")
const [resAddr, setResAddr] = useState<string>("")
const [state, setState] = useState<string>("")
const [nationality, setNationality] = useState<string>("")
const [email, setEmail] = useState<string>("")
const [gender, setGender] = useState<string>("")

const formData = {
  firstname: firstname,
  lastname: lastname,
  othername: othername,
  dob: dob,
  resAddr: resAddr,
  state: state,
  nationality: nationality,
  email: email,
  gender: gender,

}

const submitform = async () => {
  const URL = 'http://localhost:8000/user'
  const response = await fetch(URL, {
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(formData),
  });
return response.json()}



  return (
    <div className='px-12 md:px-72'>
        <form onSubmit={(e)=>{
          e.preventDefault;
          submitform();
        }} className='text-md'>
            <p className='font-bold text-4xl text-center m-3'>Sign up </p>
            <div className='my-3'>

              <span className='block'>
            <label>First Name</label>
            <p><input type='text' value={firstname} onChange={(e)=> setFirstname(e.target.value)} placeholder='First Name' required className='bg-blue-50 p-5 my-2 w-full rounded-sm'/></p>
            </span>

            <span className='block'>
            <label>Last Name</label>
            <p><input type='text'value={lastname} onChange={(e)=> setLastname(e.target.value)} placeholder='Last Name' required className='bg-blue-50 p-5 my-2 w-full rounded-sm '/></p>
            </span>

            <span className='block'>
            <label>Other Names</label>
            <p><input type='text' value={othername} onChange={(e)=> setOthername(e.target.value)} placeholder='Other names' className='bg-blue-50 p-5 my-2 w-full rounded-sm '/></p>
            </span>
            </div>

            <p className='flex space-x-4 my-4 '>
            <label>Sex:</label>
            <label>M</label>
            <input type='radio' value={gender} id='Male' name="gender" onChange={(e)=>setGender("Male")} checked={gender === 'Male'}/>
            <label>F</label>
            <input type='radio' value={gender} id='Female' name="gender"
            onChange={(e)=>setGender("Female")} checked={gender === 'Female'}/>
            </p>

            <label htmlFor="date">Date Of Birth</label>
            <input type='date' value={dob} onChange={(e)=> setDOB(e.target.value)} required className='bg-blue-50 p-5 my-2 w-full rounded-sm '/>

            <label>Residential Address</label>
            <input type='textbox' value={resAddr} onChange={(e)=> setResAddr(e.target.value)} placeholder='My Address' required className='bg-blue-50 p-5 my-2 w-full rounded-sm '/>

            <label>State of Origin</label>
            <input type='textbox' value={state} onChange={(e)=> setState(e.target.value)} placeholder='Abia State' required className='bg-blue-50 p-5 my-2 w-full rounded-sm '/>

            <label>Nationality</label>
            <input type='text'value={nationality} onChange={(e)=> setNationality(e.target.value)} required placeholder='Nigerian' className='bg-blue-50 p-5 my-2 w-full rounded-sm '/>

            <label>Email Address</label>
            <input type='email'value={email} required onChange={(e)=> setEmail(e.target.value)} placeholder='example@knoxx.edu' className='bg-blue-50 p-5 my-2 w-full rounded-sm '/>

            <button className='primary_btn'> Sign Up</button>
            <button className='outline_sec_btn'> Cancel </button>
        </form>
    </div>
  )
}

export default SignUp