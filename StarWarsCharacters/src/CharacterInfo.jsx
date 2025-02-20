import {Link, useParams} from "react-router-dom";
import StarWarsApi from "./StarWarsApi";

function CharacterInfo() {

    const { number } = useParams();
    const image = `https://github.com/MyraReeves/React-Practice_StarWarsAPI/blob/main/StarWarsCharacters/src/images/${number}.png?raw=true`;
    // const altImage = `Larger image of ${characterName}`

    return (
        <>
            <div className='character-info'>
                <img src={image} alt= 'The same image of the character you selected' />
                <StarWarsApi characterNumber = { number } />
                <br/><Link to='/'>	🏠︎ Return to Character Index 🏠︎</Link>
            </div>

        </>
    )
  }
  
  export default CharacterInfo
  