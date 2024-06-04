import React, { useRef } from "react";
// import { BsFillPinMapFill } from 'react-icons/bs';
// import { AiOutlinePhone } from 'react-icons/ai';
// import { AiOutlineMail } from 'react-icons/ai';
import { FaHeadphonesAlt } from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md';
// import { BsFillPinMapFill } from 'react-icons/bs';

// import Fade from 'react-reveal/Fade';

import './ContactForm.css';
import emailjs from 'emailjs-com'


const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();



                // Popup message after send button is clicked
                const feedbackEl = document.querySelector(".feedback");
                feedbackEl.setAttribute("class", "feedback");
                setTimeout(function() {
                feedbackEl.setAttribute("class", "feedback hidden");
                }, 4000);
        
        

        //    Service Id        Template Id                 Public Key (Account Tab) 
        emailjs.sendForm('service_hsunksm', 'template_rxc8sbg', form.current, 'Rj5e7bWJla-kOEL0H')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset()
    };

    return (
        <>

<section className="contact-container container">

          <div class="get_form_inner">
            <div class="get_form_inner_text">
              <h3>Get In Touch</h3>
              <p><i>We'll keep your contact information strictly confidential.</i></p><br/>
            </div>
            <form ref={form} onSubmit={sendEmail}>
              <div class="inputs">
                <input type="text" name='name' placeholder='Your Name' required /> <br/>
                <input type="text" name='email' placeholder='Your Email' required /> <br/>
                <input type="tel" name='phone' placeholder='Your Phone' required /> <br/>
                <input type="text" name='subject' placeholder='Subject' required /> <br/>

              </div>
              <div>
                <textarea name="message" placeholder="How can we help?" cols="50" rows="8" required></textarea>

                <input type="submit" value="Submit" />

                <div className="textarea2 feedback hidden">
              <textarea name="message2" cols="30" rows="3" required>Message Sent to Vet Safety Net!</textarea>
              </div>

              </div>

            </form>
</div>


<div className="contact-cards">

    <div className="contact-card">
        <div className="contact-card-icon">
          <h3><FaHeadphonesAlt /></h3> 
          <p>CALL US</p>
          <a href="tel:9097399620">  (909) 739-9620</a>
        </div>
    </div>

    <div className="contact-card">
        <div className="contact-card-icon">
          <h3><MdAlternateEmail /></h3> 
          <p>EMAIL</p>
          <h5>r.bretado@vetsafety.net</h5>
        </div>
    </div>

    {/* <div className="contact-card">
        <div className="contact-card-icon">
          <h3><BsFillPinMapFill /></h3> 
          <p>LOCATION</p>
          <h5>2828 H street #H, Bakersfield, CA 93301</h5>
        </div>
    </div> */}



</div>

</section>
 



        </>
    )
}

export default ContactForm