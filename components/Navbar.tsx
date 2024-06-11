'use client';
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { MenuItems } from './Menuitems'
import { ProfileItems } from './ProfileItems';


export default function Navbar () {


  const [dropdown, setDropdown] = useState<boolean>(false)
  const [Profiledropdown, setProfileDropdown] = useState<boolean>(false)
  const [MobProfiledropdown, setMobProfileDropdown] = useState<boolean>(false)
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)





function Dropdown() {
        return (
      <>
      <ul onClick={handleClick} className= { click ? 'dropdownMenu' : 'dropdownMenu'}>
          {MenuItems.map((item, index) => {
          return (
              <li key={index}>
                  <a className={item.cname} href={item.path} onClick={()=> setClick(false)}>
                      {item.course}
                  </a>
              </li>
          )
          })}

      </ul> 
      </>
  )
}

function ProfileDropdown() {
  return (
<>
<ul onClick={handleClick} className= { click ? 'dropdownMenu' : 'dropdownMenu'}>
    {ProfileItems.map((item, index) => {
    return (
        <li key={index}>
            <a href={item.path} onClick={()=> {setClick(false);setProfileDropdown(prev=>!prev) }}>
                {item.func}
            </a>
        </li>
    )
    })}

</ul> 
</>
)
}

function MobProfileDropdown() {
  return (
<>
<ul onClick={handleClick} className= { click ? 'mobdropdownMenu' : 'mobdropdownMenu'}>
    {ProfileItems.map((item, index) => {
    return (
        <li key={index}>
            <Link href={item.path} onClick={()=> {setClick(false);setMobProfileDropdown(prev=>!prev)}}>
                {item.func}
            </Link>
        </li>
    )
    })}

</ul> 
</>
)
}


const UseRouter = useRouter()
  
  return (
   <>

 <div className='bg-white pt-2 min-w-[700px] md:w-full'>

    <div className='flex items-center justify-center py-2 '>
        <Image className='mx-3 w-12 h-12 md:w-24 md:h-24'
         src="/images/Knoxxsvg.svg"
         alt='School Logo' 
         width={64} height={64}/>
        <a href='/' className=' text-3xl mr-5 md:text-6xl blue_gradient_text font-satoshi font-bold'>Knoxx University</a>
        <div className='md:hidden cursor-pointer' >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gray" className="w-8 h-8 rounded-lg bg-slate-100 shadow-md hover:bg-blue-400"   onClick={() => {handleClick;{Profiledropdown ? setProfileDropdown(false): null;} setMobProfileDropdown(prev=>!prev)}}    >
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  
</svg>


        </div>
        {MobProfiledropdown && MobProfileDropdown()}
        </div>
        <hr className='m-3'></hr>

      <div className='md:flex px-2 hidden font-poppins font-semibold text-sm  text-blue-800 justify-center'>
        <ul className='flex space-x-0 md:space-x-5 justify-center cursor-pointer '>
        <Link href='/'>
          <li onClick={() => {handleClick; UseRouter.push('/')
          {dropdown ? setDropdown(false): null;{Profiledropdown ? setProfileDropdown(false): null;}}}}
             className='m-1 md:m-3 rounded-lg
              hover:text-white hover:bg-blue-800 px-2 py-1 md:px-3 md:py-2'
             >HOME</li></Link>

          <Link href='/blog'>
          <li onClick={() => {
            handleClick;
            setDropdown(prev=>!prev);
            {Profiledropdown ? setProfileDropdown(false): null;}
          }} className=' flex m-1 md:m-3 rounded-lg hover:text-white hover:bg-blue-800 px-2 py-1 md:px-3 md:py-2'>BLOG </li>
         </Link>         


  
          <Link href='/loginForm'>
          <li onClick={() => {handleClick;{dropdown ? setDropdown(false): null;{Profiledropdown ? setProfileDropdown(false): null;}}}} className='m-1 md:m-3 rounded-lg hover:text-white hover:bg-blue-800 px-2 py-1 md:px-3 md:py-2'>
          PORTAL
          </li>
          </Link>
            
          
          <Link href='/#footer'> 
          <li onClick={() => {handleClick;{dropdown ? setDropdown(false): null;{Profiledropdown ? setProfileDropdown(false): null;}}}} className='m-1 md:m-3 rounded-lg hover:text-white hover:bg-blue-800 px-2 py-1 md:px-3 md:py-2'>CONTACT US
          </li>
          </Link>
       
        </ul>
        <div className=' justify-end ml-16 rounded-full shadow-sm'>

        <Image 
        src='/Images/Knoxxlogo.png'
        width={48}
        height={48}
        alt='profile'
        className=''
        onClick={() => {
          handleClick;
          setProfileDropdown(prev=>!prev);}}>
            
        </Image>
         {Profiledropdown && ProfileDropdown()}
      </div>
      </div>

 </div>

  </>

  )
  }
