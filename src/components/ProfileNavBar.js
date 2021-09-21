import { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import FileUpload from "./FileUpload";

const ProfileNavBar = () => {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return(
        <>
            <Navbar expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/">Excel Imports and Exports</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link onClick={handleShow}>Upload</Nav.Link>
                </Nav>
            </Navbar>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Upload Excel Sheet</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FileUpload close={handleClose} />
                </Modal.Body>
            </Modal>
        </>
    )

}

export default ProfileNavBar;