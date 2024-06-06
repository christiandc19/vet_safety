import React from 'react'
import Fade from 'react-reveal/Fade';
import {Helmet} from "react-helmet";
import './PTSD.css'

const PTSD = () => {
    return (
        <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>POST-TRAUMATIC STRESS DISORDER - VET SAFETY NET</title>
            <link rel="canonical" href="https://www.vetsafety.net/ptsd" />
        </Helmet>

        <div className='Ptsd submenu'>
                <div className="Ptsd-content">
                    <Fade top>
                    <h1>POST-TRAUMATIC STRESS DISORDER</h1>
                    </Fade>
            </div>
        </div>
        </>
    )
}

export default PTSD
