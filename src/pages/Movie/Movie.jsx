import './Movie.css'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import Feed from '../../components/Feed/Feed'
import { useState } from 'react'

const Movie = () => {
  const [category, setCategory] = useState([]);


  return (
    <div className='movie'>
       <Navbar />
       <Sidebar category={category} setCategory={setCategory}/>
      <div className="container">
        <Feed />
      </div>
      
    </div>
  )
}

export default Movie
