import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow.svg'
import Poster from '../../assets/oppenheimer.jpg'
import Card from '../../assets/cards/card 1.jpg'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {

  const {id} = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: ""
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MGZlOGYxODhiNTM2YWFkOGQwMDE5NDFhMzU4MDQ2MiIsIm5iZiI6MTczMjUzODExNC45MDg3NjgyLCJzdWIiOiI2NzQ0NmQxZWQ0MDE0YzJkYjc3MDk3ZjgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.mKNrAyxebAS9zRNomaugas_jM2ApVstL7_RYWBcSozQ'
    }
  };

  useEffect(()=>{
  fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results[0]))
  .catch(err => console.error(err));
  }, [])


  return (
   <div className='player'>
     <img src={back_arrow_icon} alt="" onClick={()=>{navigate(-2)}} className='back-arrow' />

        <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`} title="trailer" frameBorder="0" allowFullScreen></iframe>
        <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
        </div>
      
    </div>
  )
}

export default Player
