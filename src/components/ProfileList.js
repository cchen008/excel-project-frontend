import ProfileService from '../services/ProfileService';
import { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import DeleteOneProfile from './DeleteOneProfile';
import EditProfile from './EditProfile';
import ExportExcelButton from './ExportExcelButton';

const ProfileList = () => {
    const [allProfiles, setAllProfiles] = useState([]);

    useEffect(() => {
        const fetchProfiles = async () => {
            const resp = await ProfileService.getProfiles();
            setAllProfiles(resp.data);
        }
        fetchProfiles();
    }, [allProfiles]);

    return(
        <div>
            <h1>Profiles</h1>
            <ExportExcelButton profiles={allProfiles} />
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <td>Profile Id</td>
                        <td>First Name</td>
                        <td>Last Name</td>
                        <td>Location</td>
                        <td>Occupation</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        allProfiles.map(
                            profile =>
                                <tr key = {profile.id}>
                                    <td>{profile.id}</td>
                                    <td>{profile.first_name}</td>
                                    <td>{profile.last_name}</td>
                                    <td>{profile.location}</td>
                                    <td>{profile.occupation}</td>
                                    <td>
                                        <EditProfile profile={profile} />
                                        <DeleteOneProfile id={profile.id} /> 
                                    </td>
                                </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default ProfileList;