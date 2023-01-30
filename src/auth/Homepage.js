import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "./UserContext";
import { useState } from 'react'
import FileUpload from "../FileUpload/FileUpload";
import FileList from '../FileList/FileList';
import Search from "../Search/Search";

// function Homepage() {
//     const { currUser } = useContext(UserContext);
//     const [files, setFiles] = useState([])

//     const removeFile = (filename) => {
//         setFiles(files.filter(file => file.name !== filename))
//     }

//     return (
//         <div className="App">
//             <div className="title">Upload file</div>
//             <FileUpload files={files} setFiles={setFiles}
//                 removeFile={removeFile} />
//             <FileList files={files} removeFile={removeFile} />
//         </div>
//     );
// }



function Homepage() {
    const { currUser } = useContext(UserContext);
    const [keyWords, setKeyWords] = useState([])


    return (
        <div>
            <Search></Search>
        </div>
    );
}

export default Homepage;