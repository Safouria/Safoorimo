import React from 'react'
import './PlayerSide.css'

import Card from '../../assets/cards/card 1.jpg'

const PlayerSide = () => {
  return (
    <div className='P-Sidebar'>
     <img src={Card} alt="" />
     <div className="shortcut-links">
       <p>Home</p>
       <p>Gaming</p>
       <p>Automobiles</p>
       <p>Sports</p>
       <p>Intertainment</p>
       <p>Technology</p>
       <p>Music</p>
       <p>News</p>
       <p>Blogs</p>
       <hr/>
      </div>
  </div>
  )
}

export default PlayerSide
