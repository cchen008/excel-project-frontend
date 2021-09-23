import { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import FileUpload from "./FileUpload";
import "./ProfileNavBar.css";

const ProfileNavBar = ({refresh}) => {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return(
        <>
            <Navbar className="nav-bar">
                <Navbar.Brand href="/" className="nav-bar-brand">
                    <span className="nav-bar-text">
                        Excel Imports and Exports
                    </span>
                </Navbar.Brand>
                <Nav>
                    <Nav.Link onClick={handleShow} className="nav-link">
                        Upload
                    </Nav.Link>
                </Nav>
            </Navbar>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Upload Excel Sheet
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FileUpload close={handleClose} refresh={refresh} />
                </Modal.Body>
            </Modal>
        </>
    )

}

export default ProfileNavBar;