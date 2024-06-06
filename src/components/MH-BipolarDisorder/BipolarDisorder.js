import React from 'react'
import Fade from 'react-reveal/Fade';
import {Helmet} from "react-helmet";
import './BipolarDisorder.css'

const BipolarDisorder = () => {
    return (
        <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>BIPOLAR DISORDER - VET SAFETY NET</title>
            <link rel="canonical" href="https://www.vetsafety.net/bipolar-disorder" />
        </Helmet>

        <div className='BipolarDisorder'>
                <div className="BipolarDisorder-content">
                    <Fade top>
                        <h1>BIPOLAR DISORDER</h1>
                    </Fade>
                </div>
        </div>
        </>
    )
}

export default BipolarDisorder
