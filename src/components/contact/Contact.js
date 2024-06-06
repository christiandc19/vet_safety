import React from "react";
import Fade from 'react-reveal/Fade';
import {Helmet} from "react-helmet";
import './Contact.css'


const Contact = () => {

    return (
    <>

    <Helmet>
        <meta charSet="utf-8" />
        <title>CONTACT US - VET SAFETY NET</title>
        <link rel="canonical" href="https://www.vetsafety.net/contact" />
    </Helmet>

    <div className='contact-hero main-menu'>
            <div className="contact-hero-content">
            <Fade top>
                    <h1>HAVE SOME QUESTIONS?</h1>
            </Fade>
            <Fade right>
                  <p>Our Addiction and Recovery Support team is available to assist you. </p>
            </Fade>

            <Fade top>
            <div class="text-one"><a href="tel:9097399620"><h2>+1  (323) 638-5904</h2> </a></div>
            </Fade>

            </div>
     </div>


  </>
    )
}

export default Contact