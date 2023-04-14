import axios from 'axios';
import Link from 'next/link';
import React, { useState } from 'react'

const SideBar = () => {
    const [keyword, setKeyword] = useState()
    const [results, setResults] = useState()
    const [loading, setLoading] = useState(false)
    const searchTournament = async () => {
        setLoading(true)
        let tournaments
        try {
            tournaments = await axios.post("http://localhost:5000/getTournamentByKeyword", { keyword })
        } catch (error) {
            toast.error(error.message)
            setLoading(false)
            return
        }
        setResults(tournaments.data)
        setLoading(false)
    }
    return (
        <div className='bg-gray-800 backdrop-blur-md h-[91vh] p-3 '  >
            <div className="flex-row flex gap-2 my-2">
                <input type='text' className='bg-white/30  focus:outline-none rounded-md w-full p-2  text-white' placeholder='Search Games' onChange={(e) => setKeyword(e.target.value)} />
                <button className='bg-white/30 p-2 text-white rounded-md' onClick={() => searchTournament()}>Search</button>
            </div>
            {results?.map((e) => {
                return (
                    <Link href={`tournaments/tournament/${e._id}`} >
                    <div className='flex-col flex gap-2' >
                        <div className='bg-white/75 backdrop-blur-md rounded-md p-2 flex flex-row gap-2 items-center' > <img src='/img-og-pubg.jpg' className='w-10 h-10 rounded-full' ></img>
                            <div className='flex flex-col w-full'>
                                <div className="flex flex-row justify-between">
                                <div className="font-semibold w-full w-100 text-md text-black text-ellipsis">
                                    {e.curr_game_name}
                                </div>
                                <div className="font-medium text-sm text-gray-600">
                                        <span
                                            class="inline-block whitespace-nowrap rounded-[0.27rem] bg-green-300 px-2 py-1 text-center align-baseline text-[0.75em] font-semibold leading-none text-green-700"
                                        >Opened</span
                                        >
                                    </div>
                                
                                </div>
                                <div className='flex flex-row justify-between ' >
                                <div className="font-medium text-sm text-gray-600 gap-1 items-center flex flex-row">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        {e.prize}
                                    </div>  
                                   
                                    <div className="font-medium text-sm text-gray-600 gap-1 items-center flex flex-row">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                                        </svg> {e.participated_teams.length} / {e.maximumTeams}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Link>
                )
            })}
            {!results?.length && <div className='relative flex justify-center items-center text-gray-300 text-md my-3' >{loading ? <div
                class="inline-block h-6 w-6 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status">
                <span
                    class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                >Loading...</span
                >
            </div> : "Start searching your favourite games..."}  </div>}
        </div>
    )
}

export default SideBar
