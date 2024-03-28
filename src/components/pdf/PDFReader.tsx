import React, { useState } from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
import resume from '../../assets/resume.pdf';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdf.worker.min.js',
    import.meta.url,
).toString();

export default () => {
    return <div>
        <Document
            file={resume}
        >
            <Page pageNumber={1} />
        </Document>

    </div>
};