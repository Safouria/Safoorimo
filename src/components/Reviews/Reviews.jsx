import React, { useState } from 'react'
import './Reviews.css'
import Photo from '../../assets/cards/card 2.jpg'

const Reviews = ({author}) => {

    const [apiData , setApiData] = useState([]);

  const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MGZlOGYxODhiNTM2YWFkOGQwMDE5NDFhMzU4MDQ2MiIsIm5iZiI6MTczMjYzMjc1Ny4zNTMwOTg0LCJzdWIiOiI2NzQ0NmQxZWQ0MDE0YzJkYjc3MDk3ZjgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.L8aVuIOnkRrPheDjcXnGs73PgNvIyhIXDhy8FExVS2I'
        }
    };
      
    fetch('https://api.themoviedb.org/3/movie/1100782/reviews?language=en-US&page=1', options)
        .then(res => res.json())
        .then(res => setApiData(res.results))
        .catch(err => console.error(err));



  return (
    <div className='reviews'>
      <h2>Popular Reviews:</h2>
        {apiData.map((photo, name, rate, comment)=>{
            return (
            <div className="people">
             <img src={photo.avatar_path} alt="" />
             <div className="people-comment">
               <h3>{name.author}</h3>
               <p>rate: ${rate.rating}</p>
               <p className='comment'>{comment.content}</p>
             </div>
           </div>
            )  
        })}
    </div>
  )
}

export default Reviews
