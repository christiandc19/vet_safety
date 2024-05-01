import React from "react";
import "./ServicesSA.css";
import { CiBeerMugFull } from "react-icons/ci";
import { CiPillsBottle1 } from "react-icons/ci";
import { RiSyringeLine } from "react-icons/ri";
import { FaPills } from "react-icons/fa";
import Fade from "react-reveal/Fade";

import { Link as LinkRoll } from "react-scroll";
import { Link } from "react-router-dom";

const ServicesSA = () => {
  return (
    <>
      <div className="servicesSA">
        <div className="servicesSA-content container">
          <div className="servicesSA-header">
            <Fade left>
              <h1>SERVICES</h1>
            </Fade>
            <Fade right>
              <h2>Substance Abuse Programs</h2>
            </Fade>
            <Fade left>
              <p>
                No matter what type of addiction or mental health condition you
                are dealing with, there’s something for everyone at Bakersfield
                Rehab Treatment Center.
              </p>
            </Fade>
          </div>

          <div className="servicesSA-flex">
            <Fade bottom>
              <div className="servicesSA-flexItem">
                <h2>
                  <CiBeerMugFull />
                </h2>
                <h1>Alcohol Addiction</h1>
                <p>Alcohol addiction is a chronic and compulsive disorder characterized by an inability to control or stop drinking, often resulting in physical dependence and negative impacts on various aspects of an individual's life.</p>
              </div>
            </Fade>

            <Fade top>
              <div className="servicesSA-flexItem">
                <h2>
                  <CiPillsBottle1 />
                </h2>
                <h1>Prescription Addiction</h1>
                <p>
                Prescription drug addiction involves the compulsive and problematic use of prescription medications, leading to dependence, tolerance, and adverse consequences for an individual's physical and mental well-being.
                </p>
              </div>
            </Fade>

            <Fade bottom>
              <div className="servicesSA-flexItem">
                <h2>
                  <RiSyringeLine />
                </h2>
                <h1>Heroin Addiction</h1>
                <p>
                Heroin addiction is a severe and chronic disorder characterized by the compulsive use of the opioid drug heroin, often leading to physical dependence, health deterioration, and significant challenges in daily functioning.
                </p>
              </div>
            </Fade>

            <Fade top>
              <div className="servicesSA-flexItem">
                <h2>
                  <FaPills />
                </h2>
                <h1>Xanax Addiction</h1>
                <p>
                Xanax addiction is a form of substance use disorder involving the compulsive and problematic misuse of the prescription medication Xanax, a benzodiazepine, leading to dependence, tolerance, and potential adverse effects on mental health.
                </p>
              </div>
            </Fade>
          </div>

          <div className="servicesSA-btn">
            <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
              <Link to="/substance-abuse">
                <button> VIEW ALL</button>
              </Link>
            </LinkRoll>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesSA;
