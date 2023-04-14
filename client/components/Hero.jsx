import React from 'react' 
import { useRouter } from 'next/router'
const Hero = () => {
  const router = useRouter()
  return (
    <div className='m-3'>
    <button className='p-3 bg-red-300' onClick={() => router.push("/user/register")
    } >Login </button>  
    <button className='p-3 bg-blue-300'  onClick={() => router.push("/user/register")
    } > Register</button>  
    </div>
  )
}

export default Hero
