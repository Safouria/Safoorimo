import React, { useEffect, useState } from 'react'
import './PlayerSide.css'
import { useParams } from 'react-router-dom';
import Genres from '../Genres/Genres';

const PlayerSide = () => {

  const {id} = useParams();
  const [sideApi, setSideApi] = useState({
    title: '',
    release_date: '',
    id: '',
    overview: '',
    genres: ''
  });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MGZlOGYxODhiNTM2YWFkOGQwMDE5NDFhMzU4MDQ2MiIsIm5iZiI6MTczMjUzNzYzMC43ODEsInN1YiI6IjY3NDQ2ZDFlZDQwMTRjMmRiNzcwOTdmOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jxGmAy9gQERP6XMJr4P2-_bRPFqOPERkHn_AeWPEUH4'
    }
  };
  
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id?id:912649}?language=en-US`, options)
      .then(res => res.json())
      .then(res => setSideApi(res))
      .catch(err => console.error(err));
  }, [])
    


  return (
    <div className='P-Sidebar'>
     <img src={`https://image.tmdb.org/t/p/w500${sideApi.poster_path}`} alt="" />
     <hr/>
     <div className="shortcut-links">
      < Genres />
       </div>
  </div>
  )
}

export default PlayerSide
