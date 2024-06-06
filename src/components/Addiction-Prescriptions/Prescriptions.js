import React from 'react'
import Fade from 'react-reveal/Fade';
import {Helmet} from "react-helmet";
import './Prescriptions.css'

const Prescriptions = () => {
    return (
    <>
    <Helmet>
            <meta charSet="utf-8" />
            <title>PRESCRIPTIONS ADDICTION - VET SAFETY NET</title>
            <link rel="canonical" href="https://www.vetsafety.net/prescriptions" />
    </Helmet>

        <div className='prescriptions'>
                <div className="prescriptions-content">
                    <Fade top>
                    <h1>PRESCRIPTIONS ADDICTION</h1>
                    </Fade>
            </div>
        </div>
    </>
    )
}

export default Prescriptions
