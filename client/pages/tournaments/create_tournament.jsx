import Layout from '@/layout/Layout';
import axios from 'axios'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const CreateTournament = () => {
  const router = useRouter()
  const [loading, setLoading] = useState()
  const tournament = [{ title: "Select Game", type: 'text', name: "curr_game_name" },
  { title: 'Event Name', type: 'text', name: "curr_tournament_name" },
  { title: "Starting Date", name: "start_date", type: 'date' },
  { title: 'Registration Duration', type: 'date', name: "registrationDuration" },
  { title: 'Maximum Members / Team', type: 'number', name: "maximumMembers" },
  { title: 'Maximum Teams', type: 'number', name: 'maximumTeams' },

  { title: 'Prize', name: 'prize', type: 'number', },
  { title: "Currency", type: 'select', name: "currency" },
  ]
  const saveTournament = async () => {
    setLoading(true)
    const userName = JSON.parse(Cookies.get("user"))
    let tournamentModel
    tournament.forEach((e) => {
      tournamentModel = { ...tournamentModel, [e.name]: e.value }
    })
    tournamentModel = { ...tournamentModel, organiser_name: userName._id }
    let getTournament
    try {
      getTournament = await axios.post("http://localhost:5000/createTournament", { tournamentModel })
    }
    catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.BOTTOM_LEFT
      })
      setLoading(false)
      return
    }
    finally {
      setLoading(false)
      router.push(`tournament/${getTournament.data._id}`)
    }
  }
  const setValue = (target) => {
    tournament.find((e) => e.title == target.name).value = target.value
  }
  const reset = () => {
    tournament.forEach(el => {
      if (el.value) {
        el.value = ""
      }
    })
  }
  return (<Layout>
    <div className='bg-[url("/pexels-lucie-liz-3165335.jpg")] h-[88vh] rounded-xl overflow-hidden'>
      <div className=' p-4 backdrop-blur-sm backdrop-brightness-75 h-full flex justify-center flex-col w-full'>
        <div className="text-2xl px-5 font-bold text-white ">Create Tournament</div>
        <div className=' gap-4 grid-cols-2 grid m-3  p-3 rounded-md' >
          {tournament.map(el => {
            return (
              <div className="mb-6" key={el.title}>
                <label htmlFor="email" className="block mb-2 text-md font-medium text-gray-400 dark:text-gray-200">{el.title}</label>
                <input type={el.type} name={el.title} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:outline-none focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600/75 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={el.value} onChange={({ target }) => setValue(target)} required  />
              </div>
            )
          })}
        </div>
        <div className="flex flex-row gap-4 justify-center w-100">
          <button className='bg-purple-600  text-white shadow-md py-2 px-6 rounded ' onClick={() => saveTournament()} > {loading ? <div
            className="inline-block h-6 w-6 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status">
            <span
              className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
            >Loading...</span> </div> : "Save"}  </button>
          <button className='bg-blue-600 shadow-md  py-2 px-6 rounded' onClick={() => reset()} > Reset </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  </Layout>
  )
}

export default CreateTournament
