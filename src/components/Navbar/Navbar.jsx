import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import search_icon from '../../assets/search.svg'
import bell_icon from '../../assets/bell.svg'
import profile_img from '../../assets/profile.svg'
import dropdown_icon from '../../assets/down.svg'




const Navbar = () => {
  return (
    <div className='navbar'>
     <div className="navbar-left">
        <img src={logo} alt="" />
        <ul>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>My List</li>
            <li>Browse by Language</li>
        </ul>
     </div>

     <div className="navbar-right">
        <img src={search_icon} alt="" className='icons' />
        <p>Children</p>
        <img src={bell_icon} alt="" className='icons' />

        <div className="navbar-profile">
          <img src={profile_img} alt="" className='profile' />
          <img src={dropdown_icon} alt="" />
          <div className="dropdown"> Sign out of Netflix</div>
        </div>

     </div>

    </div>
  )
}

export default Navbar