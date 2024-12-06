import React, { useState } from 'react'
import './MovieGenres.css'
import { Link, useParams } from 'react-router-dom';

const MovieGenres = () => {

  const {id} = useParams();
  const [genresApi, setGenresApi] = useState([]);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MGZlOGYxODhiNTM2YWFkOGQwMDE5NDFhMzU4MDQ2MiIsIm5iZiI6MTczMjUzNzYzMC43ODEsInN1YiI6IjY3NDQ2ZDFlZDQwMTRjMmRiNzcwOTdmOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jxGmAy9gQERP6XMJr4P2-_bRPFqOPERkHn_AeWPEUH4'
    }
  };
  
  fetch(`https://api.themoviedb.org/3/movie/${id?id:912649}?language=en-US`, options)
    .then(res => res.json())
    .then(res => setGenresApi(res.genres))
    .catch(err => console.error(err));


  return (
    <div className='genres'>
      <div className="shortcut-links">
        <span className='movie-genres'>Movie Genre:</span>
        {genresApi.map((card, index)=>{
          return <Link to={`/movie/${id||':categoryId'}/:movieId`} className='genres-link' key={index}>
            <p>{card.name}</p>
          </Link>
        })}
            <hr/>
      </div>
    </div>
  )
}

export default MovieGenres
 