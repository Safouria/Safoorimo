import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play.svg'
import info_icon from '../../assets/info.svg'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src={hero_banner} alt="" className='banner-img' />
        <div className="hero-caption">
          <img src={hero_title} alt="" className='caption-img' />
          <p>The movie is about NASA's "Lazarus missions" to identify habitable planets around the black hole Gargantua. The three potentially habitable planets are Miller, Edmunds, and Mann.</p>
          <div className="hero-btns">
            <button className='btn'>
              <img src={play_icon} alt="" />Play
            </button>
            <button className='btn dark-btn'>
              <img src={info_icon} alt="" />More info
            </button>
          </div>
          <TitleCards />
        </div>

      </div>
      <div className="more-cards">
      <TitleCards title={"Blockbuster Movie"}/>
      <TitleCards title={"Only on Netflix"}/>
      <TitleCards title={"Upcoming"}/>
      <TitleCards title={"Top pics for You"}/>
      </div>

      <Footer />
    </div>
  )
}

export default Home