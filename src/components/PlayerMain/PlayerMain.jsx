import React, { useEffect, useState } from 'react'

import './PlayerMain.css'
import { useParams } from 'react-router-dom';
import Comments from '../Comments/Comments';

const PlayerMain = () => {

    const {id} = useParams();

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
    <div className='player-main'>
      <div className="titles">
          <h1>Nickle Boys</h1>
          <p><span>2024</span> Directed by <span>Ramell Ross</span></p>
        </div>
      <p>Chronicles the powerful friendship between two young Black teenagers navigating the harrowing trials of reform school together in Florida.</p>

      <hr/>
      <iframe width='50%' height='50%' src={`https://www.youtube.com/embed/${apiData.key}`} title="trailer" frameBorder="0" allowFullScreen></iframe>
      <div className="player-info">
  <p>{apiData.published_at.slice(0,10)}</p>
  <p>{apiData.name}</p>
  <p>{apiData.type}</p>
       </div>
       <hr/>
      <Comments />

    </div>
  )
}

export default PlayerMain
