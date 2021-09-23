import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import React, {useState} from 'react';
import readXlsxFile from 'read-excel-file';
import "./FileUpload.css";

const FileUpload = ({close, refresh}) => {
    const map = {
        "first_name": "first_name",
        "last_name": "last_name",
        "location": "location",
        "occupation": "occupation"
    }

    const URL = "https://excel-project-backend.herokuapp.com/api/v1/profiles/list";
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }

	const [selectedFile, setSelectedFile] = useState();
	//const [isFilePicked, setIsFilePicked] = useState(false);

    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
		//setIsFilePicked(true);
    }

    const handleSubmit = async () => {
        await readXlsxFile(selectedFile, { map }).then(async (rows) => {
            const profiles = rows.rows;

            await axios.post(URL, profiles, config)
                .then(res => {

                })
        })
        refresh();
        close();
    }

	return(
        <div>
            <Form.Group>
                <Form.Control type="file" onChange={changeHandler} />
            </Form.Group>
			<div>
				<Button onClick={handleSubmit} id="upload-btn">Submit</Button>
			</div>
		</div>
	)
}

export default FileUpload;