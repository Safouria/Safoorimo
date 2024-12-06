import './Movie.css'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import Feed from '../../components/Feed/Feed'
import { useParams } from 'react-router-dom'

const Movie = () => {


  return (
    <div className='movie'>
       <Navbar />
       <Sidebar />
      <div className="container">
        <Feed />
      </div>

    </div>
  )
}

export default Movie
