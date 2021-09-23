import { Button, Modal, Form } from 'react-bootstrap';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import "./EditProfile.css";

const EditProfile = ( {profile, refresh} ) => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }
    const [show, setShow] = useState(false);
    const {register, getValues} = useForm();

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const handleEdit = async (e) => {
        e.preventDefault();
        const editProfile = getValues(["first_name", "last_name", "location", "occupation"]);
        editProfile.unshift(profile.id);
        const newProfile = {
            "id": editProfile[0],
            "first_name": editProfile[1],
            "last_name": editProfile[2],
            "location": editProfile[3],
            "occupation": editProfile[4]
        };
        await axios.put(`https://excel-project-backend.herokuapp.com/api/v1/profiles/${newProfile.id}`, newProfile, config)
            .then(res => {
                
            })
            .catch(err => {
                
            });
        refresh();
        handleClose();
    }

    return(
        <>
            <Button variant="warning" onClick={handleShow} id="edit-btn">
                Edit
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleEdit}>
                        <Form.Group>
                            <Form.Label>
                                First Name:
                                <Form.Control type="text" defaultValue={profile.first_name} {...register("first_name")} />
                            </Form.Label>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                Last Name:
                                <Form.Control type="text" defaultValue={profile.last_name} {...register("last_name")} />
                            </Form.Label>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                Location:
                                <Form.Control type="text" defaultValue={profile.location} {...register("location")} />
                            </Form.Label>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                Occupation:
                                <Form.Control type="text" defaultValue={profile.occupation} {...register("occupation")} />
                            </Form.Label>
                        </Form.Group>
                        <Button
                            type="submit"
                            id="edit-submit-btn"
                        >
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>

        </>
    )
}

export default EditProfile;