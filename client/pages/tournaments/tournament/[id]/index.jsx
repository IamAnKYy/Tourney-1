import Demo from '@/components/Demo'
import TeamsTable from '@/components/TeamsTable'
import Layout from '@/layout/Layout'
import axios from 'axios'
import Cookies from 'js-cookie'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
const id = ({ data }) => {
  const [showActions, setShowActions] = useState()
  useEffect(() => {
    const user = JSON.parse(Cookies.get("user"))
    if (user._id == data._id) {
      setShowActions(true)
    }
    else {
      setShowActions(false)
    }
  }, [])
  return (
    <Layout>
      <div className='bg-gray-800 overflow-hidden rounded-md' >
        <div className='text-center bg-[url("/pexels-yan-krukau-9072216.jpg")] relative h-64 bg-center w-full' >
          <div className='w-full h-full backdrop-blur-sm ' >
            <div className=' flex justify-center items-center w-full h-full flex-col' >
              <Image src="https://d3b4yo2b5lbfy.cloudfront.net/wp-content/uploads/2014/08/1a183WTS-Cup.jpg" alt='tournamnet image' className="rounded-full shadow-md" width={100} height={100} ></Image>
              <div className='text-4xl  text-white font-bold' >{data.curr_tournament_name}</div>
              <div className='text-md  text-gray-400 ' >{data.organiser_name}</div>
            </div>
          </div>
        </div>
        <div className='flex flex-row justify-between p-4' >
          <div className='flex-col flex text-white gap-4 items-center w-full text-lg' >
            <div className="text-xl font-bold">Event  Details</div>
            <div>
              Name : {data.curr_tournament_name}
            </div>
            <div>
              Prize : {data.prize}
            </div>
            <div>
              Game : {data.curr_game_name}
            </div>
            <div>
              Unique id : {data._id}
            </div>
          </div>
          <div className='border-l-2 border-dashed border-gray-400' >
          </div>
          <div className='flex-col flex text-white gap-4 w-full items-center text-lg' >
            <div className="text-xl font-bold ">Registration Details</div>
            <div> Registration Ends in : {data.registrationDuration} </div>
            <div> Registration Fees : {data.registration_fee ?? "Free"} </div>
            <div> Maximum members per team : {data.maximumMembers}</div>
            <div> Slots left : {data.maximumTeams}</div>
          </div>
        </div>
        {showActions ?
          <div className='flex justify-center gap-3' >
            <button className='bg-gray-400 px-4 py-2 rounded-md flex flex-row gap-1' >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              Confirm
            </button>
            <button className='bg-gray-400 px-4 py-2 rounded-md flex flex-row gap-1' >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
              </svg>
              Edit
            </button>
            <button className='bg-gray-400 px-4 py-2 rounded-md flex flex-row gap-1' >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
              Cancel
            </button>
          </div> :
          <div className="flex justify-center">
            <Link href={`/tournaments/tournament/${data._id}/register`}>
              <button className='bg-red-400 text-white px-4 py-2 rounded-md flex flex-row gap-1 m-3 ' >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Register Now
              </button>
            </Link>
          </div>
        }
      </div>
      <div className='my-10' ></div>
      <TeamsTable teams={data.participated_teams} />
    </Layout>
  )
}

export default id
export async function getServerSideProps(context) {
  let tournament
  try {
    tournament = await axios.post('http://localhost:5000/getTournamentById', { id: context.params.id })
  } catch (error) {
    console.log(error)
  }
  return {
    props: { data: tournament.data ?? "" }, // will be passed to the page component as props
  }
}
