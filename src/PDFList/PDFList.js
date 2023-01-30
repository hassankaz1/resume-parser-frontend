// import axios from 'axios'
import React from 'react'
import PDFview from '../PDFview/PDFview'
import "./PDFList.scss"

const PDFList = ({ files, removeFile }) => {
    // const deleteFileHandler = (_name) => {
    //     axios.delete(`http://localhost:8080/upload?name=${_name}`)
    //         .then((res) => removeFile(_name))
    //         .catch((err) => console.error(err));
    // }
    return (
        <ul className="pdf-list">
            {
                files &&
                files.map(f => (
                    <div className="infocard">
                        <PDFview className="pdf" file={f} />

                        <div className="info">
                            <span>{f.name}</span>
                        </div>


                    </div>
                ))
            }
        </ul>
    )
}

export default PDFList