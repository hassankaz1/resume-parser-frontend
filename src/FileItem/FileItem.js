import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt, faSpinner, faTrash } from '@fortawesome/free-solid-svg-icons'
import './FileItem.css'

const FileItem = ({ file, removeFile }) => {
    return (
        <>
            <li
                className="file-item"
                key={file.name}>
                <FontAwesomeIcon icon={faFileAlt} />
                <p>{file.name}</p>
                <div className="actions">
                    <div className="loading"></div>
                    {/* {file.isUploading && <FontAwesomeIcon
                        icon={faSpinner} className="fa-spin"
                        onClick={() => removeFile(file.name)} />
                    } */}
                    <FontAwesomeIcon icon={faTrash}
                        onClick={() => removeFile(file.name)} />

                </div>
            </li>
        </>
    )
}

export default FileItem