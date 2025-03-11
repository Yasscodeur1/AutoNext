import React from 'react'
import Navbar from '../../Components/Header'


type props = {
    children: React.ReactNode
}

const layout = ({children}: props) => {
  return (
    <div className='w-full h-screen flex flex-col items-center'>
        <Navbar/>
        {children}
        {/* <Footer/> */}
        </div>
  )
}

export default layout

