import React from 'react'
import './ServicesMH.css'
import Zoom from 'react-reveal/Zoom';
import { Link as LinkRoll } from "react-scroll";
import { Link } from 'react-router-dom';

import Depressed_Veteran from '../../assets/veteran_depression.webp'
import Anxiety_Veteran from '../../assets/veteran_anxiety.webp'
import PTSD_Veteran from '../../assets/veteran_ptsd.webp'

const ServicesMH = () => {
  return (
    <>
      <div className='servicesMH'>
        <div className='servicesMH-content container'>

            <div className='servicesMH-header'>
                <h1>SERVICES</h1>
                <h2>Mental Health Treatment</h2>
                <p>Depending on your needs, we offer treatment for co-occurring disorders that can address both mental health and addiction disorders at the same time.</p>
            </div>

            <div className='MH-cards'>

                <Zoom duration={1000}>
                  <div className='MH-cards-contents'>
                    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                      <Link to="/depression">
                        <img src={Depressed_Veteran} alt='Depressed Veteran' loading='lazy'/>
                        <h1>DEPRESSION</h1>
                        <p>Depression is a complex mental health condition characterized by persistent feelings of sadness, hopelessness, and a lack of interest or pleasure in daily activities.</p>
                      </Link>
                    </LinkRoll>
                  </div>
                </Zoom>


                <Zoom duration={2000}>
                  <div className='MH-cards-contents'>
                    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                      <Link to="/anxiety">
                        <img src={Anxiety_Veteran} alt='Depressed Veteran' loading='lazy'/>
                        <h1>ANXIETY</h1>
                        <p>Anxiety is a mental health condition marked by excessive worry, fear, and apprehension, often accompanied by physical symptoms like restlessness, tension, and increased heart rate.</p>
                      </Link>
                    </LinkRoll>
                  </div>
                </Zoom>


                <Zoom duration={3000}>

              <div className='MH-cards-contents'>
                  <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                    <Link to="/ptsd">
                      <img src={PTSD_Veteran} alt='Depressed Veteran' loading='lazy'/>
                      <h1>PTSD</h1>
                      <p>Post-Traumatic Stress Disorder (PTSD) is a mental health condition triggered by experiencing or witnessing a traumatic event, leading to symptoms such as flashbacks, nightmares, and heightened stress responses.</p>
                    </Link>
                  </LinkRoll>
                </div>
              </Zoom>

            </div>

              <div className='MH-cards-btn'>
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/mental-health">
                    <button>VIEW MORE</button>
                  </Link>
                </LinkRoll>

              </div>

        </div>

      </div>
    </>
  )
}

export default ServicesMH
