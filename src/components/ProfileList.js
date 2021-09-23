import ProfileService from '../services/ProfileService';
import { useState, useEffect } from 'react';
import { Table, Row, Col, Container } from 'react-bootstrap';
import DeleteOneProfile from './DeleteOneProfile';
import EditProfile from './EditProfile';
import ExportExcelButton from './ExportExcelButton';
import "./ProfileList.css";
import ProfileNavBar from './ProfileNavBar';

const ProfileList = () => {
    const [allProfiles, setAllProfiles] = useState([]);

    useEffect(() => {
        fetchProfiles();
    }, []);

    const fetchProfiles = async () => {
        const resp = await ProfileService.getProfiles();
        setAllProfiles(resp.data);
    }

    return(
        <>
            <ProfileNavBar refresh={fetchProfiles} />
            <Container className="profiles">
                <Row>
                    <Col>
                        <h1 className="profile-heading">Profiles</h1>
                    </Col>
                    <Col>
                        <ExportExcelButton profiles={allProfiles}/>
                    </Col>
                </Row>
                <Table striped bordered hover>
                    <thead>
                        <tr className="column-headings">
                            <td>Profile ID</td>
                            <td>First Name</td>
                            <td>Last Name</td>
                            <td>Location</td>
                            <td>Occupation</td>
                            <td className="last-column"></td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allProfiles.map(
                                profile =>
                                    <tr key = {profile.id} className="profile-data">
                                        <td>{profile.id}</td>
                                        <td>{profile.first_name}</td>
                                        <td>{profile.last_name}</td>
                                        <td>{profile.location}</td>
                                        <td>{profile.occupation}</td>
                                        <td>
                                            <EditProfile profile={profile} refresh={fetchProfiles} />
                                            <DeleteOneProfile id={profile.id} refresh={fetchProfiles} /> 
                                        </td>
                                    </tr>
                            )
                        }
                    </tbody>
                </Table>
            </Container>
        </>
    )
}

export default ProfileList;