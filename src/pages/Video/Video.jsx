import React from 'react'
import './Video.css'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import Feed from '../../components/Feed/Feed'

const Video = () => {
  return (
    <div className='video'>
       <Navbar />
       <Sidebar/>
      <div className="container">
        <Feed />
      </div>
      
    </div>
  )
}

export default Video
