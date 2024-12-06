import React, { useState } from 'react'
import './Feed.css'

import { Link, useParams } from 'react-router-dom';

const Feed = () => {

    const [apiData, setApiData] = useState([]);
    const {id} = useParams();

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MGZlOGYxODhiNTM2YWFkOGQwMDE5NDFhMzU4MDQ2MiIsIm5iZiI6MTczMjYzMjc1Ny4zNTMwOTg0LCJzdWIiOiI2NzQ0NmQxZWQ0MDE0YzJkYjc3MDk3ZjgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.L8aVuIOnkRrPheDjcXnGs73PgNvIyhIXDhy8FExVS2I'
        }
      };
      
      fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`, options)
        .then(res => res.json())
        .then(res => setApiData(res.results))
        .catch(err => console.error(err));



  return (
   <>
   <h1 className='title' >{id || 'Movies'}</h1>
     <div className='feed'>
        {apiData.map((card, index)=>{


         return <Link to={`/player/${card.id}`} className="card" key={index}>
             <img src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path} alt=""/>
             <h2>{card.original_title}</h2>
             <h3>{card.overview.slice(0,71)} ...</h3>
             <p>{card.release_date.slice(0,4)} &bull; {card.vote_average} Vote average </p>
         </Link>
        })}
     </div>

   </>
  )
}

export default Feed
