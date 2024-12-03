import React from 'react'
import './Sidebar.css'
import card1 from '../../assets/cards/card 1.jpg'
import card2 from '../../assets/cards/card 2.jpg';
import card3 from '../../assets/cards/card 3.webp';
import card4 from '../../assets/cards/card 4.jpg';
import card5 from '../../assets/cards/card 5.jpg';
import card6 from '../../assets/cards/card 6.jfif';
import card7 from '../../assets/cards/card 7.png';
import card8 from '../../assets/cards/card 8.jpg';
import card9 from '../../assets/cards/card 9.webp';
import card10 from '../../assets/cards/card 10.jpg';
import card11 from '../../assets/cards/card 11.jpg';
import card12 from '../../assets/cards/card 12.jpg';



const Sidebar = () => {
  return (
    <div className='Sidebar'>
      <div className="shortcut-links">
      <div className="side-link">
          <img src={card1} alt="" />
          <p>Home</p>
        </div>
        <div className="side-link">
          <img src={card2} alt="" />
          <p>Gaming</p>
        </div>
        <div className="side-link">
          <img src={card3} alt="" />
          <p>Automobiles</p>
        </div>
        <div className="side-link">
          <img src={card4} alt="" />
          <p>Sports</p>
        </div>
        <div className="side-link">
          <img src={card5} alt="" />
          <p>Intertainment</p>
        </div>
        <div className="side-link">
          <img src={card6} alt="" />
          <p>Technology</p>
        </div>
        <div className="side-link">
          <img src={card7} alt="" />
          <p>Music</p>
        </div>
        <div className="side-link">
          <img src={card8} alt="" />
          <p>Blogs</p>
        </div>
        <div className="side-link">
          <img src={card9} alt="" />
          <p>News</p>
        </div>
        <hr/>
      </div>
      <div className="subscribed-list">
        <h3>Subscribed</h3>
        <div className="side-link">
          <img src={card10} alt="" />
          <p>PewDiePie</p>
        </div>
        <div className="side-link">
          <img src={card10} alt="" />
          <p>MrBeast</p>
        </div>
        <div className="side-link">
          <img src={card10} alt="" />
          <p>Justin Bieber</p>
        </div>
        <div className="side-link">
          <img src={card10} alt="" />
          <p>5-Minutes Craft</p>
        </div>
        <div className="side-link">
          <img src={card10} alt="" />
          <p>Nas Daily</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
