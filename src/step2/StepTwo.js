import React, { useContext } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";
import { useState } from 'react'
import FileUpload from "../FileUpload/FileUpload";
import FileList from "../FileList/FileList";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHourglass2, faPlus } from '@fortawesome/free-solid-svg-icons'
import "./StepTwo.css"


const StepTwo = () => {

    const [files, setFiles] = useState([])

    const removeFile = (filename) => {
        setFiles(files.filter(file => file.name !== filename))
    }

    const handleRank = async (e) => {
        e.preventDefault();
        const fileToSend = files[0];

        const formData = new FormData();

        files.forEach((f) => {
            formData.append(
                "file",
                f,
            )
        })

        let res;

        try {
            res = await axios.post('http://localhost:8000/resume', formData)
        } catch (err) {
            return err;
        }

        try {
            res = await axios.get('http://localhost:8000/resume')
            console.log(res.data)
        } catch (err) {
            return err;
        }



    }

    return (
        <div className="App">
            <div className="title">Upload file</div>
            <FileUpload files={files} setFiles={setFiles}
                removeFile={removeFile} />
            <div className="list-view">
                <FileList files={files} removeFile={removeFile} />
            </div>
            <div>
                <form>
                    <button type="submit" className="rank-two" onClick={handleRank}>RANK</button>
                </form>
            </div>
        </div>
    );
}

export default StepTwo