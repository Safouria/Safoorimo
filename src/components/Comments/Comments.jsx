import React, { useState } from 'react'
import './Comments.css'
import Like from '../../assets/like.svg'
import Dislike from '../../assets/dislike.svg'
import Card from '../../assets/cards/card 1.jpg'



const Comments = ({id}) => {
  const [apiData, setApiData] = useState([]);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MGZlOGYxODhiNTM2YWFkOGQwMDE5NDFhMzU4MDQ2MiIsIm5iZiI6MTczMjUzNzYzMC43ODEsInN1YiI6IjY3NDQ2ZDFlZDQwMTRjMmRiNzcwOTdmOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jxGmAy9gQERP6XMJr4P2-_bRPFqOPERkHn_AeWPEUH4'
    }
  };
  
  fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));


  return (
    <div>
        
        <h4> Comments</h4>

        <div className="comment-container">
          {apiData.map((comment)=>{
           return <>
           <div className='comment'>
             <img src={`https://image.tmdb.org/t/p/w500${comment.author_details.avatar_path}`} alt=""/>
             <h3>{comment.author_details.username} <span>{comment.updated_at.slice(0,10)}</span></h3>
             <p>{comment.content.slice(0,500) + `...`} </p>
             </div>
             <div>
               <div className="comment-action">
                 <img src={Like} alt="" />
                 <span>{comment.author_details.rating}</span>
                 <img src={Dislike} alt="" />
                 <hr/>
               </div> 
             </div>
  
           </>
          })}

        </div>
    </div>
      
  )
}

export default Comments
