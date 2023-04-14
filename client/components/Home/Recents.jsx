import Image from 'next/image'
import React from 'react'
const Recents = () => {
    const data = [
        { name: 'Titans war', image: '/img-og-pubg.jpg', organizer: 'Rahul', duration: '3hr' },
        { name: 'Titans war', image: '/img-og-pubg.jpg', organizer: 'Rahul', duration: '3hr' },
        { name: 'Titans war', image: '/img-og-pubg.jpg', organizer: 'Rahul', duration: '3hr' },
        { name: 'Titans war', image: '/img-og-pubg.jpg', organizer: 'Rahul', duration: '3hr' },
        { name: 'Titans war', image: '/img-og-pubg.jpg', organizer: 'Rahul', duration: '3hr' },
        { name: 'Titans war', image: '/img-og-pubg.jpg', organizer: 'Rahul', duration: '3hr' },
      ]
      return (
        <>
           <div className='flex flex-row justify-between mb-2  ' >
            <div className="text-3xl font-bold  font-sans text-gray-800 " > Recents</div>
          </div>
          <div className='rounded-md' >
            <div className='flex-row flex flex-wrap justify-between gap-4' >
              {data.map((e) => {
                return (
                  <>
                    <div className='backdrop-blur-md flex-col flex gap-3 rounded-md bg-gray-800 p-4' >
                      <Image src={e.image} width={300} height={300} className='rounded-md' ></Image>
                      <div className='text-lg font-semibold text-white' > Pubg </div>
                      <div className='text-md text-gray-300 font-semibold flex flex-row items-center gap-1' >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Max prize : ₹12,000
                      </div>
                      <div className='text-md text-gray-300 font-semibold' >
                        No. of events : 12000
                      </div>
                      <div className='flex-row flex gap-1 ' >
                        <div className='text-md text-gray-300 flex flex-row items-center gap-1 font-semibold' >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Next event :
                        </div>
                        <div className='text-red-400 font-semibold text-md' >
                          Tommorow , 04:15pm
                        </div>
                      </div>
                      <button className='p-2 cursor-pointer w-full rounded-md font-semibold  text-black bg-white/75 backdrop-blur-md flex-row flex justify-center gap-2'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                      </svg>
                        Join Event</button>
                    </div>
                  </>
                )
              })}
            </div>
            <div>
            </div>
          </div>
        </>)
}

export default Recents
export async function getServerSideProps(context) {
  // let allTournaments
  //     allTournaments = await axios.post("http://localhost:5000/registeredTournaments" , )
  // return {
  //     props: { data: allTournaments.data  }
  // }
}