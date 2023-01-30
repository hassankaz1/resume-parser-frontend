import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import "./FileUpload.css"

const FileUpload = ({ files, setFiles }) => {
    const uploadHandler = async (event) => {
        console.log(event.target.files)
        const filesInputed = event.target.files;
        if (!filesInputed) return;

        console.log(typeof filesInputed)

        const newFiles = []

        for (let i = 0; i < filesInputed.length; i++) {
            let file = filesInputed[i]
            console.log(i)
            console.log(file)
            // let reader = new FileReader();
            // reader.readAsDataURL(file);
            // console.log(i)

            newFiles.push(file);
            // reader.onloadend = function (e) {
            //     console.log(i)
            //     file.rawData = e.target.result;
            //     file.isUploading = true;
            //     setFiles([...files, file])
            //     file.isUploading = false;
            // }

        }

        setFiles([...files, ...newFiles]);

        // filesInputed.forEach((file) => {

        // });

        // filesInputed.forEach((file) => {
        //     file.isUploading = false;
        // });





        // upload file
        // const formData = new FormData();
        // formData.append(
        //     "newFile",
        //     file,
        //     file.name
        // )

        // console.log(formData);

        // file.isUploading = false;
        // axios.post('http://localhost:8080/upload', formData)
        //     .then((res) => {
        //         file.isUploading = false;
        //         setFiles([...files, file])
        //     })
        //     .catch((err) => {
        //         // inform the user
        //         console.error(err)
        //         removeFile(file.name)
        //     });
    }

    return (
        <div className="file-card">
            <div className="file-inputs">
                <input type="file" multiple
                    accept='application/pdf' onChange={uploadHandler} />
                <button>
                    <i>
                        <FontAwesomeIcon icon={faPlus} />
                    </i>
                    Upload
                </button>
            </div>

            <p className="main">Supported files</p>
            <p className="info">PDF's ONLY</p>
        </div>
    )
}

export default FileUpload