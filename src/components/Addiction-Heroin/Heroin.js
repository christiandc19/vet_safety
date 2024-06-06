import React from 'react'
import Fade from 'react-reveal/Fade';
import {Helmet} from "react-helmet";
import './Heroin.css'

const Heroin = () => {
    return (
    <>
    <Helmet>
            <meta charSet="utf-8" />
            <title>HEROIN ADDICTION - VET SAFETY NET</title>
            <link rel="canonical" href="https://www.vetsafety.net/heroin" />
    </Helmet>

    <div className='heroin'>
        <div className="heroin-content">
            <Fade top>
                <h1>HEROIN ADDICTION</h1>
            </Fade>
        </div>
    </div>
    </>
    )
}

export default Heroin
