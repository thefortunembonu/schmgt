import Image from 'next/image'
import { Button } from 'reactstrap'

function Profile() {
  return (
    <section className='bg-white mx-6'>
        <div>
            <h1 className='font-poppins font-bold px-6 py-2 text-3xl my-2 text-start text-slate-700 '>Dashboard</h1>
        </div>
        <div >
            <div className=" flex justify-start items-center">
            <div className=' px-5 mb-3'>
                <Image 
                className = 'rounded-lg'
                src='/Images/vr.jpg'
                alt='profile'
                width={200}
                height={200}/>
              
                </div>
                <div className='items-center '>
                    <div className='mx-2 text-4xl'>
                    <h2 className='text-xl font-bold blue_gradient_text'>Onyekachi Methuselah</h2>
                    <h2 className='text-sm font-semibold text-slate-500'>Student ID: A546GT78</h2>
                    </div>
                    <div>
                        <button className='primary_btn'>
                            Edit
                        </button>
                        <button  className='outline_sec_btn'>
                            Delete
                        </button>

                        </div>
                    </div>
            </div>
                </div>


                <hr className='border-0.5 border-blue-100'></hr>
<div className='w-full block  md:flex md:space-x-3 md:space-y-2'>
<div className=' m-4 shadow-lg rounded-lg py-4 px-12 font-semibold  font-poppins  text-lg space-y-4'>
            <h1 className='text-2xl text-blue-700'>Basic Info</h1>
               <div className='flex flex-cols-2 gap-24 md:block  text-slate-800 text-sm mt-2'>
              
              <div>
              <h2 className='text-slate-600'>Age: <p className='text-slate-800'>24 Years</p></h2>
                <h2 className='text-slate-600'>Level: <p className='text-slate-800'> 500</p></h2>
              </div>
            
                <div>
                <h2 className='text-slate-600'>Sex: <p className='text-slate-800'> Male</p> </h2>
                <h2 className='text-slate-600'>Date of Birth: <p className='text-slate-800'>June 24, 1997</p></h2>
                </div>
                

               </div>
                </div>

             


                <div className='m-4 text-sm shadow-lg rounded-lg py-4 px-12 font-semibold font-poppins text-lg'>
                 
                        <h1 className='text-2xl  text-blue-700'>Contact Details</h1>
                   
                        <div className=' space-y-3 mt-2'>
                        <h2 className='text-slate-600'>Address: <p className='text-slate-800'>Imerienwe Ngor-Okpala L.G.A</p></h2>
                
                        <h2 className='text-slate-600'> State of Origin: <p className='text-slate-800'>Imo State</p></h2>
            
               
           
                    <h2 className='text-slate-600'>Nationality: <p className='text-slate-800'>Nigerian</p> </h2>
                    
                    <h2 className='text-slate-600'>Phone Number: <p className='text-slate-800'> 07066912078</p></h2>

                    <h2 className='text-slate-600'>Hobbies:  <p className='text-slate-800'>Reading and Playing Football</p></h2>
                   
               
                </div>

</div>
           
                </div>
         
     

        
       

     

    </section>
    
  )
}

export default Profile