import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube.svg'
import twitter_icon from '../../assets/twitter.svg'
import facebook_icon from '../../assets/facebook.svg'
import instagram_icon from '../../assets/instagram.svg'



const Footer = () => {
  return (
    <div className='footer'>

      <div className="footer-icons">
        <img src={facebook_icon} alt="" />
        <img src={instagram_icon} alt="" />
        <img src={twitter_icon} alt="" />
        <img src={youtube_icon} alt="" />
      </div>
      
      <ul>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Investor Relations</li>        
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className='copyright-text'> © 1997-2023 Netflix, Inc.</p>
    </div>
  )
}

export default Footer
