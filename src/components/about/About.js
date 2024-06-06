import React from 'react'
import Fade from 'react-reveal/Fade';
import {Helmet} from "react-helmet";
import './About.css'



const Mission = () => {    
    return (
<>

    <Helmet>
        <meta charSet="utf-8" />
            <title>ABOUT US - VET SAFETY NET</title>
            <link rel="canonical" href="https://www.vetsafety.net/about-us" />
    </Helmet>

        <div className='about main-menu'>
                <div className="about-content">
                    <Fade top>
                    <h1>ABOUT US</h1>
                    </Fade>
                </div>
            </div>
</>
    )
}

export default Mission
