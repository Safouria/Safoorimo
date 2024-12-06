import './Player.css'
import Navbar from '../../components/Navbar/Navbar'
import PlayerMain from '../../components/PlayerMain/PlayerMain'
import PlayerSide from '../../components/PlayerSide/PlayerSide'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Player = () => {

  const {id} = useParams();

  const [imageApi, setImageApi] = useState({
    backdrop_path: '',
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
      .then(res => setImageApi(res))
      .catch(err => console.error(err));
  }, [])


  return (
    <div className='poster-container'>
    <Navbar />
    <img src={`https://image.tmdb.org/t/p/w500${imageApi.backdrop_path}`} alt="" className='poster' />
   
    <div className="player">
      <PlayerSide />
      <PlayerMain />
    </div>
    
    </div>
  )
}

export default Player