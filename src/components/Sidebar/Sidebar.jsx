import React, { useState } from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom';



const Sidebar = () => {

  const [apiData, setApiData] = useState([]);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MGZlOGYxODhiNTM2YWFkOGQwMDE5NDFhMzU4MDQ2MiIsIm5iZiI6MTczMjUzNzYzMC43ODEsInN1YiI6IjY3NDQ2ZDFlZDQwMTRjMmRiNzcwOTdmOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jxGmAy9gQERP6XMJr4P2-_bRPFqOPERkHn_AeWPEUH4'
    }
  };
  
  fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
    .then(res => res.json())
    .then(res => setApiData(res.genres))
    .catch(err => console.error(err));


  return (
    <div className='Sidebar'>
      <div className="shortcut-links">
        <div className="side-link">
          <h3>Genres</h3>
          <hr/>
         {apiData.map((card, index)=>{

         return<Link to={`/movie/:categoryId/:movieId`} className="genreLink" key={index}>
          <p>{card.name}</p>
         </Link>

         })}
          <hr/>
         
        </div>
      </div>
    </div>
  )
}

export default Sidebar
