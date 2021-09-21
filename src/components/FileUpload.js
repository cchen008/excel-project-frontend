import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import React, {useState} from 'react';
import readXlsxFile from 'read-excel-file';

const FileUpload = ({close}) => {
    const map = {
        "first_name": "first_name",
        "last_name": "last_name",
        "location": "location",
        "occupation": "occupation"
    }

    const URL = "http://localhost:8080/api/v1/profiles/list";
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

    const handleSubmit = () => {
        readXlsxFile(selectedFile, { map }).then((rows) => {
            const profiles = rows.rows;

            axios.post(URL, profiles, config)
                .then(res => {
                    // console.log(res);
                    // console.log(res.data);
                })
        })
        close();
    }

	return(
        <div>
            <Form.Group>
                <Form.Control type="file" onChange={changeHandler} />
            </Form.Group>
			<div>
				<Button onClick={handleSubmit}>Submit</Button>
			</div>
		</div>
	)
}

export default FileUpload;