import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import search_icon from '../../assets/search.svg'
import bell_icon from '../../assets/bell.svg'
import profile_img from '../../assets/profile.svg'
import dropdown_icon from '../../assets/down.svg'
import { Link } from 'react-router-dom'




const Navbar = () => {
  const navRef = useRef();
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      if(window.scrollY >= 80){
        navRef.current.classList.add("nav-dark");
      }else{
        navRef.current.classList.remove("nav-dark");
      }
    })
  },[])
  return (
    <div ref={navRef} className='navbar'>
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
          <Link to={`/login`} className="dropdown"> Sign out of Netflix</Link>
        </div>

     </div>

    </div>
  )
}

export default Navbar
