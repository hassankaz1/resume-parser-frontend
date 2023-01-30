// import axios from 'axios'
import React from 'react'
import FileItem from '../FileItem/FileItem'
import "./FileList.css"

const FileList = ({ files, removeFile }) => {
    // const deleteFileHandler = (_name) => {
    //     axios.delete(`http://localhost:8080/upload?name=${_name}`)
    //         .then((res) => removeFile(_name))
    //         .catch((err) => console.error(err));
    // }
    return (
        <div className='contain'>
            <ul className="file-list">
                {
                    files &&
                    files.map(f => (

                        <FileItem key={f.name} file={f} removeFile={removeFile} />
                    ))

                    // deleteFile={deleteFileHandler} 
                }
            </ul>

        </div>
    )
}


export default FileList