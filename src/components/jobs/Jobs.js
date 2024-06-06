import React from 'react'
import Fade from 'react-reveal/Fade';
import {Helmet} from "react-helmet";

import './Jobs.css'



const Jobs = () => {
    return (
<>
        <Helmet>
            <meta charSet="utf-8" />
                <title>EMPLOYMENT PROGRAM - VET SAFETY NET</title>
                <link rel="canonical" href="https://www.vetsafety.net/jobs" />
        </Helmet>

        <div className='jobs'>

                <div className="jobs-content">
                    <Fade top>
                    <h1>EMPLOYMENT ASSISTANCE</h1>
                    </Fade>
                </div>
            </div>
</>
    )
}

export default Jobs