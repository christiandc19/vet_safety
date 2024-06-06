import React from 'react'
import Fade from 'react-reveal/Fade';
import {Helmet} from "react-helmet";
import './Anxiety.css'

const Anxiety = () => {
    return (
    <>
    <Helmet>
                <meta charSet="utf-8" />
                <title>ANXIETY DISORDER - VET SAFETY NET</title>
                <link rel="canonical" href="https://www.vetsafety.net/anxiety" />
    </Helmet>

        <div className='anxiety'>

                <div className="anxiety-content">
                    <Fade top>
                    <h1>ANXIETY DISORDER</h1>
                    </Fade>
            </div>
        </div>
    </>
    )
}

export default Anxiety
