import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';
import Link from 'next/link';

const login = () => {
  const router = useRouter()
  const [user, setUser] = useState({
    mobile: '',
    password: ''
  })
  const [loading , setLoading] = useState()
  useEffect(() => {
    const user = Cookies.get("user")
    if (user) {
      router.back()
    }
  }, [])
  const getUser = async () => {
    setLoading(true)
    let fetchUser
    try {
      fetchUser = await axios.post("http://localhost:5000/login", { user })
    }
    catch (error) {
      setLoading(false)
      toast.error(error.message)
      return 
    }
      Cookies.set("user", JSON.stringify(fetchUser.data))
      router.push("/tournaments")
  }
  return (
    <div className="flex h-screen items-center justify-center ">
      <div className="w-full max-w-md space-y-8 text-white shadow-lg rounded-lg p-6 bg-gray-800 backdrop-blur-md">
        <div>
          <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight ">Sign in to your account</h2>
        </div>
        <input type="hidden" name="remember" value="true" />
        <div className="-space-y-px rounded-md shadow-sm flex-col flex gap-6">
          <div>
            <label htmlFor="email-address" className="sr-only">Mobile no.</label>
            <input id="email-address" onChange={(el) => setUser((e) => ({ ...e, mobile: el.target.value }))} name="number" type="number" autoComplete="email" required className="relative block w-full p-2 text-white  rounded-md border-0 py-1.5 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10   focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Phone no." />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">Password</label>
            <input id="password" name="password" type="password" onChange={(el) => setUser((e) => ({ ...e, password: el.target.value }))} autoComplete="current-password" required className="relative p-2 block w-full  bg-gray-300s text-white rounded-md border-0 py-1.5  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Password" />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
            <label htmlFor="remember-me" className="ml-2 block text-sm ">Remember me</label>
          </div>
          <div className="text-sm">
            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Forgot your password?</a>
          </div>
        </div>
        <div>
          <button onClick={() => getUser()} className="group relative flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
              </svg>
            </span>
            {loading ? <div
              className="inline-block h-6 w-6 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status">
              <span
                className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
              >Loading...</span
              >
            </div> : <div>Sign in</div>}
          </button>
        </div>
        <div className=" text-center text-sm">Don't have an account <Link href={"/user/register"} className='font-semibold text-indigo-600 underline' >Sign up</Link> instead .</div>
      </div>
<ToastContainer/>
    </div>

    // <div className='border-blue-700 border-2' >
    //   <input type="text" className='p-2' value={user.email} onChange={(el) => setUser((e) => ({...e , email : el.target.value}))} />
    //   <input type="text" value={user.password} onChange={(el) => setUser((e) => ({...e , password : el.target.value}))} />
    //   <button onClick={() => getUser()} > Save </button>
    // </div>
  )
}

export default login
