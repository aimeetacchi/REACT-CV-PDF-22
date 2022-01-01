import React from 'react'
import MyDocument from '../myDocument';
import { PDFViewer } from '@react-pdf/renderer';
import { useSelector } from 'react-redux'

const PDFPage = () =>  { 
    const formData = useSelector((state) => state.formReducer.formData)

    return (
        <>
            <div className="container text-center">
                <h2>Your CV</h2>
                {!formData && <p>Try filling out form first.</p>}
            
                { formData && (
                    <PDFViewer style={{ height: "100vh", width: "100%"}}>
                        <MyDocument formData={formData} />
                    </PDFViewer>
                )}
            </div>
        </>
        
)}

export default PDFPage;