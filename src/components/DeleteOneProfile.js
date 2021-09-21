import { Button } from 'react-bootstrap';
import axios from 'axios';

const DeleteOneProfile = ( {id} ) => {
    const URL = `http://localhost:8080/api/v1/profiles/${id}`;

    const handleClick = () => {
        axios.delete(URL)
            .then(res => {

            })
    }


    return(
        <Button variant="danger" onClick={handleClick}>
            Delete
        </Button>
    );
}

export default DeleteOneProfile;