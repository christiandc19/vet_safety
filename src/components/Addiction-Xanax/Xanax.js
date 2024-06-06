import React from 'react'
import Fade from 'react-reveal/Fade';
import {Helmet} from "react-helmet";
import './Xanax.css'

const Xanax = () => {
    return (
    <>
    <Helmet>
            <meta charSet="utf-8" />
            <title>XANAX ADDICTION - VET SAFETY NET</title>
            <link rel="canonical" href="https://www.vetsafety.net/xanax" />
    </Helmet>
        <div className='xanax'>
                <div className="xanax-content">
                    <Fade top>
                    <h1>XANAX ADDICTION</h1>
                    </Fade>
            </div>
        </div>
    </>
    )
}

export default Xanax
