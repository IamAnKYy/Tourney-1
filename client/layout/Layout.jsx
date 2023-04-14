import Navbar from '@/components/Navbar'
import SideBar from '@/components/SideBar'
import React from 'react'

const Layout = ({ children }) => {
  return (
   <div>
   <Navbar />
      <div className="flex-row flex">
        <div className="w-[80%] p-3" style={{width:'80%'}}>
          {children}
        </div>
        <div className='w-[20%]' style={{width:'20%'}} >
          <SideBar />
        </div>
      </div>
    </div>
  )
}

export default Layout