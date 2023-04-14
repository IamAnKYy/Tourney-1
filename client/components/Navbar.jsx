import Cookies from 'js-cookie'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
const Navbar = () => {
  const [isLogin, setLogin] = useState()
  useEffect(() => {
    console.log("working")
    if (Cookies.get("user")) {
      setLogin(true)
    }
    else {
      setLogin(false)
    }
  }, [])

  return (
    <div className='bg-gray-800 backdrop-blur-md p-3  border-b flex flex-row text-white justify-between items-center'>
      <div className='text-xl' >Tourney123</div>
      <div className='flex flex-row items-center gap-2' >
        {isLogin ?   <img
          src="https://tecdn.b-cdn.net/img/new/avatars/2.webp"
          className="w-10 rounded-full"
          alt="Avatar" />: <div>
          <Link href={"/user/login"} ><button className='text-white rounded-md px-4 py-2 bg-white/30 ' >Login </button> </Link>
          <Link href={"/user/register"} > <button className=' text-white rounded-md px-4 py-2 bg-white/30 ' > Register</button></Link>
        </div>}
      </div>
    </div>
  )
}
export default Navbar
