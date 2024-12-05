import React, { useState } from 'react'
import './Genres.css'
import { useParams } from 'react-router-dom';

const Genres = () => {

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
        <p className='movie-genres'>Movie Genre:</p>
        {genresApi.map((card)=>{
          return <p className='genres-link'>{card.name}</p>
        })}
       
        <hr/>
      </div>
    </div>
  )
}

export default Genres
 