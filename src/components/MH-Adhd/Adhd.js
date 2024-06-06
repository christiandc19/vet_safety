import React from 'react'
import Fade from 'react-reveal/Fade';
import {Helmet} from "react-helmet";
import './Adhd.css'

const Adhd = () => {
    return (
    <>
    <Helmet>
            <meta charSet="utf-8" />
            <title>ATTENTION DEFICIT / HYPERACTIVITY DISORDER - VET SAFETY NET</title>
            <link rel="canonical" href="https://www.vetsafety.net/adhd" />
    </Helmet>

        <div className='adhd submenu'>
                <div className="adhd-content">
                    <Fade top>
                    <h1>ATTENTION DEFICIT / HYPERACTIVITY DISORDER</h1>
                    </Fade>
            </div>
        </div>
    </>
    )
}

export default Adhd
