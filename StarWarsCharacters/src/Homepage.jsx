import { useNavigate } from 'react-router-dom'
import heroes from './heroes-info.json'
import villains from './villains-info.json'

function Homepage() {
  const navigate = useNavigate()


  return (
    <>
      <div className='character-index'>
        <p className='blue'>Heroes:</p>
        {heroes.map( (heroes, index) => (

          <div className="linkToEachCharacter" key={index} style={{display: 'inline-block'}} onClick={() => navigate(heroes.number)}>

            <img className="previewPic" src={heroes.image} alt={`Small image of ${heroes.name}`} />
            <h2>{heroes.name}</h2>

          </div>
        ))}
      </div>

      <div className='villian-index'>
      <p className='red'>Villains:</p>
      {villains.map( (villains, index) => (

        <div className="linkToEachCharacter2" key={index} style={{display: 'inline-block'}} onClick={() => navigate(villains.number)}>

          <img className="previewPic" src={villains.image} alt={`Small image of ${villains.name}`} />
          <h2>{villains.name}</h2>

        </div>
      ))}

    </div>
    </>
  )
}

export default Homepage
