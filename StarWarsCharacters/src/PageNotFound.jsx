import {Link} from "react-router-dom";
import image from './images/404.png';
import errorMessage from './images/404-message.png'

const PageNotFound = () => {
    return (
        <div className="error">
            <img src={image} alt="404 ERROR"/>
            <img src={errorMessage} alt="The page you requested does not exist!" />
            <Link to = {"/"} >
                <button>Click here to go back to the Homepage</button>
            </Link>
        </div>
    );
};

export default PageNotFound