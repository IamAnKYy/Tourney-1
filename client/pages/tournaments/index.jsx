import Populars from '@/components/Home/Populars'
import Recents from '@/components/Home/Recents'
import Tournaments from '@/components/Home/Tournaments'
import Layout from '@/layout/Layout'
import axios from 'axios'
import Cookies from 'js-cookie'
import Link from 'next/link'
import { useEffect } from 'react' 
const index = ({  }) => {
  let data
  // useEffect(() => {
  //   getData()
  // }, [])
  // const getData = async() => {
  //   console.log("called")
  //   data = await axios.post("http://localhost:5000/getMyProfile", { id:JSON.parse(Cookies.get("user"))._id })
  //   console.log(data)
  // }
  return (
    <Layout>
      {/* <video className='absolute h-full w-full ' loop src="/pexels-rodnae-productions-7914775-960x540-30fps.mp4" autoPlay ></video> */}
      <div className='flex-row flex'>
        <div className='p-3' >
          <div className='flex flex-row justify-between mb-2' >
            <div className="text-3xl font-bold  font-sans text-white " > Populars</div>
            <Link href={"tournaments/create_tournament"} ><button className='bg-gray-800 text-white p-2 rounded-md flex-row flex gap-1'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
              Create new  </button></Link>
          </div>
          <Populars data={data} />
          <Recents data={data} />
          <Tournaments data={data} />
        </div>
      </div>
    </Layout>
  )
}

export default index
// export async function getServerSideProps() {
//   const user = await axios.post("http://localhost:5000/getMyProfile", { id: Cookies.get("user")._id })
//   return {
//     props: {
//       data: user.data ?? ''
//     }
//   }
// }