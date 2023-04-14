import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Tournaments = ({ data }) => {
    return (
        <div>
            {data.length ? data?.map((e) => {
                return (
                    <>
                        <div className='backdrop-blur-md flex-col flex gap-3 rounded-md bg-gray-800 p-4' >
                            <Image src="/img-og-pubg.jpg" width={300} height={300} className='rounded-md' ></Image>
                            <div className='text-lg font-semibold text-white' > {e.curr_tournament_name} </div>
                            <div className='text-md text-gray-300 font-semibold flex flex-row items-center gap-1' >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Prize : {e.prize}
                            </div>
                            <div className='text-md text-gray-300 font-semibold' >
                                Teams : {e.participated_teams.length}/{e.maximumTeams}
                            </div>
                            <div className='flex-row flex gap-1 ' >
                                <div className='text-md text-gray-300 flex flex-row items-center gap-1 font-semibold' >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Starts on :
                                </div>
                                <div className='text-red-400 font-semibold text-md' >
                                    {e.start_date}
                                </div>
                            </div>
                            <Link href={`tournaments/tournament/${e._id}`} >
                                <button className='p-2 cursor-pointer w-full rounded-md font-semibold  text-black bg-white/75 backdrop-blur-md flex-row flex justify-center gap-2'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                                </svg>
                                    Event details</button>
                            </Link>
                        </div>
                    </>
                )
            }) : <div className='text-center font-bold text-2xl w-full m-6' > No participated tournaments </div>}
        </div>
    )
}

export default Tournaments