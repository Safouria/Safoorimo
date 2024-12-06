import React, { useEffect, useState } from 'react'

import './PlayerMain.css'
import { useParams } from 'react-router-dom';
import Comments from '../Comments/Comments';

const PlayerMain = () => {

 
  const {id} = useParams();

  const [mainApi, setMainApi] = useState({
    title: '',
    release_date: '',
    id: '',
    overview: '',
    genres: {
      id: '',
      name: ''
    }
  });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MGZlOGYxODhiNTM2YWFkOGQwMDE5NDFhMzU4MDQ2MiIsIm5iZiI6MTczMjUzNzYzMC43ODEsInN1YiI6IjY3NDQ2ZDFlZDQwMTRjMmRiNzcwOTdmOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jxGmAy9gQERP6XMJr4P2-_bRPFqOPERkHn_AeWPEUH4'
    }
  };
  
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
      .then(res => res.json())
      .then(res => setMainApi(res))
      .catch(err => console.error(err));
  }, [])


  const [vidApi, setVidApi] = useState([])
  const option = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MGZlOGYxODhiNTM2YWFkOGQwMDE5NDFhMzU4MDQ2MiIsIm5iZiI6MTczMjUzNzYzMC43ODEsInN1YiI6IjY3NDQ2ZDFlZDQwMTRjMmRiNzcwOTdmOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jxGmAy9gQERP6XMJr4P2-_bRPFqOPERkHn_AeWPEUH4'
    }
  };
  
 useEffect(()=>{
  fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, option)
  .then(res => res.json())
  .then(res => setVidApi(res.results[0]))
  .catch(err => console.error(err));
 },[])
    

  return (
    <div className='player-main'>
      <div className="titles">
          <h1>{mainApi.title}</h1>
          <p><span>{mainApi.release_date.slice(0,4)}</span></p>
        </div>
      <p>{mainApi.overview}</p>

      <hr/>
      <iframe width='50%' height='50%' src={`https://www.youtube.com/embed/${vidApi.key}`} title="trailer" frameBorder="0" allowFullScreen></iframe>
      <div className="player-info">
  <p>{mainApi.release_date}</p>
  <p>{mainApi.title}</p>
  <p>{mainApi.popularity} Viewed</p>
       </div>
       <hr/>
      <Comments id={id} />

    </div>
  )
}

export default PlayerMain
