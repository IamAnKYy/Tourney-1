import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import Layout from '@/layout/Layout'
import { toast } from 'react-toastify'
const register = ({ data }) => {
  const team_name = useRef()
  const router = useRouter()
  const [members, setMembers] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    for (let index = 0; index < data.maximumMembers; index++) {
      setMembers((el) => ([...el, { title: `Player ${index + 1}`, type: 'text', isValid: "not set" }]))
    }
  }, [])
  const save = () => {
    setLoading(true)
    if(!members.map(el => el.isValid).includes(false)){
      let team_details = { name: team_name.current.value, team: members.map(el => el.value) }
      let team
      try {
        team = axios.post("http://localhost:5000/tournamentRegistration", { team_details, id: data._id })
      } catch (error) {
        setLoading(false)
        return
      }
      finally {
        setLoading(false)
        router.push(`/tournaments/tournament/${data._id}`)
      }
    }
    else {
      toast.error('Enter valid id')
    }
  }
  const validateUser = async (e) => {
    let user
    try {
      user = await axios.post("http://localhost:5000/verifyUser", { id: e.target.value })
      console.log(user)
    } catch (error) {
      console.log(error)
    }
    if (user?.data != 'not found') {
      setMembers(el => [...el.map(el => el.title == e.target.name ? Object.assign(el, { isValid: true }) : el)])
    }
    else {
      setMembers(el => [...el.map(el => el.title == e.target.name ? Object.assign(el, { isValid: false }) : el)])
    }
    console.log(user)
  }
  return (
    <Layout>
      <div className='bg-center h-full bg-[url("/pexels-alena-darmel-7862657.jpg")] rounded-md' >
        <div className='flex-col flex items-center justify-center rounded-md backdrop-blur-md p-4 h-full' >
          <div className="flex-col flex justify-center items-center ">
            <div className="font-bold text-xl text-gray-8 py-2">Team Name</div>
            <input id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:outline-none focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600/75 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" ref={team_name} required />
          </div>
          <div className="gap-4 grid-cols-2 grid m-3 w-full">
            {members.map(el => {
              return (
                <div key={el.title} >
                  <label htmlFor="email" className="block mb-2 text-md font-medium text-gray-400 dark:text-gray-200">{el.title}</label>
                  <div className='flex flex-row items-center bg-gray-700 rounded-md' >
                    <input type={el.type} name={el.title} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:outline-none focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600/75 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e) => el.value = e.target.value} required onBlur={(e) => validateUser(e, el.value)} />
                    <div className='p-2 bg-gray-700 rounded-md' >{el.isValid != 'not set' ? (el.isValid ?
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="chartreuse" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>) : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 019 14.437V9.564z" />
                    </svg>
                    }  </div>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="flex flex-row gap-4">
            <button className='p-2 bg-slate-300 text-center px-7 rounded-md text-black' onClick={() => save()} >{loading ? <div
              className="inline-block h-6 w-6 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status">
              <span
                className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
              >Loading...</span> </div> : 'Save'}  </button>
            <button className='p-2 bg-slate-300 text-center text-black px-5 rounded-md' onClick={() => save()} > Cancel </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default register
export async function getServerSideProps(context) {
  const tournament = await axios.post("http://localhost:5000/getTournamentById", { id: context.query.id })
  return {
    props: { data: tournament.data ?? "" }
  }
}



