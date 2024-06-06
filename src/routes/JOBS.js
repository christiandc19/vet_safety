import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Job from '../components/jobs/Jobs'
import JobSection from '../components/jobs/JobSection'
import Contact from '../components/contact/ContactForm'


const Jobs = () => {
  return (
    <>
    <Navbar /> 
    <Job />
    <JobSection />
    <Contact />
    <Footer />
     </>
  )
}

export default Jobs