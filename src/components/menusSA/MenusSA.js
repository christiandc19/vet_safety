import React from "react";
import { Link } from "react-router-dom";
import { Link as LinkRoll } from "react-scroll";
import "./MenusSA.css";

import logo from "../../assets/logo.png";


const MenusSA = () => {
  return (
    <>
          <div className="mh-cards-header container">
        <h1>
          VETSAFETY TREATMENT CENTER OFFERS VARIOUS MENTAL HEALTH
          PROGRAMS
        </h1>
        <p>
          At VetSafetyTreatment Center, clients receive individual
          therapy alongside a range of additional treatments, including relapse
          prevention, trauma therapy, mindfulness meditation, transportation,
          yoga, and more. We offer support that clients need to allow them to
          gradually go back to treatment.
        </p>
      </div>

      <div class="mh-cards container">

      {/* Mental Health Thumbnails */}

          <div className="mh-card">
            <img src={logo} alt="logo" loading="lazy" />
            <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
              <Link to="/alcohol">
                  <h2>ALCOHOL ADDICTION</h2>
                  <p>Alcohol addiction is a chronic and compulsive disorder characterized by the inability to control alcohol consumption, leading to physical dependence, tolerance, and adverse effects on an individual's health and life.</p>
              </Link>
            </LinkRoll>
          </div>

          <div className="mh-card">
            <img src={logo} alt="logo" loading="lazy" />
             <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
              <Link to="/cocaine">
                  <h2>COCAINE ADDICTION</h2>
                  <p>Cocaine addiction is a substance use disorder involving the compulsive and harmful use of the stimulant drug cocaine, leading to physical and psychological dependence, as well as significant negative consequences for an individual's well-being.</p>
              </Link>
            </LinkRoll>
          </div>

          <div className="mh-card">
            <img src={logo} alt="logo" loading="lazy" />
            <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
              <Link to="/heroin">
                  <h2>HEROIN ADDICTION</h2>
                  <p>Heroin addiction is a severe and chronic disorder characterized by the compulsive use of the opioid drug heroin, often leading to physical dependence, health deterioration, and significant challenges in daily functioning.</p>
              </Link>
            </LinkRoll>
          </div>

          <div className="mh-card">
            <img src={logo} alt="logo" loading="lazy" />
            <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
              <Link to="/fentanyl">
                  <h2>FENTANYL ADDICTION</h2>
                  <p>Fentanyl addiction is a serious and potentially life-threatening substance use disorder involving the compulsive and harmful use of the synthetic opioid fentanyl, leading to physical dependence, tolerance, and increased risk of overdose.</p>
              </Link>
            </LinkRoll>
          </div>

          <div className="mh-card">
            <img src={logo} alt="logo" loading="lazy" />
            <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
              <Link to="/kratom">
                  <h2>KRATOM ADDICTION</h2>
                  <p>Kratom addiction is a substance use disorder marked by the compulsive and problematic use of the herbal supplement kratom, which can lead to physical dependence, tolerance, and negative consequences for an individual's health.</p>
              </Link>
            </LinkRoll>
          </div>

          <div className="mh-card">
            <img src={logo} alt="logo" loading="lazy" />
            <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
              <Link to="/adhd">
                  <h2>MDMA ADDICTION</h2>
                  <p>MDMA addiction is a substance use disorder involving the compulsive and harmful use of the synthetic drug MDMA (ecstasy), leading to physical and psychological dependence, as well as adverse effects on mental and physical health.</p>
              </Link>
            </LinkRoll>
          </div>

          <div className="mh-card">
            <img src={logo} alt="logo" loading="lazy" />
            <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
              <Link to="/ptsd">
                  <h2>PTSD ADDICTION</h2>
                  <p>Post-Traumatic Stress Disorder (PTSD) is a mental health condition that develops in response to exposure to traumatic events, leading to distressing symptoms such as intrusive memories, flashbacks, hypervigilance, and avoidance behaviors.</p>
              </Link>
            </LinkRoll>
          </div>

          <div className="mh-card">
            <img src={logo} alt="logo" loading="lazy" />
            <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
              <Link to="/meth">
                  <h2>METH ADDICTION</h2>
                  <p>Methamphetamine addiction is a serious and chronic substance use disorder characterized by the compulsive and harmful use of the stimulant drug methamphetamine, leading to physical and psychological dependence, as well as significant negative consequences for an individual's well-being.</p>
              </Link>
            </LinkRoll>
          </div>

          <div className="mh-card">
            <img src={logo} alt="logo" loading="lazy" />
            <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
              <Link to="/opiate">
                  <h2>OPIATE ADDICTION</h2>
                  <p>Opiate addiction is a substance use disorder involving the compulsive and problematic use of opiates, such as prescription painkillers or heroin, leading to physical dependence, tolerance, and detrimental effects on an individual's health and life.</p>
              </Link>
            </LinkRoll>
          </div>

          <div className="mh-card">
            <img src={logo} alt="logo" loading="lazy" />
            <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
              <Link to="/opioid">
                  <h2>OPIOID ADDICTION</h2>
                  <p>Opioid addiction is a substance use disorder characterized by the compulsive and harmful use of opioids, including prescription painkillers and heroin, leading to physical dependence, tolerance, and severe negative consequences for an individual's well-being.</p>
              </Link>
            </LinkRoll>
          </div>

          <div className="mh-card">
            <img src={logo} alt="logo" loading="lazy" />
            <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
              <Link to="/oxycodone">
                  <h2>OXYCODONE ADDICTION</h2>
                  <p>Oxycodone addiction is a substance use disorder marked by the compulsive and problematic use of the opioid medication oxycodone, leading to physical dependence, tolerance, and adverse effects on an individual's health and daily life.</p>
              </Link>
            </LinkRoll>
          </div>

          <div className="mh-card">
            <img src={logo} alt="logo" loading="lazy" />
            <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
              <Link to="/prescriptions">
                  <h2>PRESCRIPTIONS ADDICTION</h2>
                  <p>Prescription drug addiction is a form of substance use disorder characterized by the compulsive and problematic misuse of prescription medications, leading to physical dependence, tolerance, and negative impacts on an individual's well-being.</p>
              </Link>
            </LinkRoll>
          </div>

          <div className="mh-card">
            <img src={logo} alt="logo" loading="lazy" />
            <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
              <Link to="/xanax">
                  <h2>XANAX ADDICTION</h2>
                  <p>Xanax addiction is a type of substance use disorder involving the compulsive and problematic misuse of the prescription medication Xanax, a benzodiazepine, leading to physical dependence, tolerance, and potential adverse effects on mental health.</p>
              </Link>
            </LinkRoll>
          </div>

        
        </div>

    </>
  );
};

export default MenusSA;
