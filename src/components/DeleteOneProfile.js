import { Button } from 'react-bootstrap';
import axios from 'axios';
import "./DeleteOneProfile.css";

const DeleteOneProfile = ( {id, refresh} ) => {
    const URL = `https://excel-project-backend.herokuapp.com/api/v1/profiles/${id}`;

    const handleClick = async () => {
        await axios.delete(URL)
            .then(res => {

            })
        refresh();
    }


    return(
        <Button variant="danger" onClick={handleClick} id="delete-btn">
            Delete
        </Button>
    );
}

export default DeleteOneProfile;