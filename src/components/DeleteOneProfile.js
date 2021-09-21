import { Button } from 'react-bootstrap';
import axios from 'axios';
import "./DeleteOneProfile.css";

const DeleteOneProfile = ( {id} ) => {
    const URL = `https://excel-project-backend.herokuapp.com/api/v1/profiles/${id}`;

    const handleClick = () => {
        axios.delete(URL)
            .then(res => {

            })
    }


    return(
        <Button variant="danger" onClick={handleClick} id="delete-btn">
            Delete
        </Button>
    );
}

export default DeleteOneProfile;