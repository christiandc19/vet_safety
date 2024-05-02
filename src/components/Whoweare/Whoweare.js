import React from "react";
import "./Whoweare.css";
import Zoom from 'react-reveal/Zoom';

import { BsCheckLg } from "react-icons/bs";
import HomeSection2Image from "../../assets/whoWeAre1-min.webp";

const Whoweare = () => {
  return (
    <>
      <div className="homeSection2 ">
        <div className="homeSection2-content">
          <div className="homeSection2-left">

            <h1>WHO WE ARE</h1>
            <h2>Empowering Veterans on the Road to Recovery</h2>
            <p>Welcome to our Addiction and Mental Health Rehab Center dedicated to serving veterans. At Vet Safety Net, we understand the unique challenges that veterans may face in their journey toward recovery. Our commitment is rooted in the belief that every veteran deserves the opportunity for healing and a brighter future.</p>
            <p>
            We strive to make overcoming addiction achievable by focusing on your sobriety. We use proven medical practices and a comprehensive approach to healing through better guidance, greater compassion, and a stronger community.
            </p>

            <div className="checklist">
              <div className="homeSection2-icon">
                <BsCheckLg /><p>Therapy and support groups for either addiction or mental health disorders.</p>
              </div>
            </div>

            <div className="checklist">
              <div className="homeSection2-icon">
              <BsCheckLg /><p>Compassionate staff that is dedicated to your success.</p>
              </div>
            </div>

            <div className="checklist">
              <div className="homeSection2-icon">
                <BsCheckLg />
                <p>Evidence-based practices that give you the best chance of recovery.</p>
              </div>
            </div>

            <div className="checklist">
              <div className="homeSection2-icon">
                <BsCheckLg />
                <p>
                Employment tools and resources to get you hired.                
                </p>
              </div>
            </div>

          </div>


          <div className="homeSection2-right">
            <Zoom duration={2000}>
              <img src={HomeSection2Image} loading="lazy" alt="psychologist" />
            </Zoom>
          </div>
        </div>
      </div>
    </>
  );
};

export default Whoweare;
