import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import { Link } from 'react-router-dom'


const TitleCards = ({title, category}) => {
  const [apiData, setApiData] = useState([]);

  
 const cardsRef = useRef();

 const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MGZlOGYxODhiNTM2YWFkOGQwMDE5NDFhMzU4MDQ2MiIsIm5iZiI6MTczMjUzODExNC45MDg3NjgyLCJzdWIiOiI2NzQ0NmQxZWQ0MDE0YzJkYjc3MDk3ZjgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.mKNrAyxebAS9zRNomaugas_jM2ApVstL7_RYWBcSozQ'
  }
};

 const handlewheel = (event)=>{
   event.preventDefault();
   cardsRef.current.scrollLeft += event.deltaY;
  }

useEffect(()=>{
  
fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
.then(res => res.json())
.then(res => setApiData(res.results))
.catch(err => console.error(err));

  cardsRef.current.addEventListener('wheel', handlewheel);
},[])

  return (
    <div className='title-cards'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="cards-list" ref={cardsRef}>
        {apiData.map((card, index)=>{

          return <Link to={`/player/${card.id}`} className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+ card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
          </Link>
        })}
      </div>
    </div>
  )
}

export default TitleCards
