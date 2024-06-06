import React from 'react'
import Fade from 'react-reveal/Fade';
import {Helmet} from "react-helmet";
import './PanicDisorder.css'



const PanicDisorder = () => {
    return (
    <>
    <Helmet>
            <meta charSet="utf-8" />
            <title>PANIC DISORDER - VET SAFETY NET</title>
            <link rel="canonical" href="https://www.vetsafety.net/panic-disorder" />
    </Helmet>

        <div className='PanicDisorder'>
                <div className="PanicDisorder-content">
                    <Fade top>
                    <h1>PANIC DISORDER</h1>
                    </Fade>
            </div>
        </div>
    </>
    )
}

export default PanicDisorder
