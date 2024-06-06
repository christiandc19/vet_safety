import React from 'react'
import Fade from 'react-reveal/Fade';
import './Treatment.css'
import {Helmet} from "react-helmet";
import ContactForm from '../contact/ContactForm';
import TreatmentSection from './TreatmentSection';



const Treatment = () => {
    return (
        <>

    <Helmet>
        <meta charSet="utf-8" />
            <title>TREATMENT - VET SAFETY NET</title>
            <link rel="canonical" href="https://www.vetsafety.net/treatment" />
    </Helmet>

{/* -------------------------------- HERO -------------------------------------- */}

        <div className='treatment main-menu'>
            <div className="treatment-content">
                <Fade right>
                    <h1>TREATMENT PROGRAMS</h1>
                </Fade>
            </div>
        </div>

        <TreatmentSection />
        <ContactForm />
        </>
    )
}

export default Treatment
