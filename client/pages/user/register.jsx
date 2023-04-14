import axios from 'axios'
import Cookies from 'js-cookie'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router'
const register = () => {
  const router = useRouter()
  useEffect(() => {
    const user = Cookies.get("user")
    if (user) {
      router.back()
    }
  }, [])
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState({
    first_name: '',
    last_name: '',
    mobile_no: '',
    password: ''
  })
  const getUser = async () => {
    setLoading(true)
    let fetchUser
    try {
      fetchUser = await axios.post("http://localhost:5000/register", { user })
    }
    catch (error) {
      toast.error(error.message , {
        position: toast.POSITION.BOTTOM_LEFT
      })
      setLoading(false)
      return
    }
    Cookies.set("user", JSON.stringify(fetchUser.data))
    router.push("/tournaments")
  }
  return (
    <div class="flex h-screen items-center justify-center ">
      <div class="w-full max-w-md space-y-8 bg-gray-800 shadow-lg rounded-md p-6 text-white">
        <div>
          <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
          <h2 class="mt-6 text-center text-3xl font-bold tracking-tight ">Sign up to your account</h2>
        </div>
        <input type="hidden" name="remember" value="true" />
        <div class="-space-y-px rounded-md shadow-sm flex-col flex gap-3">
          <div className="grid grid-cols-2 gap-3">
            <input id="email-address" name="email" type="email" autocomplete="email" required className="relative block w-full p-2 text-white  rounded-md border-0 py-1.5 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10   focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder='First Name' onChange={(e) => setUser((el) => ({ ...el, first_name: e.target.value }))} />
            <input id="email-address" name="email" type="email" autocomplete="email" required className="relative block w-full p-2 text-white  rounded-md border-0 py-1.5 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10   focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder='Last Name' onChange={(e) => setUser((el) => ({ ...el, last_name: e.target.value }))} />
          </div>
          <div className='flex flex-col gap-3'>
            <input id="email-address" name="email" type="number" autocomplete="email" required className="relative block w-full p-2 text-white  rounded-md border-0 py-1.5 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10   focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder='Mobile no.' onChange={(e) => setUser((el) => ({ ...el, mobile_no: e.target.value }))} />
            <label for="password" class="sr-only">Password</label>
            <input id="password" name="password" type="password" autocomplete="current-password" required class="relative p-2 block w-full  bg-gray-300s text-white rounded-md border-0 py-1.5  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Password" onChange={(e) => setUser((el) => ({ ...el, password: e.target.value }))} />
          </div>
        </div>
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
            <label for="remember-me" class="ml-2 block text-sm">Remember me</label>
          </div>
          <div class="text-sm">
            <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Forgot your password?</a>
          </div>
        </div>
        <div>
          <button type="submit" disabled={loading} onClick={() => getUser()} class="group relative flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
              </svg>
            </span>
            {loading ? <div
              class="inline-block h-6 w-6 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status">
              <span
                class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
              >Loading...</span
              >
            </div> : <div>Sign up</div>}
          </button>
        </div>
        <div className=" text-center text-sm"> Already have an account <Link href={"/user/login"} className='font-semibold text-indigo-600 underline'  >Sign in</Link> instead </div>
      </div>
      <ToastContainer />
    </div>
    // <div className='border-blue-700 border-2' >
    //   <input type="text" className='p-2' value={user.username} onChange={(el) => setUser((e) => ({...e , username : el.target.value}))} />
    //   <input type="text" className='p-2' value={user.name} onChange={(el) => setUser((e) => ({...e , email : el.target.value}))} />
    //   <input type="text" value={user.password} onChange={(el) => setUser((e) => ({...e , password : el.target.value}))} />
    //   <button onChange={() => getUser()} > Save </button>
    //   <ToastContainer/>
    // </div>
  )
}

export default register
