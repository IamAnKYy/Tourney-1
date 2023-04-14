import React, { useEffect } from 'react'

const Demo = () => {
    useEffect(() => {
     console.log("working")
    }, [])
    
  return (
    <div>Demo</div>
  )
}

export default Demo