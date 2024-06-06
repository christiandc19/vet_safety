import React from 'react'
import Contact from '../components/contact/Contact'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import ContactForm from "../components/contact/ContactForm";

const ContactPage = () => {
    return (
        <>
            <Navbar/>
            <Contact />
            <ContactForm />
            <Footer />   
        </>
    )
}

export default ContactPage
