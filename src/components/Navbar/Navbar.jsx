import React, { Children, useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/safourimo 3.svg'
import search_icon from '../../assets/search.svg'
import bell_icon from '../../assets/bell.svg'
import profile_img from '../../assets/profile.svg'
import dropdown_icon from '../../assets/down.svg'
import { Link } from 'react-router-dom'
import Hamburger_icon from '../../assets/hamburger.svg'




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
      <a href="/">
      <img src={logo} alt=""/></a>
        <ul>
            <Link to={`/movie/:categoryId/:movieId`} className='nav-color'>TV Shows</Link>
            <Link to={`/movie/:categoryId/:movieId`} className='nav-color'>Movies</Link>
            <Link to={`/movie/:categoryId/:movieId`} className='nav-color'>New & Popular</Link>
        </ul>
     </div>

     <div className="navbar-right">
        <div className='search-bar'>
        <input type="text" placeholder='Search' className='search-input'/>
        <img src={search_icon} alt="" className='icons'/>
        </div>
        <img src={Hamburger_icon} alt="" className='icons hamburger' onClick={()=>{
          const hamber = document.querySelector("children");
          hamber.classList.add("on");
        }} />
        <div className="children ">
           <ul>
            <li>Child 1</li>
            <li>Child 2</li>
            <li>Child 3</li>
            <li>Child 4</li>
            <li>Child 5</li>

           </ul>
        </div>
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
