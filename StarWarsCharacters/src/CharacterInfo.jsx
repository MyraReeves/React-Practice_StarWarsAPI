import {Link, useParams} from "react-router-dom";

function CharacterInfo() {

    const { characterName } = useParams();
    const image = `https://github.com/MyraReeves/UW_JS-320_Front-End_Application_Development_With_Javascript/blob/main/Assignment4/Star-Wars-Characters/src/images/${characterName}.png?raw=true`;
    const altImage = `Larger image of ${characterName}`

    return (
        <>
            <div className='character-info'>
                <img src={image} alt= {altImage} />
                {/* <StarWarsApi characterNumber = '14' /> */}
                <br/><Link to='/'>	🏠︎ Return to Character Index 🏠︎</Link>
            </div>

        </>
    )
  }
  
  export default CharacterInfo
  