import React, { useEffect, useState } from 'react'

function Banner() {
const [value, setValue] = useState(false)
const messages = {
    message : ' Registered nmnhn', 
    type : 'error'
}


  return (
    <>
    {value ? (
        <div className='hidden bg-green-700 top-[85px] items-center  w-full h-12 text-center text-white p-2'>{messages.message}</div>
    ):(
        <div className='hidden bg-red-500 top-[85px] items-center  w-full h-12 text-center text-white p-2'>{messages.message}</div>
    )}
  </>
  )
}

export default Banner