import React from 'react'
import './Comments.css'
import Card from '../../assets/cards/card 1.jpg'


const Comments = () => {
  return (
    <div>
        
        <h4>130 Comments</h4>

        <div className="comment">

          <img src={Card} alt=""/>

          <div>
            <h3>Jack Nicolson <span>1 day ago</span></h3>
            <p>hala man inja chert minevisam . vali in user comment hast ke mikhaym Style konimesh </p>
            <div className="comment-action">
              <img src={Card} alt="" />
              <span>244</span>
              <img src={Card} alt="" />
            </div> 
          </div>
        </div>
        <div className="comment">
          <img src={Card} alt="" width={100} />
          <div>
            <h3>Jack Nicolson <span>1 day ago</span></h3>
            <p>hala man inja chert minevisam . vali in user comment hast ke mikhaym Style konimesh </p>
            <div className="comment-action">
              <img src={Card} alt="" width={100} />
              <span>244</span>
              <img src={Card} alt="" width={100} />
            </div> 
          </div>
        </div>
        <div className="comment">
          <img src={Card} alt="" width={100} />
          <div>
            <h3>Jack Nicolson <span>1 day ago</span></h3>
            <p>hala man inja chert minevisam . vali in user comment hast ke mikhaym Style konimesh </p>
            <div className="comment-action">
              <img src={Card} alt="" />
              <span>244</span>
              <img src={Card} alt="" />
            </div> 
          </div>
        </div>
        <div className="comment">
          <img src={Card} alt="" width={100} />
          <div>
            <h3>Jack Nicolson <span>1 day ago</span></h3>
            <p>hala man inja chert minevisam . vali in user comment hast ke mikhaym Style konimesh </p>
            <div className="comment-action">
              <img src={Card} alt="" width={100} />
              <span>244</span>
              <img src={Card} alt="" width={100} />
            </div> 
          </div>
        </div>
      </div>
      
  )
}

export default Comments
