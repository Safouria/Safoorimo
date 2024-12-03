import './Player.css'
import Poster from '../../assets/oppenheimer.jpg'
import Navbar from '../../components/Navbar/Navbar'
import PlayerMain from '../../components/PlayerMain/PlayerMain'
import PlayerSide from '../../components/PlayerSide/PlayerSide'

const Player = () => {

  return (
    <>
    <Navbar />
    <img src={Poster} alt="" className='poster' />
    <div className="player">
      <PlayerSide />
      <PlayerMain />
    </div>
    
    </>
  )
}

export default Player
