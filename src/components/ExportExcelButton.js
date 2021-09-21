import { Button } from "react-bootstrap";
import ReactExport from "react-export-excel";
import "./ExportExcelButton.css";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const ExportExcelButton = ({profiles}) => {
    const allProfiles = profiles;

    return(
        <ExcelFile filename="profiles" element={<Button id="download-btn" >Download</Button>}>
            <ExcelSheet data={allProfiles} name="Profiles">
                <ExcelColumn label="first_name" value="first_name" />
                <ExcelColumn label="last_name" value="last_name" />
                <ExcelColumn label="location" value="location" />
                <ExcelColumn label="occupation" value="occupation" />
            </ExcelSheet>
        </ExcelFile>
    );
}

export default ExportExcelButton;