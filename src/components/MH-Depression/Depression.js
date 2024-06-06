import React from 'react'
import Fade from 'react-reveal/Fade';
import {Helmet} from "react-helmet";
import './Depression.css'

const Depression = () => {
    return (
        <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>DEPRESSION - VET SAFETY NET</title>
            <link rel="canonical" href="https://www.vetsafety.net/depression" />
        </Helmet>

        <div className='depression submenu'>
                <div className="depression-content">
                    <Fade top>
                    <h1>DEPRESSION</h1>
                    </Fade>
            </div>
        </div>
        </>
    )
}

export default Depression
