import React from 'react'
import Fade from 'react-reveal/Fade';
import {Helmet} from "react-helmet";
import './MH.css'


const MH = () => {
    return (
    <>

    <Helmet>
        <meta charSet="utf-8" />
        <title>MENTAL HEALTH PROGRAMS - VET SAFETY NET</title>
        <link rel="canonical" href="https://www.vetsafety.net/mental-health" />
    </Helmet>

    <div className='mh'>

        <div className="mh-content">
            <Fade top>
                <h1>MENTAL HEALTH PROGRAMS</h1>
            </Fade>
            </div>
        </div>
    </>
    )
}

export default MH
