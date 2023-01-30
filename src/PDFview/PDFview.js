import React, { useState } from "react"
// import { Document, Page } from "react-pdf/dist/esm/entry.webpack"
import { Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
// Import the main component
import { Viewer, SpecialZoomLevel, PageLayout } from '@react-pdf-viewer/core';

// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';

import { thumbnailPlugin } from '@react-pdf-viewer/thumbnail';

// Import styles
import '@react-pdf-viewer/thumbnail/lib/styles/index.css';

// const thumbnailPluginInstance = thumbnailPlugin();
// const { Cover } = thumbnailPluginInstance;

// const pageThumbnailPluginInstance = pageThumbnailPlugin({
//     PageThumbnail: <Cover getPageIndex={() => 0} />,
// });






function PDFview({ file }) {

    console.log(file)


    return (
        <div className="pdf">
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.2.146/build/pdf.worker.min.js">
                <Viewer fileUrl={file.rawData} defaultScale={SpecialZoomLevel} ></Viewer>
            </Worker>
        </div >
    );
}








export default PDFview;

// function PDFview({ file }) {

//     console.log(file)

//     const [numPages, setNumPages] = useState(null);
//     const [pageNumber, setPageNumber] = useState(1);

//     function onDocumentLoadSuccess({ numPages }) {
//         setNumPages(numPages);
//         setPageNumber(1);
//     }

//     function changePage(offSet) {
//         setPageNumber(prevPageNumber => prevPageNumber + offSet);
//     }

//     function changePageBack() {
//         changePage(-1)
//     }

//     function changePageNext() {
//         changePage(+1)
//     }

//     return (
//         <div>
//             <header className="App-header">
//                 <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
//                     <Page height="600" pageNumber={pageNumber} />
//                 </Document>
//             </header>
//         </div>
//     );
// }

// export default PDFview;